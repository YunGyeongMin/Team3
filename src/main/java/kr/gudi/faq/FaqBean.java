package kr.gudi.faq;

public class FaqBean {
	
	int no;
	String title;
	int uno;
	String content;
	
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public int getUno() {
		return uno;
	}
	public void setUno(int uno) {
		this.uno = uno;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	@Override
	public String toString() {
		return "FaqBean [no=" + no + ", title=" + title + ", uno=" + uno + ", content=" + content + "]";
	}
	
}
