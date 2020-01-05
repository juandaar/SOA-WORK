package br.ufsc.das.master;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

@WebService()
public class MasterCardPaymentService {

	private PagamentoMasterCard broker = new PagamentoMasterCard();

	@WebMethod()
	public ResultadoPagamentoCartaoCredito efetuarPagamento(
			@WebParam(name = "requisicao") RequisicaoCartaoCredito requisicao) throws ProcessamentoPagamentoException {
		return broker.efetuarPagamento(requisicao);
	}
}
