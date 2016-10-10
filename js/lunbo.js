function show(){
			var imgs=document.getElementById('lun').getElementsByTagName('img');
			var spans=document.getElementById('lun').getElementsByTagName('span');
			imgs=Array.prototype.slice.call(imgs,0);
			spans=Array.prototype.slice.call(spans,0);
			var num=0;
			function modify(){
				for(var i=0;i<imgs.length;i++){
					imgs[i].className="";
					spans[i].className="";
				}
				imgs[num].className="currentImg";
				spans[num].className="currentSpan";
			}
			function autoPlay(){
				num++;
				if(num==imgs.length){num=0;}
				modify();
			}
			setInterval(autoPlay,2000);
		}
		window.onload=function(){
			show();
		};