package br.ufsc.das;
import java.util.HashMap;
public class Cep {
	
	int codigoLocalidade;
	String logradouroAbreviado;
	String bairroAbreviado;
	String localidadeAbreviado;
	String uf;
	String obs;
	String logradouro;
	String bairro;
	String localidade;
	int cep;
	

	public String getBairroAbreviado() {
		return bairroAbreviado;
	}
	public void setBairroAbreviado(String bairroAbreviado) {
		this.bairroAbreviado = bairroAbreviado;
	}
	public int getCodigoLocalidade() {
		return codigoLocalidade;
	}
	public void setCodigoLocalidade(int codigoLocalidade) {
		this.codigoLocalidade = codigoLocalidade;
	}
	public String getLogradouroAbreviado() {
		return logradouroAbreviado;
	}
	public void setLogradouroAbreviado(String logradouroAbreviado) {
		this.logradouroAbreviado = logradouroAbreviado;
	}
	public String getLocalidadeAbreviado() {
		return localidadeAbreviado;
	}
	public void setLocalidadeAbreviado(String localidadeAbreviado) {
		this.localidadeAbreviado = localidadeAbreviado;
	}
	public String getUf() {
		return uf;
	}
	public void setUf(String uf) {
		this.uf = uf;
	}
	public String getObs() {
		return obs;
	}
	public void setObs(String obs) {
		this.obs = obs;
	}
	public String getLogradouro() {
		return logradouro;
	}
	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}
	public String getBairro() {
		return bairro;
	}
	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	public String getLocalidade() {
		return localidade;
	}
	public void setLocalidade(String localidade) {
		this.localidade = localidade;
	}
	public int getCep() {
		return cep;
	}
	public void setCep(int cep) {
		this.cep = cep;
	} 
	
	public String toString()
	{
		return logradouro+", "+bairro+", "+localidade;
	}
	
	

}

