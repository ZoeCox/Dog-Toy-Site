const nameInput = document.querySelector(".name-input");
const nameSubmit = document.querySelector(".name-submit");
const nameDisplay = document.querySelector(".name-display");

const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));

const userDetails = {
  name: "",
  ...storedUserDetails,
};

nameSubmit.addEventListener("click", () => {
  userDetails.name = nameInput.value;
  console.log(userDetails.name, typeof userDetails.name);
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
});

nameDisplay.innerHTML = `User Name: ${userDetails.name}`;
