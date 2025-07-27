const nick = localStorage.getItem("ctf-nickname") || "Unknown";
document.getElementById("nickname").textContent = nick;

function checkFlag() {
  const input = document.getElementById("flagInput").value.trim();
  const feedback = document.getElementById("feedback");

  if (input === "CTF{source_code_detection}") {
    feedback.style.display = "block";
    feedback.textContent = `✅ Well done, ${nick}! You found the correct flag. Proceeding to Level 2...`;
    feedback.style.color = "#00ffcc";
    setTimeout(() => {
      window.location.href = "level2.html";
    }, 3000);
  } else {
    feedback.style.display = "block";
    feedback.textContent = "❌ Incorrect flag. Check the page source and try again.";
    feedback.style.color = "#ff5555";
  }
}
