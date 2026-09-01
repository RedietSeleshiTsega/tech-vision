// TechStack.tsx (Server Component — no 'use client')
import { TechStackClient } from './TechStackClient'

async function getCourses() {
  const courseParams = new URLSearchParams({
    filters: JSON.stringify([
      ['published', '=', 1],
    ]),
    fields: JSON.stringify(['name']),
  })

  const courseResponse = await fetch(
    `https://learn.techvision.edu.et/api/resource/LMS%20Course?${courseParams}`,
    {
      headers: {
        Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
      },
      next: {
        revalidate: 60,
      },
    }
  )

  if (!courseResponse.ok) {
    console.error('Failed to fetch courses:', courseResponse.status)
    return []
  }

  const data = await courseResponse.json()
  // Frappe list responses come back as { data: [...] }
  return data?.data ?? []
}

export async function TechStack() {
  const courses = await getCourses()

  return <TechStackClient courses={courses} />
}