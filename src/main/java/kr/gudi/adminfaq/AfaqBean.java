package kr.gudi.adminfaq;

public class AfaqBean {
	
	int fno;
	String content;
	int uno;
	
	public int getFno() {
		return fno;
	}
	public void setFno(int fno) {
		this.fno = fno;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public int getUno() {
		return uno;
	}
	public void setUno(int uno) {
		this.uno = uno;
	}
	@Override
	public String toString() {
		return "AfaqBean [fno=" + fno + ", content=" + content + ", uno=" + uno + "]";
	}
	
}
