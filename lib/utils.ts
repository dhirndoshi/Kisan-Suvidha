export const money=(n:number)=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(n);
export const cls=(...v:(string|false|undefined|null)[])=>v.filter(Boolean).join(' ');
export const waitLabel=(n:number)=>n===0?'No queue':n<20?`${n} min`:n<60?`${n} min`:`${Math.floor(n/60)}h ${n%60}m`;
