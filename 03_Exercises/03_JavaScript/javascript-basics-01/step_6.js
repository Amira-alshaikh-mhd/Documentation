document.getElementById("validate").onclick = function(){
var first = document.getElementById('first_number').value;
var second = document.getElementById('second_number').value;
var remainder =(first%second);
alert ( 'The remainder=' + ' ' + remainder)
}