const nameInput = document.querySelector(".name-input");
const nameSubmit = document.querySelector(".name-submit");
const nameDisplay = document.querySelector(".name-display");
const welcomeName = document.querySelector(".profile-welcome");

const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));

const userDetails = {
  name: "",
  ...storedUserDetails,
};

nameSubmit.addEventListener("click", () => {
  userDetails.name = nameInput.value;
  console.log(userDetails.name, typeof userDetails.name);
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
  location.reload();
});

nameDisplay.innerHTML = `User Name: ${userDetails.name}`;
welcomeName.innerHTML = `Welcome back, ${userDetails.name}!`;
