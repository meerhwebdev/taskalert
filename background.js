chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icons/icon48.png",
    title: "Task Reminder",
    message: `It's time for: ${alarm.name}`,
    priority: 2,
  });
});
