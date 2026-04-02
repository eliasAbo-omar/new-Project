let firstInput = document.getElementById("first-input");
let scondInput = document.getElementById("scond-input");
let spanText = document.createElement("span");
let spanValue = document.createElement("span");
let form = document.querySelector(".log-in");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const nameValue = firstInput.value.trim().toLowerCase();
  const groupValue = scondInput.value.trim().toLowerCase();

  if (nameValue === "" || groupValue === "") {
    spanText.textContent = "الرجاء تعبئة جميع الخانات";
    spanText.style.color = "red";
    form.appendChild(spanText);
    return;
  } else if (nameValue !== "" && groupValue !== "") {
    spanText.textContent = "";
    localStorage.removeItem("na");
    localStorage.removeItem("gr");
    localStorage.setItem("na", nameValue);
    localStorage.setItem("gr", groupValue);
  }

  // if (nameValue !== "") {
  //   spanValue.textContent = ` “ ${nameValue} ” `;
  //   spanValue.style.color = "blue";
  //   spanValue.style.fontSize = "20px";
  //   form.appendChild(spanValue);
  // }

  // window.location.href = "afterLog.html";
});
