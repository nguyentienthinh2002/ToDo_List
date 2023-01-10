var myList = [];

function PushList() {
	var txt = document.getElementById("inputText").value;
	myList.push(txt);
	let txt2 = "<ul>";
	for(let i=0; i < myList.length; i++) {
		txt2 += "<li>" + myList[i] + "</li>";
	}
	txt2 += "</ul>";
	document.getElementById("myMenu").innerHTML = txt2;
}