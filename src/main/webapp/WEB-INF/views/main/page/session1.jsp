<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
			<h1 class = "title">상품관리</h1>
			<hr>
			<h3 class = "subtitle">상품현황</h3>
		<div id="productStatus" class = "itemstatus"></div>
			<h3 class = "subtitle">상품목록</h3>
			<div class = "btnset">
				<button id="open" type="button" onclick = "setProduct()">상품등록</button>
				<button type="button" onclick = "repairProduct()">수정</button>
			</div>
			<div class = "item_inventory2">
			<form>
				<ul>
					<li class = "li_tatle item_sname_li2">선택</li>
					<li class = "item_sname_li2">no</li>
					<li class = "item_sname_li1">상품구분</li>
					<li class = "item_sname_li3">상품명</li>
					<li class = "item_sname_li1">판매가</li>
				</ul>
			</form>	
			</div>	
		<div id="productList" class = "item_inventory scroll"></div>
	<div class="modal hidden M1">
		<div class = "modal__overlay"></div>
		<div class="modal__content">
		<span class="close" onclick="closeModal()">&times;</span> 
			<h1 class = "title2">상품등록</h1>
			<hr>
			<div class = "inputarea">
				<form id="setProduct">
					<ul>
						<li>
							<label class = "li_tatle" for = "sname">상품명</label>
							<input class = "input_name" type = "text" id = "sname" name="sname" required="required" placeholder="나만알고싶은 세미오버 싱글코트" >
						</li>	
					</ul>	
					<ul>
						<li>
							<label class = "li_tatle" for = "price">판매가</label>
							<input class = "input_price" type = "text" id = "price" name="price" required="required" placeholder="EX : 48,500">	 
						</li>
					</ul>
					<ul>	
						<li>
							<label class = "li_tatle" for = "thumbnailImg">썸네일이미지등록</label>
							<input type ="file" name = "thumbnailImg" id = "thumbnailImg" required="required">
						</li>
					</ul>
					<ul>	
						<li>
							<label class = "li_tatle" for = "color">상품컬러</label>
							<div class = "input_check">
								<input class = "colorSelect" name="color[]" type = "checkbox" value="Black"><span>Black</span>
								<input class = "colorSelect" name="color[]" type = "checkbox" value="White"><span>White</span>
								<input class = "colorSelect" name="color[]" type = "checkbox" value="Gray"><span>Gray</span>
								<input class = "colorSelect" name="color[]" type = "checkbox" value="Blue"><span>Blue</span>
								<input class = "colorSelect" name="color[]" type = "checkbox" value="Red"><span>Red</span>
							</div>
						</li>
						
					</ul>
					<ul>						
						<li>
							<label class = "li_tatle" for = "detailImg">상품상세설명</label>
							<input class = "" type ="file" name = "detailImg" id = "detailImg" required="required">
<!-- 					        <textarea class = "li_input inputexplain2" name = "txt"></textarea>  텍스트 --> 	
						</li>
					</ul>
					<div  class="btnregister">	
						<input type="submit" value="등록" class = "submit">
					</div>	
				</form>
				</div>
			</div>	
		</div>
		<div class="modal hidden M3">
		<div class = "modal__overlay"></div>
		<div class="modal__content">
		<span class="close" onclick="closeModal2()">&times;</span> 
			<h1 class = "title2">상품수정</h1>
			<hr>
			<div class = "inputarea">
				<form id="updateProduct">
					<ul>
						<li>
							<input type="hidden" id="upno">
							<label class = "li_tatle" for = "item_name">상품명</label>
							<input class = "input_name" type = "text" id = "rname" required="required">
						</li>	
					</ul>	
					<ul>
						<li>
							<label class = "li_tatle" for = "price">판매가</label>
							<input class = "input_price" type = "text" id = "rprice" required="required">	 
						</li>
					</ul>
					<ul>	
						<li>
							<label class = "li_tatle" for = "thumbnail_id">썸네일이미지등록</label>
							<input type ="file" name = "thumbnail" id = "rThumbnailImg">
						</li>
					</ul>
					<ul>	
						<li>
							<label class = "li_tatle" for = "explain1">상품컬러</label>
							<div class = "input_check">
								<input class = "RcolorSelect" name="color[]" type = "checkbox" value="Black"><span>Black</span>
								<input class = "RcolorSelect" name="color[]" type = "checkbox" value="White"><span>White</span>
								<input class = "RcolorSelect" name="color[]" type = "checkbox" value="Gray"><span>Gray</span>
								<input class = "RcolorSelect" name="color[]" type = "checkbox" value="Blue"><span>Blue</span>
								<input class = "RcolorSelect" name="color[]" type = "checkbox" value="Red"><span>Red</span>
							</div>
						</li>
					</ul>
					<ul>						
						<li>
							<label class = "li_tatle" for = "explain2">상품상세설명</label>
							<input class = "" type ="file" name = "profile" id = "rDetailImg">
<!-- 					        <textarea class = "li_input inputexplain2" name = "txt"></textarea>  텍스트 --> 	
						</li>
					</ul>
					<ul>	
						<li>
							<label class = "li_tatle" for = "explain1">상품상태</label>
							<div class = "input_check">
								<input class = "soldOut" type = "checkbox" value="Y"><span>품절</span>
							</div>
						</li>
					</ul>
					<div  class="btnregister">	
						<input type="submit" value="수정" class = "submit">
					</div>	
				</form>
				</div>
			</div>	
		</div>
</body>
</html>