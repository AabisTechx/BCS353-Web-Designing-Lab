// Experiment 7: validate E-mail and Phone Number (also keeps Experiment 6 checks)
function validateName(name){
  if(!/^[A-Za-z]+$/.test(name)) return "Name must contain alphabets only.";
  if(name.length < 6) return "Name must be at least 6 characters long.";
  return "";
}
function validatePassword(pw){
  return pw.length < 6 ? "Password must be at least 6 characters long." : "";
}
function validateEmail(email){
  // name@domain.com pattern
  return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/.test(email)
    ? "" : "Enter a valid e-mail like name@domain.com.";
}
function validatePhone(phone){
  return /^[0-9]{10}$/.test(phone) ? "" : "Phone number must contain exactly 10 digits.";
}
document.getElementById("regForm").addEventListener("submit", function(e){
  var errs = {
    nameErr: validateName(document.getElementById("name").value.trim()),
    passErr: validatePassword(document.getElementById("password").value),
    emailErr: validateEmail(document.getElementById("email").value.trim()),
    phoneErr: validatePhone(document.getElementById("phone").value.trim())
  };
  var bad = false;
  for (var id in errs){ document.getElementById(id).textContent = errs[id]; if(errs[id]) bad = true; }
  e.preventDefault();
  if(!bad) alert("Validation successful!");
});
