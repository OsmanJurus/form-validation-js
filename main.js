// target all id's and classes in simplest way!

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  submitBtn = id("submit"),
  errorMsg = classes("error"),
  failIcon = classes("fail-icon"),
  successIcon = classes("success-icon");

//   adding eventListener to the form element!

form.addEventListener("submit", (e) => {
  e.preventDefault();
  /*
  if (username.value === "") {
    errorMsg[0].innerHTML = "Username can't  be blank";
    failIcon[0].style.opacity = "1";
    successIcon[0].style.opacity = "0";
  } else {
    errorMsg[0].innerHTML = "";
    failIcon[0].style.opacity = "0";
    successIcon[0].style.opacity = "1";
  }
  
  if (email.value === "") {
    errorMsg[1].innerHTML = "Emain can't  be blank";
    failIcon[1].style.opacity = "1";
    successIcon[1].style.opacity = "0";
  } else {
    errorMsg[1].innerHTML = "";
    failIcon[1].style.opacity = "0";
    successIcon[1].style.opacity = "1";
  }
  if (password.value === "") {
    errorMsg[2].innerHTML = "Paswrod can't  be blank";
    failIcon[2].style.opacity = "1";
    successIcon[2].style.opacity = "0";
  } else {
    errorMsg[2].innerHTML = "";
    failIcon[2].style.opacity = "0";
    successIcon[2].style.opacity = "1";
  }
*/
  engine(username, 0, "Username can't be blank!");
  engine(email, 1, "Email can't be blank!");
  engine(password, 2, "Password msut not be blank!");
});

let engine = (id, index, message) => {
  if (id.value.trim() === "") {
    errorMsg[index].innerHTML = message;
    failIcon[index].style.opacity = "1";
    successIcon[index].style.opacity = "0";
  } else {
    errorMsg[index].innerHTML = "";
    failIcon[index].style.opacity = "0";
    successIcon[index].style.opacity = "1";
  }
};
