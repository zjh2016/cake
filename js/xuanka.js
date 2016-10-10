window.onload=function(){
		var oUl=document.getElementsByClassName("child1")[0];
		var aA=oUl.getElementsByTagName("a");
		var oDiv=document.getElementsByClassName("father")[0];
		var aDiv=oDiv.getElementsByTagName("div");
		//alert(aDiv.length);
		for(var i=0;i<aA.length;i++){		
			(function(x){
				aA[x].onclick=function(){
						
				for(var j=0;j<aA.length;j++){
					aA[j].className="";
					aDiv[j].style.display="none";
					}
				this.className="active";
				aDiv[x].style.display="block"; 
				}
			})(i);
		}
	};