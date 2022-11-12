// const preloader = document.querySelector(".loader-wrapper");

// document.addEventListener("DOMContentLoaded", () => {
//   let mediaFiles = document.querySelectorAll("img, video");
//   let count = 0;

//   Array.from(mediaFiles).forEach((file, idx) => {
//     file.onload = () => {
//       count++;

//       if (count === mediaFiles.length) {
//         preloader.classList.add("preloader-hide");
//       }
//     };
//   });
// });

const preloader = document.querySelector(".preloader-wrapper");
const loader = document.querySelector(".preloader");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    preloader.classList.add("hiden");
    loader.classList.add("scale");

    setTimeout(() => {
      preloader.style.display = "none";
    }, 2000);
  }, 3700);
});

function openUrl(url, target = "_self") {
  window.open(url, target);
}
