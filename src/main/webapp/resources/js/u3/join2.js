$(document).ready(function(){
var params = {};
	var getParams = function(){
		var q = location.search;
		q = q.substring(1, q.length);
		var arr = q.split("&");
		for(var i = 0; i < arr.length; i++) {
			  if(arr[i] == "") {
				  break;
			  }
		      var data = arr[i].split("=");
		      var key = data[0];
		      var value = data[1];
		      console.log(key, value);
		      params[key] = value;
		}
		getDate();
	}
	
	var getDate = function() {
		$.ajax({
			type: "post",
			url: "/json/mypage",
			data : params
		}).done(function(d){
			if(d){
				$("#no").val(d.no);
				$("#name").val(d.name);
				$("#emailcheck").val(d.email);
				$("#birth").val(d.birth);
				$("#gender").val(d.gender);
				$("#address1").val(d.address1);
				$("#address2").val(d.address2);
				$("#address3").val(d.address3);
				$("#tel").val(d.tel);			
			} else {
				location.href = "/main/loginTeam";
			}
		});
	}
	
	getParams();
});