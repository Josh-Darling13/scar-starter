const emailText = document.getElementById("emailText").value;
const emailSubmit = document.getElementById("emailSubmit");
const formID = document.getElementById("formID");


formID.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event);

  // console.log("I am here now");
  console.log("email" + emailText);
  const email = emailText;
  sendEmail(email);
});
