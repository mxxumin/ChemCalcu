window.onload=function(){
	var oDiv1=document.getElementById("periodTable");
	var oDiv2=document.getElementById("number");
	oDiv2.style.height=oDiv1.offsetHeight+"px";
	//将数字栏的div高度与元素栏的div高度设置相等
	var oBox=document.getElementsByClassName("box");
	var oNum=document.getElementsByClassName("num");
	var oSymbol=document.getElementsByClassName("symbol");
	var oInput=document.getElementById("inputbox");
	var oResult=document.getElementById("results");
	var oButton=document.getElementById("press");
	var Timer=null;
	for(i=0;i<oBox.length;i++){
		oBox[i].onclick=function(){
			var oLength=this.getElementsByTagName("span")[2].innerText.length;
			oInput.value+=this.getElementsByTagName("span")[2].innerText;
			oResult.innerHTML+=this.getElementsByTagName("span")[1].innerText;
		}
	}
	for(j=0;j<oNum.length;j++){
		oNum[j].onclick=function(){
			var str1=this.innerText;
			clearTimeout(Timer);
			Timer=setTimeout(function(){
				oInput.value+=str1+"*";
				oResult.innerText+=str1;
			},300)
		}
		oNum[j].ondblclick=function(){
			clearTimeout(Timer);
			oInput.value+="*"+this.innerText;
			oResult.innerHTML+=this.innerText.sub();
		}
	}
	for(k=0;k<oSymbol.length;k++){
		oSymbol[k].onclick=function(){
			if(this.innerText=="C"){
				oInput.value="";
			    oResult.innerHTML="";
		    }else if(this.innerText=="←"){
		    	//如果最后两个字符中有*,则oInput.length-2；如果最后一个字符中有+||(||)||.，则oInput.length-1；如果最后四个字符中有.，则oInput.length-5
		    	var c1=oInput.value.substring(oInput.value.length-2,oInput.value.length);
		    	var c2=oInput.value.substring(oInput.value.length-1,oInput.value.length);
		    	var c3=oInput.value.substring(oInput.value.length-4,oInput.value.length);
		    	if((c1.indexOf("*"))!=-1){
		    		oInput.value=oInput.value.substring(0,oInput.value.length-2);
		    	}else if((c2.indexOf("+"||"("||")"))!=-1){
		    		oInput.value=oInput.value.substring(0,oInput.value.length-1);
		    	}else if((c3.indexOf("."))!=-1){
		    		oInput.value=oInput.value.substring(0,oInput.value.length-5);
		    	}else{
		    		oInput.value=oInput.value.substring(0,oInput.length-3);
		    	}
		    }else{
		    	oInput.value+=this.innerText;
		    }
		}
	}
	//点击计算按钮就可以显示结果
	oButton.onclick=function(){
		var str2=oInput.value;
		oResult.innerHTML+=":"+eval(str2).toFixed(2);
    }
}