
import { CompanyProducts } from "./companyproducts";
export class Request {
	id:number;
	name:string;
	email:string;
	cepnumber:number;
	card:number;
	cardnumber:number;
	cardExpiration:String;
    companyproducts: CompanyProducts[];
    value: number;
}

