package br.ufsc.das.master;

public class TestePagamentoMasterCard{

	public static void main(String[] args) throws ProcessamentoPagamentoException {

		PagamentoMasterCard broker = new PagamentoMasterCard();

		RequisicaoCartaoCredito requisicao = new RequisicaoCartaoCredito();

		requisicao.setNome("ROQUE O BEZERRA");
		requisicao.setNumero(5123456789012345L);
		requisicao.setDataVencimento("12/2020");
		requisicao.setValor(30.50);

		ResultadoPagamentoCartaoCredito resultado = broker.efetuarPagamento(requisicao);

		System.out.println(resultado);

	}

}
