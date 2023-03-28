var erros = [{ inicio: 'Iniciado' }];
var dadosParaOMenu = [];
var dadosParaOutro = [];

(() => {
  'use strict'

  try {

    window.addEventListener('log', (e) => {
      erros.push({
        addEventLog: {
          messageE: e.message,
        }
      });
    });

    window.addEventListener('warn', (e) => {
      erros.push({
        addEventWarn: {
          messageE: e.message,
        }
      });
    });

    window.addEventListener('info', (e) => {
      erros.push({
        addEventInfo: {
          messageE: e.message,
        }
      });
    });

  } catch (ex) {
    erros.push({
      message: ex.message,
      stack: ex.stack
    });
  }

  try {
    window.addEventListener('error', (e) => {
      erros.push({
        addEventErr: {
          messageE: e.message,
          message: e.error.message,
          stack: e.error.stack,
          filename: e.filename,
          colno: e.colno,
          lineno: e.lineno,
          type: e.type
        }
      });
    });
  } catch (ee) {
    erros.push('Não vai dá!!!');
  }

})()
