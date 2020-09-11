let uploadButton = document.querySelector(".upload-button");
let progressBar = document.querySelector(".upload-button .progress-bar");
let width = uploadButton.getBoundingClientRect().width;

let uploadTime = 5000;

uploadButton.addEventListener("click", () => {
  uploadButton.classList.remove("uploaded");
  uploadButton.classList.add("uploading");

  setTimeout(() => {
    uploadButton.classList.replace("uploading", "uploaded");
    console.log(new Date());
  }, uploadTime);

  let start = null;
  function grow(timestamp) {
    let progress = timestamp - start;
    progressBar.style.width = `${Math.min(width * (progress / uploadTime), width)}px`;
    if (progress < uploadTime) {
      window.requestAnimationFrame(grow);
    }
  }

  window.requestAnimationFrame(grow);
});
