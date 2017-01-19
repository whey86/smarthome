$(document).on('change', '#flip-1', function() {
    //Trigger post
    console.log($('#flip-1').val());
    var data = { val : $('#flip-1').val()};

    $.post('./desk',data, function(){

    });
});
$(document).on('change', '#flip-2', function() {
    //Trigger post
    console.log($('#flip-2').val());

});

$(document).on("#slider-bed-red").on('slidestop', function(){
	var value= $("#slider-bed-red").val();
 		console.log("Slider value: "+ value);
 	var data = {val : value};
 	$.post('./bed-red',data, function(data){

 	});
});

$(document).on("#slider-bed-green").on('slidestop', function(){
	var value= $("#slider-bed-green").val();
 		console.log("Slider value: "+ value);
 	var data = {val : value};
 	$.post('./bed-green',data, function(data){

 	});
});

$(document).on("#slider-bed-blue").on('slidestop', function(){
	var value= $("#slider-bed-blue").val();
 		console.log("Slider value: "+ value);
 	var data = {val : value};
 	$.post('./bed-blue',data, function(data){

 	});
});