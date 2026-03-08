import { app, BrowserWindow } from "electron";

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 820,
    webPreferences: { nodeIntegration: false, contextIsolation: true }
  });

  win.loadURL(process.env.DESKTOP_WEB_URL || "http://localhost:3000");
}

app.whenReady().then(createWindow);
app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit(); });
