var respuestas = new Array(10),
preguntas = new Array(10),
key = 0,
y=0;

var action = 
{
	init:function()
	{
		view.flecha();
	},
	eventos:function()
	{
		$('section').on('click','.desplegar',function(){
			$('.opciones_caja').hide();
			$(this).parent().append('<div class="opciones_caja slide"><span class="opcion">SÍ</span><span class="opcion">NO</span></div>');
		});

		$('section').on('click','.borrar',function(){
			y--;
			key = ($(this).parents('.pregunta').attr('data-pregunta'));
			$(this).parents('.opciones_caja').remove();
			$(this).parents('.pregunta').html(preguntas[key-1]+'<span class="glyphicon glyphicon-chevron-down desplegar"></span>');
			
		});

		$('section').on('click','.opcion',function(){
			key = ($(this).parents('.pregunta').attr('data-pregunta'));
			preguntas[key-1]= $(this).parents('.pregunta').text();
			respuestas[key-1]=$(this).text();
			$(this).parents('.pregunta').html('<h4 style="text-align:center;">'+$(this).text()+'</h4><span class="glyphicon glyphicon-remove borrar"></span>');
			view.btnevaluar();
		});
		
		$('section').on('click','#btn-Enviar',function(){
			var x = 0;
			for(var i in respuestas)
			{
				if(respuestas[i] == 'SÍ')
					x++;
			}
			
			if(x < 3)
					alert("3")
			else if (x >= 3 && x <=6)
					alert("Entre 3 y 6");	
			else if (x > 6)
					alert("Mayor a 6");
			else
				alert("Incorrecto");
			
		});
	}
}
var view =
{
	flecha:function()
	{

		$('.pila>div').append('<span class="glyphicon glyphicon-chevron-down desplegar"></span>');
		action.eventos();
	},
	btnevaluar:function()
	{	
		$('#btn-Enviar').remove();
		y++;
		console.log(y);
		if(y == 10)
			$('#preguntas').append('<div id="btn-Enviar" class="slide">Enviar</div>');
		

	}	
}

$(function(){
	action.init();
}());
