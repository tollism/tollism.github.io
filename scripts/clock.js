(function () {
  const clockElement = document.getElementById("clock");
  const dateElement = document.getElementById("date");
  function updateTimeAndDate(clock, date) {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false});

    const parts = formatter.formatToParts(now);
    const timeParts = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
    const hours = timeParts.hour;
    const minutes = timeParts.minute;
    const seconds = timeParts.second;
    const dayFormatter = new Intl.DateTimeFormat('en-US', {
      weekday: 'short'});
    const day = dayFormatter.format(now).toUpperCase();

    clock.innerHTML = `${hours}:${minutes}:${seconds} ${day}`;

    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'});

    const dateParts = dateFormatter.formatToParts(now);
    const dateObj = Object.fromEntries(dateParts.map(({ type, value }) => [type, value]));

    const formattedDate = `${dateObj.month}-${dateObj.day}-${dateObj.year}`;
    date.innerHTML = formattedDate;}

  setInterval(() => {
    updateTimeAndDate(clockElement, dateElement);
  }, 1000);})();
