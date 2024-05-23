document.getElementById("timer-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const task = document.getElementById("task").value;
  const time = document.getElementById("time").value;
  const calcTime = new Date();
  calcTime.setHours(time.split(":")[0], time.split(":")[1]);
  const alarmTime = calcTime.getTime();
  const currentTime = Date.now();
  const delayInMinutes = (alarmTime - currentTime) / 60000;
  if (delayInMinutes > 0) {
    chrome.alarms.create(task, { delayInMinutes: delayInMinutes });
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icons/icon48.png",
      title: "Task Reminder",
      message: `Timer set for ${task} at ${new Date(
        calcTime
      ).toLocaleString()}.`,
      priority: 2,
    });
    document.getElementById("task").value = "";
  } else {
    alert("Please choose a future time.");
  }
});
