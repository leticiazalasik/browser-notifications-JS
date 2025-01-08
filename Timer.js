import { Notifyer } from "./Notifyer.js";
import { View } from "./View.js";

const Timer = {
  time: 0, // Tempo total em segundos
  currentTime: 0,
  interval: null,

  timeToMinutes: (time) => Math.floor(time / 60),
  timeToSeconds: (time) => time % 60,

  formatTime: (time) => String(time).padStart(2, "0"),

  init(time = 60) { // Define o tempo padrão como 60 segundos
    Timer.time = time;
    Timer.currentTime = time;

    // Atualiza a visualização inicial
    const minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime));
    const seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime));
    View.render({ minutes, seconds });

    Timer.interval = setInterval(Timer.countdown, 1000);
  },

  countdown() {
    Timer.currentTime -= 1;

    const minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime));
    const seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime));

    // Atualiza a visualização
    View.render({ minutes, seconds });

    if (Timer.currentTime === 0) {
      clearInterval(Timer.interval);

      // Dispara a notificação quando o tempo chega a zero
      Notifyer.notify({
        title: "Tempo finalizado!",
        body: "O seu timer terminou!",
      });
    }
  },
};

export { Timer };
