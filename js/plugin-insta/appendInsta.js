jQuery('document').ready(function($){
	
		var hashtag = 'lucasnfaz2'; //tag
		var number = 320;			//number of images

		//ajax
		$.ajax({
			type: 'get',
			url: '/getInsta.php?hashtag='+hashtag+'&number='+number,
			dataType: 'xml',
			cache: false,
			success: function(xml){ 
				var cont = 0;
				$(xml).find('image').each(function () {
					cont = cont + 1;
					var dataLink = $(this).find('dataLink').text();
					var dataImgUrl = $(this).find('dataImgUrl').text();								
					$('.insta').append('<div><a href="'+ dataLink +'" alt="#'+hashtag+'" title="#'+hashtag+'"><img src="'+ dataImgUrl +'" alt="#'+hashtag+'" title="#'+hashtag+'"></a></div>')		 
				});
				if (cont == 0) {
					//do something
				}else{		
					//do something						
				}
			},    
			error: function(e){      
				console.log('erro');
				console.log(e);
				//do something
			}
		});
});