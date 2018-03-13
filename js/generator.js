//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle
function shuffle(o) {
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

var sNumber = 0;
var sList = LIST_MECHANICS.concat(LIST_UNITS).concat(LIST_ELECTRICITY_AND_MAGNETISM);

var sentence = "";
var answeredSentence = "";

for(var i = 0; i < (sList.length * 2); i++)
	sList = shuffle(sList);

function refreshSentence() {
	sentence = sList[sNumber].type + "</a><hr /><a class='pointer' onclick='javascipt:generate();'>" + sList[sNumber].variable;
	answeredSentence = sentence + " = " + sList[sNumber].definition;

	sNumber += 1;
	if(sNumber >= sList.length)
		sNumber = 0;
}

var i = -1;

function generate() {
	refreshSentence();

	document.getElementById("sentence").innerHTML = ("<a class='pointer' onclick='javascipt:generate();'>" + sentence + "</a>");
	
	if(sNumber <= 0)
		console.log(sList[sList.length - 1].type + ": " + sList[sList.length - 1].variable + " = " + sList[sList.length - 1].definition);
	else
		console.log(sList[sNumber - 1].type + ": " + sList[sNumber - 1].variable + " = " + sList[sNumber - 1].definition);

	if(i != -1)
		clearTimeout(i);
	i = setTimeout(function(){
		document.getElementById("sentence").innerHTML = ("<a class='pointer' onclick='javascipt:generate();'>" + answeredSentence + "</a>");
	}, 2500);
}