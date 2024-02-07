
function myFunction() {
    alert("hej");
}


document.addEventListener("DOMContentLoaded", function() {
    const jumiBtn = document.getElementById("jumi");
    const evaBtn = document.getElementById('eva-btn');

    
    jumiBtn.addEventListener("click", function() {
        alert("meow");
    });
  
  evaBtn.addEventListener('click', function(){
    alert('Hej på dig');
    })
  
});


