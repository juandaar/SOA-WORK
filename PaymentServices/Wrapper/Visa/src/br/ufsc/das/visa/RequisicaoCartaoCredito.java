package br.ufsc.das.visa;
import java.io.Serializable;
import java.util.Locale;
public class RequisicaoCartaoCredito implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long numero;

	private String nome;

	private String dataVencimento;

	private double valor;

	public Long getNumero() {
		return numero;
	}

	public void setNumero(Long numero) {
		this.numero = numero;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDataVencimento() {
		return dataVencimento;
	}

	public void setDataVencimento(String dataVencimento) {
		this.dataVencimento = dataVencimento;
	}
    public String newValue()
    {
    	
    	String newvalue=String.format(Locale.ROOT,"%.2f", valor);
    	return newvalue;
    }
	public double getValor() {
		
		

		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	@Override
	public String toString() {
		return "[nome=" + nome + ", numero=" + numero + ", dataVencimento=" + dataVencimento + ", valor=" + valor + "]";
	}

}
