package br.ufsc.das;
import java.util.HashMap;
public class Payment {
    private String ordercode;
    private float price;
    private float discount;
	public String getOrdercode() {
		return ordercode;
	}
	public void setOrdercode(String ordercode) {
		this.ordercode = ordercode;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public float getDiscount() {
		return discount;
	}
	public void setDiscount(float discount) {
		this.discount = discount;
	}
    
   
}
