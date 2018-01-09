let currMenu = "home";

let names = [];
let items = [];

$('.carousel').carousel('pause');

function init(){
	items = document.getElementsByClassName('nav-link');

	for(let i = 0; i<items.length; i++){
		names[i] = items[i].name;
		console.log(names[i]);
	}


	items[0].addEventListener('click', function(event){
		changeMenu(names[0]);
	});
	// items[1].addEventListener('click', function(event){
	// 	changeMenu(names[1]);
	// });
	items[2].addEventListener('click', function(event){
		changeMenu(names[2]);
	});
	items[3].addEventListener('click', function(event){
		changeMenu(names[3]);
	});
	// items[4].addEventListener('click', function(event){
	// 	changeMenu(names[4]);
	// });
}


function changeMenu(menuName){
	console.log(menuName);
	if (currMenu == menuName) return;


	let NxtIndex = 0;
	let CurrIndex = 0;

	for (let i = 0; i<names.length; i++){
		if(menuName == names[i]) {
			NxtIndex = i;
		}
		if(currMenu == names[i]) {
			CurrIndex = i;
		}
	}

	let curr = document.getElementsByClassName(currMenu)[0];
    let nxt = document.getElementsByClassName(menuName)[0];
    
	items[CurrIndex].classList.remove('active');
    items[NxtIndex].classList.toggle('active');
    
	currMenu = menuName;
}