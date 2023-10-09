const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");

const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML =`Meme by:  ${author}`;
}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((date) => {
        updateDetails(date.url, date.title, date.author);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();
