// Appels de fichiers //
const Discord = require("discord.js")
const Insult = require("./insult.json")
// Connexions discord //
const client = new Discord.Client()
client.login(process.env.TOKEN)
// Variables //
ins = Insult["insult"]

// Détection des messages //
client.on("message", function (message) {
    msg = message.content

    ListeDeMot = msg.split(" ")

    if (InsultScroll(ins,ListeDeMot) == true){
        message.delete()
    }
})

function InsultScroll(ListeInsulte,ListeMot){
    i = 0
    while (i < ListeMot.length){
        j = 0
        while (j < ListeInsulte.length){
            if (ListeMot[i] == ListeInsulte[j]){
                return true
            }
            j = j+1
        }
        i = i+1
    }
    return false
}
