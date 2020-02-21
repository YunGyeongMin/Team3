/**
 * adminPage JS
 */

/*Modal 변수선언*/
var openButton;
var modal;
var overlay;
var closeBtn;
/*Tab Menu*/
function menu(target) {
	var oldid = document.querySelector('.show');
	oldid.classList.remove('show');
	var id = document.querySelector(target);
	id.classList.add('show');
	console.log(target);
	switch (target) {
		case "#Member":
			Userlist();  // 회원관리 메뉴 클릭시 싱행 
			UserListnum();
			UserFindSearch();
			AdminFindSearch();
			break;
		default:
			break;
	}
	
}
/*LOGO바로가기*/
function home(url) {
	window.open(url, "_blank");
}
/*Modal*/
function openModal(MDnum) {
	 modal = document.querySelector(MDnum);
	 modal.classList.remove("hidden");
	 overlay = document.getElementsByClassName("modal__overlay");
	 openButton = document.getElementById("open");
}
function closeModal() {
	 closeBtn = document.getElementsByClassName("close");
	 modal.classList.add("hidden");
}

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
