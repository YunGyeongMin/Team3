$(document).ready(function(){
	var params = {startPoint : 0, vCnt : 5};
	var tp = 0;	 // 페이지 번호의 인덱스값
	var e = 0;   // 페이징 전체 수
	var sp = 0;  // 페이징의 인덱스값  {0 : (1,2) , 1: (3)}
	var ep = 5;  // 페이지 보여질 수
	var vCnt = 2;// 한페이지 목록 수
	var check = true;
	
	var getData = function(){
		// (페이지 번호 인덱스 + 페이징의 인덱스값) * 한페이지 목록 수  [0, 3] 
		if(tp > e) {
			sp--;
			tp = e;
			return;
		}
		var point = (tp - 1);
		if(point < 0) point = 0;
		params.startPoint = point * vCnt;
		params.vCnt = vCnt; // 한페이지 목록 수 변수값
		
		$.ajax({
			type: "get",
			url: "/faq",
			data: params
		}).done(function(d){
//			console.log(check);
//			console.log(d);
			listView(d.rows);
			paggingView(d.totCnt);
			arrowEvent();
		});
	}
	
	getData();
	
	var arrowEvent = function(){
		// 페이징 블록 확인 조건문
		$("#left-arrow").off().on("click", function(){
			// sp : 페이징의 인덱스값  {0 : (1,2) , 1: (3)}
			if(sp > 0) {
				sp--;
				tp = Number($("#pagging a").eq(0).text()) - ep;
				getData();
			}
		});
		$("#right-arrow").off().on("click", function(){
			// sp : 페이징의 인덱스값  {0 : (1,2) , 1: (3)}
			// 버림 처리 (페이징 전체 수 / 페이지 보여질 수) e(3) / ep(2) = 버림(1)
			if(sp < Math.floor(e / ep)) {
				sp++;
				tp = Number($("#pagging a").eq(2).text()) + 1;
				check = true;
				getData();
			}
		});
	};
		
	var paggingView = function(data) {
		var end = Math.ceil(data / vCnt);
		e = end; // 페이징 전체 수 구하기
		
		$("#pagging").empty();
		
		// 화면 출력 마지막 수 구하기
		var start = (sp * ep);
		var end = start + ep;
		if(end > e) end = e;
		var index = 0;
		for(var i = start; i < end; i++) {
			var html = `<a href="javascript:void(0)">${i + 1}</a>`;
			$("#pagging").append(html);
			if(check){
				$("#pagging a").eq(0).addClass("select");
				check = false;
			} else {
				if($("#pagging a").eq(index).text() == tp){
					$("#pagging a").eq(index).addClass("select");
				}
			}
			index++;
		}		
		paggingEvent();
	}
	
	var paggingEvent = function(){
		$("#pagging a").click(function(){
//			var index = $("#pagging a").index(this);
//			tp = index;
			tp = Number($(this).text());
			getData();
		});
	}
	
	var listView = function(data) {
		$("#faq_list").empty();
		for(var i = 0; i < data.length; i++){
			var html = `
						<ul>
							<li class="body">
								<ul class="accordion">
									<li class="no">${data[i].no}</li>
									<li class="detail subject">${data[i].title}</li>
									<li class="name">${data[i].name}</li>
									<li class="date">${data[i].reg}</li>
								</ul>
								<ul class="panel">
									<li class="no"></li>
									<li class="question">${data[i].content}</li>
								</ul>
							`;
				if(data[i].content2 != undefined) {
					html += `
								<ul class="panel">
									<li class="no"></li>
									<li class="answer">${data[i].content2}</li>
									<li class="name">${data[i].name2}</li>
									<li class="date">${data[i].reg2}</li>
								</ul>
							`;
				} else {
					html += `
								<ul class="panel">
									<li class="no"></li>
									<li class="question">답변 대기 중..</li>
								</ul>
							`;
				}
				html += `	</li>
						</ul>
						`;
				$("#faq_list").append(html);
			}
			fun_accordion();
	}
	
	var op=	{
			contentType:'application/json; charset=UTF-8'
			};
	$(".modal form").submit(function(e){
		e.preventDefault();
		var faq = {
			title :		$("#title").val(),
			content :	$("#content").val()   	
		};
		op.url = "/faq";
		op.type = "POST";
		op.data = JSON.stringify(faq);
		$.ajax(op).done(function(d){
	    	 console.log(d);
	    	 if(d > 0) {
	            location.reload();
	         } else {
	        	 var r = confirm("로그인이 필요합니다.\n로그인를 하시겠습니까?");
	        	 if (r == true) {
	        		 location.href = "/main/loginTeam";
	        	 }
	         }
		});
	});
	
	function fun_accordion() {
		$(".accordion").click(function(){
			console.log("accordion");
			var i = $(".accordion").index(this);
			var $a = $(".accordion").eq(i);
			if($a.closest(".body").find(".panel").css("display") == "block") {
				$a.closest(".body").find(".panel").css("display", "none");	
			} else {
				$a.closest(".body").find(".panel").css("display", "block");
			}		
		});
	}	


		 
         var modal = document.querySelector(".modal"); 
         var button = document.querySelector("button");  
         var cancelButton = document.querySelector("#cancel");
//         var submissinbutton = document.querySelector("#sub_b");
        


         function toggleModal() { 
             modal.classList.toggle("show-modal"); 
         }

        function windowOnClick(event) { 
             if (event.target === modal) { 
                 toggleModal(); 
             } 
         }
         button.addEventListener("click", toggleModal); 
         cancel.addEventListener("click", toggleModal);
//         sub_b.addEventListener("click", toggleModal);
         window.addEventListener("click", windowOnClick); 
});
         