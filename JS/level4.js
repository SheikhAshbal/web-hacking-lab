function revealFlag() {
  const flagBox = document.getElementById("flag-csp");
  flagBox.style.display = "block";
}

function submitFlag() {
  const userFlag = document.getElementById("flagInput").value.trim();
  const result = document.getElementById("submissionResult");

  if (userFlag === "CTF{devtools_reveals_truth}") {
    result.textContent = "✅ Correct! Redirecting to Level 5...";
    result.style.color = "green";

    setTimeout(() => {
      window.location.href = "level5.html";
    }, 3000);
  } else {
    result.textContent = "❌ Incorrect flag. Try again.";
    result.style.color = "red";
  }
}
