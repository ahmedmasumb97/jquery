


// jQuery Syntax
// The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s).

// Basic syntax is: $(selector).action()

// A $ sign to define/access jQuery
// A (selector) to "query (or find)" HTML elements
// A jQuery action() to be performed on the element(s)
// Examples:

// $(this).hide() - hides the current element.

// $("p").hide() - hides all <p> elements.

// $(".test").hide() - hides all elements with class="test".

// $("#test").hide() - hides the element with id="test".





// The Document Ready Event
// You might have noticed that all jQuery methods in our examples, are inside a document ready event:

// $(document).ready(function(){

//   // jQuery methods go here...

// });





// This is to prevent any jQuery code from running before the document is finished loading (is ready).

// It is good practice to wait for the document to be fully loaded and ready before working with it. This also allows you to have your JavaScript code before the body of your document, in the head section.

// Here are some examples of actions that can fail if methods are run before the document is fully loaded:

// Trying to hide an element that is not created yet
// Trying to get the size of an image that is not loaded yet
// Tip: The jQuery team has also created an even shorter method for the document ready event:

// $(function(){

//   // jQuery methods go here...

// });




//jQuery Selectors

// all p tag
$('p')

//all p1 class

$('.p1')


// all p1 id


$('#p1')


//hide

$(document).ready(function(){
    $('#btn1').click(function(){
        $('#demo1').hide()
    })
})



$(document).ready(function(){

    $('#btn2').click(function(){
        $(this).hide()
    })

});




// Selects the current HTML element	
// $("p.intro")	Selects all <p> elements with class="intro"	
// $("p:first")	Selects the first <p> element	
// $("ul li:first")	Selects the first <li> element of the first <ul>	
// $("ul li:first-child")	Selects the first <li> element of every <ul>	
// $("[href]")	Selects all elements with an href attribute	
// $("a[target='_blank']")	Selects all <a> elements with a target attribute value equal to "_blank"	
// $("a[target!='_blank']")	Selects all <a> elements with a target attribute value NOT equal to "_blank"	
// $(":button")	Selects all <button> elements and <input> elements of type="button"	
// $("tr:even")	Selects all even <tr> elements	
// $("tr:odd")



// jQuery Event Methods
// jQuery is tailor-made to respond to events in an HTML page.

// What are Events?
// All the different visitors' actions that a web page can respond to are called events.

// An event represents the precise moment when something happens.

// Examples:

// moving a mouse over an element
// selecting a radio button
// clicking on an element
// The term "fires/fired" is often used with events. Example: "The keypress event is fired, the moment you press a key".






// dblclick()

// The dblclick() method attaches an event handler function to an HTML element.

// The function is executed when the user double-clicks on the HTML element:



$(document).ready(function(){

    $('#demo2').dblclick(function(){
        $(this).hide()
    })
})



// $(document).ready(function(){

//     $('#demo3').mouseenter(function(){
//         alert('your mouse is over which mouseenter')
//     })
// })



// mouseleave() , mousedown(),mouseup()


// input focus


$(document).ready(function(){
    $('#ip1').focus(function(){

        $(this).css("background-color", '#1ee',"color",'white')

    })
})




// blur()

// The blur() method attaches an event handler function to an HTML form field.

// The function is executed when the form field loses focus:





// The on() Method
// The on() method attaches one or more event handlers for the selected elements.

// Attach a click event to a <p> element:


$(document).ready(function() {
    $('#btn3').on({
        hide: function(){
            $('#demo4').hide();
        },

        show: function(){
            $('#demo4').show();
        }
    })
})



// $(document).ready(function(){
//     $("p").on({
//       mouseenter: function(){
//         $(this).css("background-color", "lightgray");
//       },  
//       mouseleave: function(){
//         $(this).css("background-color", "lightblue");
//       }, 
//       click: function(){
//         $(this).css("background-color", "yellow");
//       }  
//     });
//   });





// fade in and out toggle



$(document).ready(function(){
    $("#btn4").click(function(){
      $("#div1").toggle();
      $("#div2").toggle("slow");
      $("#div3").toggle(3000);
    });
  });



//   slideDown and slideUp,slideTooggle


$(document).ready(function(){
    $("#btn5").click(function(){
      $("#div5").slideToggle("slow");
     
    });
  });




  //slide aninmate


  $(document).ready(function(){
    $("#btn6").click(function(){
      $("#div6").animate({
        left: '250px',
        height: '+=150px',
        width: '+=150px',
        
      });
    });
  });



  $(document).ready(function(){
    $("#btn7").click(function(){
      $("#div7").animate({
        height: '=-150px',
        width: '=-150px',
        
      });
    });
  });