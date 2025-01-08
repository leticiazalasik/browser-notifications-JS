import { Notifyer } from "./Notifyer.js";
import { Timer } from './Timer.js';

const App = {
  
   async start() {
        try {
            // Solicitar permissão para notificações
            await Notifyer.init();

            // Iniciar o timer para disparar notificações
            Timer.init();
          
        } catch (err) {
            console.log(err.message); 
        }
    }
}

export { App };
