function sanitize(input) {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/script/gi, "")
    .replace(/onerror/gi, "")
    .replace(/javascript:/gi, "");
}

function submitAdvanced() {
  const input = document.getElementById("advancedInput").value;
  const output = document.getElementById("advancedOutput");
  const sanitized = sanitize(input);
  output.innerHTML = sanitized;

  setTimeout(() => {
    if (input.includes("img") || input.includes("svg") || input.includes("on")) {
      document.getElementById("flag-advanced").style.display = "block";
    }
  }, 500);
}

const validFlags = ["CTF{filter_bypass_success}"];
let submitted = [];

function submitFlag() {
  const input = document.getElementById("flagInput").value.trim();
  const resultBox = document.getElementById("submissionResult");

  if (validFlags.includes(input) && !submitted.includes(input)) {
    submitted.push(input);
    resultBox.innerHTML += `<p>✅ Flag accepted: <strong>${input}</strong></p>`;
    resultBox.innerHTML += `<div class="badge">🎉 Well done! Redirecting to <strong>Victory</strong> page...</div>`;
    setTimeout(() => {
      window.location.href = "victory.html"; // ✅ Updated redirection
    }, 2000);
  } else if (submitted.includes(input)) {
    resultBox.innerHTML += `<p>⚠️ Flag already submitted: <strong>${input}</strong></p>`;
  } else {
    resultBox.innerHTML += `<p>❌ Invalid flag: <strong>${input}</strong></p>`;
  }
}

// Optional: Trigger flag for debug/demo
window.flag = function () {
  document.getElementById("flag-advanced").style.display = "block";
};
