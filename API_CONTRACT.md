# Kisan Suvidha Frontend API Contract

This repository is intentionally frontend-only. The browser owns the API calls; there are no Next.js route handlers, database files, ORM, or Supabase server integration.

Set `NEXT_PUBLIC_API_BASE_URL` to the deployed backend. All calls are made by `api/client.ts` and exposed through `services/index.ts`.

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/auth/send-otp` | Start OTP verification |
| POST | `/api/auth/verify-otp` | Verify OTP and return session |
| GET | `/api/farmer/profile` | Farmer profile |
| GET | `/api/crops?search=` | Crop search |
| GET | `/api/market/crops/:id` | Crop market intelligence |
| GET | `/api/procurement-centres` | Nearby/list centres |
| GET | `/api/procurement-centres/:id` | Centre detail |
| GET | `/api/procurement-centres/:id/slots?date=` | Slot availability |
| POST | `/api/bookings` | Create procurement booking |
| GET | `/api/bookings` | Farmer bookings |
| GET | `/api/bookings/:id/queue` | Live queue |
| GET | `/api/bookings/:id/status` | Procurement timeline |
| GET | `/api/sales` | Sales |
| GET | `/api/payments` | Payments |
| GET | `/api/weather?location=` | Weather |
| GET | `/api/advisory?...` | Farm advisory |
| POST | `/api/crop-recommendations` | Crop recommendation |
| GET | `/api/crops/:id/demand` | Yearly demand |
| GET | `/api/schemes` | Government schemes |
| GET | `/api/schemes/:id/eligibility` | Scheme eligibility |
| POST | `/api/transport/requests` | Transport request |
| GET | `/api/notifications` | Notifications |
| POST | `/api/notifications/:id/read` | Mark notification read |
| POST | `/api/support/messages` | Support chat |

## CORS
The backend must allow the deployed frontend origin and accept JSON requests. Do not put private API keys in `NEXT_PUBLIC_*` variables.
