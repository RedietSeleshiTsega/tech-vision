# TechVision Final Integrated Version

This project keeps the original Next.js/Tailwind structure and integrates the strongest changes from the supplied feature versions while aligning the website with the TechVision design references and brand guidelines.

## Public Routes

- `/` — landing page
- `/courses` — course and curriculum experience including roadmap, tech stack, project portfolio, learning paths, and enrollment sections
- `/stories` — student outcomes and success stories
- `/pricing` — pricing and plan comparison
- `/login` — student login
- `/signup` — student account creation
- `/apply` — five-step batch application flow with review and success state
- `/Get-started` — compatibility route that redirects to `/apply`

<<<<<<< HEAD
## Logged-in Prototype Routes

=======
## Logged-in prototype routes
>>>>>>> 7d0ca9fe500d9c557ea435396fcc1a35f33cf849
- `/dashboard`
- `/dashboard/courses`
- `/dashboard/courses/frontend`
- `/dashboard/applications`
- `/dashboard/applications/frontend`
- `/dashboard/profile`

<<<<<<< HEAD
## Team Contributions

- **Segni** — Landing Page
- **Seble** — Courses
- **Fikir** — Success Stories
- **Nazrawit** — FAQ
- **Rediet** — Integration, UI/UX improvements, branding, theme support, navigation, dashboard improvements, and final frontend refinement

## Merge Decisions

- Original repository structure was retained.
- Course branch additions were retained and integrated.
- Pricing improvements were retained, including clearer pricing hierarchy and plan comparison.
- Landing page improvements were retained, including simplified content structure, statistics, feature sections, and FAQ integration.
- Shared navigation conflicts were resolved into a consistent navbar: **Logo | Home | Courses | Stories | Pricing | Login | Apply Now**.
- Light, Dark, and System themes were added across the website.
- Official TechVision branding was integrated, including logo variants, brand colors, and typography direction.
- Public pages, authentication pages, application pages, and dashboard screens were visually aligned.
- Responsive navigation, hover interactions, loading states, animations, and dashboard usability improvements were added.

## Important Implementation Note

Authentication, course progress, application status, and profile functionality are currently frontend prototypes.

The routes and user flows are implemented for interface and navigation testing, but they are not yet connected to a production authentication service, LMS API, backend API, or database.
=======
## Merge decisions
- Original repository structure was retained.
- Course branch additions were retained: `app/courses/page.tsx`, `CoursePageSections.tsx`, updated Roadmap, and updated TechStack.
- Pricing branch ideas retained: clearer pricing hierarchy, plan comparison, font/design-system intent, and FAQ/pricing improvements; implemented in the requested light visual direction.
- Landing branch ideas retained: simplified hero, clearer statistics, focused feature grid, FAQ-first structure.
- Shared navbar conflicts were resolved to: **Logo | Courses dropdown | Pricing | Login | Apply Now**.
- Green/white visual system is normalized across public, auth, application, and dashboard screens.

## Important implementation note
The authentication, course progress, application status, and profile screens are frontend prototypes. They are wired through local routes for design/flow testing but do not yet connect to a real authentication API, LMS API, or database.
>>>>>>> 7d0ca9fe500d9c557ea435396fcc1a35f33cf849
