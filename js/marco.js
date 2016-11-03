var movimientoActivado = false;
var contenedorDelMapa = '';
var ultimaPosicionEnX = 0;
var traslacionParaEjeX = 0;
var ultimaPosicionEnY = 0;
var traslacionParaEjeY = 0;

$(document).ready(function(){
   	   mapa('.contenedor');
});

function mapa (objetoDelDom)
{
	contenedorDelMapa = objetoDelDom
	$(contenedorDelMapa)
		.mousedown(function(event)
		{
	    		movimientoActivado = true
	    })
		.mouseup(function(event)
		{
				movimientoActivado = false
	    })
		.mousemove(function(event)
		{
				if (movimientoActivado)
				{
					mover(event)
				};
		})
}

function mover(event) {
	actualPosicionEnY = calcularActualPosicionEnY(event)
	actualPosicionEnX = calcularActualPosicionEnX(event)
	presicion = 10;

	if (ultimaPosicionEnY > actualPosicionEnY)
	{
		traslacionParaEjeY +=presicion
	}
	else if(ultimaPosicionEnY < actualPosicionEnY)
	{
		traslacionParaEjeY -=presicion
	}
	if (ultimaPosicionEnX > actualPosicionEnX)
	{
		traslacionParaEjeX +=presicion
	}
	else if(ultimaPosicionEnX < actualPosicionEnX)
	{
		traslacionParaEjeX -=presicion
	}


	ultimaPosicionEnY = actualPosicionEnY
	ultimaPosicionEnX = actualPosicionEnX

	objetoDelDom = 'img.fondo__imagen.imagen_mapa'
	objetoDelDom += ',img.frente__imagen.imagen_mapa'

	trasladarObjeto(objetoDelDom,traslacionParaEjeX,traslacionParaEjeY,0);
}

function calcularActualPosicionEnY(event)
{
	actualPosicionEnY = (event.pageY - $(contenedorDelMapa).offset().top)
	return actualPosicionEnY
}

function calcularActualPosicionEnX(event)
{
	actualPosicionEnX = (event.pageX - $(contenedorDelMapa).offset().left)
	return actualPosicionEnX
}

function trasladarObjeto (objetoDelDom,valorX,valorY,valorZ) 
{
	$(objetoDelDom).attr('style',generarCssDeTraslacion(valorX,valorY))
}
 
function generarCssDeTraslacion(valorX,valorY,valorZ)
{
	if (valorX===undefined) { valorX=0 };
	if (valorY===undefined) { valorY=0 };
	if (valorZ===undefined) { valorZ=0 };

	xPixeles = valorX + "px"
	yPixeles = valorY + "px"
	zPixeles = valorZ + "px"

	return "transform: translate3d("+xPixeles+","+yPixeles+","+zPixeles+")"
}