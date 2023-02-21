import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: true,
  url: "http://localhost:8080",
  logLevel: NgxLoggerLevel.OFF,
  serverLogLevel: NgxLoggerLevel.ERROR
};
