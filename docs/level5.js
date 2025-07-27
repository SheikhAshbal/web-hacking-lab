(function(){
  const hiddenVar = atob("Q1RGe2xvZ2ljX2RlY29kZWRfdmljdG9yeX0="); // CTF{logic_decoded_victory}
  console.log("%c🔐 Riddle: Solve me to unlock the flag.", "color: cyan; font-size: 16px;");
  console.log("%c🧩 I am hidden in plain sight, encoded but not encrypted. Use your head.", "color: lightgreen;");

  window.revealRiddleFlag = function(){
    document.getElementById("flag-obfuscated").style.display = "block";
  }

  const logic = [10, 20, 30].map(x => x * 2).filter(x => x > 40)[0]; // 60
  if (logic === 60) {
    console.log("%c✨ You found the key: Try revealRiddleFlag()", "color: gold;");
  }
})();

function submitFlag() {
  const userFlag = document.getElementById("flagInput").value.trim();
  const result = document.getElementById("submissionResult");

  if (userFlag === "CTF{logic_decoded_victory}") {
    result.textContent = "✅ Correct! You beat Level 5.";
    result.style.color = "green";
    setTimeout(() => {
      window.location.href = "level6.html";
    }, 3000);
  } else {
    result.textContent = "❌ Incorrect flag. Try again.";
    result.style.color = "red";
  }
}
