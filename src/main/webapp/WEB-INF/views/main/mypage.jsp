<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
 <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   		<title>Mypage</title>
		<link rel="stylesheet" href="/resources/css/reset.css">
		<link rel="stylesheet" href="/resources/css/commonlayout.css">
		<link rel="stylesheet" href="/resources/css/mypage.css">
		<link rel="stylesheet" href="/resources/css/check.css">
		<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script type="text/javascript" src="/resources/js/u3/join.js"></script>
		<script type="text/javascript" src="/resources/js/u3/mypage.js"></script>
 </head>
 <body>
 <c:import url="/header" />
<section>
<p> 회원 정보입력</p>

<form id = "updateUser">
<table class="type05">
	
	<input id = "no" type="hidden" > </input>
	
    <tr>
        <th scope="row">이름</th>
        <td><input id = "name" type="text" name="mb_name"
    	 placeholder= "이름을 입력하세요."   title="name"  readonly></td>
    </tr>
    
   <tr>
        <th scope="row">이메일</th>
        <td><input id = "emailcheck" type="email" name="mb_email"
    	 placeholder="이메일을 입력하세요."  title="이메일입력"  readonly></td>
    </tr>    
    <tr>
        <th scope="row">비밀번호</th>
        <td><input id ="password" type="password" name="mb_password"
    	placeholder="비밀번호를 입력하세요."  title="password">
    	<p id= "password1" style="display: none;">8자리 ~ 16자리 이내로 입력해주세요.</P>
		<p id= "password2" style="display: none;">비밀번호는 공백 없이 입력해주세요.</P>
		<p id= "password3" style="display: none;">영문,숫자, 특수문자를 혼합하여 입력해주세요.</P>
<!-- 	<p id= "password4" style="display: none;">비밀번호를 입력 해주세요.</P> -->
		<p id= "password5" style="display: none;">사용가능 한 비밀번호 입니다.</P></td>
    </tr>
    <tr>
        <th scope="row">비밀번호확인</th>
        <td><input id ="passwordcheck" type="password" name="mb_password"
    	placeholder="비밀번호를 확인하세요."  title="password">
    	<p id= "check" style="display: none;">비밀번호가 일치 하지 않습니다.</P></td>
    </tr>
    
    <tr>
        <th scope="row">생일</th>
        <td><input id ="birth" type="date" name="mb_date"
    	placeholder="생년월일을 입력하세요."  title="date" ></td>
    </tr>
	<tr>
        <th scope="row">성별</th>
        <td><select NAME=gender id = "gender">
        <option VALUE=M>남성</option>
        <option VALUE=F>여성</option>
    </SELECT></td>
    </tr> 
       <tr>
       <th scope="row">주소</th>
       		<td class = "addr"> <input type="text" id="address1" placeholder="우편번호"  readonly>
			<input id = button type="button" onclick="sample4_execDaumPostcode()" value="우편번호 찾기" ><br>
			<input class="addr1-1" name="addr1"type="text" id="address2" placeholder="도로명주소" >
			<span id="guide" style="color:#999;display:none"></span>
			<input class="addr1-1" name="addr2" type="text" id="address3" placeholder="상세주소" ></td>
   </tr>       
       
 	 <tr>
        <th scope="row">휴대전화</th>
        <td><input id = "tel" type="tel" name="mb_number"
    	value= "01012345555"placeholder="전화번호를 입력하세요."  title="number" 
    	onchange="ck()"  ></td>
    </tr>
    
</table>

    <div >
 		<button type="submit" > 회원수정완료 </button>
 		<button type="button" id="can">취소하기 </button>
 		<button type="button"  onclick="modal()"> 회원탈퇴 </button>
   </div>
   
  </form> 
   
   
<!-- modal -->
 <div id = "modal">
  <div id="modal-body"></div>
  <div id= "popup">
  	  <div id="popup-head">
  	  	<button type="button" onclick="modal()">X</button>
  	  </div>
  	  
  	  <form>
	  <div>
	  	<ul>
	  	<input id = "delYn1" type="hidden" value="${sessionScope.User.delYn}"> </input>
	  	<li><label for="email1">이메일 입력</label></li>
			<li><input id="email1" type="email" name="mb_secession"
				placeholder="이메일을 입력하세요." title="secession입력"></li>
		   <li><label for="password11">비밀번호 입력</label></li>
			<li><input id="password11" type="password" name="mb_password"
				placeholder="비밀번호를 입력하세요." title="password입력"></li>
		</ul>
		 	<div id="popup-footer">
  	  	          <button type="submit" 
  	  	          class = "outbut" id = "deleteUser" >회원탈퇴하기</button>
  	        </div>
	  </div>
	 </form>
	  
  </div> 
 </div>



</section>
<c:import url="/footer" />
	
	
</body>
</html>

