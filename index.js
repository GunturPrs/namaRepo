const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const brainly = require('brainly-scraper')
const { spawn, exec, execSync } = require("child_process")
const fs = require('fs')
const crypto = require('crypto')
const request = require('request')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')

const { color, bgcolor } = require('./lib/color')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText, getBase64, kyun, createExif } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
const thumb = fs.readFileSync("./media/gambar/thumb.jpg"); //thumbnail
const tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
const caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
const family = JSON.parse(fs.readFileSync('./database/family100.json'))
const siapakahaku = JSON.parse(fs.readFileSync('./database/siapakahaku.json'))
const tebakkalimat = JSON.parse(fs.readFileSync('./database/tebakkalimat.json'))
const tebakkata = JSON.parse(fs.readFileSync('./database/tebakkata.json'))
const tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
const tekateki = JSON.parse(fs.readFileSync('./database/tekateki.json'))
const susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))

lolkey = 'KurrXd' //ini apikey dari lolhuman
zekskey = 'GunturPrst' //ini apikey dari zeks
xteamKey = 'a849a1a2d540df32' //apikey dari xteam

namabot = 'BABU BOT'
namaowner = 'GUNTUR'
nomorowner = '6281335910842'


const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {

  let position = null;
  Object.keys(scommand).forEach((i) => {
    if (scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return scommand[position].chats;
  }
};  


module.exports = nine = async (nine, mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			//if (mek.key.fromMe) return
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-' 
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
		button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		isImage = (type === 'imageMessage')
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const arg = body.substring(body.indexOf(' ') + 1)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''


			mess = {
				daftar: `Maaf kak, kakak belum daftar menjadi user ${namabot}.\n Silahkan daftar dengan mengetik *.daftar*`,
				wait: 'MOHON TUNGGU SEBENTAR',
				banned: 'Anda sudah terbanned, mohon hubungi owner untuk membuka banned',
				success: 'SELESAI✓',
				error: {
					stick: '❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
					Iv: '❌ Link tidak valid ❌'
				},
				only: {
					group: '❌ PENGGUNAAN DALAM GROUP!!! ❌',
					ownerG: '❌ LU BUKAN OWNER GROUP!!! ❌',
					ownerB: '❌ LU BUKAN OWNERKU!!! ❌',
					admin: '❌ LU BUKAN ADMIN GROUP!! ❌',
					Badmin: '❌ BOT BUKAN ADMIN!!! ❌'
				}
			}

			const botNumber = nine.user.jid
			const ownerNumber = [`${nomorowner}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = nine.contacts[sender] != undefined ? nine.contacts[sender].vname || nine.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await nine.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBanned = ban.includes(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const sleep = async (ms) => {
    		return new Promise(resolve => setTimeout(resolve, ms));
		}
		var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
       
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum`at"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
			const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
			const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
			const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
        
        const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				nine.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				nine.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? nine.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : nine.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntilink) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*\nKamu terdeteksi mengimkan link group, maaf saya harus ngeluarin anda :(`)
				setTimeout(() => {
				nine.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			    }
			    
			            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 1: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 2: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 3: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 4: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 5: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 6: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 7: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 8: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 9: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 10: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 11: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 12: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 13: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 14: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 15: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 16: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 17: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 18: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 19: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 20: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 21: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 22: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 23: waktoonyabro = `Selamat Malam ${pushname}`; break;
            }
            var ucapanFakereply = "" + waktoonyabro;
           

           const fakedoc = {key: {fromMe: false, participant: `${nomorowner}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `${ucapanFakereply}`, pageCount: 0, fileName: `GunturP`, jpegThumbnail: fs.readFileSync(`./media/gambar/thumb.jpg`)}}}
			const ftoko = { key: { fromMe: false, 
			             participant: `0@s.whatsapp.net`, ...(from ? { 
			             remoteJid: 'status@broadcast' } : {}) }, 
			             message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./media/gambar/thumb.jpg') }, 'title': `${namabot}\nRp. 10.000`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
    const ftrol = {key : {fromMe:false, //by Guntur
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `${namabot} \nRp. 999.999.999`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const fhidetag = {key : {fromMe:false, //by Guntur
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `Pesan Dari\n${pushname}`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const ftrolMENU = {key : {fromMe:false,
	participant : '0@s.whatsapp.net'},
       message: { //by Guntur P
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `By Guntur P`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
			const fakeitem = (teks) => {
           nine.sendMessage(from, teks, text, {
                   quoted: {
                           key:{
                 	       fromMe:false, 
                           participant:`0@s.whatsapp.net`, ...(from ? {
                           remoteJid :"0-1604595598@g.us" }: {})
                           },message:{"orderMessage":{
                                  "orderId":"4302154426574187",
                                  "thumbnail":fs.readFileSync("./media/gambar/thumb.jpg"),
                                  "itemCount":100,
                                  "status":"INQUIRY",
                                  "surface":"CATALOG",
                                  "message": `${namabot}\nRp. 999.999.999.999`,
                                  "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},
                           contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}


	nine.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	nine.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})                                              


    const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await nine.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    nine.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage, {quoted: mek})
  }
    const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    nine.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  
      //by Guntur P
      const sendButVideo = async (id, text1, desc1, gam1, but = [], options = {} ) => {
      kma = gam1;
      mhan = await nine.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      nine.sendMessage(id, buttonMessages, MessageType.buttonsMessage, {quoted: mek})
    };
        
        const sendButloc = async(id, text1, desc1, gam1, but = [], options = {}) => {
               let kma = gam1
               nine.sendMessage(id, {"contentText": text1,
               "footerText": desc1, 
               "buttons": but,
               "headerType": "LOCATION",
                       "locationMessage": {
                   "text": "BOT",
                   "name": "South Brisbane",
                   "address": "Cloudflare, Inc",
                   "jpegThumbnail": kma
                }}, MessageType.buttonsMessage, {quoted: mek, contextInfo:{mentionedJid: parseMention(text1, desc1)}}, options)  
              }          
      
      const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      nine.sendMessage(id, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
    };
    
    const sendKontak = (from, nomor, nama, org, Ponsel, descBiz = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
        let nano = `Berikut Adalah Nomor Developer Saya, Silahkan Chat/Simpan Nomor Developer Saya.\n\n*NB: Dilarang Chat Yang Tidak Berkepentingan.*`
      nine.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek, caption: nano}
      );
    }; 
    
    
    
		// TEBAK GAMBAR
		if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Selamat🥳 Jawaban kamu benar!")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Salah!")
                }
            }
            // CAK LONTONG
		if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Selamat🥳 Jawaban kamu benar!")
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                } else {
                    reply("Jawaban Salah!")
                }
            }
             // SIAPA AKU
		if (siapakahaku.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = siapakahaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete siapakahaku[sender.split('@')[0]]
                    reply("Selamat🥳 Jawaban kamu benar!")
                    fs.writeFileSync("./database/siapakahaku.json", JSON.stringify(siapakahaku))
                } else {
                    reply("Jawaban Salah!")
                }
            }
		// TEBAK KALIMAT
		if (tebakkalimat.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakkalimat[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                     delete tebakkalimat[sender.split('@')[0]]
                    reply("Selamat🥳 Jawaban kamu benar!")
                    fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
                } else {
                    reply("Jawaban Salah!")
                }
            }
		// TEBAK KALIMAT
		if (tebakkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tebakkata[sender.split('@')[0]]
                    reply("Selamat🥳 Jawaban kamu benar!")
                    fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
                } else {
                    reply("Jawaban Salah!")
                }
            }
		// TEBAK LIRIK
		if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tebaklirik[sender.split('@')[0]]
                    reply("Selamat🥳 Jawaban kamu benar!")
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                } else {
                    reply("Jawaban Salah!")
                }
            }
		// TEKA TEKI
		if (tekateki.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tekateki[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tekateki[sender.split('@')[0]]
                    reply("Selamat🥳 Jawaban kamu benar!")
                    fs.writeFileSync("./database/tekateki.json", JSON.stringify(tekateki))
                } else {
                    reply("Jawaban Salah!")
                }
            }
		// SUSUN KATA
		if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete susunkata[sender.split('@')[0]]
                    reply("Selamat🥳 Jawaban kamu benar!")
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                } else {
                    reply("Jawaban Salah!")
                }
            }
		// FAMILY 100
		if (family.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = family[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete family[sender.split('@')[0]]
                    reply("Selamat🥳 Jawaban kamu benar!")
                    fs.writeFileSync("./database/family100.json", JSON.stringify(family))
                } else {
                    reply("Jawaban Salah!")
                }
            }


    
      function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
    function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}


//by Guntur P
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = nine.contacts[from] != undefined ? nine.contacts[from].vname || nine.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Bot'; if (!author) author = 'By GunturP';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./media/stickers/${name}.exif`)) return `./media/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./media/stickers/${name}.exif`, buffer, (err) => {	
					return `./media/stickers/${name}.exif`	
				})	
			}
			
            
switch(command) {
		  
		  case 'tiktokmp4': case 'tiktok': case 'tiktokvid':
		  if (!q) return reply("linknya mana?")
		  anu = await fetchJson("https://myselfff.herokuapp.com/docs/downloader/tiktokmp4?url=" + q )
		  vidtt = await getBuffer(anu.result.url)
		  nine.sendMessage(from, vidtt, video, {quoted: mek, thumbnail: thumb, caption: "sukses"})
		  break
		  case 'tiktokmp3': case 'tiktokaud':
		  if (!q) return reply("linknya mana?")
		  anu = await fetchJson("https://myselfff.herokuapp.com/docs/downloader/tiktokmp3?url=" + q )
		  audtt = await getBuffer(anu.result.url)
		  //nine.sendMessage(from, vidtt, video, {quoted: mek, caption: "sukses"})
		  nine.sendMessage(from, audtt, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
		  break
		  
		  case "ytmp4":
		  if (!q) return reply("linknya mana?")
		  anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${q}&APIKEY=${xteamKey}`)
		  textmess = `*#ytmp4*\n\nJudul: ${anu.judul}\nSize: ${anu.size}\nLink Download: ${anu.url}`
		  thumyt = await getBuffer(anu.thumbnail)
		  vidyt = await getBuffer(anu.url)
		  nine.sendMessage(from, thumyt, image, {quoted: mek, caption: textmess})
		  //reply("video sedang dikirim")
		  //nine.sendMessage(from, vidyt, video, {quoted: mek, caption: textmess})
		  break
		  case "ytmp3":
		  if (!q) return reply("linknya mana?")
		  anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp3?url=${q}&APIKEY=${xteamKey}`)
		  textmess = `*#ytmp3*\n\nJudul: ${anu.judul}\nSize: ${anu.size}\nLink Download: ${anu.url}`
		  thumyt = await getBuffer(anu.thumbnail)
		  nine.sendMessage(from, thumyt, image, {quoted: mek, caption: textmess})
		  break
		  
		  //game
		  case 'tebakin': case 'tebakgambar':
					if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/tebakgambar?apikey=offline")
                    //resu = anu.data
                    tebak = anu.data.image
                    jawaban = `${anu.data.jawaban.replace('Jawaban ', '')}`
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    nine.sendMessage(from, tebakya, image, {quoted: mek, caption: "⏰ Timeout : 120.00 seconds!!" })
                    await sleep(120000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                                nine.sendMessage(from, "Waktu permainan habis" + '\n\n' +"*➸ Jawaban :*"  + '\n' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebakgambar[sender.split('@')[0]]
								console.log("Tebak Gambar Telah Berakhir")
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
					break   
			case 'caklontong':
					if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/caklontong?apikey=offline")
                    jawaban = `${anu.result.data.jawaban.replace('Jawaban ', '')}`
                    caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                    console.log(jawaban)
                    //tebakya = await getBuffer(tebak)
                    reply( `*Soal:* _${anu.result.data.soal}_\n ⏰ _*Timeout : 60 seconds!!*_`)
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(sender.split('@')[0])) {
                                nine.sendMessage(from, "Waktu permainan habis" + '\n\n' +"*➸ Jawaban :*"  + '\n' + '_'+ jawaban +'_' + '\n' + '*➸Deskripsi:* ' + '_' + anu.result.data.desc + '_', text, {quoted: mek}) // ur cods
								delete caklontong[sender.split('@')[0]]
								console.log("Cak Lontong Telah Berakhir")
                        fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                    }
					break
				case 'siapakahaku': case 'siapaaku':
					if (siapakahaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/siapakahaku?apikey=offline")
                    jawaban = `${anu.data.jawaban}`
                    siapakahaku[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/siapakahaku.json", JSON.stringify(siapakahaku))
                    console.log(jawaban)
                    tebakya = anu.data.pertanyaan
                    nine.sendMessage(from, tebakya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: mek})
                    await sleep(60000)
                    if (siapakahaku.hasOwnProperty(sender.split('@')[0])) {
                                nine.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete siapakahaku[sender.split('@')[0]]
								console.log("Siapa aku Telah Berakhir")
                        fs.writeFileSync("./database/siapakahaku.json", JSON.stringify(siapakahaku))
                    }
					break   
				case 'tebakkalimat':
					if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/tebakkalimat?apikey=offline")
                    jawaban = `${anu.data.jawaban}`
                    tebakkalimat[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
                    console.log(jawaban)
                    tebakya = anu.data.soal
                    nine.sendMessage(from, tebakya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: mek})
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) {
                                nine.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebakkalimat[sender.split('@')[0]]
								console.log("Tebak kalimat Telah Berakhir")
                        fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
                    }
             	break   
				case 'tebakkata':
					if (tebakkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/tebakkata?apikey=offline")
                    jawaban = `${anu.data.jawaban}`
                    tebakkata[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
                    console.log(jawaban)
                    tebakya = anu.data.soal
                    nine.sendMessage(from, tebakya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: mek})
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(sender.split('@')[0])) {
                                nine.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebakkata[sender.split('@')[0]]
								console.log("Tebak kata Telah Berakhir")
                        fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
                    }
                   	break   
					case 'tebaklirik':
					if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/tebaklirik?apikey=offline")
                    jawaban = `${anu.data.jawaban}`
                    tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                    console.log(jawaban)
                    tebakya = anu.data.soal
                    nine.sendMessage(from, tebakya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: mek})
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
                                nine.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebaklirik[sender.split('@')[0]]
								console.log("Tebak lirik Telah Berakhir")
                        fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                    }
                    		break   
				case 'tekateki':
					if (tekateki.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/tekateki?apikey=offline")
                    jawaban = `${anu.data.jawaban}`
                    tekateki[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/tekateki.json", JSON.stringify(tekateki))
                    console.log(jawaban)
                    tebakya = anu.data.soal
                    nine.sendMessage(from, tebakya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: mek})
                    await sleep(60000)
                    if (tekateki.hasOwnProperty(sender.split('@')[0])) {
                                nine.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tekateki[sender.split('@')[0]]
								console.log("Teka-teki Telah Berakhir")
                        fs.writeFileSync("./database/tekateki.json", JSON.stringify(tekateki))
                    }
             		break  
				case 'susunkata':
				if (tekateki.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/susunkata?apikey=offline")
                    jawaban = `${anu.data.jawaban}`
                    tipenya = `${anu.data.tipe}`
                    susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                    console.log(jawaban)
                    tebakya = anu.data.acak
                    nine.sendMessage(from, "Soal : " + tebakya + '\n' +"Tipe : " + tipenya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: mek})
                    await sleep(60000)
                    if (susunkata.hasOwnProperty(sender.split('@')[0])) {
                                nine.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '  '+ jawaban +'', text, {quoted: mek}) // ur cods
								delete susunkata[sender.split('@')[0]]
								console.log("Susun kata Telah Berakhir")
                        fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                    }
                   	break  
				case 'family100':
					if (family.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/family100?apikey=offline")
                    tebak = `Pertanyaan : ${anu.result.data.soal}`
                    jawaban = anu.result.data.jawaban
                    family[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/family100.json", JSON.stringify(family))
                    console.log(jawaban)
                    nine.sendMessage(from, tebak + '\n\n⏰ Timeout : 60 seconds', text, { quoted: mek })
                   await sleep(60000)
                    if (family.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete family[sender.split('@')[0]]
					console.log("Family100 Telah Berakhir")
                        fs.writeFileSync("./database/family100.json", JSON.stringify(family))
                    }
					break   
					//end game



            case 'help':
            case 'menu':
            gam = thumb
            menu = `${namabot}\n${Tanggal}` 
            help = `Hai kak👋🏻 ${ucapanFakereply}

    「 *${namabot}* 」 

╭─ 𝘋𝘢𝘵𝘦:
├${Tanggal}
│
├─ 𝘛𝘪𝘮𝘦  𝘐𝘯𝘥𝘰𝘯𝘦𝘴𝘪𝘢 :
│  𝘸𝘪𝘣: ${timeWib}
│  𝘸𝘪𝘵 : ${timeWit}
│  𝘸𝘪𝘵𝘢 : ${timeWita}
│
├─ 𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘵𝘪𝘰𝘯
│  𝘝𝘦𝘳𝘴𝘪𝘰𝘯 𝘣𝘰𝘵 : 3.3
│  𝘗𝘳𝘦𝘧𝘪𝘹 : 𝘮𝘶𝘭𝘵𝘪-𝘱𝘳𝘦𝘧𝘪𝘹
│  𝘖𝘸𝘯𝘦𝘳 : ${namaowner}
└

┌──☬ 「 *NOTE* 」 ☬
├─ •  _SCRIPT BY GUNTUR P_
├─ •  _Open Jasa Buat Script Bot(Only Baileys)_
├─ •  _Jual Script Bot No ENC_
├─ •  _Contact https://wa.me/6285607078963_
│
╰───☬ 「 *By GunturP* 」 ☬` 
            
buttons = [
{buttonId:`${prefix}allmenu`, buttonText: {displayText: 'ALL MENU'}, type:1},
{buttonId:`${prefix}owner`, buttonText: {displayText: 'OWNER'}, type:1}
]//ini button
const bosco1 = await nine.prepareMessage("0@s.whatsapp.net", gam, MessageType.location,{ thumbnail: gam})
const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
lokasimenu = { 
contentText: `${help} `, 
footerText: `${menu}`, 
buttons: buttons, 
headerType: 6, 
locationMessage: bosco2.message.locationMessage
}
await nine.sendMessage(from, lokasimenu, MessageType.buttonsMessage, {quoted: ftrol, contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true, "externalAdReply": {
                "title": `${namabot}`,
                "body": "by Guntur P",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/X8X7pW7/Guntur-P.jpg",
                "thumbnail": thumb,
                "sourceUrl": "https://youtube.com/channel/UCaXLeoUNSP1CJEkJhQKLHWw"
}})
            break
           
            case 'allmenu':
            Audio = fs.readFileSync(`./media/mp3/menu.mp3`)
            let number = 0;
            allmenu = `Hai kak👋🏻 ${ucapanFakereply}
            
   「 *${namabot}* 」

╭• Prefix: multi prefix
├• Version bot: 1
├• Owner: ${nomorowner} (${namaowner})
└• Script: By Guntur P
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

├[ ${number += 1} ] ${prefix}menu/help
├[ ${number += 1} ] ${prefix}allmenu
├[ ${number += 1} ] ${prefix}iklan
├[ ${number += 1} ] ${prefix}owner
├[ ${number += 1} ] ${prefix}donasi
├[ ${number += 1} ] ${prefix}request
├[ ${number += 1} ] ${prefix}report

   「 OWNER 」
├[ ${number += 1} ] ${prefix}join
├[ ${number += 1} ] ${prefix}bc
├[ ${number += 1} ] ${prefix}bc2
├[ ${number += 1} ] ${prefix}restart
├[ ${number += 1} ] ${prefix}shutdown
├[ ${number += 1} ] ${prefix}ban
├[ ${number += 1} ] ${prefix}unban
├[ ${number += 1} ] ${prefix}buggc
├[ ${number += 1} ] ${prefix}clearall
├[ ${number += 1} ] ${prefix}clone
├[ ${number += 1} ] ${prefix}addcmd
├[ ${number += 1} ] ${prefix}delcmd
├[ ${number += 1} ] ${prefix}listcmd

   「 GROUP 」 
├[ ${number += 1} ] ${prefix}setgrupname
├[ ${number += 1} ] ${prefix}setdesc
├[ ${number += 1} ] ${prefix}setppgrup
├[ ${number += 1} ] ${prefix}listonline
├[ ${number += 1} ] ${prefix}group
├[ ${number += 1} ] ${prefix}closegc
├[ ${number += 1} ] ${prefix}opengc
├[ ${number += 1} ] ${prefix}hidetag
├[ ${number += 1} ] ${prefix}tagall
├[ ${number += 1} ] ${prefix}tagall2
├[ ${number += 1} ] ${prefix}tagall3
├[ ${number += 1} ] ${prefix}promote
├[ ${number += 1} ] ${prefix}demote
├[ ${number += 1} ] ${prefix}promoteall
├[ ${number += 1} ] ${prefix}demoteall
├[ ${number += 1} ] ${prefix}add
├[ ${number += 1} ] ${prefix}kick
├[ ${number += 1} ] ${prefix}listadmin
├[ ${number += 1} ] ${prefix}linkgroup
├[ ${number += 1} ] ${prefix}leave
├[ ${number += 1} ] ${prefix}antilink

   「 STICKER 」
├[ ${number += 1} ] ${prefix}ttp
├[ ${number += 1} ] ${prefix}ttp2
├[ ${number += 1} ] ${prefix}toimg
├[ ${number += 1} ] ${prefix}sticker
├[ ${number += 1} ] ${prefix}stickerwm
├[ ${number += 1} ] ${prefix}stickernowm

   「 TOLS 」 
├[ ${number += 1} ] ${prefix}ocr
├[ ${number += 1} ] ${prefix}shortlink
├[ ${number += 1} ] ${prefix}nulis
├[ ${number += 1} ] ${prefix}
   
   「 GAME MENU 」 
├[ ${number += 1} ] ${prefix}tebakkata
├[ ${number += 1} ] ${prefix}tebakgambar
├[ ${number += 1} ] ${prefix}tebakkalimat
├[ ${number += 1} ] ${prefix}tebaklirik
├[ ${number += 1} ] ${prefix}susunkata
├[ ${number += 1} ] ${prefix}tekateki
├[ ${number += 1} ] ${prefix}caklontong
├[ ${number += 1} ] ${prefix}family100
├[ ${number += 1} ] ${prefix}siapakahaku

   「 SOUND MENU 」 
├[ ${number += 1} ] ${prefix}pasi
├[ ${number += 1} ] ${prefix}pripun
├[ ${number += 1} ] ${prefix}jancok
├[ ${number += 1} ] ${prefix}sound1 - 61

   「 DOWNLOADER MENU 」 
├[ ${number += 1} ] ${prefix}ytmp3
├[ ${number += 1} ] ${prefix}ytmp4
├[ ${number += 1} ] ${prefix}tiktokmp3
├[ ${number += 1} ] ${prefix}tiktokmp4

    「 IMAGE MAKER 」 
├[ ${number += 1} ] ${prefix}qrcode
├[ ${number += 1} ] ${prefix}barcode
├[ ${number += 1} ] ${prefix}flame
├[ ${number += 1} ] ${prefix}silktext
├[ ${number += 1} ] ${prefix}glow
├[ ${number += 1} ] ${prefix}smoke
├[ ${number += 1} ] ${prefix}crosslogo
├[ ${number += 1} ] ${prefix}flower
├[ ${number += 1} ] ${prefix}harta
├[ ${number += 1} ] ${prefix}naruto
├[ ${number += 1} ] ${prefix}dropwater
├[ ${number += 1} ] ${prefix}breakwall
├[ ${number += 1} ] ${prefix}matrix
├[ ${number += 1} ] ${prefix}neon
├[ ${number += 1} ] ${prefix}crismes
├[ ${number += 1} ] ${prefix}pantai
├[ ${number += 1} ] ${prefix}fire
├[ ${number += 1} ] ${prefix}write
├[ ${number += 1} ] ${prefix}cslogo
├[ ${number += 1} ] ${prefix}lithgext
├[ ${number += 1} ] ${prefix}skytext
├[ ${number += 1} ] ${prefix}epep
├[ ${number += 1} ] ${prefix}gplaybutton
├[ ${number += 1} ] ${prefix}splaybutton
├[ ${number += 1} ] ${prefix}text3d
├[ ${number += 1} ] ${prefix}text3d2
├[ ${number += 1} ] ${prefix}blackpink
├[ ${number += 1} ] ${prefix}leavest
├[ ${number += 1} ] ${prefix}thunder
├[ ${number += 1} ] ${prefix}light

   「 RANDOM IMAGE 」 
├[ ${number += 1} ] ${prefix}art
├[ ${number += 1} ] ${prefix}bts
├[ ${number += 1} ] ${prefix}exo
├[ ${number += 1} ] ${prefix}elf
├[ ${number += 1} ] ${prefix}neko
├[ ${number += 1} ] ${prefix}loli
├[ ${number += 1} ] ${prefix}waifu
├[ ${number += 1} ] ${prefix}shota
├[ ${number += 1} ] ${prefix}sagiri
├[ ${number += 1} ] ${prefix}shinobu
├[ ${number += 1} ] ${prefix}megumin
├[ ${number += 1} ] ${prefix}trap
├[ ${number += 1} ] ${prefix}yaoi
├[ ${number += 1} ] ${prefix}blowjob
├[ ${number += 1} ] ${prefix}chiisaihentai
├[ ${number += 1} ] ${prefix}ecchi
├[ ${number += 1} ] ${prefix}hentai
├[ ${number += 1} ] ${prefix}ahegao
├[ ${number += 1} ] ${prefix}hololewd
├[ ${number += 1} ] ${prefix}sideoppai
├[ ${number += 1} ] ${prefix}animefeets
├[ ${number += 1} ] ${prefix}animebooty
├[ ${number += 1} ] ${prefix}animethighss
├[ ${number += 1} ] ${prefix}animearmpits
├[ ${number += 1} ] ${prefix}hentaiparadise
├[ ${number += 1} ] ${prefix}hentaifemdom
├[ ${number += 1} ] ${prefix}hentai4everyone
├[ ${number += 1} ] ${prefix}biganimetiddies
├[ ${number += 1} ] ${prefix}lewdanimegirls
├[ ${number += 1} ] ${prefix}animebellybutton

   「 PRIMBON 」 
├[ ${number += 1} ] ${prefix}artinama
├[ ${number += 1} ] ${prefix}artimimpi
├[ ${number += 1} ] ${prefix}
├[ ${number += 1} ] ${prefix}


┌──☬ 「 *NOTE* 」 ☬
├─ •  _SCRIPT BY GUNTUR P_
├─ •  _Open Jasa Buat Script Bot(Only Baileys)_
├─ •  _Jual Script Bot No ENC_
├─ •  _Contact http://wa.me/6285607078963_
│
╰───☬ 「 *By GunturP* 」 ☬`  ///jangan ganti atau hapus NOTE lahh
            nine.sendMessage(from, allmenu, text, {quoted: ftrolMENU, contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true, "externalAdReply": {
                "title": `${namabot}`,
                "body": "by Guntur P",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/X8X7pW7/Guntur-P.jpg",
                "thumbnail": thumb,
                "sourceUrl": `https://youtube.com/channel/UCaXLeoUNSP1CJEkJhQKLHWw`
} })
            nine.sendMessage(from, Audio, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true, sendEphemeral: true})
            break
case 'intro':
var intro = ` *𝐒𝐄𝐋𝐀𝐌𝐀𝐓 𝐃𝐀𝐓𝐀𝐍𝐆 𝐌𝐄𝐌𝐁𝐄𝐑 𝐁𝐀𝐑𝐔︎︎*

┌ 𝐍𝐚𝐦𝐚:
├ 𝐔𝐦𝐮𝐫:
├ 𝐀𝐬𝐚𝐥:
├ 𝐆𝐞𝐧𝐝𝐞𝐫:
└ 𝐉𝐞𝐧𝐢𝐬 𝐤𝐞𝐥𝐚𝐦𝐢𝐧:
`
nine.sendMessage(from, intro, text, {quoted: ftrolMENU, contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true })
break
case 'iklan':
var iklan = ` Custom sediri bang`
nine.sendMessage(from, iklan, text, {quoted: ftrolMENU, contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true })
break
case 'donasi':
var donasi = ` Custom sediri bang`
nine.sendMessage(from, donasi, text, {quoted: ftrolMENU, contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true })
break
//by Guntur P
case 'tiktokaud': case 'tiktokmp3':
if (!q) return reply('Linknya tod')
tiktokaud = await fetchJson('https://melcanz.com/tiktok2?url=' + q + '&apikey=NebzwRHs')
data = await getBuffer(tiktokaud.data.audio)
nine.sendMessage(from, data, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 35999, ptt:true})
break
case 'tiktokvid': case 'tiktokmp4':
tiktokaud = await fetchJson('https://melcanz.com/tiktok2?url=' + q + '&apikey=NebzwRHs')
data = await getBuffer(tiktokaud.data.nowatermark) 
nine.sendMessage(from, data, video, {quoted: mek, caption: 'nihh'})
break
             case 'owner':
            case 'developer':   
const vcard = 'BEGIN:VCARD\n'  
            + 'VERSION:3.0\n'  
            + `FN: ${namaowner}\n`  
            + `ORG:${namabot};\n` 
            + `TEL;type=CELL;type=VOICE;waid=${nomorowner}:+${nomorowner}\n`  
            + 'END:VCARD'  
  nine.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
titid = 'Butuh info tentang apa ya?'
           sendButMessage(from, titid, `${namabot}\n${Tanggal}`, [
          {buttonId: `${prefix}allmenu`, buttonText: { displayText: `ALLMENU`, }, type: 1, },
]); 
                 break
                 case 'request':
					const rq = body.slice(8)
					if (args.length > 300) return nine.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const ress = `*[REQUEST FITUR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${rq}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					nine.sendMessage(`${nomorowner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Request anda sudah mendarat ke owner, Requests palsu atau main² tidak akan ditanggapi.')
					break
case 'report':
case 'lapor': 
					const laporan = body.slice(7)
					if (args.length > 300) return nine.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const lapor = `*[LAPORAN EROR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${laporan}`
							var options = {
							text: lapor,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					nine.sendMessage(`${nomorowner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Laporan anda sudah mendarat ke owner, Laporan palsu atau main² tidak akan ditanggapi.')
					break

//OWNER MENU
case 'addcmd': 
case 'setcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
let teksnyee = `「 𝙻𝚒𝚜𝚝 𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚂𝚝𝚒𝚌𝚔𝚎𝚛 」`
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*➪𝙸𝙳:* ${i.id}\n*➪𝙲𝚖𝚍:* ${i.chats}`
}
reply(teksnyee)
break
      case 'shutdown':
             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node start.js`)
             reply('_Restarting Bot Success_')
             break
      case 'leaveall':
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = nine.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             nine.groupLeave(id)
}
             break
        case 'join':
            if (!isOwner) return reply(mess.only.ownerB)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return reply('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakeitem('pastikan link sudah benar!')
            var response = await nine.acceptInvite(codeInvite)
            fakeitem('SUKSES')
            } catch {
            fakeitem('LINK ERROR!')
            }
        break
        case 'join2': 
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = nine.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
        case 'bc': 
					if (!isOwner) return reply(mess.only.ownerB) 
					if (args.length < 1) return reply('.......')
					anu = await nine.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await nine.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							nine.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             nine.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST ${namabot} 」*\n\n${body.slice(4)}`,
			"footerText": 'by Guntur P',
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "MENU BOT"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )}
             reply('Suksess broadcast')}
        break
        case 'bc2':
             if(!isOwner) return reply('Anda Bukan Owner')
             buff10 = await getBuffer (`https://api-xcz.herokuapp.com/api/random/waifu`)
             if (args.length < 1) return reply('teks?')
             anu = await nine.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await nine.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	nine.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             nine.sendMessage(_.jid, { contentText: `${textt}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             reply('Suksess broadcast')}
             break
        case 'ban':
					if (!isOwner) return reply(mess.only.ownerB)
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
	    break
        case 'unban':
					if (!isOwner) return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
		break
        case 'buggc':
                    if (!isOwner) return reply(mess.only.ownerB)
                  //  if (!isOwner) return reply(mess.only.ownerB)
                    await nine.toggleDisappearingMessages(from)
                    reply("mampus")
        break
	    case 'clearall':
					if (!isOwner) return reply('Kamu siapa?')
					anu = await nine.chats.all()
					nine.setMaxListeners(25)
					for (let _ of anu) {
						nine.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
		break
                case 'clearall2':
                    if (!isOwner) return reply("Command only for owner bot")
                    list_chat = await nine.chats.all()
                    for (let chat of list_chat) {
                        nine.modifyChat(chat.jid, "delete")
                    }
                    reply("success clear all chat")
                    break
		case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await nine.getProfilePicture(id)
						buffer = await getBuffer(pp)
						nine.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
		break
        case "virtek":
                     if (!isOwner) return reply('Hah gimana?lu mau virtek?sorry broo gabisa')
                     reply(`Fitur dinonaktifkan`)
        break

//GROUP MENU
       case 'online':
       case 'listonline':
       case 'here':                
 if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(nine.chats.get(ido).presences), nine.user.jid]
             nine.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
       case 'setgrupname':
  if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              nine.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
  if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              nine.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':
           if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await nine.downloadMediaMessage(encmedia)
              nine.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
case 'demoteall':

		if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)

		if (!isGroup) return reply(mess.only.group)

		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
               
		 members_id = [ ]
		
		 for (let mem of groupMembers) {
	   
		 	members_id.push(mem.jid)
	  
		 		}
              
		 		  nine.groupDemoteAdmin(from, members_id)
              
		 		    break
                
		 		    case 'promoteall':
	
		 		    	if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)
	
		 		    	if (!isGroup) return reply(mess.only.group)
	
		 		    	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                
		 		    	members_id = [ ]
		
		 		    	for (let mem of groupMembers) {
	  
		 		    	 	members_id.push(mem.jid)
	
		 		    	 	 	}
             
		 		    	 	 	   nine.groupMakeAdmin(from, members_id)
             
		 		    	 	 	      break
case 'group':
				apri = 'PILIH MANA MIN?'
        sendButMessage(from, apri, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
        ]);
        break
case "closegc": //by Guntur P
      if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
        nine.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break; 
      case "opengc":
  if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
        nine.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break; 
                case 'hidetag':        
   if (isBanned) return reply(mess.banned)                
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(9)
					var group = await nine.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					//var options = {text: value, contextInfo: { mentionedJid: mem }, quoted: fhidetag}
					nine.sendMessage(from, value, text, {quoted: fhidetag, contextInfo: { mentionedJid: mem }})
					break;
									case 'tagall':
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*${prefix}* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'tagall2':
if (!isGroup) return reply(mess.only.group)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*╠➥* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					case 'tagall3':
if (!isGroup) return reply(mess.only.group)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*${prefix}* https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'promote':
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						nine.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						nine.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						nine.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						nine.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add'://by Guntur P
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						nine.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'kick':
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						nine.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						nine.groupRemove(from, mentioned)
					}
					break
				case 'listadmins':
			if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'linkgroup':
                 if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await nine.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                case 'leave':
            if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	nine.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
case 'welcome':
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						sendButMessage(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}welcome 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}welcome 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
   
                case 'antilink'://by Guntur P
                                  	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						nine.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break
        case 'd':
        case 'del':
        case 'delete': 
     if (!isGroup) return reply(mess.only.group)
					nine.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
//STICKER MENU
case 'ttp':
               if (isBanned) return reply(mess.banned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} GunturP`)
                ini_text = args.join(" ")
                anu = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=https://cililitan.herokuapp.com/api/texttopng?teks=${ini_text}`)
                nine.sendMessage(from, anu, sticker, {quoted: mek})
                break
       case 'stikerwm':
       case 'stickerwm':
       case 'swm':
              var a = arg.split("|")[0];
              var b = arg.split("|")[1];
              if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              media = await nine.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              nine.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./media/sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              nine.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              const media = await nine.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = pe.split("|")[0];
              var b = pe.split("|")[1];
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              nine.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./media/sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              nine.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
              reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
              break
				case 'toimg':
				if (isBanned) return reply (mess.banned)
					if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nine.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						nine.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
case 'stiker': //by Guntur P
				case 'sticker':
				case 's':
				if (isBanned) return reply(mess.banned)
			  var a = 'Bot Whatsapp'
              var b = 'By Guntur P'
              if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              media = await nine.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              nine.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./media/sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              nine.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              const media = await nine.downloadAndSaveMediaMessage(encmedia)
              var a = 'Bot Whatsapp'
              var b = 'By Guntur P'
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              nine.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./media/sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              nine.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
              reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
              break
case 'stikernowm': 
				case 'stickernowm':
				case 'snowm':
				if (isBanned) return reply(mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nine.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								nine.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nine.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								nine.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break

//TOLS
				case 'ocr':
				if (isBanned) return reply (mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nine.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break
case 'shortlink': 
case 'shorturl'://by Guntur P
if (args.length < 1) return reply(`Url yang mau di shortlink?\nContoh: ${prefix + command} http://wa.me/6285607078963`)
query = args.join (" ")
s1 = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${lolkey}&url=${query}`)
s2 = await fetchJson(`https://api.lolhuman.xyz/api/shortlink2?apikey=${lolkey}&url=${query}`)
s3 = await fetchJson(`https://api.lolhuman.xyz/api/shortlink3?apikey=${lolkey}&url=${query}`)
s4 = await fetchJson(`https://api.lolhuman.xyz/api/shortlink3?apikey=${lolkey}&url=${query}`)
r1 = s1.result
r2 = s2.result
r3 = s3.result
r4 = s4.result
var teks = `Short Link/URL:
Before: ${query}
After: -${r1}
  -${r2}
  -${r3}
  -${r4}`
nine.sendMessage(from, teks, text, {quoted: mek})
break
case 'nulis':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
reply(mess.wait)
anu = await getBuffer(`https://api.zeks.me/api/nulis?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break

//IMAGE MAKER//by Guntur P
case 'flame':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/flametext?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'silktext':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/silktext?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'glow':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/glowtext?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'smoke':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/smoketext?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'crosslogo':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/crosslogo?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'flower':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/flowertext?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'harta':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/hartatahta?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'qrcode':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/qrencode?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'barcode':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/barcode?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'naruto':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/naruto?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'neon': 
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/bneon?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'matrix':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/matrix?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'breakwall':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/breakwall?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'dropwater':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/dropwater?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'crismes':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/crismes?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'pantai':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/tpantai?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'fire':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/tfire?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'write':    
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/sandw?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'cslogo':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/cslogo?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'lithgtext':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/lithgtext?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'skytext':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/skytext?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'light':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/tlight?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'thunder':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/thundertext?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'leavest':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/leavest?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'blackpink':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/logobp?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'text3d':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/text3d?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'text3d2':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/text3dbox?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'splaybutton':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
reply(mess.wait)
anu = await getBuffer(`https://api.zeks.me/api/splaybutton?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'gplaybutton':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
reply(mess.wait)
anu = await getBuffer(`https://api.zeks.me/api/gplaybutton?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'epep':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
reply(mess.wait)
anu = await getBuffer(`https://api.zeks.me/api/epep?apikey=${zekskey}&text=${query}`)
nine.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break

//anime//by Guntur P
case 'art':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/art?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'bts':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/bts?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'exo':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/exo?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'elf':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/elf?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'loli':
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/loli?apikey=${lolkey}`)
reply(mess.wait)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'neko':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/neko?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'waifu':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/waifu?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'shota':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/shota?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'husbu':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/husbu?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'sagiri':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/sagiri?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'shinobu':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/shinobu?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'megumin':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/megumin?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'loli':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/loli?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break


case 'chiisaihentai':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/chiisaihentai?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'trap':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/trap?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'blowjob':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'yaoi':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/yaoi?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'ecchi':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/ecchi?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'hentai':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'ahegao':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'hololewd':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hololewd?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'sideoppai':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/sideoppai?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'animefeets':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animefeets?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'animebooty':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animebooty?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'animethighss':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animethighss?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'hentaiparadise':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentaiparadise?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'animearmpits':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animearmpits?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'hentaifemdom':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentaifemdom?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'lewdanimegirls':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/lewdanimegirls?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'biganimetiddies':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/biganimetiddies?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'animebellybutton':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animebellybutton?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break
case 'hentai4everyone':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai4everyone?apikey=${lolkey}`)
nine.sendMessage(from, anu, image, {quoted: ftrol, caption: mess.success })
break


//sound//by Guntur P
      case 'sound1':
      case 'sound2':
      case 'sound3':
      case 'sound4':
      case 'sound5':
      case 'sound6':
      case 'sound7':
      case 'sound8':
      case 'sound9':
      case 'sound10':
      case 'sound11':
      case 'sound12':
      case 'sound13':
      case 'sound14':
      case 'sound15':
      case 'sound16':
      case 'sound17':
      case 'sound18':
      case 'sound19':
      case 'sound20':
      case 'sound21':
      case 'sound22':
      case 'sound23':
      case 'sound24':
      case 'sound25':
      case 'sound26':
      case 'sound27':
      case 'sound28':
      case 'sound29':
      case 'sound30':
      case 'sound31':
      case 'sound32':
      case 'sound33':
      case 'sound34':
      case 'sound35':
      case 'sound36':
      case 'sound37':
      case 'sound38':
      case 'sound39':
      case 'sound40':
      case 'sound41':
      case 'sound42':
      case 'sound43':
      case 'sound44':
      case 'sound45':
      case 'sound46':
      case 'sound47':
      case 'sound48':
      case 'sound49':
      case 'sound50':
      case 'sound51':
      case 'sound52':
      case 'sound53':
      case 'sound54':
      case 'sound55':
      case 'sound56':
      case 'sound57':
      case 'sound58':
      case 'sound59':
      case 'sound60':
      case 'sound61':
      case 'pripun':
      case 'pasi':
      case 'jancok':
      reply(mess.wait)
         Audio = fs.readFileSync(`./media/mp3/${command}.mp3`)
         nine.sendMessage(from, Audio, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
      break

default:
if (budy.includes(`Assalamualaikum`)) {
nine.sendMessage(from, 'Waalaikumsalam, tuben dahh salam', text, {quoted: mek})
                  }
if (budy.includes(`Tes`)) {
nine.sendMessage(from, 'Hmmm', text, {quoted: mek})
                  }
}
if (budy.startsWith('x')){
try {
return nine.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'WhatsApp', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}

//by Guntur P

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update index.js`);
  delete require.cache[file];
  require(file);
});
