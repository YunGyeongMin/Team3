/**
 * adminPage JS
 */
/*Modal*/
function openModal(MDnum) {
	 modal = document.querySelector(MDnum);
	 modal.classList.remove("hidden");
	 overlay = document.getElementsByClassName("modal__overlay");
	 openButton = document.getElementById("open");
}
function closeModal2() {
	 closeBtn = document.getElementsByClassName("close");
	 modal.classList.add("hidden");
}
$(document).ready(function(){
	/*Tab Menu*/
	$("#nav_tab li").off().on("click", function(){
		fun_exec($(this).find("label").attr("data-id"));
	});	
	/*Tab Execute*/
	var fun_exec = function(id){
		id = (id == null) ? "session2":id;
		var data = pageMap[id];
		$("#nav_tab li").removeClass("tab_active");
		$("#nav_tab li").eq(data.no).addClass("tab_active");
		if(data.type) {
			localStorage.removeItem("admin");
			data.callBack();
		} else {
			localStorage.setItem("admin", id);
			$("#contents").empty().load(data.url, {}, data.callBack);
		}
	}
	/*Tab Data*/
	var pageMap = {
			session0 : {
				no : 0,
				url : "/main/index",
				callBack : function(){/*Main 바로가기*/
					location.href = pageMap.session0.url;
				},
				type : true
			},
			session1 : {
				no : 2,
				url : "/admin/session1",
				callBack : function(d){/*상품관리 바로가기 > session1*/
					productStatus();
				    productList();
				    fun_Han();
				}
			},
			session2 : {
				no : 1,
				url : "/admin/session2",
				callBack : function(d){/*HOME 바로가기 > session2*/
					adminHomeView();
				}
			},
			session3 : {
				no : 4,
				url : "/admin/session3",
				callBack : function(d){/*반품/교환관리 바로가기 > session3*/
					cancelListView();  /*반품/교환리스트*/
					ExchangeListView();/*교환/반품 현황판*/
					fun_Kmin2();
				}
			},
			session4 : {
				no : 5,
				url : "/admin/session4",
				callBack : function(d){/*문의관리 바로가기 > session4*/
					fun_Inquiry();
				}
			},
			session5 : {
				no : 6,
				url : "/admin/session5",
				callBack : function(d){/*회원관리 바로가기 > session5*/
					Userlist();
					UserListnum();
					UserFindSearch();
					AdminFindSearch();
				}
			},
			session6 : {
				no : 3,
				url : "/admin/session6",
				callBack : function(d){/*결제/주문관리 바로가기 > session6*/
					orderListView();/*주문내역뷰*/
					salesView();    /*매출현황판*/
					fun_Kmin1();
				}
			}
	}
	/*Tab Start Event*/
	fun_exec(localStorage.getItem("admin"));
})
/*accordion*/
function Accordion(){
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    var panel = this.nextElementSibling;
	    if (panel.style.display === "block") {
	      panel.style.display = "none";
	    } else {
	      panel.style.display = "block";
	    }
	  });
	}
}
//상태바
function numberFormat(inputNumber) {
    return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
