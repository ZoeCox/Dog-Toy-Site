const nameInput = document.querySelector(".name-input");
const nameSubmit = document.querySelector(".name-submit");

const userDetails = {
  name: "",
  //   ...storedUserDetails,
};

// const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));

nameSubmit.addEventListener("click", () => {
  userDetails.name = nameInput.innerHTML;
  console.log(userDetails.name, typeof userDetails.name);
  //   localStorage.setItem("userDetails", JSON.stringify(userDetails));
});
