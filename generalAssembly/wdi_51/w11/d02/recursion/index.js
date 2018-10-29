//For factorial 

function fact(n){
if (n==1)
return 1
else return n*fact(n-1)}
//for exponents
function powerful(power,exp){
if(exp==0)
return 1
else 
return power * powerful(power,exp-1)
}

powerful(5,2)
25
//for showing the first letter of the array
function first(array){
  return array[0]
}

function last(array){
  return array[array.length-1]
}

function butFirst(array){
  return array.slice(1)
}

function butLast(array){ 
  return array.slice(0, array.length-1)
}

// reverse

function reverseString(str){
  if(str.length == 0)
    return ""
    else return last(str) + reverseString(butLast(str))
}

function mult(a,b){
  if (a == 0)
  return ""
  else
  return a + mult(a, b-1)
}