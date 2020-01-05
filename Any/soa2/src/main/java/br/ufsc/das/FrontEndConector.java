package br.ufsc.das;
import org.mule.api.lifecycle.Callable;
import org.mule.api.MuleEventContext;
import org.mule.api.MuleMessage;
public class FrontEndConector implements Callable
{
	@Override
	public Object onCall(MuleEventContext event) throws Exception
	{
		MuleMessage  message= event.getMessage();
		String esto= event.getMessageAsString();
	
		System.out.println(esto);
		return null;
	}
	

}
