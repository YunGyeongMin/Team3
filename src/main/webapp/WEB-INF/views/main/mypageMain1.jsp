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
<link rel="stylesheet" href="/resources/css/mypageMain1.css">
<script src="/lib/jquery/3.4.1/dist/jquery.min.js"></script>
<script type="text/javascript" src="/resources/js/u3/mypage.js"></script>
<script src="/resources/js/u1/buylist2.js"></script>
<script type="text/javascript">
function checkOnly(chk){
	   var obj = document.getElementsByName("check");
	      for(var i=0; i<obj.length; i++){
	            if(obj[i] != chk){
	                  obj[i].checked = false;
	                  }
	            }
	    }
</script>
</head>
<body>
<c:import url="/header" />
	
<section> 
   <div class = "list1">
   <div class = "list1-1">
    <h3> 주문상세조회  </h3> 
   </div>
   
   <div class = "list1-2">
   <div class = "ova">
		  <ul class="bg1">
		      <li class = "li1"> 선택  </li>  
			  <li>주문일자</li>
			  <li>주문번호</li>
			  <li class = "li2">상품정보</li>
			  <li>결제금액</li>
			  <li>처리현황</li>
			  <li>배송조회</li>

		  </ul>
		  
		  <div id="order_dlist"></div>
	  </div> 
	  </div>
	  </div>
	  
<!-- 	   <div>  -->
<!-- 	   <button type="submit"> 교환 및 환불  </button>  -->
	   
	   
<!-- 	   </div> -->
	<div  class = "exchange">
 		<button type="button"  onclick="modal()"> 교환 및 환불 </button>
   </div>

 
	   <div id = "modal">
  <div id="modal-body"></div>
  <div id= "popup">
  	  <div id="popup-head">
  	  	<button type="button" onclick="modal()">X</button>
  	  </div>
	  <div>
	  	<ul>
					<li>
						<select name=exchange id = "exchange1">
							<option value=C >교환</option>
							<option value=R >환불</option>
						</select>
					</li>
			<li><input id="text1" type="text" name="mb_text1"
				placeholder="사유를 입력하세요." title="사유입력"></li>
		</ul>
		 	<div id="popup-footer">
  	  	          <button type="button" onclick="modal()" 
  	  	          class = "outbut">교환및환불신청 </button>
  	        </div> 
	  </div>
  </div> 
 </div>
	  	  


</section>
<c:import url="/footer" />
</body>
</html>