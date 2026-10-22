// Experiment 6: validate Name and Password
function validateName(name){
  if(!/^[A-Za-z]+$/.test(name)) return "Name must contain alphabets only.";
  if(name.length < 6) return "Name must be at least 6 characters long.";
  return "";
}
function validatePassword(pw){
  if(pw.length < 6) return "Password must be at least 6 characters long.";
  return "";
}
document.getElementById("regForm").addEventListener("submit", function(e){
  var n = validateName(document.getElementById("name").value.trim());
  var p = validatePassword(document.getElementById("password").value);
  document.getElementById("nameErr").textContent = n;
  document.getElementById("passErr").textContent = p;
  if(n || p){ e.preventDefault(); } else { alert("Validation successful!"); e.preventDefault(); }
});
