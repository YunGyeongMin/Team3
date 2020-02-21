package kr.gudi.faq;

public class PaggingBean {

	int startPoint;
	int vCnt;
	
	public int getStartPoint() {
		return startPoint;
	}
	public void setStartPoint(int startPoint) {
		this.startPoint = startPoint;
	}
	public int getvCnt() {
		return vCnt;
	}
	public void setvCnt(int vCnt) {
		this.vCnt = vCnt;
	}
	@Override
	public String toString() {
		return "PaggingBean [startPoint=" + startPoint + ", vCnt=" + vCnt + "]";
	}
	
}
