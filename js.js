


//String.fromCharCode(11)   str.charCodeAt(0)
function encrypt(input)
{
	
	//name=prompt("Write The keyword")
	
	var out="";
	var output=[];
	input=input.toString();
	var l=input.length;
	for (var a=0;a<l;a++)
		{
		if (input[a].charCodeAt(0)>=65 && input[a].charCodeAt(0)<91)
			{
			output[2*a]=input[a].charCodeAt(0)-64;
			}
		else if(input[a].charCodeAt(0)>=97 && input[a].charCodeAt(0)<123)
			{
			output[2*a]=input[a].charCodeAt(0)-96;
			}
		else output[2*a]=input[a];
	
	output[2*a+1]="+"
	
		}
		output[2*l-1]="";
		for(a=0;a<2*l;a++)
			
			{
				if(output[a]=="+"&& output[a+1]==" " && output[a+2]=="+")
				{
					output[a]="";
					output[a+2]="";
				}
			
			out+=output[a];
			}
		
	return out;
}

//___________________________________________________________________________________________________________________________________


function enc (input,st)
{
	var style=[];
	
	var alph=[];
	var output=[];
	var out="";
	
	
	
	for(var a=0;a<st.length;a++)
	{
		style[a]=st[a].charCodeAt(0)-97;
		alph[a]=style[a];
		}
		
		
	for(t=st.length;t<26;t++)
{
	for(var a=0;a<26;a++)
	{
		var check=false;
		for(b=0;b<t;b++)
		{
			
			if(alph[b]==a)
			{check=true; break;}
		}
		if(!check) {alph[t]=a; break;}
		
	}
	
	
}
	
	
	for(var a=0;a<input.length;a++)
{
	if(input[a].charCodeAt(0)<97 ||input[a].charCodeAt(0)>122 )
		output[a]=input[a];
	else
	output[a]=String.fromCharCode(97+alph[input[a].charCodeAt(0)-97]);
}	
	
	for(var a=0;a<input.length;a++)
	{
		out+=output[a];
	}
	
	return out;
}

function substitute(){
x = document.getElementById("Stext").value;
let s = document.getElementById("Skey").value;
let c = document.getElementById("Scode");
c.value = enc(x, s);
}



