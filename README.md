# Kisan Suvidha — Frontend Only

Next.js + React + TypeScript frontend for SIH 2026 Problem Statement 26032.

## Architecture
- No database layer.
- No Supabase SDK.
- No Next.js API routes.
- Browser-side REST calls through `api/client.ts`.
- Service modules isolate API calls from UI components.
- `NEXT_PUBLIC_USE_MOCK_FALLBACK=true` keeps the demo fully usable when an external API is unavailable.
- Replace endpoint paths/base URLs with the real backend without changing the UI.

## Run
```bash
npm install
npm run dev
```

## Real backend
Copy `.env.example` to `.env.local`, set `NEXT_PUBLIC_API_BASE_URL`, and set `NEXT_PUBLIC_USE_MOCK_FALLBACK=false` when you want API errors to surface instead of using demo fallback data.

Expected REST resources include:
`/api/auth/send-otp`, `/api/auth/verify-otp`, `/api/crops`, `/api/market/crops/:id`, `/api/procurement-centres`, `/api/bookings`, `/api/weather`, `/api/notifications`, `/api/schemes`.
