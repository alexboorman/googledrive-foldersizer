// google chrome extension for google drive folder size

var pattern = /(\d{1,3})\s([KMG]B)/;
var totalSize = 0;
function calculateSize() {
	var nodeList = document.querySelectorAll('.a-t-J');
	 console.log("nodeList length", nodeList.length);
	[].forEach.call(nodeList, function(node, i) {
		var textContent = node.textContent;
		var match = pattern.exec(textContent);
		//TODO: Convert file sizes to appropriate unit, testing with MB
		if (match) {
			var size = parseInt(match[1]);
			var unit = match[2];
			if (unit == "KB") {
				totalSize += (size/1000);
			} else if (unit == "MB") {
 				totalSize += size;
			} else if (unit == "GB") {
				totalSize += (size*1000)
			}
		}
	});
	if (totalSize < 1000) {
		console.log("Total size of folder is: " + totalSize + " MB");
	} else {
		console.log("Total size of folder is: " + totalSize/1000 + " GB");
	}
}
window.onload = calculateSize;
