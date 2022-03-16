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

CONSIGLIO
Pensate bene a come strutturare i dati prima di implementare il codice.
*/


const app = new Vue({
    el: `#app`,
    data: {
        currentChatIndex: 0,
        newSendingMsg: {
            sent: true,
            text: ``,
            time: ``,
        },
        arrContacts: [
            {
                img: `img/avatar_1.jpg`,
                name: `Michele`,
                lastMsg: `Ultimo messaggio inviato`,
                lastMsgTime: `10/01/2020 16:15:22`,
                previewMsg: ``, // TODO: create random date
                arrMsgs: [
                    {
                        sent: true,
                        text: `Hai portato a spasso il cane?`,
                        time: ``, 
                    },
                    {
                        sent: true,
                        text: `Ricordati di dargli da mangiare`,
                        time: ``, 
                    },
                    {
                        sent: false,
                        text: `ok`,
                        time: ``, 
                    },
                ],
            },
            {
                img: `img/avatar_2.jpg`,
                name: `Fabio`,
                lastMsg: `Ultimo messaggio inviato`,
                lastMsgTime: `10/01/2020 16:15:22`,
                previewMsg: ``,
                arrMsgs: [
                    {
                        sent: true,
                        text: `Ciao come stai?`,
                        time: ``, 
                    },
                    {
                        sent: false,
                        text: `Bene grazie! Stasera ci vediamo?`,
                        time: ``, 
                    },
                    {
                        sent: true,
                        text: `Mi piacerebbe ma devo andare a fare la spesa`,
                        time: ``, 
                    },
                ],
            },
            {
                img: `img/avatar_3.jpg`,
                name: `Samuele`,
                lastMsg: `Ultimo messaggio inviato`,
                lastMsgTime: `10/01/2020 16:15:22`,
                previewMsg: ``,
                arrMsgs: [
                    {
                        sent: false,
                        text: `la Marianna va in campagna`,
                        time: ``, 
                    },
                    {
                        sent: true,
                        text: `Sicuro di non aver sbagliato chat?`,
                        time: ``, 
                    },
                    {
                        sent: false,
                        text: `Ah scusa`,
                        time: ``, 
                    },
                ],
            },
            {
                img: `img/avatar_4.jpg`,
                name: `Alessandro B.`,
                lastMsg: `Ultimo messaggio inviato`,
                lastMsgTime: `10/01/2020 16:15:22`,
                previewMsg: ``,
                arrMsgs: [
                    {
                        sent: true,
                        text: `Lo sai che ha aperto una nuova pizzeria?`,
                        time: ``, 
                    },
                    {
                        sent: false,
                        text: `Sì ma preferirei andare al cinema`,
                        time: ``, 
                    },
                ],
            },
            {
                img: `img/avatar_5.jpg`,
                name: `Alessandro L.`,
                lastMsg: `Ultimo messaggio inviato`,
                lastMsgTime: `10/01/2020 16:15:22`,
                previewMsg: ``,
                arrMsgs: [
                    {
                        sent: true,
                        text: `Ciao come stai?`,
                        time: ``, 
                    },
                    {
                        sent: false,
                        text: `Bene grazie! Stasera ci vediamo?`,
                        time: ``, 
                    },
                    {
                        sent: true,
                        text: `Mi piacerebbe ma devo andare a fare la spesa`,
                        time: ``, 
                    },
                ],
            },
            {
                img: `img/avatar_6.jpg`,
                name: `Claudia`,
                lastMsg: `Ultimo messaggio inviato`,
                lastMsgTime: `10/01/2020 16:15:22`,
                previewMsg: ``,
                arrMsgs: [
                    {
                        sent: true,
                        text: `Hai portato a spasso il cane?`,
                        time: ``, 
                    },
                    {
                        sent: true,
                        text: `Ricordati di dargli da mangiare`,
                        time: ``, 
                    },
                    {
                        sent: false,
                        text: `ok`,
                        time: ``, 
                    },
                ],
            },
            {
                img: `img/avatar_7.jpg`,
                name: `Federico`,
                lastMsg: `Ultimo messaggio inviato`,
                lastMsgTime: `10/01/2020 16:15:22`,
                previewMsg: ``,
                arrMsgs: [
                    {
                        sent: false,
                        text: `la Marianna va in campagna`,
                        time: ``, 
                    },
                    {
                        sent: true,
                        text: `Sicuro di non aver sbagliato chat?`,
                        time: ``, 
                    },
                    {
                        sent: false,
                        text: `Ah scusa`,
                        time: ``, 
                    },
                ],
            },
            {
                img: `img/avatar_8.jpg`,
                name: `Davide`,
                lastMsg: `Ultimo messaggio inviato`,
                lastMsgTime: `10/01/2020 16:15:22`,
                previewMsg: ``,
                arrMsgs: [
                    {
                        sent: true,
                        text: `Lo sai che ha aperto una nuova pizzeria?`,
                        time: ``, 
                    },
                    {
                        sent: false,
                        text: `Sì ma preferirei andare al cinema`,
                        time: ``, 
                    },
                ],
            },
            
        ],
    },
    methods: {
        sendNewMsg() {
            const newSendingMsg = {...this.newSendingMsg};

            this.sendMsg({...this.newSendingMsg});
            this.newSendingMsg.text = ``;

            setTimeout(this.replyMsg, 1000)
        },
        sendMsg(message){
            this.arrContacts[this.currentChatIndex].arrMsgs.push(message);
        },
        replyMsg() {
            this.sendMsg({
                sent: false,
                text: `ok`,
                time: ``,
            })
        },
    },
});