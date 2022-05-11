$(document).ready(function(){
	$("input[type='search']").focus(function(){
		$(this).animate( {width:"270px"},1000,function(){
			$(this).blur(function(){
				$(this).animate( {width:"130px"},1000 );
			});
		});
	});
});