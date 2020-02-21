$(document).ready(function(){
	var op=	{
			//contentType:'application/json; charset=UTF-8'
			};
	
	$("#login1").submit(function(e){
		  console.log("로그인");
	      e.preventDefault();
	      
	      var login = {
    		  email :    $("#email").val(),
    		  password:  $("#password").val()
	      };
	      op.url = "/loginTeam";
	      op.type = "POST";
	      op.data = login;
	      $.ajax(op).done(function(d){
	    	 console.log(d);
	         if(d) {
	            alert("login1성공");
	            location.href = "/main/index";
	         } else {
	            alert("login1실패");
	            location.href = "/main/loginTeam";
	         }
	      });
	   });
	
	// id 찾기
	$("#idfind").submit(function(e){
		console.log("idfind");
		e.preventDefault();	
		 var idfind = {
				 name :$("#name").val(),
				 tel:  $("#tel").val()
		      };
		 console.log(idfind);
	 	  op.url = "/id";
	      op.type = "POST";
	      op.data = idfind;
	      $.ajax(op).done(function(d){
//		    	 console.log(d);
		         if(d.code == 1) {
		            alert("id : " + d.data);	       
		            location.href = "/main/loginTeam";
		         } else {
		            alert(d.msg);
		            location.href = "/main/id";
		         }
		      });
		 
	});
	
	// password 찾기
	$("#passwordfind").submit(function(e){
		console.log("passwordfind");
		e.preventDefault();	
		var params = {
    		  email : $("#email").val(),
    		  name :  $("#name").val()
	      };
	      op.url = "/passwordfind";
	      op.type = "POST";
	      op.data = params;
	      $.ajax(op).done(function(d){
	    	 console.log(d);
	    	 if(d.code == 1) {
	    		 alert("임시 비밀번호 전송 되었습니다.")
	    		 location.href = "/main/loginTeam";
	    		 
	    	 } else {
	    		 alert("정보가 없습니다.");
	    		 location.href = "/main/password";
	    	 }
	      });
	});
	
	
	// email 저장
	$("#chk_id").click(function(){
		if($("#chk_id").is(":checked")) {
			if($("#email").val() != "") {
				localStorage.setItem("email", $("#email").val());
			}
		} else {
			localStorage.removeItem("email");
			$("#email").val("");
		}
	});
	
	var getEmail = function(){
		if(localStorage.getItem("email")) {
			$("#email").val(localStorage.getItem("email"));
			$("#chk_id").prop("checked", true);
		}
	}
	getEmail();
	
})
