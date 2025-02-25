import chalk from 'chalk';
import { saveLog } from './saveLog';

export = {
    success: function (text: string) {
        console.log(chalk.green.bold(' ┃ SUCCESS' + chalk.dim(` » `) + chalk.white(text)));
    },
    error: function (text: string, error: any) {
        saveLog('error', ` ┃ ERROR » ${text} => ${error}`);
        console.error(
            chalk.bgRedBright.bold(
                ' ┃ ERROR' + chalk.dim(` » `),
                chalk.white(`${text} => ${error}`),
            ),
        );
    },
    warn: function (text: string) {
        saveLog('warn', ` ┃ WARN » ${text}`);
        console.log(chalk.bgYellowBright.bold(' ┃ WARN' + chalk.dim(` » `) + chalk.white(text)));
    },
    info: function (text: string) {
        console.log(chalk.blue.bold(' ┃ INFO' + chalk.dim(` » `) + chalk.white(text)));
    },
    log: function (text: string) {
        console.log(chalk.cyan.bold(' ┃ LOG' + chalk.dim(` » `) + chalk.white(text)));
    },
};
