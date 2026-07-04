function checkPassword(){

let password=document.getElementById("password").value;

let score=0;

if(password.length>=8){
score++;
document.getElementById("length").innerHTML="✅ Minimum 8 Characters";
}else{
document.getElementById("length").innerHTML="❌ Minimum 8 Characters";
}

if(/[A-Z]/.test(password)){
score++;
document.getElementById("upper").innerHTML="✅ Uppercase Letter";
}else{
document.getElementById("upper").innerHTML="❌ Uppercase Letter";
}

if(/[a-z]/.test(password)){
score++;
document.getElementById("lower").innerHTML="✅ Lowercase Letter";
}else{
document.getElementById("lower").innerHTML="❌ Lowercase Letter";
}

if(/[0-9]/.test(password)){
score++;
document.getElementById("number").innerHTML="✅ Number";
}else{
document.getElementById("number").innerHTML="❌ Number";
}

if(/[!@#$%^&*]/.test(password)){
score++;
document.getElementById("special").innerHTML="✅ Special Character";
}else{
document.getElementById("special").innerHTML="❌ Special Character";
}
let bar=document.getElementById("bar");

if(score==1) bar.style.width="20%";
if(score==2) bar.style.width="40%";
if(score==3) bar.style.width="60%";
if(score==4) bar.style.width="80%";
if(score==5) bar.style.width="100%";

if(score<=2){
    bar.style.background="red";
}else if(score<=4){
    bar.style.background="orange";
}else{
    bar.style.background="green";
}
if(score<=2){
document.getElementById("result").innerHTML="🔴 Weak Password";
}
else if(score<=4){
document.getElementById("result").innerHTML="🟡 Medium Password";
}
else{
document.getElementById("result").innerHTML="🟢 Strong Password";
}

}