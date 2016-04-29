$(document).ready(function(){

	$( "#calcular" ).click(function() {
	   if ($("#origem").val() == "") {
	       alert("Infome a cidade de origem");
	       $("#origem").focus();
	       return false;
	   } else if ($("#destino").val() == "") {
	   	   alert("Infome a cidade de destino");
	   	   $("#destino").focus();
	   	   return false;
	   } else {
	   	    var origem  = $("#origem").val();
	   	    var destino = $("#destino").val();
	   	    var service = new google.maps.DistanceMatrixService();
	   	    service.getDistanceMatrix(
			{
    			origins: [origem],
    			destinations: [destino],
    			travelMode: google.maps.TravelMode.DRIVING,
    			avoidHighways: false,
    			avoidTolls: false
  			}, 
  			callback);
  			function callback(response, status) {
  				if (status != google.maps.DistanceMatrixStatus.OK) {
  					$("#resultado").text("Erro: " + status);
  					$("#resultado").addClass("alert alert-danger");

  				} else {
  					var origem = response.originAddresses;
  					var destino = response.destinationAddresses;
  					for (var i = 0; i < origem.length; i++) {
  					 	var results = response.rows[i].elements;
  					 	for (var j = 0; j < results.length; j++) {
  					 		var element = results[j];
            				var distance = element.distance.text;
            				var duration = element.duration.text;
            				var from = origem[i];
            				var to = destino[j];

  					 	}
  					 }

  					$("#resultado").text("A distancia entre " + from + " e " + to + " é: " + distance);
            		$("#resultado").addClass("alert alert-success")



  				}

  			}



	   }

	  
       
        
    });

   /*
	var origem  = "Camocim, CE";
	var destino = "Fortaleza, CE";
	var service = new google.maps.DistanceMatrixService();

	service.getDistanceMatrix(
	{
    	origins: [origem],
    	destinations: [destino],
    	travelMode: google.maps.TravelMode.DRIVING,
    	avoidHighways: false,
    	avoidTolls: false
  	}, 
  	callback);
  	function callback(response, status) {
  		if (status != google.maps.DistanceMatrixStatus.OK) {
  			$("#resultado").text("Erro: " + status);
  			$("#resultado").addClass("alert alert-danger")
  		} else {
  			var origem = response.originAddresses;
  			var destino = response.destinationAddresses;
            for (var i = 0; i < origem.length; i++) {
            	var results = response.rows[i].elements;
            	for (var j = 0; j < results.length; j++) {
            		var element = results[j];
            		var distance = element.distance.text;
            		var duration = element.duration.text;
            		var from = origem[i];
            		var to = destino[j];

            	}

            }


            $("#resultado").text("A distancia entre " + from + " e " + to + " é: " + distance);
            $("#resultado").addClass("alert alert-success")


  		}
    // See Parsing the Results for
    // the basics of a callback function.
    }
    */
});