function restartCTF() {
  localStorage.removeItem("ctf-nickname");
  window.location.href = "index.html";
}

window.onload = () => {
  const nick = localStorage.getItem("ctf-nickname") || "Unknown";
  document.getElementById("nickname").innerText = nick;
};
