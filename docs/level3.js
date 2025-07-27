// -------------------- Reflected XSS --------------------
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const reflectedInput = urlParams.get("reflect");

  if (reflectedInput) {
    const output = document.getElementById("reflectedOutput");
    output.innerHTML = reflectedInput;

    // Trigger flag if typical payload is detected
    setTimeout(() => {
      if (
        reflectedInput.includes("<script") ||
        reflectedInput.includes("onerror") ||
        reflectedInput.includes("alert")
      ) {
        document.getElementById("flag-reflected").style.display = "block";
      }
    }, 500);
  }
});

// -------------------- DOM-Based XSS --------------------
function runDomXss() {
  const input = document.getElementById("domInput").value;
  const output = document.getElementById("domOutput");
  output.innerHTML = input;

  setTimeout(() => {
    if (
      input.includes("<script") ||
      input.includes("onerror") ||
      input.includes("alert")
    ) {
      document.getElementById("flag-dom").style.display = "block";
    }
  }, 500);
}

// -------------------- Stored XSS --------------------
let storedComments = [];

function storeComment() {
  const input = document.getElementById("storedInput").value;
  storedComments.push(input);
  displayStoredComments();

  setTimeout(() => {
    if (
      input.includes("<script") ||
      input.includes("onerror") ||
      input.includes("alert")
    ) {
      document.getElementById("flag-stored").style.display = "block";
    }
  }, 500);
}

function displayStoredComments() {
  const output = document.getElementById("storedOutput");
  output.innerHTML = storedComments.join("<br>");
}

// -------------------- Flag Submission --------------------
const validFlags = new Set([
  "CTF{reflected_master}",
  "CTF{dom_xss_achieved}",
  "CTF{stored_owned}"
]);

const submitted = new Set();
let redirected = false;

function submitFlag() {
  const input = document.getElementById("flagInput").value.trim();
  const resultBox = document.getElementById("submissionResult");

  if (validFlags.has(input) && !submitted.has(input)) {
    submitted.add(input);
    resultBox.innerHTML += `<p>✅ Flag accepted: <strong>${input}</strong></p>`;
  } else if (submitted.has(input)) {
    resultBox.innerHTML += `<p>⚠️ Flag already submitted: <strong>${input}</strong></p>`;
  } else {
    resultBox.innerHTML += `<p>❌ Invalid flag: <strong>${input}</strong></p>`;
  }

  // Check if all flags are submitted
  if (submitted.size === validFlags.size && !redirected) {
    redirected = true;
    resultBox.innerHTML += `<div class="badge">🎯 All flags captured! Redirecting to Level 4...</div>`;
    setTimeout(() => {
      window.location.href = "level4.html";
    }, 2000);
  }
}

// -------------------- Optional: Global function for triggering flags --------------------
window.flag = function(type) {
  const idMap = {
    reflected: "flag-reflected",
    dom: "flag-dom",
    stored: "flag-stored"
  };

  const flagId = idMap[type];
  if (flagId) {
    document.getElementById(flagId).style.display = "block";
  }
};
