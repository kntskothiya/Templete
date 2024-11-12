var mydata = data;
var sections = Object.keys(mydata);
//console.log("***sections="+JSON.stringify(sections));

for (var i = 0; i < sections.length; i++) {

	//console.log("***[sections[i]="+sections[i]);

	var sectionObject = mydata[sections[i]];
	//console.log("***sectionObject="+JSON.stringify(sectionObject));
	var sectionObjectData = sectionObject.data;

	for (var j = 0; j < sectionObjectData.length; j++) {
		var key = sectionObjectData[j].key;
		var value = sectionObjectData[j].value;
		var type = sectionObjectData[j].type;
		//console.log("***key="+key);

		if (type == "IMAGE") {
			if (key == "BG_IMG") {
				var bgElement = document.getElementById(key);
				bgElement.style.backgroundImage = 'url(' + value + ')';
			} else {
				document.getElementById(key).src = value;
			}
		} else if (type == "TEXT") {
			document.getElementById(key).innerHTML = value;
		}

		// define font selection
		if (key == "RESTO_FontName" && value == "Georgia Pro" && sections[i] == "RESTO_INFO") {
			document.getElementById("RESTO_MONTH").style.fontFamily = value;
			document.getElementById("RESTO_DATE").style.fontFamily = value;
			document.getElementById("RESTO_TIME").style.fontFamily = value;
			document.getElementById("RESTO_ADD").style.fontFamily = value;
			document.getElementById("RESTO_CONTACT").style.fontFamily = value;
			document.getElementById("RESTO_WEB").style.fontFamily = value;
		}

		if (key == "TITLE_1_LN_FontName" && value == "Georgia Pro" && sections[i] == "TOP_PART") {
			document.getElementById("TOP_LN_1").style.fontFamily = value;
			document.getElementById("TOP_TITLE_1").style.fontFamily = value;
		}

		if (key == "TITLE_2_FontName" && value == "Sloop Script Pro" && sections[i] == "TOP_PART") {
			document.getElementById("TOP_TITLE_2").style.fontFamily = value;
		}
	}

}


