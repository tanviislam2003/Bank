// step-1:add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // step-2: get the email address inside the email input field
  // always remember to use.value to get text from an input field

  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  console.log(email);
  // step-3: get password
  // 3.a:set id on thr html element
  // 3.b:get the element
  // 3.c:get the value for the element
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  console.log(email, password);
  // DENGER: Do Not VERIFY email password on the clicnt site
  //  step-4: verify email and password
  if (email === "sontan@Bap.com" && password === "secret") {
    console.log("valid-user");
    window.location.href = "bank.html";
  } else {
    alert("Incurrect Password");
  }
});
