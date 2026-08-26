import { Navbar } from "@/components/home/Navbar"
import { Roadmap } from "@/components/home/Roadmap"
import { TechStack } from "@/components/home/TechStack"
import { CoursePageSections } from "@/components/home/CoursePageSections"
import { Footer } from "@/components/home/Footer"

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-[#f4fbf7]">
        <Roadmap />
        <TechStack />
        <CoursePageSections />
      </main>
      <Footer compact />
    </>
  )
}
