<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>MypageMain</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="/resources/css/reset.css">
<link rel="stylesheet" href="/resources/css/commonlayout.css">
<link rel="stylesheet" href="/resources/css/mypageMain.css">
<script src="/lib/jquery/3.4.1/dist/jquery.min.js"></script>
<script type="text/javascript" src="/resources/js/u3/mypage.js"></script>
<script src="/resources/js/u1/buylist.js"></script>

</head>
<body>
<c:import url="/header" />
	
<section> 
   <div class = "list1">
   <div class = "list1-1">
    <h3> 구매내역 목록  </h3> 
   <form class = "form" >

			<select name= date id="selectdate">
					<option value=term15>15일</option>
					<option value=termOneMonth>1개월</option>
					<option value=termOneMonth>3개월</option>
					<option value=termSixMonth>6개월</option>
			</select>


   </form>
   </div>
   
   <div class = "list1-2">
   <div class = "ova">
		  <ul class="bg1">
<!-- 		      <li class = "li1"> 선택  </li>   -->
			  <li>주문일자</li>
			  <li>주문번호</li>
			  <li class = "li2">상품정보</li>
			  <li>결제금액</li>
			  <li>처리현황</li>
			  <li>배송조회</li>
<!-- 			  <li>수취확인</li> -->
		  </ul>
		  
		  <div id="order_list"></div> 
		  
	  </div> 
	  </div>
	  </div>
	  
<!-- 	   <div>  -->
<!-- 	   <button type="submit"> 교환 및 환불  </button>  -->
	   
	   
<!-- 	   </div> -->
<!-- 	<div  class = "exchange"> -->
<!--  		<button type="button"  onclick="modal()"> 교환 및 환불 </button> -->
<!--    </div> -->

 
<!-- 	   <div id = "modal"> -->
<!--   <div id="modal-body"></div> -->
<!--   <div id= "popup"> -->
<!--   	  <div id="popup-head"> -->
<!--   	  	<button type="button" onclick="modal()">X</button> -->
<!--   	  </div> -->
<!-- 	  <div> -->
<!-- 	  	<ul> -->
<!-- 					<li> -->
<!-- 						<select name=exchange> -->
<!-- 							<option value=exchange>교환</option> -->
<!-- 							<option value=refund>환불</option> -->
<!-- 						</select> -->
<!-- 					</li> -->
<!-- 			<li><input id="password1" type="text" name="mb_password1" -->
<!-- 				placeholder="사유를 입력하세요." title="사유입력"></li> -->
<!-- 		</ul> -->
<!-- 		 	<div id="popup-footer"> -->
<!--   	  	          <button type="button" onclick="modal()"  -->
<!--   	  	          class = "outbut">교환및환불신청 </button> -->
<!--   	        </div>	  -->
<!-- 	  </div> -->
<!--   </div>  -->
<!--  </div> -->
	  	  


</section>
<c:import url="/footer" />
</body>
</html>