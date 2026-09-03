// TechStack.tsx (Server Component — no 'use client')
import { TechStackClient } from './TechStackClient'

const BASE_URL = 'https://learn.techvision.edu.et'

async function getCourseNames(): Promise<string[]> {
  const courseParams = new URLSearchParams({
    filters: JSON.stringify([['published', '=', 1]]),
    fields: JSON.stringify(['name']),
  })

  const res = await fetch(`${BASE_URL}/api/resource/LMS%20Course?${courseParams}`, {
    headers: {
      Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
    },
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    console.error('Failed to fetch course names:', res.status, await res.text())
    return []
  }

  const data = await res.json()
  return (data?.data ?? []).map((c: any) => c.name as string)
}

async function getCourseDetail(name: string): Promise<any | null> {
  const res = await fetch(
    `${BASE_URL}/api/resource/LMS%20Course/${encodeURIComponent(name)}`,
    {
      headers: {
        Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
      },
      next: { revalidate: 60 },
    }
  )

  if (!res.ok) {
    console.error(`Failed to fetch course "${name}":`, res.status, await res.text())
    return null
  }

  const { data: course } = await res.json()
  return course
}

async function getUserFullName(email: string): Promise<string> {
  const fieldsParam = encodeURIComponent(JSON.stringify(['full_name']))
  const res = await fetch(
    `${BASE_URL}/api/resource/User/${encodeURIComponent(email)}?fields=${fieldsParam}`,
    {
      headers: {
        Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
      },
      next: { revalidate: 300 },
    }
  )

  if (!res.ok) {
    console.error(`Failed to fetch user "${email}":`, res.status)
    return email // fallback to email if lookup fails
  }

  const { data } = await res.json()
  return data?.full_name || email
}

async function getCourses() {
  const names = await getCourseNames()
  const courses = await Promise.all(names.map((name) => getCourseDetail(name)))
  const validCourses = courses.filter(Boolean)

  // Collect all unique instructor emails across all courses
  const allEmails = new Set<string>()
  validCourses.forEach((course: any) => {
    ;(course.instructors ?? []).forEach((i: any) => {
      if (i.instructor) allEmails.add(i.instructor)
    })
  })

  // Resolve each unique email to a full name once (deduped, parallel)
  const nameMap = new Map<string, string>()
  await Promise.all(
    Array.from(allEmails).map(async (email) => {
      nameMap.set(email, await getUserFullName(email))
    })
  )

  // Also resolve image paths to full URLs while we're at it
  return validCourses.map((course: any) => ({
    name: course.name,
    description: course.description ?? null,
    image: course.image
      ? course.image.startsWith('http')
        ? course.image
        : `${BASE_URL}${course.image}`
      : null,
    instructors: (course.instructors ?? []).map((i: any) => ({
      instructor: i.instructor,
      full_name: nameMap.get(i.instructor) || i.instructor,
    })),
  }))
}

export async function TechStack() {
  const courses = await getCourses()

  return <TechStackClient courses={courses} />
}