package br.ufsc.das;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

@WebService
public interface Conector {

	@WebMethod
	public Request Information(@WebParam(name = "request") Request request);

}
