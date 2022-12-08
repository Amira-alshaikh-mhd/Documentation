const text = document.querySelector('input');
const value = document.getElementById('value');

text.addEventListener('input', updateValue);

function updateValue(a){
    value.textContant=a.target.value;
}