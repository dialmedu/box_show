var active_move = false;
var ux = 0;
var uy = 0;

var umx = 0;
var umy = 0;
$(document).ready(function(){

   	   $('.contenedor').mousemove(function(event){
   	   		if (active_move) {
	        	texto ="cX,cY: " + event.clientX + ", " + event.clientY + "\n";
	        	texto +="pX,pY: " + event.pageX + ", " + event.pageY + "\n";
	        	
	        	var x = event.pageX - this.offsetLeft;
	    		var y = event.pageY - this.offsetTop;
	    		texto += "OffsL,OffsT: " + this.offsetLeft + ", " + this.offsetTop+ "\n";
	        	texto += "CDX,CDY: " + x + ", " + y+ "\n";
	        	texto += "UX:: " + ux;

	        	$(".coordenadas").text(texto);
	        	var mx = event.clientX-ux;
	        	var my = event.clientY-uy;

	        	if (mx<=0 && mx >= -1500) {
	        		umx = mx;
		        	
	        	};
	        	if (my<=0 && my >= -950) {
		        	umy = my;
	        	};

	        	var translate3d = "transform: translate3d("+umx+"px,"+umy+"px,0px)";
		        	console.log(translate3d);
	   	   		$("img.fondo__imagen.imagen_mapa,img.frente__imagen.imagen_mapa")
	   	   				.attr("style",translate3d);
   	   		};
    	});

    	$('.contenedor').mouseup(function(event){
    		active_move = !active_move;
    		if (active_move) {
    				ux = event.clientX;
    				uy = event.clientY;	
    		};
    		
    	});
});