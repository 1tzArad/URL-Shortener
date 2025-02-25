const path = require('path');
const fs = require('fs');

export function saveLog(level: 'error' | 'warn', message: string) {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const formattedTime = `${hour}-${minutes}`;

    let logsDir;
    if (level === 'error') {
        logsDir = path.join(__dirname, '..', 'logs', 'Error');
    } else if (level === 'warn') {
        logsDir = path.join(__dirname, '..', 'logs', 'Warning');
    }

    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
    }

    const logFilePath = path.join(logsDir, `${level}-logs-${formattedTime}.txt`);
    const logMessage = `[${now.toISOString()}] ${message}\n`;
    fs.appendFileSync(logFilePath, logMessage, 'utf8');
}
