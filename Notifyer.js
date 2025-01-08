// Cria um objeto 'Notifyer' que lida com notificações no navegador
const Notifyer = {
  
    // Função assíncrona para pedir permissão para mostrar notificações
    async init() {
        // Solicita a permissão para mostrar notificações
        const permission = await Notification.requestPermission();
        
        // Verifica se a permissão foi concedida
        if( permission !== "granted") {
            // Se a permissão não for concedida, lança um erro
            throw new Error('Permissão negada');
        }
    },

    // Função para criar e exibir uma notificação
    notify( {title, body}, icon) {
        // Cria uma nova notificação com título, corpo e ícone fornecidos
        new Notification(title, {
            body,  // Texto do corpo da notificação
            icon   // Ícone da notificação
        });
    }
};

// Exporta o objeto 'Notifyer' para ser usado em outros arquivos
export { Notifyer };
