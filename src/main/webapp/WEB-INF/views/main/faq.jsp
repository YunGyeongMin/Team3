<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name = "viewport" content="width=device-width,initial-scale=1.0"/>
<title>FAQ페이지</title>
<link rel="stylesheet" href="/resources/css/reset.css">
<link rel="stylesheet" href="/resources/css/commonlayout.css">
<link rel="stylesheet" href="/resources/css/faq.css">
<script type="text/javascript" src="/lib/jquery/3.4.1/dist/jquery.min.js"></script>
<script type="text/javascript" src="/resources/js/u1/faq.js"></script>
</head>
<body>
	<c:import url="/header" />
	<section>
			<div class="faq_tb">
				<ul>
					<li class="no title">NO.</li>
					<li class="detail title">제목</li>
					<li class="name title">작성자</li>
					<li class="date title">작성일</li>
				</ul>
				<div id="faq_list"></div>
				
			</div>
			<div class="number">
				<a class="left-arrow" href="javascript:void(0);" id="left-arrow">&#60;</a>
				<div id="pagging" style="display: inline-block;"></div>
				<a class="right-arrow" href="javascript:void(0);" id="right-arrow">&#62;</a>
				<button class="button">글쓰기</button>
			</div>
			<div class="modal">
				<div class="writemodal">
					<form>
					<div class="one">
					<label for="title">제목</label> 
					<input id="title" type="text" name="txt" placeholder="제목을 입력하세요">
				</div>
				<div class="two">
				<label for="content">내용</label>
				<textarea id="content" cols="58" rows="8" placeholder="내용을 입력하세요"></textarea>
				</div>
				<div id="b_all">
					<button class="m_button" id="cancel">취소</button>
					<button type="submit" class="m_button" id="sub_b">등록</button>
				</div>
				</form>
				</div>
			</div>
	</section>
	<c:import url="/footer" />
</body>
