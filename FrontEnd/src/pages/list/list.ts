import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { Item } from './../../models/item';
import { Cart } from './../../models/cart';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public form: any;
  private icons: string[];
  private Description: string[];
  private prices: number[];
  private discounts: number[];
  private Globaldiscounts:number[];
  private quantities: number[];
  private cart: Cart;
  private item: Item;
  private Vector: number; 
  public items: Array<{ id: string, description: string, icon: string, price: number }>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder, ) {

    //init form
    this.form = fb.group({
      qty: []
    });

    //init Cart
    this.cart = new Cart();
    this.cart.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    this.cart.total_value = 0;

    // ramdom icons
    this.icons = ['domestico.jpeg','seguranca.jpeg','medico.jpeg','reatorSolar.jpeg','reatorArc.png'];
    this.Description=['Domestic Robot',' Security Robot',' Medical Robot',' Solar Reactor',' Ark Reactor'];
    this.prices=[800,1200,6900,4500,8001];
    this.discounts=[0.07,0.14,0.24,0.15,0.09];
    this.Globaldiscounts=[0.04,0.04,0.04,0.06,0.06];
    this.quantities=[3,4,5,3,3];
    // init items to populate the list
    this.items = [];
  
    for (let i = 0; i < 5; i++) {
      this.item = new Item();
      this.item.id = (i+1).toString();
      this.item.description = this.Description[i]
      this.item.discount=' purchases over '+this.quantities[i]+' units receive a discount of '+(100.0*this.discounts[i]).toFixed(2)+'% per unit'
      this.item.GlobalDiscount=this.Globaldiscounts[i]
      this.item.GlobalDiscountCommment='You receive a discount of '+(100.0*this.Globaldiscounts[i]).toFixed(2)+'% for your purchase'
      this.item.icon ='assets/imgs/'+this.icons[i]
      this.item.price = this.prices[i]
      this.item.qty = 0;
      this.items.push(this.item);
    }





  }



  addToCart(i: number, item: Item) {
    let qty = this.form.value.qty;
    
    
    if (qty > 0) 
    { 
      item.qty = qty;
      this.Vector = parseInt(item.id);
      this.Vector=this.Vector-1;
      if(item.qty>this.quantities[this.Vector])
      {
      item.price=this.prices[this.Vector]-this.prices[this.Vector]*this.discounts[this.Vector];
      }
      else
      {
        item.price=this.prices[this.Vector];
      }
      // New item
      if (this.cart.items.indexOf(item) === -1) {
        this.cart.items.push(item);
        this.cart.last_update = new Date();
        console.log(this.cart);
      } else {
        // update item
        let  item_update: any = this.cart.items.filter(item => item.id === item.id);
        item_update.qty = qty;
        item_update.last_update = new Date();
        console.log(this.cart);
      }
    } else {
      // remove item when qty = 0;
      for (var i = this.cart.items.length - 1; i >= 0; --i) {
        if (this.cart.items[i].id == item.id) {
          this.cart.items.splice(i, 1);
        }
      }
      console.log(this.cart);
    }
  }

  showCart() {
    if (this.cart.items.length > 0) {
      this.navCtrl.push('CartPage', { cart: this.cart });
    } else {
      alert("The shopping cart is empty")
    }
  }
}
