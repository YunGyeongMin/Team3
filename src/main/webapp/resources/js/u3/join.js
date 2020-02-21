$(document).ready(function(){
	var op = { contentType: 'application/json; charset=UTF-8'};
	
	// 이메일 유효성 체크
//	function email(){
//		var regEmail = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
//		var txt1 = document.getElementById("emailcheck").value;
//		if(regEmail.test(txt1)){
//			$("#emailcheck1").hide();
//			$("#emailcheck2").hide();
//			$("#emailcheck3").hide();
//			$("#emailcheck4").hide();
//		} else {
//			$("#emailcheck1").hide();
//			$("#emailcheck2").hide();
//			$("#emailcheck3").show();
//			$("#emailcheck4").hide();
//		}
//	}

	// 이메일 중복 체크 
	$(function() {
	    $("#emailcheck").blur(function() {
	        var params = {email : $("#emailcheck").val()};	   
	        $.ajax({
	            type : "POST",
	            data : params,
	            url : "/emailcheck"})
	         .done(function(data) {
	                if (data.cnt > 0) {
	                	// 중복된 이메일 
	                	$("#emailcheck1").show();
	                	$("#emailcheck2").hide();
	                } else {
	                	// 사용가능 이메일 
	                	$("#emailcheck1").hide();
	                	$("#emailcheck2").show();
	                } 

	               
	           });
	    });
	});
		
	// password 체크
	$("#passwordcheck").blur(function(){
		if($("#passwordcheck").val() != "") {
			if($("#password").val() == $("#passwordcheck").val()) {
				$("#save").prop("disabled", false);
				$("#check").css("display", "none");
			} else {
				$("#passwordcheck")[0].focus();
				$("#check").css({
								display:  "block" ,
								fontSize: "0.5rem", 
			    				color:    "red",
			    				textdecoration: "none"
				});
			}
		}
	});
	
	// 비밀 번호 제한 
	$("#password").blur(function(){
		var pw = $("#password").val(); 
		var num = pw.search(/[0-9]/g); 
		var eng = pw.search(/[a-z]/ig); 
		var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi); 
		if(pw.length < 8 || pw.length > 16){ // 길이체크
			$("#password1").show();
        	$("#password2").hide();
        	$("#password3").hide();
        	$("#password4").hide();
        	$("#password5").hide();
			return false; 
		} else if(pw.search(/\s/) != -1){  //  공백
			$("#password1").hide();
        	$("#password2").show();
        	$("#password3").hide();
        	$("#password4").hide();
        	$("#password5").hide();
			return false; 
		}
		else if(num < 0 || eng < 0 || spe < 0 ){  // 한글 영어 특수 
			$("#password1").hide();
        	$("#password2").hide();
        	$("#password3").show();
        	$("#password4").hide();
        	$("#password5").hide();
			return false;  
	    }
//			else if(pw.val().length == 0){   // 비밀번호 입력
//			$("#password1").hide();
//        	$("#password2").hide();
//        	$("#password3").hide();
//        	$("#password4").show();
//        	$("#password5").hide();
//			return false; 
//			}
		else {     // 사용 가능
			$("#password1").hide();
        	$("#password2").hide();
        	$("#password3").hide();
        	$("#password4").hide();
        	$("#password5").show();
			return true; 
			}
		});
	
	
	// 회원 가입
	$("#join1").submit(function(e){
		console.log("join1");
		e.preventDefault();
		var params = {
				"name":	 	$("#name").val(),
				"email":	$("#emailcheck").val(),
				"password":	$("#password").val(),
				"birth":	$("#birth").val(),
				"gender":	$("#gender").val(),
				"address1":	$("#address1").val(),
				"address2":	$("#address2").val(),
				"address3":	$("#address3").val(),
				"tel":		$("#tel").val()
				
		};
		var op1 = {};
		op1.type ="POST";
		op1.url = "/main/join";
		op1.data = params;
//		op.data = JSON.stringify(params);
		console.log(params);
		$.ajax(op1).done(function(d){
			console.log(d);
			if(d){
				alert("회원가입 성공");
				location.href = "/main/loginSuccess";
			}else {
				alert("회원가입 실패");
				location.href = "/main/join";
			}
		});
		
		
	});
	
	// 회원 수정
	$("#updateUser").submit(function(e){
		console.log("회원정보 수정");
		e.preventDefault();
		var updateUser = {
				"no":	 	$("#no").val(),
				"name":	 	$("#name").val(),
				"email":	$("#emailcheck").val(),
//				"password":	$("#password").val(),
				"birth":	$("#birth").val(),
				"gender":	$("#gender").val(),
				"address1":	$("#address1").val(),
				"address2":	$("#address2").val(),
				"address3":	$("#address3").val(),
				"tel":		$("#tel").val()
		};
		
		if($("#password").val() != "") {
			updateUser.password = $("#password").val();
		}
		op.type ="PATCH";
		op.url = "/main/mypage";
		op.data = JSON.stringify(updateUser);
		console.log(op);
		
		$.ajax(op).done(function(d){
			console.log("ggg", d);
			if(d > 0){
				alert("회원 수정 완료");
//				location.reload();
			}else {
				alert("회원 수정 실패");				
			}
		}).fail(function(d) {
			console.log(d);
		});
	});	
	
	$("#can").click(function(){
		location.reload();
	});
	
	// 회원 탈퇴
	$("#deleteUser").click(function(e){ 
		console.log("deleteUser");
		e.preventDefault();
		
		if($("#emailcheck").val() != $("#email1").val()) {
			alert("이메일 오류!");
			return;
		}		
		
		var deleteUser = {
				"delYn": $("#delYn1").val(),
				"email":	$("#email1").val(),
				"password": $("#password11").val()				
		};
		op.type ="DELETE";
		op.url = "/main/mypage";
		op.data = JSON.stringify(deleteUser);
		console.log(deleteUser);
		$.ajax(op).done(function(d){
			console.log(d);
			if(d.code == 1){
				alert("회원 탈퇴 성공");
				location.href = "/main/loginTeam";
				modal();
			}else {
				alert(d.msg);
				//alert("회원 탈퇴 실패");	
				return;
			}
			
		});
	});
	
	
});
