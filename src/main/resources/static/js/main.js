// The root URL for the RESTful services
/**var rootURL = "http://localhost:8080/WineCellar/rest/wines";


var findAll= function () {
	console.log('findAll');
	$.ajax({
		type: 'GET',
		url: rootURL,
		dataType: "json", // data type of response
		success: renderList
	});
};


var renderList = function (list) {
	//list=data.wine;
        console.log("response");
	$.each(list, function(index, wine) {
		$('#table_body').append('<tr><td>'+wine.name+'</td><td>'+
				wine.grapes+'</td><td>'+wine.country+'</td><td>'+wine.year+
				'</td></tr>');
	});
        $('#table_id').DataTable();
};

var openModal = function(){
	$('#name').val("BLOCK NINE");
	$('#grapes').val("Merlot");
	$('#country').val("Ireland");
	$('#region').val("Athlone");
	$('#year').val("2021");
	$('#myModal').modal('show');
}
*/

$(document).ready(function(){
	$('.col a[href="#img"]').click(function(e){
		e.preventDefault();
		$('#myModal').show();
		var id = event.target.id;
		$('.modal-content').remove();
		  $("#myModal").append("<img id='"+this.id+"' class='modal-content' src='images/LogoAmarelo.PNG.jpg'/>");
		  //captionText.innerHTML = this.alt;
		});
	
	$('#span').click( function(e) {
		e.preventDefault();
		$('#myModal').hide();
	})
});

