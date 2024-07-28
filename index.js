document.addEventListener("DOMContentLoaded", (event) => {
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    body.classList.add("dark-mode");
  }

  // Dark Mode Remember

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });

  // Countdown Timer
  const countdownElement = document.getElementById("countdown");
  const eventDate = new Date("2025-12-31T00:00:00").getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = `${days}d`;
    document.getElementById("hours").innerHTML = `${hours}h`;
    document.getElementById("minutes").innerHTML = `${minutes}m`;
    document.getElementById("seconds").innerHTML = `${seconds}s`;

    if (distance < 0) {
      countdownElement.innerHTML = "Event has started!";
    }
  };

  setInterval(updateCountdown, 1000);
});

// Music
document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('background-music');
  const toggleButton = document.getElementById('play-pause-toggle');
  const playIcon = "<i class='bx bx-play'></i>";
  const pauseIcon = "<i class='bx bx-pause'></i>";

  audio.play();

  toggleButton.innerHTML = pauseIcon;

  toggleButton.addEventListener('click', () => {
      if (audio.paused) {
          audio.play();
          toggleButton.innerHTML = pauseIcon;
      } else {
          audio.pause();
          toggleButton.innerHTML = playIcon;
      }
  });
});

// Copy Text
function copy() {
  var copyText = document.getElementById("copyUID");
  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the UID: " + copyText.value);
}