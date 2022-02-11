const { WAConnection, MessageType, waChatKey } = require('@adiwajshing/baileys')
const fs = require('fs')
const figlet = require('figlet');
const moment = require('moment-timezone')
const { start, info, success, close } = require('./lib/functions')
const { bgcolor, color } = require('./lib/color')
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))

const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
        
let Ucapan = "";
	let hours = moment().tz("Asia/Jakarta").format("HH");
	if (hours >= 19 || hours <= 2) {
	Ucapan += "Good Night 🌝";
	} else if (hours >= 3 && hours <= 10) {
	Ucapan += "Good Morning 🌞";
	} else if (hours >= 11 && hours <= 12) {
	Ucapan += "Good Afternoon 🌞";
	} else if (hours >= 13 && hours <= 18) {
	Ucapan += "Good Evening 🌛";
	}

console.log(bgcolor(color("/>WIB: ", "black"), "silver"), color(timeWib, "silver"))
console.log(bgcolor(color("/>WIT: ", "black"), "silver"), color(timeWit, "silver"))
console.log(bgcolor(color("/>WITA: ", "black"), "silver"), color(timeWita, "silver"))
console.log(Ucapan + `\n`)

console.log(color(figlet.textSync("GunturP", {
	font: 'JS Block Letters',
	horizontalLayout: 'full',
	verticalLayout: 'full'
}), "yellow"));

const starts = async (client = new WAConnection()) => {
	client.logger.level = 'warn'
	client.version = [2, 2142, 12];
	client.browserDescription = ["BotWa", "safari", "3.0"]
	client.chatOrderingKey = waChatKey(true);
	client.connectOptions.maxRetries = Infinity;
	//client.logger.level = 'fatal';
	client.on('qr', () => {
		console.log(color('[Scan Me]', 'red'), color('Sedang Menunggu Di Scan 🔍', 'yellow'))
	})
	client.on('credentials-updated', () => {
		fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Login Info Updated')
	})
	fs.existsSync('./session.json') && client.loadAuthInfo('./session.json') 
	client.on('connecting', () => {
		start('2', 'Menghubungkan...')
	})
	client.on('open', () => {
		//success('2', 'Terhubung')
		success("2", "Berhasil Terhubung dengan WhatsApp!")
	})
	await client.connect({timeoutMs: 30*1000})
	fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('chat-update', async (message) => {
		require('./index.js')(client, message)
	})
	client.on("close", async ({ reason, isReconnecting }) => (
		console.log("Disconnected "+ color(isReconnecting, "yellow") +" Because "+ color(reason, "yellow"))
	));
	client.on("group-participants-update", async (gprs) => {
		try {
			groupMet = await client.groupMetadata(gprs.jid);
			groupMembers = groupMet.participants;
			groupAdmins = getGroupAdmins(groupMembers);
			mem = gprs.participants[0];

			console.log(gprs);
			try {
			  pp_user = await client.getProfilePicture(mem);
			} catch (e) {
			  pp_user =
			    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
			}
			try {
			  pp_grup = await client.getProfilePicture(gprs.jid);
			} catch (e) {
			  pp_grup =
			    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
			}
			if (gprs.action == "add" && mem.includes(client.user.jid)) {
			  client.sendMessage(gprs.jid, `Saya Adalah Bot ${namaBot}, saya bisa membuat sticker, membuat image maker, mendownload dll`, "conversation");
			}
			hehe = await getBuffer(pp_user)
			
		if (gprs.action == 'add' && !mem.includes(client.user.jid)) {
			const mdata = await client.groupMetadata(gprs.jid)
			const memeg = mdata.participants.length
			const thu = await client.getStatus(gprs.participants[0], MessageType.text)
			const num = gprs.participants[0]
			const gun = await client.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			const gunt = gun.message["ephemeralMessage"] ? gun.message.ephemeralMessage : gun
			let v = client.contacts[num] || { notify: num.replace(/@.+/, '') }
			gprs_user = v.vname || v.notify || num.split('@')[0]
			time_welc = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
			time_wel = moment.tz('Asia/Jakarta').format("hh:mm")
			teks = `@${num.split('@')[0]} baru saja bergabung\nWelcome Bree!!`
			tekss = `_Bawa santai aja bree☕`
			welcomeBut = [{buttonId:`#intro`,buttonText:{displayText:'WELCOME'},type:1}]
			welcomeButt = { contentText: `${teks} `, footerText: `${tekss}`, buttons: welcomeBut, headerType: 6, locationMessage: gunt.message.locationMessage}
			client.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
		}
		if (gprs.action == 'remove' && !mem.includes(client.user.jid)) {
			const mdata = await client.groupMetadata(gprs.jid)
			const num = gprs.participants[0]
			const guntu = await client.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			const guntur = guntu.message["ephemeralMessage"] ? guntu.message.ephemeralMessage : guntu
			let w = client.contacts[num] || { notify: num.replace(/@.+/, '') }
			gprs_user = w.vname || w.notify || num.split('@')[0]
			time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
			time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
			memeg = mdata.participants.length
			out = `*Sayonara* 👋 @${num.split('@')[0]}\n*akhirnya beban keluar juga*`
			goodbyeBut = [{buttonId:` `,buttonText:{displayText:'Byee👋'}, type:1}]
			goodbyeButt = { contentText: `${out}`, footerText: `1 𝖡𝖾𝖻𝖺𝗇 𝖪𝖾𝗅𝗎𝖺𝗋. 𝖪𝖺𝗅𝗂𝖺𝗇 𝖪𝖺𝗉𝖺𝗇 𝖪𝖾𝗅𝗎𝖺𝗋?`, buttons: goodbyeBut, headerType: 6, locationMessage: guntur.message.locationMessage}
			client.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
		}
    } catch (e) {
      console.log('Error :', e)
    }
  })

}

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update main.js`);
  delete require.cache[file];
  require(file);
});

starts()

		
		
		