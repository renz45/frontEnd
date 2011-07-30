/*
This file is used to load other js and css files through a bookmarket using something similar to this:

javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://www.adamrensel.com/load.js';})();

By doing this you can add as much javascript to a page through a bookmarklet as you want.

*/
loadjscssfile("http://www.adamrensel.com/ui-lightness/jquery-ui-1.8.14.custom.css", "css");
loadjscssfile("http://www.adamrensel.com/jquery-1.6.2.min.js", "js");
loadjscssfile("http://www.adamrensel.com/jquery-ui-1.8.14.custom.min.js", "js");
loadjscssfile("http://www.adamrensel.com/styles/mainStyles.css", "css");
loadjscssfile("http://www.adamrensel.com/ui.js", "js");






function loadjscssfile(filename, filetype){

removejscssfile(filename,filetype);//remove if they exist, when you reload a bookmarklet you don't want to stack files.

	if (filetype=="js")//if filename is a external JavaScript file
	{  	
		var fileref=document.createElement('script')
		fileref.setAttribute("type","text/javascript")
		fileref.setAttribute("src", filename)
	}
	else if (filetype=="css"){ //if filename is an external CSS file
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", filename)
	}
	if (typeof fileref!="undefined")
	{
		document.getElementsByTagName("head")[0].appendChild(fileref)
	}
}

function removejscssfile(filename, filetype){
	var targetelement= "none";
	 //determine element type to create nodelist from
	if(filetype=="js")
	{
		targetelement = "script";
	}else if(filetype=="css"){
	
		targetelement = "link";
	}
	
	var targetattr = "none";
	 //determine corresponding attribute to test for
	if(filetype=="js")
	{
		targetattr = "src";
	}else if(filetype=="css"){
	
		targetattr = "href";
	}
	
	var allsuspects=document.getElementsByTagName(targetelement)
	
	for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
 		if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
 		{
   			allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
   		}
	 }
}