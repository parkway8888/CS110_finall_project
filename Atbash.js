function Encode(key, message)
    // Given  : key is a string of the 26 letters in arbitrary order,
    //          message is the string to be encoded using the key
    // Returns: the coded version of message using the substitution key 
    {
        var alphabet, coded, i, ch, index;

        alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        coded = "";                                      
        for (i = 0; i < message.length; i++) {        // for as many letters as there are
            ch = message.charAt(i);                   //   access the letter in the message
            index = alphabet.indexOf(ch);	          //   find its position in alphabet
            if (index == -1) {                        //   if it's not a letter,
                coded = coded + ch;                   //     then leave it as is & add
            }								          //   otherwise,
            else {                                    //     find the corresponding
                coded = coded + key.charAt(index);    //     letter in the key & add
            }
        }
        return coded;
    }
	
function atbashShift(){
	let x = document.getElementById("Atext").value;
	let s = document.getElementById("Akey").value;
	let c = document.getElementById("Acode");
	c.value = Encode(s,x);
}