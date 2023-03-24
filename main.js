const emailText = document.getElementById('emailText');
const emailSubmit = document.getElementById('emailSubmit');

console.log("I am here now");


emailSubmit.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log("I am here now");
    console.log(emailText);

});

