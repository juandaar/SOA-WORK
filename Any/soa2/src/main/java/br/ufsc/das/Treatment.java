package br.ufsc.das;
import java.util.HashMap;
import java.util.Map;

public class Treatment {

	public String GET(Map<String, String> params) {


		
		String name=params.get("name");
		String cep=params.get("cep");
		String card=params.get("card");
		String cardExpiration=params.get("cardExpiration");
		String  products=params.get("products");
		String Value=params.get("Value");
		
		//Request request= new request();


		return cardExpiration;
		
	}

}