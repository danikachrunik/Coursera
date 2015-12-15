$( document ).ready(function() {

	$('#food_1').click(function() {
		$('#food_1_img').show( "slow" );
		$('#food_1').hide();
		$('#reveal_text').hide();
	});

	$('#food_2').click(function() {
		$('#food_2_img').show( "slow" );
		$('#food_2').hide();
	});

	$('#food_3').click(function() {
		$('#food_3_img').show( "slow" );
		$('#food_3').hide();
	});

});