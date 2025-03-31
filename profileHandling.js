const nameInput = document.querySelector(".name-input");
const nameSubmit = document.querySelector(".name-submit");
const nameDisplay = document.querySelector(".name-display");
const welcomeName = document.querySelector(".profile-welcome");
const maleLightIcon = document.querySelector("#male-light-icon");
const maleDarkIcon = document.querySelector("#male-dark-icon");
const femaleLightIcon = document.querySelector("#female-light-icon");
const femaleDarkIcon = document.querySelector("#female-dark-icon");
const profileIconText = document.querySelector(".profile-icon-text");
const removeProfileBtn = document.querySelector(".remove-icon-button");

const profileIcons = [
  maleLightIcon,
  maleDarkIcon,
  femaleLightIcon,
  femaleDarkIcon,
];

const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));

const userDetails = {
  name: "",
  profileIcon: "",
  ...storedUserDetails,
};

const iconChecker = () => {
  if (userDetails.profileIcon === "male light") {
    maleDarkIcon.classList.add("hidden");
    femaleLightIcon.classList.add("hidden");
    femaleDarkIcon.classList.add("hidden");
  }
  if (userDetails.profileIcon === "male dark") {
    maleLightIcon.classList.add("hidden");
    femaleLightIcon.classList.add("hidden");
    femaleDarkIcon.classList.add("hidden");
  }
  if (userDetails.profileIcon === "female light") {
    maleLightIcon.classList.add("hidden");
    maleDarkIcon.classList.add("hidden");
    femaleDarkIcon.classList.add("hidden");
  }
  if (userDetails.profileIcon === "female dark") {
    maleLightIcon.classList.add("hidden");
    maleDarkIcon.classList.add("hidden");
    femaleLightIcon.classList.add("hidden");
  }
  profileIconText.classList.add("hidden");
  removeProfileBtn.classList.remove("hidden");
};
iconChecker();

nameSubmit.addEventListener("click", () => {
  userDetails.name = nameInput.value;
  console.log(userDetails.name, typeof userDetails.name);
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
  location.reload();
});

nameDisplay.innerHTML = `User Name: ${userDetails.name}`;
welcomeName.innerHTML = `Welcome back, ${userDetails.name}!`;

for (let i = 0; i < profileIcons.length; i++) {
  profileIcons[i].addEventListener("click", () => {
    if (profileIcons[i] === maleLightIcon) {
      maleDarkIcon.classList.add("hidden");
      femaleLightIcon.classList.add("hidden");
      femaleDarkIcon.classList.add("hidden");
      userDetails.profileIcon = "male light";
    }
    if (profileIcons[i] === maleDarkIcon) {
      maleLightIcon.classList.add("hidden");
      femaleLightIcon.classList.add("hidden");
      femaleDarkIcon.classList.add("hidden");
      userDetails.profileIcon = "male dark";
    }
    if (profileIcons[i] === femaleLightIcon) {
      maleLightIcon.classList.add("hidden");
      maleDarkIcon.classList.add("hidden");
      femaleDarkIcon.classList.add("hidden");
      userDetails.profileIcon = "female light";
    }
    if (profileIcons[i] === femaleDarkIcon) {
      maleLightIcon.classList.add("hidden");
      maleDarkIcon.classList.add("hidden");
      femaleLightIcon.classList.add("hidden");
      userDetails.profileIcon = "female dark";
    }
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    profileIconText.classList.add("hidden");
    removeProfileBtn.classList.remove("hidden");
  });
}

removeProfileBtn.addEventListener("click", () => {
  for (let i = 0; i < profileIcons.length; i++) {
    profileIcons[i].classList.remove("hidden");
  }
  localStorage.removeItem("userDetails");
  removeProfileBtn.classList.add("hidden");
  profileIconText.classList.remove("hidden");
});
// localStorage.removeItem("storedUserDetails");

console.log(storedUserDetails);
