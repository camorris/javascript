// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge. 
// Don't forget the space after the closing parenthesis!

function createPhoneNumber(digits) {
	var formattedResult = ''

	for(var i = 0; i < digits.length; i += 1) {
		if(i == 0) formattedResult += '('
		else if(i == 3) formattedResult += ') '
		else if(i == 6) formattedResult += '-'
        formattedResult += digits[i]
        // ----------OR---------

		// with a switch statement:
		switch(i) {
			case 0:
				formattedResult += '('
				break
			case 3:
				formattedResult += ') '
				break
			case 6:
				formattedResult += '-'
				break
		}
		formattedResult += digits[i]

	}

	return formattedResult
}

console.log(createPhoneNumber([3, 2, 3, 5, 5, 5, 1, 1, 9, 5]))
// ------------------ Maybe this
function phonenumber(inputtxt)  
{  
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
  if((inputtxt.value.match(phoneno))  
        {  
      return true;  
        }  
      else  
        {  
        alert("message");  
        return false;  
        }  
}  



