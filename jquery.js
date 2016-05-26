$(document).ready(function(){
    $(".logo").mouseenter(function(){
        $(".logo").fadeTo('fast', 1);
        });
      	  $(".logo").mouseleave(function(){
            $(".logo").fadeTo('slow', 0.5);
           });

	$(".logo").click(function(){
		alert("Ko ziuri, mielasai?");
		});

	$(".nav").click(function() {
		$(".logo").effect("explode");
	});
    });

