let guestScoreEl = document.getElementById("guest-score");
let homeScoreEl = document.getElementById("home-score");
let guestScore = 0;
let homeScore = 0;

function add1PointHome() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function add2PointsHome() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function add3PointsHome() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

function add1PointGuest() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function add2PointsGuest() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function add3PointsGuest() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

function newGame() {
  guestScore = 0;
  homeScore = 0;
  guestScoreEl.textContent = guestScore;
  homeScoreEl.textContent = homeScore;
}
