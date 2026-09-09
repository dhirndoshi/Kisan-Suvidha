export type Crop={id:string;name:string;price:number;previous:number;movement:number;demand:'High'|'Medium'|'Low';season:string;sowing:string;yieldPerAcre:number;image:string;water:string;bestMonths:string;description:string};
export type Centre={id:string;name:string;location:string;district:string;distance:number;hours:string;crops:string[];queue:number;waiting:number;slots:number;status:'Open'|'Limited'|'Closed';lat:number;lng:number};
export type Booking={id:string;token:string;crop:string;quantity:number;centre:string;date:string;time:string;income:number;status:string};
