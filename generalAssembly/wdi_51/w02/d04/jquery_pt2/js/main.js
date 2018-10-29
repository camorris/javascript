//<-------- //IIFE: Immediately invoked Function Expression Waits until the document has loaded before running--------->

$(function(){//starts to create the function
var $bestButton = $ ('#best-button')// creates the variable bestButton with the HTML text of the id best-button
$bestButton.on('click', function(){// starts the event listener function to click on the bestButton
$('body').append('<h1>Another h1<h1>') // create a h1 named 'another h1' when the best button is clicked because of the append method
})

var $bestForm = $('#best-form')//creates the variable bestForm with the HTML text of the id best-form
var $bestInput = $('#best-input')//creates the variable bestInput with the HTML text of the id best-input

    $bestForm.on('submit', function(evt){//the .on 'method' allows us to submit or use 'enter key'; the evt is the name of the function
    evt.preventDefault()//The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
    console.log("Form submitted!" + $bestInput.val())
    console.log($bestInput.val())
})

$('body').on('click', 'h1', function() { // event delegation is used here
    alert("you clicked one of the best h1s")
    $(this).css({fontSize: '20px'})
    $(this).css({background: 'red'})
})
})

