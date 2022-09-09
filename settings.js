const fs = require('fs')
const chalk = require('chalk')
const  { indonesia, english, spanyol} = require(`./language`)

// Website Api (jgn di ganti tomlol)
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey (Apikey expired silahkan login terus ganti V12 dgn apikey lu)
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'V12',  // 👉 login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = true // auto read message
global.autobio = true 
global.userRegister = true 
global.autoblok212 = true //ubah jadi true biar nmr 212 di blok sama bot

//language
//Available in indonesia , english & spanyol 
//You can request others language 
global.language = indonesia  //change indonesia to english if you don't understand the language used by the bot


// Other
// Other
global.botname = "ZennBot-Md" //namabot kalian
global.ownername= "Zen" //nama kalian
global.myweb ="https://telegra.ph/ZENN-BOTZ-09-09" //bebas asal jan hapus
global.youtube = "https://youtube.com" //bebas asal jan hapus
global.myweb2 = "https://trakteer.id/zenbotz/tip" //bebas
global.email = "zennbotz@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.timezone = 'Asia/Jakarta' //  timezone wib
global.premium = ['6281248537085'] //premium user
global.owner = ["6281248537085"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "6281248537085" // nomor wa kalian
global.ownernomerr = "+6281248537085" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.thumbGif = 'https://telegra.ph/file/e90bef3779d3c5812a5d1.mp4'
global.packname = '© ZennBot-Mdོ' //sticker wm ubah
global.author = 'Create By ZennnBotz' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'
global.multiplier = 69
global.limitawal = {
    premium: "10000",
    free: 50
}

global.adventureRPG = 'https://telegra.ph/file/45e830d32be48404c3353.jpg'
global.bankRPG = 'https://telegra.ph/file/8b83f2c1c638216c7c777.jpg'
global.bansosRPG = 'https://telegra.ph/file/eea9c8cf2c2adcad94bdd.jpg'
global.bansosRPG_ = 'https://telegra.ph/file/eea9c8cf2c2adcad94bdd.jpg'
global.berburuRPG = 'https://telegra.ph/file/fbe8d5abf6a7054ff20a1.jpg'
global.inventoryRPG = 'https://telegra.ph/file/b9c92a43d388ed81e9973.jpg'
global.cooldownRPG = 'https://telegra.ph/file/ee4431ca81ceecd257c45.jpg'
global.dailyRPG = 'https://telegra.ph/file/17e857848a3afdb1c4fd8.jpg'
global.hourlyRPG = 'https://telegra.ph/file/bcabf71c0f56207d1629e.jpg'
global.kandangRPG = 'https://telegra.ph/file/89c3b3ec69d373da8f64b.jpg'
global.kolamRGP = 'https://telegra.ph/file/0bc07117c78b2c9674b7d.jpg'
global.mancingRPG = 'https://telegra.ph/file/1420d26b7f04f84993225.jpg'
global.monthlyRPG = 'https://telegra.ph/file/7eadf65b95d9f7a3ecb46.jpg'
global.weeklyRPG = 'https://telegra.ph/file/ffc85895d14db97931f0f.jpg'
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','/','@','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '*Success....*',
    admin: '*「 PERINTAH KHUSUS ADMIN GRUP 」*',
    botAdmin: '*「 BOT HARUS MENJADI ADMIN GRUP 」*',
    owner: '*「 PERINTAH KHUSUS OWNER 」*',
    group: '*「 PERINTAH KHUSUS DI GRUP 」*',
    private: '*「 PERINTAH KHUSUS DI CHAT PRIBADI 」*',
	bot: '*「 FITUR KHUSUS PENGGUNA BOT」*',
    errtoimg: '*「Maaf Saat Ini Belum Support Sticker Gif」*',
    wait: '*[⏳ ]Waitt...Sedang Di Proses*',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
