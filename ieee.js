function store(){
  localStorage.setItem('r3',r3.value);
  localStorage.setItem('r6',r6.value);
}
function ey(){
  window.open("index.html");
}


function validate() {
  let username = document.getElementById('usernam').value;
  let password = document.getElementById('passwor').value;
  var newy = localStorage.getItem('r3');
  var newset = localStorage.getItem('r6');

    if(username == newy && password == newset) {
        window.open("welcome.html");
    }
    else {
        alert('Login Failed.');
    }
}
function show(){
  document.getElementById('q').innerHTML = 'Welcome,'+localStorage.getItem('r3');
}
