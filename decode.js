var caesarDecode = function(str, amount) {

	if (amount < 0){
		return caesarShift(str, amount + 26);
		}
	var output = '';

	for (var i = 0; i < str.length; i++) {
		// Get the character we'll be appending
		var c = str[i];



		// If it's a letter...

		if (c.match(/[a-z]/i)) {



			// Get its code

			var code = str.charCodeAt(i);



			// Uppercase letters

			if ((code >= 65) && (code <= 90)){
			
			if(code-65-amount<0){c = String.fromCharCode(((code - 97 - amount) % 26) + 65 + 26);}
			else
				c = String.fromCharCode(((code - 65 - amount) % 26) + 65);

			}

			// Lowercase letters

			else if ((code >= 97) && (code <= 122)){

			if(code-97-amount<0){c = String.fromCharCode(((code - 97 - amount) % 26) + 97+26);}
			else
				c = String.fromCharCode(((code - 97 - amount) % 26) + 97);

			}

		}



		// Append

		output += c;



	}



	// All done!

	return output;

}

function decode(){
x = document.getElementById("text").value;
let s = Number(document.getElementById("shift").value);
let c = document.getElementById("code");
c.value = caesarDecode(x, s);
}