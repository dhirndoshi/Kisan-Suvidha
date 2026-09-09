import { api, shouldFallback } from '@/api/client';
import { centres, defaultBooking } from '@/lib/data';
import { Centre, Booking } from '@/types';

export async function listProcurementCentres(): Promise<Centre[]> {
  try { return await api<Centre[]>('/api/procurement-centres'); }
  catch (e) { if (shouldFallback(e)) return centres; throw e; }
}

export async function getProcurementCentre(id: string): Promise<Centre | undefined> {
  try { return await api<Centre>(`/api/procurement-centres/${encodeURIComponent(id)}`); }
  catch (e) { if (shouldFallback(e)) return centres.find(c => c.id === id); throw e; }
}

export async function createDemoBooking(input: Omit<Booking,'id'|'token'|'status'>): Promise<Booking> {
  try { return await api<Booking>('/api/bookings', { method: 'POST', body: JSON.stringify(input) }); }
  catch (e) {
    if (!shouldFallback(e)) throw e;
    return { ...input, id: `KS-${Date.now().toString().slice(-8)}`, token: defaultBooking.token, status: 'Slot Confirmed' };
  }
}
