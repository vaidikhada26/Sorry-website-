
const music = document.getElementById("bgMusic");

let musicStarted = false;

function openLetter() {
  const letter = document.getElementById("letter");
  const ribbon = document.querySelector(".ribbon");

  letter.classList.add("open");
  ribbon.classList.add("hide");

  document.getElementById("openBtn").classList.add("hidden");

  // Start music from 1:45
  if (!musicStarted) {
    musicStarted = true;

    music.addEventListener("loadedmetadata", function () {
      music.currentTime = 105;

      music.play().catch(error => {
        console.log("Music playback:", error);
      });
    }, { once: true });

    // If audio is already loaded
    if (music.readyState >= 1) {
      music.currentTime = 105;

      music.play().catch(error => {
        console.log("Music playback:", error);
      });
    } else {
      music.load();
    }
  }

  setTimeout(() => {
    document.getElementById("letterNext")
      .classList.remove("hidden");
  }, 1600);
}

function goTo(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function answer(responseId) {
  goTo(responseId);
}
