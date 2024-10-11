const apiGameofThrones = "https://thronesapi.com/api/v2/Characters";
const characterList = document.getElementById("character-list");
const characterImage = document.getElementById("character-image");

fetch(apiGameofThrones)
  .then((response) => response.json())
  .then((characters) => {
    characters.forEach((character) => {
      const option = document.createElement("option");
      option.value = character.imageUrl;
      option.textContent = character.fullName;
      characterList.appendChild(option);
    });
  })
  .catch((error) => console.error("Error", error));

characterList.addEventListener("change", function () {
  const selectedImageUrl = this.value;

  if (selectedImageUrl) {
    characterImage.src = selectedImageUrl;
    characterImage.style.display = "block";
  } else {
    characterImage.style.display = "none";
  }
});
