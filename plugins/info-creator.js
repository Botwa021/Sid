const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: .
item.ORG: .
item1.TEL;waid=6288233832771:6288233832771@s.whatsapp.net
item1.X-ABLabel:owner selalu ada 
item2.EMAIL;type=INTERNET: mursidmulo@gmail.com
item2.X-ABLabel:📧Email
item3.ADR:;;🎍Yogyakarta;;;;
item3.X-ABADR:ac
item3.X-ABLabel:ASAL KOTA
item4.URL:https//github.com/Botwa021
item4.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'owner', 
            contacts: [{ vcard }]  
        }
    }
)
let rozi = 'https://telegra.ph/file/f8a1b984a287fa705fd7a.jpg'
await conn.send3ButtonImg(m.chat, rozi, "*Hai kak👋,  Itu nomor ownerku*", '📮: jan spam ya', 'Source code', '.sc', 'Back', '.menu', 'Donasi', '.donasi', sentMsg)}
handler.help = ['owner2', 'creator2']
handler.tags = ['info']

handler.command = /^(owner2|creator2)$/i

module.exports = handler
