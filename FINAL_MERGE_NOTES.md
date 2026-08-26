# TechVision Final Integrated Version

This project keeps the original Next.js/Tailwind structure and integrates the strongest changes from the three supplied feature versions while aligning the public pages with the supplied Figma/SVG design references.

## Public routes
- `/` — light landing page based on `design-reference/landing-light.svg`
- `/courses` — course/curriculum experience using the course branch roadmap, tech stack, project portfolio, learning paths, and enrollment sections
- `/stories` — student outcomes page based on `design-reference/stories-reference.svg`
- `/pricing` — light pricing page based on `design-reference/pricing-techvision.svg`
- `/login` — student login
- `/signup` — student account creation
- `/apply` — five-step batch application flow with review and success state
- `/Get-started` — compatibility route that redirects to `/apply`

## Logged-in prototype routes
- `/dashboard`
- `/dashboard/courses`
- `/dashboard/courses/frontend`
- `/dashboard/applications`
- `/dashboard/applications/frontend`
- `/dashboard/profile`

## Merge decisions
- Original repository structure was retained.
- Course branch additions were retained: `app/courses/page.tsx`, `CoursePageSections.tsx`, updated Roadmap, and updated TechStack.
- Pricing branch ideas retained: clearer pricing hierarchy, plan comparison, font/design-system intent, and FAQ/pricing improvements; implemented in the requested light visual direction.
- Landing branch ideas retained: simplified hero, clearer statistics, focused feature grid, FAQ-first structure.
- Shared navbar conflicts were resolved to: **Logo | Courses dropdown | Pricing | Login | Apply Now**.
- Green/white visual system is normalized across public, auth, application, and dashboard screens.

## Important implementation note
The authentication, course progress, application status, and profile screens are frontend prototypes. They are wired through local routes for design/flow testing but do not yet connect to a real authentication API, LMS API, or database.
