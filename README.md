# Frontend Development README

## Frontend Directory Structure

```
frontend/
├── .storybook/            # Root Storybook configuration
├── apps/
│   ├── landing_page/      # skolist.com - Main landing page
│   │   ├── src/
│   │   ├── vite.config.ts
│   │   └── vercel.json
│   ├── ai_paper_generator/ # qgen.skolist.com - AI Paper Generator app
│   │   ├── src/
│   │   ├── vite.config.ts
│   │   └── vercel.json
│   └── ai_tutor/          # aitutor.skolist.com - AI Tutor app
│       ├── src/
│       ├── vite.config.ts
│       └── vercel.json
│
├── packages/
│   ├── ui/                # Shared UI components (shadcn/ui based)
│   ├── auth/              # Supabase auth logic + components
│   ├── config/            # Shared Tailwind, TS, PostCSS configs
│   └── utils/             # Common utilities (cn, date, async helpers)
│
├── package.json           # Root package.json (workspaces)
├── pnpm-workspace.yaml    # pnpm workspace config
├── turbo.json             # Turborepo configuration
├── tsconfig.base.json     # Base TypeScript config
├── eslint.config.js       # Shared ESLint config
└── .env.example           # Environment variables template
```

## Quick Start

### Prerequisites

- Node.js >= 20 (see `.nvmrc`)
- pnpm >= 9

### Installation

```bash
# Install dependencies.env.example
pnpm install

# Copy environment file and configure
cp .env.example .env
# Edit .env with your Supabase credentials
```

### Development

```bash
# Run all apps in development mode
pnpm dev

# Run specific app
pnpm --filter @skolist/landing-page dev
pnpm --filter @skolist/ai-paper-generator dev
pnpm --filter @skolist/ai-tutor dev

# Run Storybook
pnpm storybook
```

### Build

```bash
# Build all apps
pnpm build

# Build specific app
pnpm --filter @skolist/landing-page build
```

### Linting

```bash
# Lint all packages
pnpm lint

# Fix linting issues
pnpm lint:fix

# Type check
pnpm type-check
```

## Apps

### Landing Page (`apps/landing_page`)

- **URL**: `skolist.com`
- **Port**: 3000
- **Features**: Public landing page, optional auth UI (shows login button or profile icon)
- **Auth**: Not required to view

### AI Paper Generator (`apps/ai_paper_generator`)

- **URL**: `qgen.skolist.com`
- **Port**: 3001
- **Features**: Generate customized question papers with AI
- **Auth**: Required (redirects to `/login` if not authenticated)

### AI Tutor (`apps/ai_tutor`)

- **URL**: `aitutor.skolist.com`
- **Port**: 3002
- **Features**: AI-powered tutoring and learning companion
- **Auth**: Required (redirects to `/login` if not authenticated)

## Packages

### `@skolist/ui`

Shared UI components based on shadcn/ui with Radix primitives:

- Button, Input, Label, Checkbox
- Card, Tabs, Dialog
- Toast notifications
- Avatar, Dropdown Menu
- Form components with React Hook Form integration
- Spinner loading indicator

### `@skolist/auth`

Supabase authentication with cross-domain cookie support:

- `AuthProvider` - React context for auth state
- `useAuth` - Hook for auth operations
- `LoginPage` - Full-featured login component (email, Google, phone)
- `ProtectedRoute` - Route wrapper for authenticated routes
- `UserMenu` - User dropdown with logout
- `AuthButton` - Smart button (shows login or user menu)

### `@skolist/config`

Shared configuration:

- `tailwind.config.ts` - Base Tailwind config with brand colors
- `postcss.config.js` - PostCSS config
- `tsconfig/` - TypeScript config presets (base, react, library)
- `styles/globals.css` - CSS variables for theming

### `@skolist/utils`

Common utilities:

- `cn()` - Tailwind class merge utility

## Authentication

### Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Enable authentication providers (Email, Google, Phone)
3. Configure your `.env`:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
VITE_COOKIE_DOMAIN=.skolist.com  # For production
```

### Cross-Domain Auth

Authentication works across all subdomains by storing JWT in cookies with domain `.skolist.com`. For local development, leave `VITE_COOKIE_DOMAIN` empty.

### Supported Auth Methods

1. **Email/Password** - Sign up and sign in with email
2. **Google OAuth** - One-click Google sign in
3. **Phone OTP** - SMS verification code

## Deployment (Vercel)

### Per-App Deployment

Deploy each app as a separate Vercel project:

1. **Landing Page** → `skolist.com`
2. **AI Paper Generator** → `qgen.skolist.com`
3. **AI Tutor** → `aitutor.skolist.com`

### Vercel Project Settings

For each app:

1. **Root Directory**: `apps/landing_page` (or respective app folder)
2. **Build Command**: `cd ../.. && pnpm turbo build --filter=@skolist/landing-page`
3. **Output Directory**: `dist`
4. **Install Command**: `pnpm install`

### Environment Variables

Set these in each Vercel project:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_COOKIE_DOMAIN=.skolist.com`

## Storybook

Run Storybook to develop and document UI components:

```bash
pnpm storybook
```

Storybook is configured at the root level and includes stories from:

- `packages/ui/src/**/*.stories.tsx`
- `packages/auth/src/**/*.stories.tsx`

## Tech Stack

| Category   | Technology                  |
| ---------- | --------------------------- |
| Framework  | React 18 + TypeScript       |
| Build      | Vite 6                      |
| Monorepo   | Turborepo + pnpm workspaces |
| Styling    | Tailwind CSS + shadcn/ui    |
| Auth       | Supabase (@supabase/ssr)    |
| Forms      | React Hook Form + Zod       |
| Routing    | React Router v6             |
| Components | Radix UI primitives         |
| Icons      | Lucide React                |
| Linting    | ESLint 9 (flat config)      |
| Formatting | Prettier                    |
| Docs       | Storybook 8                 |
| Deployment | Vercel                      |

## Adding New Features

### Adding a new shared component

1. Create component in `packages/ui/src/components/`
2. Export from `packages/ui/src/index.ts`
3. Add Storybook story in same folder
4. Import in apps: `import { Component } from "@skolist/ui"`

### Adding a new app

1. Copy an existing app folder
2. Update `package.json` name and scripts
3. Update `tsconfig.json` references
4. Add to root `pnpm-workspace.yaml` (automatic with `apps/*`)
5. Create Vercel project for deployment

### Adding a new package

1. Create folder in `packages/`
2. Add `package.json` with proper name (`@skolist/package-name`)
3. Add `tsconfig.json` extending base config
4. Export from `src/index.ts`
5. Add as dependency in apps that need it


## License
Apache License 2.0

“Skolist” is a trademark of Skolist Tech.
