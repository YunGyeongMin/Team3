// 회원 list
var Userlist = function(){
	$.ajax({
		type: "post",
		url: "/main/admin"
	}).done(function(data){
		UserListView(data);
	});
	Usersearch();
}

var UserListView = function(data){
	$("#UserList").empty();
	for(var i = 0; i < data.length; i++){
		var gender = "여성";
		if(data[i].gender == "M") {
			gender = "남성";
		}
		var html = `
					<ul>
						<li class = "li_tatle user_inventory_li1"><input type = "checkbox"></li>
						<li class = "user_inventory_li1 userNo">${data[i].no}</li>
						<li class = "user_inventory_li2">${gender}</li>
						<li class = "user_inventory_li3">${data[i].name}</li>
						<li class = "user_inventory_li3">
						<select name="division">
							<option value="C">회원</option>
							<option value="A">관리자</option>
						</select>
						</label></li>
						<li class = "user_inventory_li3 user" data-key="${data[i].no}">회원정보</li>
						<li class = "user_inventory_li3">${data[i].reg}</li>
					</ul>
				   `;
		$("#UserList").append(html);
		$("#UserList ul select").eq(i).val(data[i].sector);
	}
	UserListEvent();
}

var UserListEvent = function(){
	$("#UserList .user").click(function(){
		location.href = "/main/mypage?no=" + $(this).attr("data-key");
	});
	$("#UserList ul select").change(function(){
		var index = $("#UserList ul select").index(this);
		var $target = $("#UserList ul select").eq(index);
		var uno = $target.parent().find(".uno").text();
		console.log(uno);
		var params = {
			no : $("#UserList .user_inventory_li3").eq(index).attr("data-key"),
			sector : $target.val()
		};
		console.log(params);
		$.ajax({
			type: "post",
			url: "/main/upSector",
			data: params
		}).done(function(data){
			alert("등급이 변경되었습니다.");
			console.log(data);
		});
	});
}

var Usersearch = function(){
	$("#Usersearch").submit(function(e){
		e.preventDefault();
		var params = {
				name : $("#searchTxt").val()
		};
		console.log(params);
		$.ajax({
			type: "post",
			url: "/main/admin",
			data: params
		}).done(function(data){
			console.log(data);
			UserListView(data);
		});
	});
}
var UserFindSearch = function(){
	$("#UserFindSearch").click(function(e){
		console.log("회원정렬")
		$.ajax({
			type: "post",
			url: "/main/userFindSearch",
			
		}).done(function(data){
		   console.log(data);
		   UserListView(data);
		});			
	});
}

var AdminFindSearch = function(){
	$("#AdminFindSearch").click(function(e){
		console.log("관리자정렬")
		$.ajax({
			type: "post",
			url: "/main/AdminFindSearch",			
		}).done(function(data){
		   console.log(data);
		   UserListView(data);
		});			
	});
}

var UserListnum = function(){
	$.ajax({
		type: "post",
		url: "/main/Usernum"
	}).done(function(data){
		console.log(data);
		$("#UserListnum").text(numberFormat(data[0].Usernum) + "명");
		$("#UserM").text(numberFormat(data[1].UserM) + "명");
		$("#UserF").text(numberFormat(data[2].UserF) + "명");
	});		
}	
