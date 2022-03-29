let label1=document.createElement("label");
label1.setAttribute("for","firstname");
label1.innerHTML="Firstname--"
let firstname=document.createElement("input");
firstname.setAttribute("type", "text");
firstname.setAttribute("id", "firstname");
firstname.setAttribute("placeholder", "Enter your firstname");
var br1=document.createElement("br");

let label2=document.createElement("label");
label2.setAttribute("for","lastname");
label2.innerHTML="Lastname--"
let lastname=document.createElement("input");
lastname.setAttribute("type", "text");
lastname.setAttribute("id", "lastname");
lastname.setAttribute("placeholder", "Enter your lastname");
var br2=document.createElement("br");

let label3=document.createElement("label");
label3.setAttribute("for","email");
label3.innerHTML="Email--"
let email=document.createElement("input");
email.setAttribute("type", "text");
email.setAttribute("id", "email");
email.setAttribute("placeholder", "Enter your email");
var br3=document.createElement("br");

let label4=document.createElement("label");
label4.setAttribute("for","password");
label4.innerHTML="Password--"
let password=document.createElement("input");
password.setAttribute("type", "password");
password.setAttribute("id", "password");
password.setAttribute("placeholder", "Enter your password here");
var br4=document.createElement("br");

let button=document.createElement("button");
button.setAttribute("type","button");
button.className="btn btn-primary";
button.innerHTML="Submit";
button.addEventListener("click",foo);

document.body.append(label1,firstname,br1,label2,lastname,br2,label3,email,br3,label4,password,br4,button,);

function foo() {
let first=document.getElementById("firstname").value;
let last=document.getElementById("lastname").value;
let mail=document.getElementById("email").value;
let pass=document.getElementById("password").value;
   console.log(first);
   console.log(last);
   console.log(mail);
   console.log(pass);
}
