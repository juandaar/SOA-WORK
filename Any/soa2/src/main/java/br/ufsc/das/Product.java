package br.ufsc.das;
//import java.util.HashMap;

import java.io.Serializable;

public class Product 
{
	//private static final long serialVersionUID = 1L;
	private int id;
	private int quantity;
	/*
	public Product(int t_id,int t_quantity,float t_cost)
	{
		id=t_id;
		quantity=t_quantity;
		cost=t_cost;
	}*/
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}




	

}
