let xp = 0;
let level = 1;

function completeQuest(points) {
  xp += points;
  document.getElementById("xp").innerText = "XP: " + xp;

  if (xp >= level * 50) { // har level ke liye 50 XP
    level++;
    document.getElementById("level").innerText = "Level: " + level;
    alert("🎉 Level Up! You are now Level " + level);
  }
}
