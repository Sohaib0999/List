var input = document.getElementById("myInput");
var ul = document.querySelector("ul");
var span_a = document.querySelector("span");
var my_li = document.querySelectorAll("li");

var identity = 0;

function addListAfterClick() {
	if (input.value.length > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
		createListElement();        
	}
}

function createListElement() {
	identity += 1;
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
    li.className = "li-list";
	li.id = identity;
	var x_span = document.createElement('span');
	x_span.appendChild(document.createTextNode("x"));
	x_span.className = "x-span";
	x_span.id = String(identity)+String(identity)+String(identity)+String(identity);
	ul.appendChild(li);
	ul.appendChild(x_span);	
	input.value = "";
    divs = document.querySelectorAll('.li-list');
	my_li = document.querySelectorAll("li");
}

ul.addEventListener("click", function(any_variable) {
	if(any_variable.target.tagName ===  "LI"){
		any_variable.target.classList.toggle('checked');
	}
}, false);

ul.addEventListener("click", function(eventt) {
	var value = eventt.target.id;
	var li_value = value.charAt(0);

    if(eventt.target.tagName === "SPAN") {
		if(value.length === 4) {
			var required_x_span = document.getElementById(value);
		    var required_li = document.getElementById(li_value);
		    required_x_span.remove(value);
		    required_li.parentElement.removeChild(required_li);
		} else {
			li_value = String(value.charAt(0)) + String(value.charAt(1));
			var required_x_span = document.getElementById(value);
		    var required_li = document.getElementById(li_value);
		    required_x_span.remove(value);
		    required_li.parentElement.removeChild(required_li);
		}		
	}	
});

function home_func() {
	window.open("index.html","_self");
}

input.addEventListener("keypress", addListAfterKeypress);