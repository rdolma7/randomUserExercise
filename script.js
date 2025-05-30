async function getRandomUser() {
  let user = await fetch("https://randomuser.me/api/");
  // console.log(user)
  let img = document.getElementById("user-image");
  let name = document.getElementById("user-name");
  let email = document.getElementById("user-email");

  let userData = await user.json();
  img.src = userData.results[0].picture.medium;
  let fullName= `${userData.results[0].name.first} ${userData.results[0].name.last} `
  name.textContent = fullName;
  email.textContent = userData.results[0].email;
}
getRandomUser();
let buttonEl = document.getElementById("new-user-btn");
buttonEl.addEventListener("click", async (event) => {
  getRandomUser();
});
