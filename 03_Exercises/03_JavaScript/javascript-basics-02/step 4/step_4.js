function test1(){
    var val = confirm("Are you sure you want to clear the form");
     
    if(val == true) {
         document.getElementById("name").value = null;
         document.getElementById("surname").value = '';
         document.getElementById("city").value = '';
    }
    else {
        alert("no ");
        return 0;
    }
    }
