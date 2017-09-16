function setHeight(){
	var oDiv1=document.getElementById("periodTable");
	var oDiv2=document.getElementById("number");
	oDiv2.style.height=oDiv1.offsetHeight+"px";
}//将数字栏的div高度与元素栏的div高度设置相等
window.onload=function(){
	setHeight();
	tdClick();
	operation();
	numInput();
    calculate()

}
function tdClick(){
	var oBox=document.getElementsByClassName("box");
	var oInput=document.getElementById("inputbox");
	var oResults=document.getElementById("results");
	for(i=0;i<oBox.length;i++){
		oBox[i].onclick=function(){
			oInput.value+=this.getElementsByTagName("span")[2].innerText;
			oResults.innerHTML+=this.getElementsByTagName("span")[1].innerText;
			//alert(typeof(oInput.value));
		}
	}
}//给元素周期表中的每个td方块添加点击事件,当点击td时，将td内的原子质量输入到输入框中
function numInput(){
	var oDiv2=document.getElementById("number");
	var oNum=oDiv2.getElementsByClassName("num");
	var oInput=document.getElementById("inputbox");
	var oResults=document.getElementById("results");
	var Timer=null;
	for(i=0;i<oNum.length;i++){
		oNum[i].onclick=function(){
			var str1=this.innerText;
			clearTimeout(Timer);
			Timer=setTimeout(function(){
				oInput.value+=str1+"*";
				oResults.innerHTML+=str1;
			},300)
		}
		oNum[i].ondblclick=function(){
			clearTimeout(Timer);
			oInput.value+="*"+this.innerText;
			oResults.innerHTML+=this.innerText.sub();
		}
	}
}//给数字方块同时添加一个单击事件和双击事件，当单击一下时，显示"num×"，当双击时，显示"×num"。
function operation(){
	var oSymbol=document.getElementsByClassName("symbol");
	var oInput=document.getElementById("inputbox");
	var oResults=document.getElementById("results");
	for(i=0;i<oSymbol.length;i++){
		oSymbol[i].onclick=function(){
			if(this.innerText=="C"){
				oInput.value="";
				oResults.innerHTML="";
			}else if(this.innerText=="←"){
				oInput.value=oInput.value.substring(0,oInput.value.length-1);
				oResults.innerHTML=oResults.innerHTML.substring(0,oResults.innerHTML.length-1);
			}else{
				oInput.value+=this.innerText;
			}
		}	
	}
}//给C，←，等操作符添加意义。
function calculate(){
	var oInput=document.getElementById("inputbox");
	var oButton=document.getElementById("press");
	var oResults=document.getElementById("results");
	oButton.onclick=function(){
		var str2=oInput.value;
		//eval(str2);
		//alert(eval(str2));
		oResults.innerHTML+=":"+eval(str2).toFixed(2);		
	}
}