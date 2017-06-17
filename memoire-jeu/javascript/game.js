var alp=new Array();
var alp=['G','G','A','A','M','M','E','E','O','O','F','F','S','S','T','T'];
var attempt=0;
var pairs=8;
var act=0;
var name='';
var s=100;
var score;
var curr=0;
a1=null;
a2=null;

$(document).ready(function(){

		var name= prompt("Enter your name", "")
		if(name=='')
			$('.player_name').text("No One");
		else
			$('.player_name').text(name)

		$('.loading').css("display","none")

		$('#info').css("display","block").fadeIn();

		setTimeout(function(){
			shuffle(0);
		},250);
		createTable();



		$('#play').click(function(){
		
			$('#info').fadeOut();

			$('#container').css('display','block');
			score=setInterval(scoreboard,1000);

			
		})

		$(".card").click(function(){
			
			show(this);

		})

		$('.play_again').click(function(){
			clearInterval(score);
			$('.card').addClass('reset');

			setTimeout(function(){
				shuffle(0);
			},250)
			
			
			$('.card').removeClass('active solved flip')

			setTimeout(function(){
					s=100;
					pairs=8;
					attempt=0;
					$('#att').text("0"+attempt);
					$('#rem').text("0"+pairs);
					$('.card').removeClass('reset');
			},250)

			$('#complete').fadeOut();
			$('#game_over').fadeOut();
						
				score=setInterval(scoreboard,1000);

			
	
		})

		$('#reset').click(function(){
			
			
			$('.card').removeClass('active solved flip')
			clearInterval(score);
			setTimeout(function(){
				shuffle(0);
			},250)

			$('.card').addClass('reset');

			
			setTimeout(function(){
					s=100;
					pairs=8;
					attempt=0;
					$('#att').text("0"+attempt);
					$('#rem').text("0"+pairs);
					$('.card').removeClass('reset');
			},250)
				
				score=setInterval(scoreboard,1000);

			
	
		})
		
})

function shuffle(a){
	
	if(a<16)
	{
		var k=Math.floor(Math.random()*15);
		var temp=alp[k];
		alp[k]=alp[a];
		alp[a]=temp;
		return shuffle(curr++);
	}
	else{
		for(i=0;i<16;i++)
		{
			$('.card').eq(i).find('.back').text(alp[i]);
		}
		
	
			return;
	}

}

function createTable(){
		var table_new=$('<table>');
		var b=0;
		for(var r=0;r<4;r++)
		{
				var tr=$('<tr>');
				for(var c=0;c<4;c++)
				{
					$('<td class="card"><div class="box"> <div class="front"> </div> <div class="back"> </div> </div> </td>').addClass('front').appendTo(tr);

					b++;
				}
				tr.appendTo(table_new);
		}
		table_new.appendTo('#game');

		
}

function show_front(ele){
	
	$(ele).addClass('flip active');
	
}


function check(){

	if($('.active').first().text() == $('.active').last().text())
	{
		$('.active').removeClass('active').addClass('solved');
		$("#rem").text("0"+ --pairs);

	}
	else
	{
		setTimeout(function(){
			$('.active').removeClass('active flip')
		},800);
	}
	
}

function show(ele){
	
	
	if(!($(ele).hasClass("active")) && !($(ele).hasClass("solved")) && (act<2))
	{
		show_front(ele);

		act++;
		if(act==2)
		{
			check();
			$("#att").text("0"+ ++attempt);

			act=0;

		}
		
	}
	else{

	}

}

function scoreboard(){
	$('#sec').text("0" + --s);
	if(s<0){
		gameover();
	}
	else if(pairs==0){
		complete();
	}

}
	
function complete(){
	clearInterval(score);
	$('#sec').text("0"+s);
	
	$('#complete').css('display','block');

}	
function gameover(){
	clearInterval(score);
	$('#sec').text("00");
	$('#game_over').css('display','block');
}

