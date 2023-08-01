const element = document.querySelector(".h2");

root = "http://localhost:3000/record";

const url = window.location.href;
const textarea = document.createElement("textarea");
const code = textarea.value;

const my_button = document.createElement("a");
my_button.textContent = "AtPro";
my_button.href = root + "?url=" + url + "&code=" + code;
my_button.classList.add("btn", "btn-default", "btn-sm");
element.insertAdjacentElement("beforeend", my_button);
