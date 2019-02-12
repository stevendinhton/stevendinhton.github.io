function getIP(json) {
	xhr = new XMLHttpRequest();
	var url = "http://10.88.240.235:8080" + "/" + json.ip;
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function () { 
		if (xhr.readyState == 4 && xhr.status == 200) {
			var json = JSON.parse(xhr.responseText);
			console.log(json.email + ", " + json.name)
		}
	}
	var data = JSON.stringify({"test":"aaa"});
	xhr.send(data);
}





