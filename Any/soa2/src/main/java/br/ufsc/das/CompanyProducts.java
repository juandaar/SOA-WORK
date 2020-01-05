package br.ufsc.das;
import java.util.List;
public class CompanyProducts 

{
	String company;
	List products;
	Payment payment;
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public List<Product> getProducts() {
		return products;
	}
	public void setProducts(List<Product> products) {
		this.products = products;
	} 
	
	public Payment getPayment() {
		return payment;
	}
	public void setPayment(Payment payment) {
		this.payment = payment;
	}
	public String toString()
	{
		String result="[";
		int size= products.size();
		for(int n=0;n<size;n++)
		{
			Object object= products.get(n);
			Product product=(Product)object;
			if(n!=0) result=result+",";
			result=result+"{\"id\":"+product.getId()+",\"quantity\":"+product.getQuantity()+"}";
			
		}
		result=result+"]";
		return result;
	}
	

}
