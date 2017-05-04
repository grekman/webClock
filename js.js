

document.getElementById('clock-table').onclick = fmClock;
var tt;
var timeSeconds = 0;
var timeMinutes = 6;


  function fmClock(){
    if (timeSeconds != 360) {
      document.getElementById('second').style.transform = 'rotate('+ timeSeconds + 'deg' + ')';
      timeSeconds = timeSeconds + 6;

    } else {
    timeMinutes = timeMinutes + 6;
    document.getElementById('minut').style.transform = 'rotate('+ timeMinutes + 'deg' + ')';
    timeSeconds = 0;

  }
  tt = setTimeout(fmClock, 40);
}
