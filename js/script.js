/* 
MILESTONE 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
NOTA: non usate Bootstrap ma flexbox e float (eventualmente fatelo come bonus alla fine quello di usare Bootstrap)

MILESTONE 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

MILESTONE 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

MILESTONE 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
Milestone 5
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

SUPER BONUSES
-- FUNZIONALITÀ --
- evitare che l'utente possa inviare un messaggio vuoto o composto solamente da spazi
- TODO: A) cambiare icona in basso a destra (a fianco all'input per scrivere un nuovo messaggio) finché l'utente sta scrivendo: di default si visualizza l'icona del microfono, quando l'input non è vuoto si visualizza l'icona dell'aeroplano. Quando il messaggio è stato inviato e l'input si svuota, si torna a visualizzare il microfono.
- B) inviare quindi il messaggio anche cliccando sull'icona dell'aeroplano
- TODO: predisporre una lista di frasi e/o citazioni da utilizzare al posto della risposta "ok:" quando il pc risponde, anziché scrivere "ok", scegliere una frase random dalla lista e utilizzarla come testo del messaggio di risposta del pc
- TODO: visualizzare nella lista dei contatti l'ultimo messaggio inviato/ricevuto da ciascun contatto
- TODO: inserire l'orario corretto nei messaggi (v. note day.js)
- TODO: sotto al nome del contatto nella parte in alto a destra, cambiare l'indicazione dello stato: visualizzare il testo "sta scrivendo..." nel timeout in cui il pc risponde, poi mantenere la scritta "online" per un paio di secondi e infine visualizzare "ultimo accesso alle xx:yy" con l'orario corretto
- TODO: dare la possibilità all'utente di cancellare tutti i messaggi di un contatto o di cancellare l'intera chat con tutti i suoi dati: cliccando sull'icona con i tre pallini in alto a destra, si apre un dropdown menu in cui sono presenti le voci "Elimina messaggi" ed "Elimina chat"; cliccando su di essi si cancellano rispettivamente tutti i messaggi di quel contatto (quindi rimane la conversazione vuota) oppure l'intera chat comprensiva di tutti i dati del contatto oltre che tutti i suoi messaggi (quindi sparisce il contatto anche dalla lista di sinistra)
- TODO: dare la possibilità all'utente di aggiungere una nuova conversazione, inserendo in un popup il nome e il link all'icona del nuovo contatto
- TODO: fare scroll in giù in automatico fino al messaggio più recente, quando viene aggiunto un nuovo messaggio alla conversazione (NB: potrebbe esserci bisogno di utilizzare nextTick: [https://vuejs.org/v2/api/#Vue-nextTick](https://vuejs.org/v2/api/#Vue-nextTick))
- TODO: aggiungere le emoticons, tramite l'utilizzo di una libreria, ad esempio: [https://www.npmjs.com/package/vue-emoji-picker](https://www.npmjs.com/package/vue-emoji-picker)

-- GRAFICA --
- visualizzare un messaggio di benvenuto che invita l'utente a selezionare un contatto dalla lista per visualizzare i suoi messaggi, anziché attivare di default la prima conversazione
- aggiungere una splash page visibile per 1s all'apertura dell'app
- A) rendere l'app responsive e fruibile anche su mobile: di default si visualizza solo la lista dei contatti e cliccando su un contatto si vedono i messaggi di quel contatto.
- B) aggiungere quindi un'icona con una freccia verso sinistra per tornare indietro, dalla visualizzazione della chat alla visualizzazione di tutti i contatti
- aggiungere un'icona per ingrandire o rimpicciolire il font: dovrebbe essere sufficiente aggiungere una classe al wrapper principale
- aggiungere un'icona per cambiare la modalità light/dark: dovrebbe essere sufficiente aggiungere una classe al wrapper principale

CONSIGLIO
Pensate bene a come strutturare i dati prima di implementare il codice.
*/


const app = new Vue({
    el: `#app`,
    data: {

        currentChatIndex: 0,
        searchingName: ``,
        mainUser: {
            img: `img/avatar_io.jpg`,
            name: `Giuliana`,
        },
        arrChats: [
            {
                user: {
                    img: `img/avatar_1.jpg`,
                    name: `Michele`,
                    visible: true,
                },
                newMsgContent: ``,
                arrMsgs: [
                    {
                        sent: true,
                        text: `Hai portato a spasso il cane?`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false, 
                    },
                    {
                        sent: true,
                        text: `Ricordati di dargli da mangiare`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false, 
                    },
                    {
                        sent: false,
                        text: `ok`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false, 
                    },
                ],
            },
            {
                user: {
                    img: `img/avatar_2.jpg`,
                    name: `Fabio`,
                    visible: true,               
                },
                newMsgContent: ``,
                arrMsgs: [
                    {
                        sent: true,
                        text: `Ciao come stai?`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false, 
                    },
                    {
                        sent: false,
                        text: `Bene grazie! Stasera ci vediamo?`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false, 
                    },
                    {
                        sent: true,
                        text: `Mi piacerebbe ma devo andare a fare la spesa`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false, 
                    },
                ],
            },
            {
                user: {
                    img: `img/avatar_3.jpg`,
                    name: `Samuele`,
                    visible: true,
                },
                newMsgContent: ``,
                arrMsgs: [
                    {
                        sent: false,
                        text: `la Marianna va in campagna`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false, 
                    },
                    {
                        sent: true,
                        text: `Sicuro di non aver sbagliato chat?`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false, 
                    },
                    {
                        sent: false,
                        text: `Ah scusa`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false, 
                    },
                ],
            },
            {
                user: {
                    img: `img/avatar_4.jpg`,
                    name: `Alessandro B.`,
                    visible: true,
                },
                newMsgContent: ``,
                arrMsgs: [
                    {
                        sent: true,
                        text: `Lo sai che ha aperto una nuova pizzeria?`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false, 
                    },
                    {
                        sent: false,
                        text: `Sì ma preferirei andare al cinema`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false, 
                    },
                ],
            },
            {
                user: {
                    img: `img/avatar_5.jpg`,
                    name: `Alessandro L.`,
                    visible: true,
                },
                newMsgContent: ``,
                arrMsgs: [
                    {
                        sent: true,
                        text: `Ciao come stai?`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false, 
                    },
                    {
                        sent: false,
                        text: `Bene grazie! Stasera ci vediamo?`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false, 
                    },
                    {
                        sent: true,
                        text: `Mi piacerebbe ma devo andare a fare la spesa`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false, 
                    },
                ],
            },
            {
                user: {
                    img: `img/avatar_6.jpg`,
                    name: `Claudia`,
                    visible: true,
                },
                newMsgContent: ``,
                arrMsgs: [
                    {
                        sent: true,
                        text: `Hai portato a spasso il cane?`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false, 
                    },
                    {
                        sent: true,
                        text: `Ricordati di dargli da mangiare`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false, 
                    },
                    {
                        sent: false,
                        text: `ok`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false, 
                    },
                ],
            },
            {
                user: {
                    img: `img/avatar_7.jpg`,
                    name: `Federico`,
                    visible: true,
                },
                newMsgContent: ``,
                arrMsgs: [
                    {
                        sent: false,
                        text: `la Marianna va in campagna`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false, 
                    },
                    {
                        sent: true,
                        text: `Sicuro di non aver sbagliato chat?`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false, 
                    },
                    {
                        sent: false,
                        text: `Ah scusa`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false, 
                    },
                ],
            },
            {
                user: {
                    img: `img/avatar_8.jpg`,
                    name: `Davide`,
                    visible: true,                
                },
                newMsgContent: ``,
                arrMsgs: [
                    {
                        sent: true,
                        text: `Lo sai che ha aperto una nuova pizzeria?`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false,
                    },
                    {
                        sent: false,
                        text: `Sì ma preferirei andare al cinema`,
                        time: `2020-03-20T16:30:00`,
                        msgPanel: false, 
                    },
                ],
            },
        ],
    },
    computed: {
        lastMsg() {
            return this.arrChats[this.currentChatIndex].arrMsgs.slice(-1)[0];
        },
    },
    methods: {
        sendNewMsg() {
            const activeChat = this.arrChats[this.currentChatIndex];
            const newMsg = {
                sent: true,
                text: activeChat.newMsgContent.trim(),
                time: luxon.DateTime.now().toISO().split(`.`)[0],
                msgPanel: false,
            };
            if (newMsg.text != ``) {
                activeChat.arrMsgs.push(newMsg);
                this.replyMsg(this.currentChatIndex);
            }
            activeChat.newMsgContent = ``;
        },
        replyMsg(chatIndex) {
            setTimeout(() => {
                const newMsg = {
                    sent: false,
                    text: `ok`,
                    time: luxon.DateTime.now().toISO().split(`.`)[0],
                    msgPanel: false,
                };
                this.arrChats[chatIndex].arrMsgs.push(newMsg);
            }, 2000);
        },
        contactsFilter() {
            this.arrChats.forEach(chat => {
                if (chat.user.name.toLowerCase().includes(this.searchingName.toLowerCase())) {
                    chat.user.visible = true;
                } else {
                    chat.user.visible = false;
                }
            });
        },
        showPanel(msgIndex) {
            this.arrChats[this.currentChatIndex].arrMsgs[msgIndex].msgPanel = !this.arrChats[this.currentChatIndex].arrMsgs[msgIndex].msgPanel;
        },
        removeMsg(index) {
            this.arrChats[this.currentChatIndex].arrMsgs.splice(index, 1);
        },
        formattedDate(date, format) {
            let formatStr = `dd/MM/yyyy HH:mm:ss`;
            switch (format) {
                case `italian`:
                    formatStr = `dd/MM/yyyy HH:mm:ss`;
                    break;
                case `american`:
                    formatStr = `MM/dd/yyyy HH:mm:ss`;
                    break;
            };
            return luxon.DateTime.fromISO(date).toFormat(formatStr);
        },
    },
});

