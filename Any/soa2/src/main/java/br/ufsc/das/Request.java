
package br.ufsc.das;
import java.util.HashMap;
import java.io.Serializable;
import java.util.List;
/**
 * @author juaco
 *
 */
public class Request 
{

	//private static final long serialVersionUID = 1L;
	private int id;
	private String name;
	private String email;
	private String cepnumber;
	private Cep cep;
	private List companyproducts;
	
	private String card;
	private String cardnumber;
	private String cardExpiration;

	private String paymentautorization;
	private String paymentvalue;
	private String reference;
	private float value; 
	
	/*
 public Request(int t_id,String t_name,String t_cep,String t_card,String t_cardnumber,String t_cardExpiration,Product []t_products,String t_value)
	{
	 id=t_id;
	 name=t_name;
	 cep=t_cep;
	 cardnumber=t_cardnumber;
	 cardExpiration=t_cardExpiration;
	 products=t_products;
	 value=t_value;
	}*/
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}

public String getCard() {
	return card;
}
public void setCard(String card) {
	this.card = card;
}
public String getCardnumber() {
	return cardnumber;
}
public void setCardnumber(String cardnumber) {
	this.cardnumber = cardnumber;
}
public String getCardExpiration() {
	return cardExpiration;
}
public void setCardExpiration(String cardExpiration) {
	this.cardExpiration = cardExpiration;
}


public List<CompanyProducts> getCompanyproducts() {
	return companyproducts;
}
public void setCompanyproducts(List<CompanyProducts> companyproducts) {
	this.companyproducts = companyproducts;
}



public String getCepnumber() {
	return cepnumber;
}
public void setCepnumber(String cepnumber) {
	this.cepnumber = cepnumber;
}

public Cep getCep() {
	return cep;
}
public void setCep(Cep cep) {
	this.cep = cep;
}
public String getPaymentautorization() {
	return paymentautorization;
}
public void setPaymentautorization(String paymentautorization) {
	this.paymentautorization = paymentautorization;
}
public String getPaymentvalue() {
	return paymentvalue;
}
public void setPaymentvalue(String paymentvalue) {
	this.paymentvalue = paymentvalue;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getReference() {
	return reference;
}
public void setReference(String reference) {
	this.reference = reference;
}




public float getValue() {
	return value;
}
public void setValue(float value) {
	this.value = value;
}
public float getTotal() {
	int size= companyproducts.size();
	float price_value=0;
	for(int n=0;n<size;n++)
	{
		Object object= companyproducts.get(n);
		CompanyProducts company=(CompanyProducts)object;
		Payment pay=company.getPayment();
		price_value=price_value+pay.getPrice();
		
	}
	return price_value;
}

public float getDiscount() {
	int size= companyproducts.size();
	float discount_value=0;
	for(int n=0;n<size;n++)
	{
		Object object= companyproducts.get(n);
		CompanyProducts company=(CompanyProducts)object;
		Payment pay=company.getPayment();
		discount_value=discount_value+pay.getDiscount();
		
	}
	return discount_value;
}

public float getCardprice() 
{
	
	return (this.getTotal()-Float.parseFloat(this.paymentvalue));
}

}

