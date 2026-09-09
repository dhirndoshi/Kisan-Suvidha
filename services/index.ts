import { api, shouldFallback } from '@/api/client';
import { centres, crops, defaultBooking, demandMonths, price7, price30 } from '@/lib/data';

/** Frontend-only API facade. Every method calls an external REST API first and can fall back to demo data. */
export const farmerApi = {
  sendOtp: (mobile: string) => api<{ requestId: string; expiresIn: number }>('/api/auth/send-otp', { method: 'POST', body: JSON.stringify({ mobile }) }),
  verifyOtp: (requestId: string, otp: string) => api<{ verified: boolean; sessionToken: string }>('/api/auth/verify-otp', { method: 'POST', body: JSON.stringify({ requestId, otp }) }),
  profile: () => api('/api/farmer/profile'),
  crops: async (search = '') => {
    try { return await api(`/api/crops?search=${encodeURIComponent(search)}`); }
    catch (e) { if (shouldFallback(e)) return search ? crops.filter(c => c.name.toLowerCase().includes(search.toLowerCase())) : crops; throw e; }
  },
  cropMarket: async (id: string) => {
    try { return await api(`/api/market/crops/${encodeURIComponent(id)}`); }
    catch (e) { if (shouldFallback(e)) return { crop: crops.find(c => c.id === id) || crops[0], price7, price30, demandMonths }; throw e; }
  },
  centres: async () => {
    try { return await api('/api/procurement-centres'); }
    catch (e) { if (shouldFallback(e)) return centres; throw e; }
  },
  centre: async (id: string) => {
    try { return await api(`/api/procurement-centres/${encodeURIComponent(id)}`); }
    catch (e) { if (shouldFallback(e)) return centres.find(c => c.id === id); throw e; }
  },
  slots: (centreId: string, date: string) => api(`/api/procurement-centres/${encodeURIComponent(centreId)}/slots?date=${encodeURIComponent(date)}`),
  createBooking: async (payload: Record<string, unknown>) => {
    try { return await api('/api/bookings', { method: 'POST', body: JSON.stringify(payload) }); }
    catch (e) { if (shouldFallback(e)) return { ...defaultBooking, ...payload, id: `KS-${Date.now().toString().slice(-8)}` }; throw e; }
  },
  bookings: () => api('/api/bookings'),
  queue: (bookingId: string) => api(`/api/bookings/${encodeURIComponent(bookingId)}/queue`),
  procurementStatus: (bookingId: string) => api(`/api/bookings/${encodeURIComponent(bookingId)}/status`),
  sales: () => api('/api/sales'),
  payments: () => api('/api/payments'),
  weather: (location: string) => api(`/api/weather?location=${encodeURIComponent(location)}`),
  advisory: (params: Record<string, string>) => api(`/api/advisory?${new URLSearchParams(params)}`),
  recommendations: (payload: Record<string, unknown>) => api('/api/crop-recommendations', { method: 'POST', body: JSON.stringify(payload) }),
  demand: (cropId: string) => api(`/api/crops/${encodeURIComponent(cropId)}/demand`),
  schemes: () => api('/api/schemes'),
  schemeEligibility: (schemeId: string) => api(`/api/schemes/${encodeURIComponent(schemeId)}/eligibility`),
  transport: (payload: Record<string, unknown>) => api('/api/transport/requests', { method: 'POST', body: JSON.stringify(payload) }),
  notifications: () => api('/api/notifications'),
  markNotificationRead: (id: string) => api(`/api/notifications/${encodeURIComponent(id)}/read`, { method: 'POST' }),
  supportMessage: (message: string) => api('/api/support/messages', { method: 'POST', body: JSON.stringify({ message }) }),
};
