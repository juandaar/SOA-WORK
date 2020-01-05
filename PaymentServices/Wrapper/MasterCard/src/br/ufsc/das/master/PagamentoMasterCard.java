package br.ufsc.das.master;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

public class PagamentoMasterCard {

	private static final String ERROR_PREFIX = "ERROR";

	public ResultadoPagamentoCartaoCredito efetuarPagamento(RequisicaoCartaoCredito requisicao) throws ProcessamentoPagamentoException {

		System.out.println("Recebendo req de pagamento --> " + requisicao);

		String serviceAddr = "127.0.0.1";
		int servicePort = 8901;

		try (Socket socket = new Socket(serviceAddr, servicePort)) {

			BufferedReader input = new BufferedReader(new InputStreamReader(socket.getInputStream()));

			PrintWriter output = new PrintWriter(socket.getOutputStream(), true);

			String resp = receive(input);

			send(output, "PAYMENT");
			resp = receive(input);
			throwExceptionIfError(resp);

			send(output, requisicao.SeparateNumber(0));
			resp = receive(input);
			throwExceptionIfError(resp);

		    send(output, requisicao.SeparateNumber(1));
			resp = receive(input);
			throwExceptionIfError(resp);

			send(output, requisicao.SeparateNumber(2));
			resp = receive(input);
			throwExceptionIfError(resp);

			send(output, requisicao.SeparateNumber(3));
			resp = receive(input);
			throwExceptionIfError(resp);


			send(output, requisicao.getNome());
			resp = receive(input);
			throwExceptionIfError(resp);

			send(output, requisicao.getDataVencimento());
			resp = receive(input);
			throwExceptionIfError(resp);

			send(output, requisicao.newValue());
			resp = receive(input);
			throwExceptionIfError(resp);

			send(output, "COMMIT");
			resp = receive(input);
			throwExceptionIfError(resp);

			resp = receive(input);
			throwExceptionIfError(resp);

			// a3ba892b-0569-4ae4-9a36-3494406c2525:ROQUE BEZERRA:3456:12/2020:252.43
			// Identificador da transação;
			// Nome da pessoa;
			// Últimos seis dígitos de cartão;
			// Data de validade do cartão
			// Valor da transação
			// Valor da transação com desconto

			String[] parts = resp.split(":");

			String codigoTransacao = parts[0];
			float valor = Float.parseFloat(parts[3]);

			return new ResultadoPagamentoCartaoCredito(codigoTransacao, valor);

		} catch (IOException e) {
			System.out.println("Erro se comunicando com o serviço --> " + e.getMessage());
			throw new ProcessamentoPagamentoException(3006, "Sistema indisponível: " + e.getMessage());
		}

	}

	private static void send(PrintWriter output, String msg) {
		System.out.println("send--> " + msg);
		output.println(msg);
	}

	private static String receive(BufferedReader input) throws IOException {
		String msg = input.readLine();
		System.out.println("receive--> " + msg);
		return msg;
	}

	private void throwExceptionIfError(String resp) throws ProcessamentoPagamentoException {

		if (resp.startsWith(ERROR_PREFIX)) {

			int codigoErro = Integer.parseInt(resp.substring(ERROR_PREFIX.length() + 1));

			String mensagem = "";

			switch (codigoErro) {

			case 4000:
				mensagem = "Comando inválido";
				break;

			case 4001:
				mensagem = "Número de cartão de crédito inválido";
				break;

			case 4002:
				mensagem = "Cartão de crédito não é da bandeira MasterCard";
				break;

			case 4003:
				mensagem = "Nome da pessoa inválido";
				break;

			case 4004:
				mensagem = "Data de expiração do cartão de crédito inválida";
				break;

			case 4005:
				mensagem = "Valor da transação inválido";
				break;

			case 4006:
				mensagem = "Sistema indisponível";
				break;

			}
			throw new ProcessamentoPagamentoException(codigoErro, mensagem);
		}

	}
}
