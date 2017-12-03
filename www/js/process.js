let searchbar = <div>
<div data-page="searchbar" className="page toolbar-fixed">
<body>
  <div className="navbar">
    <div className="navbar-inner">
      <div className="left"><a href="index.html" className="back link icon-only"><i className="icon icon-back"></i></a></div>
      <div className="center"></div>
      <div className="right"><a href="#" className="link open-panel icon-only"><i className="icon icon-bars"></i></a></div>
    </div>
  </div>

  <h1 id="message">Loading</h1>
  <h2>Countdown Clock</h2>
<div id="clockdiv">
  <div>
    <span className="days"></span>
    <div className="smalltext">Days</div>
  </div>
  <div>
    <span className="hours"></span>
    <div className="smalltext">Hours</div>
  </div>
  <div>
    <span className="minutes"></span>
    <div className="smalltext">Minutes</div>
  </div>
  <div>
    <span className="seconds"></span>
    <div className="smalltext">Seconds</div>
  </div>
</div>
  <form data-search-list=".search-here" data-search-in=".item-title" className="searchbar searchbar-init">
    <div className="searchbar-input">
      <center><input id='dates' type='date' placeholder="Enter a new date"/><a href="dates" className="searchbar-clear"></a></center>
      <center><button> 
        Submit
        </button></center>
    </div>
  </form>
</body>
</div>
</div>


ReactDOM.render(searchbar,document.getElementById('root'));

function updateMessage () {
var message = document.getElementById('message');
message.innerHTML = "" + Date();
}

var timer = setInterval(updateMessage, 500);

ReactDOM.render(searchbar,document.getElementById('root'));

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 24 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);

ReactDOM.render(searchbar,document.getElementById('root'));
