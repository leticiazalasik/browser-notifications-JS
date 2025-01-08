import { Notifyer } from './Notifyer.js';

const Timer = {
    init() {
      setInterval(() => {
        console.log('O timer foi executado!');
        
        // Disparando uma notificação
        Notifyer.notify({
          title: "Lembrete de Post",
          body: "É hora de fazer um novo post!",
        }, 'icon-url-aqui.png');
      }, 9000);  // Intervalo de 3 segundos (3000ms)
    }
}
  
export { Timer };
