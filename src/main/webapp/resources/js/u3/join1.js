   	
    	$(document).ready(function(){
    	// 이메일 중복 체크 
    	$(function() {
    	    $("#emailcheck").blur(function() {
    	        var params = {email : $("#emailcheck").val()};
    	        var regEmail = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    			var txt1 = document.getElementById("emailcheck").value;
    	        $.ajax({
    	            type : "POST",
    	            data : params,
    	            url : "/emailcheck"})
    	         .done(function(data) {
    	        	 	//이메일 유효성 체크 ok
    	        	 	if(regEmail.test(txt1)){
    	        			if(data.cnt === 0) {
        	                	// 사용가능 이메일 
        	                	$("#emailcheck1").hide(); //중복된 이메일 입니다.
        	                	$("#emailcheck2").show(); //사용 가능 한  이메일 입니다.
        	                } else if (data.cnt > 0) {
        	                	// 중복된 이메일 
        	                	$("#emailcheck1").show();  //중복된 이메일 입니다.
        	                	$("#emailcheck2").hide(); //사용 가능 한  이메일 입니다.
        	                } 
    	        	 	} 
    	                else {
    	        			$("#emailcheck1").hide(); //중복된 이메일 입니다.
    	        			$("#emailcheck2").hide(); //사용 가능 한  이메일 입니다.
    	        			$("#emailcheck3").show(); //이메일 주소가 유효하지 않습니다.
    	        		}
 	               
    	           });
    	    });
    	});
    	});