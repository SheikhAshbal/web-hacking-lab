function startCTF() {
  const nick = document.getElementById("nickname").value.trim();
  if (!nick) {
    alert("Alias required to initiate mission.");
    return;
  }

  localStorage.setItem("ctf-nickname", nick);
  const badge = document.getElementById("badge");
  badge.style.display = "block";
  badge.textContent = `🛡️ Operative ID: ${nick} | Access Level: GRANTED`;

  const output = document.getElementById("output");
  output.innerHTML += `<p>> Operative ${nick} recognized. Loading mission files...</p>`;

  setTimeout(() => {
    window.location.href = "level1.html";
  }, 3000);
}
