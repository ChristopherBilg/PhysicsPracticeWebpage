function openContact() {
	window.location.href = "mailto:christopherbilg@gmail.com?subject=%22Contact%22%20via%20Glumpz.com";
}

function openContactBeta() {
	document.getElementById("sentence").innerHTML = "<form name='contact_form' action='../php/contact_form_handler.php' method='POST' target='_blank'>"
		+ "<label for='contactName'>Your Name:</label> "
		+ "<input id='contactName' type='text' name='nameText' placeholder='Jane Doe' maxlength='50' />"
		+ "<br />"
		+ "<label for='contactEmail'>Your Email:</label> "
		+ "<input id='contactEmail' type='text' name='emailText' placeholder='janedoe@example.com' maxlength='100' />"
		+ "<br />"
		+ "<label for='contactMessage'>Your Message:</label> "
		+ "<input id='contactMessage' type='text' name='message'Text' placeholder='How are you today?' maxlength='2000' />"
		+ "<br />"
		+ "<input id='contactSubmit' type='submit' value='Send Message' />"
		+ "</form>";
}

function openRedditScience() {
	window.location.href = "https://www.reddit.com/r/science/search?q=flair%3A%27Physics%27&sort=new&restrict_sr=on";
}

function restartList() {
	document.getElementById("sentence").innerHTML = "<a class='pointer' onclick='javascipt:generate();'>Terminology list has been reset to the beginning.</a>";
	sNumber = 0;
}

function randomizeList() {
	document.getElementById("sentence").innerHTML = "<a class='pointer' onclick='javascipt:generate();'>Terminology list has been randomized.</a>";
	for(var i = 0; i < (sList.length * 2); i++)
		sList = shuffle(sList);
}

// Below this line are the mouse hover events.

var name = "Christopher Bilger";
var ign = "Glumpz";

function mouseOverCredits() {
	document.getElementById("changeCredits").innerHTML = name;
}

function mouseOutCredits() {
	document.getElementById("changeCredits").innerHTML = ign;
}

function mouseOverIntro() {
	document.getElementById("changeIntro").innerHTML = name + "'s";
}

function mouseOutIntro() {
	document.getElementById("changeIntro").innerHTML = ign + "'s";
}