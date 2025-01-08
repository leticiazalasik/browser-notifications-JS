const Notifyer = {
  
    async init() {
        // Solicitar permissão para notificações
        const permission = await Notification.requestPermission();
        
        if (permission !== "granted") {
            throw new Error('Permissão negada para mostrar notificações');
        }
    },

    // Função para criar e mostrar a notificação
    notify({title, body}, icon) {
        new Notification(title, {
            body, 
            icon   
        });
    }
};

export { Notifyer };
