import { api, shouldFallback } from '@/api/client';
import { crops, price7, price30, demandMonths } from '@/lib/data';

export async function getCropMarket(cropId: string) {
  try { return await api(`/api/market/crops/${encodeURIComponent(cropId)}`); }
  catch (e) {
    if (!shouldFallback(e)) throw e;
    const crop = crops.find(c => c.id === cropId) || crops[0];
    return { crop, price7, price30, demandMonths };
  }
}

export async function searchCrops(query: string) {
  try { return await api(`/api/crops?search=${encodeURIComponent(query)}`); }
  catch (e) {
    if (!shouldFallback(e)) throw e;
    const q = query.trim().toLowerCase();
    return q ? crops.filter(c => c.name.toLowerCase().includes(q)) : crops;
  }
}
