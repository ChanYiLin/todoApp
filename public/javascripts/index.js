var index = "http://localhost:3000";
$(document).ready(function(){

	//Done
	$('.checked-btn').click(function(){
		var id = $(this).data('id');
		var url = './' + id + '/done';
		$.ajax({
			method: 'PUT',
			url: url
		}).done(function(res){
			if(!res) console.log('delete error');
			window.location = index;
		});
	});

	// Undo
	$('.undo-btn').click(function() {
		var id = $(this).data('id');
		var url = './' + id + '/undone';
		$.ajax({
			method: 'PUT',
			url: url,
		}).done(function(res) {
			if (!res) console.log('undo error');
			window.location = index;
		});
	});

	// Update 'PUT'

	// Delete
	$('.delete-btn').click(function() {
		var id = $(this).data('id');
		var url = './' + id + '/delete';
		$.ajax({
			method: 'DELETE',
			url: url,
		}).done(function(res) {
			if (!res) console.log('delete error');
			window.location = index;
		});
	});




});
