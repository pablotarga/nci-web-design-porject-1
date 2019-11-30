Countdown = function(el, date) {
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  let $el = $(el);

  // countdown already installed
  let prevCountdown = $el.data("Countdown");
  if (prevCountdown) {
    return prevCountdown;
  }

  let endDate = date;
  let timer;

  let $dayEl = $el.find(".countdown-days");
  let $hourEl = $el.find(".countdown-hours");
  let $minuteEl = $el.find(".countdown-minutes");
  let $secondEl = $el.find(".countdown-seconds");

  getDiff = date => {
    if (typeof date === "string") {
      date = Date.parse(date);
    }

    let remainder = date - new Date();
    let diff = { total: remainder };

    diff.days = Math.floor(remainder / DAY);
    remainder %= DAY;

    diff.hours = Math.floor(remainder / HOUR);
    remainder %= HOUR;

    diff.minutes = Math.floor(remainder / MINUTE);
    remainder %= MINUTE;

    diff.seconds = Math.floor(remainder / SECOND);

    return diff;
  };

  let updateField = ($child, value, zeroPad = true) => {
    let text = zeroPad ? ("00" + value).slice(-2) : value;
    $child.text(text);
  };

  cd = {
    stop: () => {
      clearInterval(timer);
    },
    start: () => {
      cd.tick();
      timer = setInterval(() => {
        cd.tick();
      }, 1000);
      return cd;
    },
    tick: () => {
      diff = getDiff(endDate);
      if (diff.total <= 0) {
        cd.stop();
        diff.days = diff.hours = diff.minutes = diff.seconds = 0;
      }

      updateField($dayEl, diff.days, false);
      updateField($hourEl, diff.hours);
      updateField($minuteEl, diff.minutes);
      updateField($secondEl, diff.seconds);
    },
    changeEndDate: date => {
      endDate = date;
      cd.tick();
    }
  };

  $el.data("Countdown", cd);
  return cd.start();
};
