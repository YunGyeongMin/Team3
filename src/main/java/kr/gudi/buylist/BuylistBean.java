package kr.gudi.buylist;

public class BuylistBean {
	
	int ono;
	String exchange;
	String reason;
	int uno;
	
	
	public int getOno() {
		return ono;
	}
	public void setOno(int ono) {
		this.ono = ono;
	}
	public String getExchange() {
		return exchange;
	}
	public void setExchange(String exchange) {
		this.exchange = exchange;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public int getUno() {
		return uno;
	}
	public void setUno(int uno) {
		this.uno = uno;
	}
	@Override
	public String toString() {
		return "BuylistBean [ono=" + ono + ", exchange=" + exchange + ", reason=" + reason + ", uno=" + uno + "]";
	}
	
	
	
}
