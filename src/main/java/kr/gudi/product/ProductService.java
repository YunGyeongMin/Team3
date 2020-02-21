package kr.gudi.product;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ProductService {

	@Autowired	ProductDao pd;
	
	public Map<String, Object> productStatus() {
		return pd.productStatus();
	}
	
	public Map<String, Object> productList() {
		return pd.productList();
	}
	
	public Map<String, Object> findProduct(String no) {
		return pd.findProduct(no);
	}
	
	public int setProduct(Map<String, Object> paramMap) {
		return pd.setProduct(paramMap);
	}
	
	public int upProduct(Map<String, Object> paramMap) {
		return pd.upProduct(paramMap);
	}
	
	public boolean setImage(HttpSession session, MultipartFile tImg, MultipartFile dImg) {
		int no = pd.getImgNo();
		String tfilePath = session.getServletContext().getRealPath("resources/upload/t" + no + ".png");
		String tPath = "/resources/upload/t" + no + ".png";
		String dfilePath = session.getServletContext().getRealPath("resources/upload/d" + no + ".png");
		String dPath = "/resources/upload/d" + no + ".png";
		System.out.println(tPath);
		System.out.println(dPath);
		Map<String, Object> img = new HashMap<String, Object>();
		img.put("tPath", tfilePath);
		img.put("dPath", dfilePath);
		img.put("no", no);
		
		try {
			FileUtils.copyInputStreamToFile(tImg.getInputStream(), new File(tPath));
			FileUtils.copyInputStreamToFile(dImg.getInputStream(), new File(dPath));
			pd.setImage(img);
			return true;
			
		} catch (IOException e) {
			e.printStackTrace();
			return false;
		}
		
		
//		return pd.setImage(tImg, dImg);
	}
	
	public boolean upImage(HttpSession session, MultipartFile tImg, MultipartFile dImg, int no) {
		String tfilePath = null;
		String dfilePath = null;
		String tPath = null;
		String dPath = null;
		if(tImg != null) {
			tfilePath = session.getServletContext().getRealPath("resources/upload/t" + no + ".png");
			tPath = "/resources/upload/t" + no + ".png";
		}
		if(dImg != null) {
			dfilePath = session.getServletContext().getRealPath("resources/upload/d" + no + ".png");
			dPath = "/resources/upload/d" + no + ".png";
		}
		
		System.out.println(tPath);
		System.out.println(dPath);
		Map<String, Object> img = new HashMap<String, Object>();
		img.put("tPath", tfilePath);
		img.put("dPath", dfilePath);
		img.put("no", no);
		
		try {
			if(tImg != null)
				FileUtils.copyInputStreamToFile(tImg.getInputStream(), new File(tPath));
			if(dImg != null)
				FileUtils.copyInputStreamToFile(dImg.getInputStream(), new File(dPath));
			pd.setImage(img);
			return true;
			
		} catch (IOException e) {
			e.printStackTrace();
			return false;
		}
		
	}
}
