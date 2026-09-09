export const demoOtp='482193';
export const demoUser={name:'Ramesh Patel',mobile:'+91 98XXXXXX42',address:'Bopal, Ahmedabad, Gujarat',state:'Gujarat',district:'Ahmedabad',village:'Bopal',pincode:'380058',landArea:7.5,language:'English',verified:true};
export const notify=(message:string)=>{if(typeof window!=='undefined') window.dispatchEvent(new CustomEvent('ks-toast',{detail:message}))};
export const save=(key:string,value:unknown)=>{if(typeof window!=='undefined') localStorage.setItem(`ks:${key}`,JSON.stringify(value))};
export const load=<T,>(key:string,fallback:T):T=>{if(typeof window==='undefined') return fallback; try{const x=localStorage.getItem(`ks:${key}`);return x?JSON.parse(x):fallback}catch{return fallback}};
