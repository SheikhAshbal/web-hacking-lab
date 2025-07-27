const nick = localStorage.getItem("ctf-nickname") || "Unknown";
document.getElementById("nickname").textContent = nick;

function checkFlag() {
  const userFlag = document.getElementById("flagInput").value.trim();
  const feedback = document.getElementById("feedback");
  const correctFlag = "CTF{reverse_engineer_code}";

  if (userFlag === correctFlag) {
    feedback.style.display = "block";
    feedback.textContent = `🎉 Brilliant, ${nick}! You're cleared for Level 3...`;
    feedback.style.color = "#00ffcc";
    setTimeout(() => {
      window.location.href = "level3.html";
    }, 3000);
  } else {
    feedback.style.display = "block";
    feedback.textContent = "⛔ Incorrect flag. Decode the base64 string properly.";
    feedback.style.color = "#ff4444";
  }
}
