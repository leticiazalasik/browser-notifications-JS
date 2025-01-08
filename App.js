// Importa o objeto Notifyer, que lida com notificações.
import { Notifyer } from "./Notifyer.js";
import { Timer } from './Timer.js';

// Define o objeto App que contém a lógica do aplicativo.
const App = {
   // Método 'start' que inicia a aplicação.
   async start() {
        try {
            Timer.init()
            // // Chama a função 'init' do Notifyer para solicitar permissão para notificações.
            // await Notifyer.init(); 
            
            // // Se a permissão for concedida, chama a função 'notify' para exibir a notificação.
            // Notifyer.notify({
            //     title: "Hora do post",  // Título da notificação.
            //     body: "Crie algum conteúdo para ajudar a comunidade" // Corpo da notificação.
            // });
        } catch (err) {
            // Se houver um erro (como permissão negada), exibe a mensagem de erro no console.
            console.log(err.message); 
        }
    }
}

// Exporta o objeto App para ser utilizado em outros arquivos.
export { App };
