import { Notifyer } from "./Notifyer.js";
import { Timer } from "./Timer.js";

const App = {
  async start() {
    try {
      // Solicita permissão para notificações
      await Notifyer.init();

      // Configura o Timer para 10 segundos (ou outro valor que desejar)
      Timer.init(10); 
    } catch (err) {
      console.log(err.message);
    }
  },
};

export { App };
