// LOGIN
function login(){
  localStorage.setItem("user","true");
  window.location.href="dashboard.html";
}

// AUTH CHECK
function checkAuth(){
  if(!localStorage.getItem("user")){
    window.location.href="login.html";
  }
}

// LOGOUT
function logout(){
  localStorage.removeItem("user");
  window.location.href="login.html";
}

// WEATHER API
async function getWeather(){
  try{
    let res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=13.08&longitude=80.27&current_weather=true");
    let data = await res.json();
    document.getElementById("weather").innerText =
      "Temperature: " + data.current_weather.temperature + "°C";
  }catch{
    document.getElementById("weather").innerText="Weather unavailable";
  }
}

// AI RISK
function calculateRisk(){
  let risk = Math.random();
  document.getElementById("risk").innerText = risk.toFixed(2);
}

// PAYOUT
function simulate(){
  let payout = Math.floor(Math.random()*500 + 200);

  let history = JSON.parse(localStorage.getItem("payouts")) || [];
  history.push(payout);
  localStorage.setItem("payouts", JSON.stringify(history));

  alert("₹"+payout+" credited via UPI");
  calculateRisk();
}

// LOAD HISTORY
function loadHistory(){
  let history = JSON.parse(localStorage.getItem("payouts")) || [];
  let div = document.getElementById("history");
  div.innerHTML="";

  history.forEach(p=>{
    div.innerHTML += "<div class='card'>₹"+p+"</div>";
  });
}

// THEME
function toggleTheme(){
  document.body.classList.toggle("light");
}