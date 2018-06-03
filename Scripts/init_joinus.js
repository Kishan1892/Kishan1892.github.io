$(function () {
    // initialize WOW for element animation
    new WOW().init();

    $(function () {
            $(window).on("load resize", function () {
                $(".fill-screen").css("height", window.innerHeight);
            });
        }); 

        $('body').bind('click', function(e) {
           if($(e.target).closest('.navbar-collapse').length == 0) {
               $('.navbar-collapse').collapse('hide'); 
           }
        }); 

        $('.navbar-collapse').click('li', function() {
            $('.navbar-collapse').collapse('hide'); 
        });


$(document).ready(function () {
	
	var geocoder = new google.maps.Geocoder();
		
			geocoder.geocode({address: "1457 London Rd, Sarnia, ON"}, function(results) {		
			});
		
			var myLatLng = new google.maps.LatLng(42.9758, -82.3475);
			geocoder.geocode({location: myLatLng}, function(results) {
				var mapOptions = {zoom: 13, center: myLatLng, mapTypeId: google.maps.MapTypeId.ROADMAP}
				var map = new google.maps.Map($("#map").get(0), mapOptions);
			
				var marker = new google.maps.Marker( {
                    position: myLatLng,
                    animation: google.maps.Animation.DROP,
					map: map		
                });	
 
			});	
	
	
    $("#gallery").nanoGallery();

    $(function() {
        $("#menu").menu();
      } );

      $("#employees").click(function() {
        $("#employees_menu").toggle("blind", 500);
    });



    $("#employees_menu a").on("click",function() {    
		var jsonFile = $(this).attr("title");
		console.log(jsonFile);	
		var myJson = "ajax/" + jsonFile;
		
		
		$.getJSON( myJson, function(data) {
			console.log("In Json");
	        var html = "";
	        $.each(data, function(){
	        	$.each(this, function(key, value) {
	            html += "<h4>" + value.name + "</h4>" ;
	            html += "<h5>" + value.title  + ", " + value.department + "</h5>"  ;
				/*html += "<h6>" +  value.department + "</h6>" ; */
				html += "<p>" + value.bio + "</p>";
	         });
	        });
	        $("#content").html(html);
		}); 
	});








    $('#contact_form_join').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
            last_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your last name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            }
        }
    });



$('#contact_form').bootstrapValidator({
    // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        first_name: {
            validators: {
                    stringLength: {
                    min: 2,
                },
                    notEmpty: {
                    message: 'Please supply your first name'
                }
            }
        },
        last_name: {
            validators: {
                    stringLength: {
                    min: 2,
                },
                    notEmpty: {
                    message: 'Please supply your last name'
                }
            }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please supply your street address'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please supply your city'
                    }
                }
            },state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your state'
                    }
                }
            },
        zip: {
            validators: {
                notEmpty: {
                    message: 'Please supply your zip code'
                },
                zipCode: {
                    message: 'Please supply a vaild zip code'
                }
            }
        },
        comment: {
            validators: {
                  stringLength: {
                    min: 10,
                    max: 200,
                    message:'Please enter at least 10 characters and no more than 200'
                },
                notEmpty: {
                    message: 'Please supply a description of your project'
                }
                }
            },
            page: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 20,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a url'
                    }
                    }
                }
        }
});



    $("#executivestaff h1").click(function() {
        $(this).toggleClass("minus");
            if ($(this).attr("class") == "minus") {
                $(this).parent().next().fadeOut(1000);
                }
            else {
                $(this).parent().next().slideDown(1000);
                } 
    }); // end click


    $("#whoweare h1").click(function() {
        $(this).toggleClass("minus");
            if ($(this).attr("class") == "minus") {
                $(this).parent().next().fadeOut(1000);
                }
            else {
                $(this).parent().next().slideDown(1000);
                } 
    }); // end click

    $("#reason h1").click(function() {
        $(this).toggleClass("minus");
            if ($(this).attr("class") == "minus") {
                $(this).parent().next().fadeOut(1000);
                }
            else {
                $(this).parent().next().slideDown(1000);
                } 
    }); // end click

});

});