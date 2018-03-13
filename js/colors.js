var date = new Date();
var month = date.getMonth();

var monthInformation = [
	{ description: "Cervical Cancer Awareness", color: "rgb(2, 132, 130)" },
	{ description: "African-American History", color: "rgb(139, 69, 19)" },
	{ description: "Red Cross", color: "rgb(255, 0, 0)" },
	{ description: "Alcohol Awareness", color: "rgb(255, 215, 0)" },
	{ description: "Skin Cancer Awareness", color: "rgb(255, 165, 0)" },
	{ description: "AIDS Awareness", color: "rgb(255, 0, 0)" },
	{ description: "Recreation and Parks", color: "rgb(0, 255, 0)" },
	{ description: "Immunization Awareness", color: "rgb(30, 144, 255)" },
	{ description: "Leukemia and Lymphoma Awareness", color: "rgb(255, 165, 0)" },
	{ description: "Breast Cancer Awareness", color: "rgb(255, 60, 147)" },
	{ description: "Lung Cancer Awareness", color: "rgb(255, 255, 55)" },
	{ description: "Political Correctness", color: "rgb(106, 90, 205)" }
];

var affectedElements = [];
affectedElements.push("#intro");
affectedElements.push("#credits");
affectedElements.push("#year");

document.getElementById("year").innerHTML = ", " + (1900 + date.getYear()) + " <3";
document.getElementById("monthly").innerHTML = "<span>Dedicated to</span> " + monthInformation[month].description + " Month<span>.</span>";

for(var i in affectedElements)
	document.querySelector(affectedElements[i]).style.color = monthInformation[month].color;

function colorHR() {
	var colors = monthInformation[month].color.replace("rgb(", "").replace(")", "").split(", ");
	var r = colors[0], g = colors[1], b = colors[2];
	var rgba_1 = "rgba(" + r + "," + g + "," + b + ",0)";
	var rgba_2 = "rgba(" + r + "," + g + "," + b + ",0.75)";

	var sheet = document.styleSheets[0];

	addCSSRule(sheet, "hr", "background-image: -webkit-linear-gradient(left, " + rgba_1 + ", " + rgba_2 + ", " + rgba_1 + ");", 0);
	addCSSRule(sheet, "hr", "background-image: -moz-linear-gradient(left, " + rgba_1 + ", " + rgba_2 + ", " + rgba_1 + ");", 0);
	addCSSRule(sheet, "hr", "background-image: -ms-linear-gradient(left, " + rgba_1 + ", " + rgba_2 + ", " + rgba_1 + ");", 0);
	addCSSRule(sheet, "hr", "background-image: -o-linear-gradient(left, " + rgba_1 + ", " + rgba_2 + ", " + rgba_1 + ");", 0);
	addCSSRule(sheet, "hr", "background-image: linear-gradient(left, " + rgba_1 + ", " + rgba_2 + ", " + rgba_1 + ");", 0);
}

colorHR();

function addCSSRule(sheet, selector, rules, index) {
	if("insertRule" in sheet)
		sheet.insertRule(selector + "{" + rules + "}", index);
	else if("addRule" in sheet)
		sheet.addRule(selector, rules, index);
}