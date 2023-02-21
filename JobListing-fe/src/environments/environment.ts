import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: false,

  url: "http://localhost:8080",

  logLevel: NgxLoggerLevel.TRACE,
  serverLogLevel: NgxLoggerLevel.OFF
};
