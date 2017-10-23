var cronometer = new Cronometer ();


/// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  if(btnLeft.className == "btn start") {
    Cronometer.startClick();
  } else {
    Cronometer.stopClick();
  }
});

// Reset/Split Button

document.getElementById("btnRight").addEventListener("click", function () {

  if(btnRight.className === "btn split") {
    Cronometer.splitTime();
  } else {
    Cronometer.resetTime();
  }
});
