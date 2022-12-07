var shoe = prompt('Enter your shoe size');
var birth = prompt('Enter your birth year');
function mutible(){
 var first = shoe*2;
 var second = first+5;
 var third = second*50;
 var fourth = third-birth;
 var fifth = fourth+1766;

 
 return fifth;
}

alert(mutible());
