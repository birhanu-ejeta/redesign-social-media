---
name: testing-socialflow
description: Test the SocialFlow social media app end-to-end. Use when verifying UI responsiveness, color system, mobile navigation, or layout changes.
---

# Testing SocialFlow Social Media App

## Project Structure

- **Framework**: Next.js 14.2.24 with React 18
- **Styling**: Tailwind CSS v3 with custom oklch() color system in `globals.css`
- **UI Library**: shadcn/ui components
- **Dark mode**: next-themes
- **Directory**: The app code is in `social-media-redesign/` subdirectory

## Dev Server Setup

```bash
cd social-media-redesign
npm install
npm run dev
# Default port 3000, auto-increments if in use
```

## Key Architecture Notes

### Color System
- CSS variables defined in `app/globals.css` using `oklch()` color space (NOT hsl)
- Tailwind config (`tailwind.config.js`) references these via `var(--color-name)` directly
- **Common pitfall**: Do NOT wrap oklch() values in `hsl()` — this produces invalid CSS like `hsl(oklch(...))`
- Light mode and `.dark` class variants both defined in globals.css

### Responsive Breakpoints
- `xs: 320px`, `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `2xl: 1536px`
- MobileMenu component: visible at `<1024px` (uses `lg:hidden`)
- Mobile nav bar height: ~60px, pages need `pt-[76px]` padding on mobile

### Authentication
- Uses NextAuth with credentials provider
- Login/signup pages are public (no auth required)
- Settings, notifications, saved, events, profile pages use `useSession` but render UI structure without auth
- API calls will fail without auth (expected "Failed to load settings" toasts)

## Testing Approach

### Pages to Test
- `/login` — Public, tests color system + responsive text
- `/signup` — Public, tests responsive layout
- `/settings` — Tests MobileMenu, tab scrolling, mobile padding
- `/notifications` — Tests MobileMenu, mobile padding
- `/saved`, `/events`, `/profile/[username]` — Tests MobileMenu

### Responsive Testing Viewports
Use Chrome DevTools device toolbar:
- **375px** — Mobile (iPhone SE size)
- **768px** — Tablet
- **1024px** — Desktop breakpoint (MobileMenu hidden at this width)
- **1280px** — Desktop

### Key Things to Verify
1. **Color system**: Background gradients render, card backgrounds visible, text colors correct
2. **Mobile menu**: Hamburger icon appears at <1024px, opens dropdown with nav links
3. **Mobile padding**: Content not hidden behind fixed nav bar (pt-[76px])
4. **Settings tabs**: Scroll horizontally at narrow widths (overflow-x-auto, whitespace-nowrap)
5. **Text scaling**: Login/signup headings use responsive classes (text-4xl sm:text-5xl lg:text-7xl)

### Build & Lint
```bash
npm run build    # Verifies compilation
npm run lint     # ESLint checks
```

## Common Issues

- Vercel preview deployments may return 401 if deployment protection is enabled — test locally instead
- Settings page shows "Failed to load settings" toasts without auth — this is expected, UI still renders
- Port 3000 may be in use from previous sessions — dev server auto-selects next available port

## Devin Secrets Needed

No secrets required for basic responsiveness testing. Auth-dependent features (creating posts, notifications data, profile data) would need test account credentials if full E2E testing is required.
