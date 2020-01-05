import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from './../../models/order';
import { Request } from './../../models/request';
import { Product } from './../../models/product';
import { Products } from './../../models/products';
import { CompanyProducts } from './../../models/companyproducts';
import { Api } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {

  private order: Order = new Order();
  public total: number = 0;
  myForm: FormGroup;
  private productsA:Products[];
   private productsB:Products[];
  private product:Products;
  private request:Request;
  private companyproducts:CompanyProducts;
  private companyproductsvector:CompanyProducts[];
  constructor(
    private api: Api,
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

    if (this.navParams.get('order')) {
      this.order = this.navParams.get('order');
      console.log(this.order)
      this.myForm = this.createMyForm();
    } else {
      this.navCtrl.setRoot('ListPage');
    }

  }
saveData(){
    length= this.order.cart.items.length;
    this.productsA=[];
    this.productsB=[];
    this.companyproductsvector=[];

    for(let i=0;i<length;i++)
    {
    this.product=new Product();
    this.product.id=this.order.cart.items[i].id;
    this.product.quantity=this.order.cart.items[i].qty;
    if(Number(this.order.cart.items[i].id)<=3)
    {
    this.productsA.push(this.product);
    }
    else
    {
    this.productsB.push(this.product);
    }
    }
    this.request=new Request();
    this.request.id=100010001;
    this.request.value=this.order.order_value;
    this.request.email=this.myForm.value.email;
    this.request.name= this.myForm.value.name;
    this.request.cepnumber= this.myForm.value.cep;
    this.request.card=this.myForm.value.paymentmethod;
    this.request.cardnumber=this.myForm.value.card;
    this.request.cardExpiration=this.myForm.value.month+"/"+this.myForm.value.year;
    if(this.myForm.value.month>12) this.request.cardExpiration="12"+"/"+this.myForm.value.year;
    this.companyproducts= new CompanyProducts;
    this.companyproducts.company=1;
    this.companyproducts.products=this.productsA;
    this.companyproductsvector.push(this.companyproducts);
    this.companyproducts= new CompanyProducts;
    this.companyproducts.company=2;
    this.companyproducts.products=this.productsB;
    this.companyproductsvector.push(this.companyproducts);
    this.request.companyproducts=this.companyproductsvector;
    //this.request.cardExpiration=this.request.cardExpiration.replace("-","/").split("/").reverse().join("/");
    console.log(this.request);
    this.api.post('SOAserver', this.request).subscribe((resp) => { 
    var result=resp;
    console.log(resp);
    if(result.result.email)
    {
    var elem = document.getElementById('objetive');
    elem.parentNode.removeChild(elem);
    var table = document.getElementById("factura");

    for(var n=0;n<4;n++)
    {
     var newDiv = document.createElement("div"); 
     if(n==0) newDiv.innerHTML ="purchase reference: "+resp.result._id;
     if(n==1) newDiv.innerHTML ="Buyer: "+resp.result.name;
     if(n==2) newDiv.innerHTML ="Buyer's E-mail: "+resp.result.email;
     if(n==3) newDiv.innerHTML ="congratulation for your buying!, we are honestly happiest to see you trust in our project!!!!!";
     table.appendChild(newDiv); //añade texto al div creado. 
      

    }



    
    }
    else
    {
    console.log("Error: "+result)
    var error=document.getElementById("error");
    error.innerHTML="ERROR: "+result;
    }

    


    }
    ); 
}
private createMyForm(){
  return this.formBuilder.group({
    name: ['', Validators.required],
    cep: ['', Validators.required],
    paymentmethod: ['', Validators.required],
    month:['', Validators.required],
    year:['', Validators.required],
    email: ['', Validators.required],
   card:['', Validators.required],
  });

}
/*
private paymentchange(questionID,answer){

  
     }*/
}
