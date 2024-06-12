const telegramButton = document.getElementsByClassName("telegram-button")[0];
const mailButton = document.getElementsByClassName("mail-button")[0];
const githubButton = document.getElementsByClassName("github-button")[0];
let buttonInfo = document.getElementsByClassName("button-info")[0];
let mainContainer = document.getElementsByClassName("main-container")[0];

telegramButton.addEventListener("mouseover", (e) => {
  mainContainer.className = "main-container telegram-button-hover";
  buttonInfo.textContent = "Telegram";
  buttonInfo.style.visibility = "visible";
});
telegramButton.addEventListener("mouseout", (e) => {
  mainContainer.className = "main-container";
  buttonInfo.style.visibility = "hidden";
});
mailButton.addEventListener("mouseover", (e) => {
  mainContainer.className = "main-container mail-button-hover";
  buttonInfo.textContent = "Mail";
  buttonInfo.style.visibility = "visible";
});
mailButton.addEventListener("mouseout", (e) => {
  mainContainer.className = "main-container";
  buttonInfo.style.visibility = "hidden";
});
githubButton.addEventListener("mouseover", (e) => {
  mainContainer.className = "main-container github-button-hover";
  buttonInfo.textContent = "Github";
  buttonInfo.style.visibility = "visible";
});
githubButton.addEventListener("mouseout", (e) => {
  mainContainer.className = "main-container";
  buttonInfo.style.visibility = "hidden";
});
