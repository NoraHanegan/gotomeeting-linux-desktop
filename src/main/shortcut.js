/* Handle global keyboard shortcuts */
const {
  globalShortcut,
  app
} = require("electron");

app.on("ready", () => {
  globalShortcut.register("CommandOrControl+Alt+A", () => {
    global.goToMeetingView.webContents.send("toggle.audio", {});
  });
  globalShortcut.register("CommandOrControl+Alt+V", () => {
    global.goToMeetingView.webContents.send("toggle.video", {});
  });
});