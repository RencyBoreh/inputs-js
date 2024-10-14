let username;
let age;
let email;
let school;
let course;
document.getElementById('submit').onclick = function(){
  username=document.getElementById('username').value;
  age=document.getElementById('age').value;
  email=document.getElementById('email').value;
  school=document.getElementById('school').value;
  course=document.getElementById('course').value;
  document.getElementById('results').textContent=`Welcome ${username}.I know You are ${age} years old and Your Email Address is ${email}.You also study at ${school} and you pursue ${course}.`
}