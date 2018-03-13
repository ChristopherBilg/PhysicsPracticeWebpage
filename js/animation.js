$(document).ready(function()
{
	$.firefly({total: 100});
});

$(window).resize(function()
{
	$("img[style]").remove();
	$.firefly({total: 100});
});

$("html").keypress(function(event)
{
	switch(event.which)
	{
		case 32:
			event.preventDefault();
			generate();
			break;
		case 13:
			event.preventDefault();
			generate();
			break;
		default:
	}
});