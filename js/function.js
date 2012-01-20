//Javascript Document
var alphabet;

while (!alphabet) {
	alphabet = prompt('What is your favourite letter?');
}

var writeLetterMultipleTimes = function () {
	for (var j = 0; j <= 10; j++) {
		document.write();
		for (var i = 1; i <= j; i++ ) {
			document.write(alphabet);
		}
		document.write('<br>');
	}
};



writeLetterMultipleTimes();