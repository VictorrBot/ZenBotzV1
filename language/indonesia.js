exports.limitLu = (m) =>{
	return`Sisa limit kamu : ${m} `
	}
	
exports.addstik = (a, b) =>{
	return`List ${a} dengan key ${b} sudah ada di database`
	}
exports.delstik = (a, b) =>{
	return`List ${a} dengan key ${b} tidak ada di database`
	}
exports.profile = (username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, limit, registered, tanggal, regTime,premium, msToDate , premiumDate, now, lastclaim) =>{
	return`š Nama: ${username} (@${m.sender.split`@`[0]})${about ? '\nš Bio: ' + about : ''}
šØāā¤ļøāšØ Status: ${pasangan ? `Berpacaran @${pasangan.split`@`[0]}` : '-' }
#ļøā£ Nomor: ${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}
š Link: https://wa.me/${m.sender.split`@`[0]}
š¤·āāļø XP: Total ${exp} (${exp - min} / ${xp}) [ ${math <= 0 ? `Ready to *${prefix}levelup*` : `${math} XP left to levelup`} ]
šļø Level: ${level}
š¢ Role: ${role}
š Limit: ${limit}
Ā®ļø Registered: ${registered ? 'ā (' + tanggal(regTime) + ')' : 'ā'}
ā½ Premium: ${premium ? `ā\nā° Expired Premium : msToDate(premiumDate - now)` : 'ā'}
š Last claim: ${lastclaim > 0 ? + tanggal(lastclaim) : '-'}`
	}

//
exports.needReg = (a, b, c) =>{
	return`š²šØ Daftar dulu bang

Gini : #daftar nama|umur|gender|hobi
Contoh : #daftar ${a}|18|cowo|Game

šŗš² Please register first

Like this : #register name|age|gender|hobby
Example : #register ${a}|18|male|Games`
}
exports.Nolimit = (prefix) =>{
	return`Limit kamu hari ini telah habis ā ļø\n\nSilahkan beli limit dengan cara ketik ${prefix}buy atau ${prefix}buyall`
	}
exports.Noseri = () =>{
	return`Nomor seri (sn) nya salah`
	}
exports.NoseriOk = () =>{
	return`Berhasil membatalkan pendaftaran!`
	}
exports.ExReg = (c) =>{
	return`š²šØ Gunakan tanda "|" sebagai pembatas

Gini : #daftar nama|umur|gender|hobi

Contoh : #daftar ${a}|18|cowo|Game



šŗš² Use the "|" sign as a barrier


Like this : #register name|age|gender|hobby

Example : #register ${a}|18|male|Games`
	}
exports.DoneReg = () =>{
	return`Kamu sudah terdaftar di database`
	}
exports.UmurReg = () =>{
	return`Umur harus berupa angka`
	}
exports.NamaReg = () =>{
	return`Nama kamu panjang banget, gunakan nama awal saja`
	}
exports.HobiReg = () =>{
	return`Hobi kamu banyak banget, cukup 1 atau 2 hobi saja`
	}
exports.RegReg = (a,b,c,d,e,f,g,h,i) =>{
	return`ā­āć *VERIFIKASI BERHASIL* ć
ā\`\`\`Verifikasi Sukses Dengan\`\`\` 
ā
ā\`\`\`SN: ${a}\`\`\`
ā\`\`\`Pada : ${b}\`\`\`
ā\`\`\`Nama : ${c}\`\`\`
ā\`\`\`Umur : ${d}\`\`\`
ā\`\`\`Gender : ${e}\`\`\`
ā\`\`\`Nomor : @${f}\`\`\`
ā\`\`\`Untuk menggunakan bot silahkan \`\`\`
ā\`\`\`Kirim perintah ${g}menu\`\`\`
ā\`\`\`atau ${h}allmenu\`\`\`
ā
ā\`\`\`\Total : ${i} Users\`\`\`
ā°āāāāāāāāāāāāāāāāāāāāā`
	}
exports.genderReg = (a) =>{
	return`Pilih salah satu ( cewe / cowo)\n\n${a}`
	}
exports.UmurXReg = () =>{
	return`Umur kamu terlalu tua, bukannya mati ehh malah main bot`
	}
exports.firstChat = (a, b, c) =>{
	return`Selamat ${a} ${b} š¤, saya adalah ${c} yaitu bot whatsapp. Ada yang bisa ${c} bantu?`
	}
exports.StartAbsen = () =>{
	return`Mulai Absen`
	}
exports.AddstikOk = (q, a, b, prefix, command) =>{
	return`Sukses Menambahkan ${q} Ke Dalam Database ${a}\n\nCek dengan cara ${prefix}${b}`
	}
	
exports.AddstikOk_ = (a,b) =>{
	return`Durasi ${a} detik, yaitu durasi maksimal ${b} yang bisa bot simpan ke dalam database`
	}
exports.Addvn = () =>{
	return`Tunggu sebentar, saya akan mencoba untuk mengupload media ini ke database`
	}
	
exports.ListStik = (a) =>{
	return`_Untuk mengambil ${a} silahkan kirim pesan sesuai dengan list ${a} yang ada di atas_`
	}
exports.noAbsen = () =>{
return `ā Tidak ada absen berlangsung di group ini !`
}
exports.StartAbsen = () =>{
	return`Mulai Absen`
	}
exports.DahAbsen = () =>{
	return`Kamu sudah absen`
	}
exports.DelAbsen = () =>{
	return`ā Berhasil menghapus absen di group ini`
	}
exports.adaAbsen = () =>{
	return`Masih ada sesi absen di group ini !`
	}
exports.SAbsen = () =>{
	return`Absen dimulai`
	}
//
exports.SetCmd = (prefix, command) =>{
	return`Reply stiker!!\nExample : ${prefix + command} menu\n\n\n*Note : Tidak dapat disertai Prefix!!*`
	}
exports.CmdApa = () =>{
	return`Untuk Command Apa?`
	}
exports.UCmd = () =>{
	return`Anda tidak memiliki izin untuk mengubah perintah stiker ini`
	}
exports.HashCmd = () =>{
	return`Tidak ada hash`
	}
exports.DelCmd = () =>{
	return`ā Sticker cmd telah di hapus`
	}
exports.LockCmd = () =>{
	return`Reply pesan`
	}
exports.NoCmd = () =>{
	return`Hash tidak ditemukan di database`
	}
exports.ReplyMsg = () =>{
	return`Reply Message Yang Ingin Disave Di Database`
	}
exports.NoMsg = (prefix, command) =>{
	return`Contoh : ${prefix + command} nama file`
	}
exports.AdMsg = (text) => {
    return `'${text}' telah terdaftar di list pesan`
}
exports.DoneMsg = (prefix, text) => {
    return `Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}
Lihat list Pesan Dengan ${prefix}listmsg`
}
exports.GetMsg = (prefix, command) => {
    return `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
}
exports.NoInMsg = (text) => {
    return `'${text}' tidak terdaftar di list pesan`
}
exports.DelMsg = (text) => {
    return `Berhasil menghapus '${text}' dari list pesan`
}

exports.OnBef = () => {
    return `Sudah di aktifkan sebelumnya`
}
exports.OffYaBef = () => {
    return `Sudah di nonaktifkan sebelumnya`
}
exports.OkOn = (command) => {
    return `${command} Berhasil Di Aktifkan !`
}
exports.OffBef = (command) => {
    return `${command} Berhasil Di Nonaktifkan !`
}
exports.OkMute = () => {
    return `Bot Telah Di Mute Di Group Ini`
}
exports.OkUnMute = () => {
    return `Bot Berhasil Di UnMute`
}
exports.OkUnBanC = () => {
    return `Bot Berhasil Di unban chat`
}
exports.NoMute = () => {
    return `Bot belum di ban dalam group ini`
}

exports.NoMsgBot = () => {
    return `Pesan tersebut bukan dikirim oleh bot!`
}
exports.ToimgErr = () => {
    return `Maaf Saat Ini Belum Support Sticker Gif`
}
exports.NoToImg = (prefix, command) => {
    return `Reply Sticker Dengan Caption *${prefix + command}*`
}
exports.BotPublic = () => {
    return `Sukses Ganti Ke Mode Public`
}
exports.BotSelf = () => {
    return `Sukses Ganti Ke Mode Self\n\nUntuk mengubah ke mode public silahkan gunakan nomor bot`
}
exports.NoToStik = (prefix, command) => {
    return `Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`
}
exports.NoPpBot = (prefix, command) => {
    return `Kirim/Reply Image Dengan Caption ${prefix + command}`
}
exports.ToAud = (prefix, command) => {
    return `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
}
exports.ToMp3 = (prefix, command) => {
    return `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
}
exports.ToVn= (prefix, command) => {
    return `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
}
exports.NoQouted = () => {
    return `Pesan Yang anda reply tidak mengandung reply`
}
exports.SetGcName = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks*`
}
exports.SetPpGc = (prefix, command) => {
    return `Kirim/Reply Image Dengan Caption ${prefix + command}`
}
exports.JoinGc = () => {
    return `Masukkan Link Group!`
}
exports.MauKick = () => {
    return `Kirim nomer/tag/reply target yang ingin di kick !`
}
exports.MauAdd = () => {
    return `Kirim nomer/tag/reply target yang ingin di add !`
}
exports.NakPm= () => {
    return `Kirim nomer/tag/reply target yang ingin di promote !`
}
exports.NakDm = () => {
    return `Kirim nomer/tag/reply target yang ingin di demote !`
}
exports.Family = () => {
    return `Masih Ada Sesi Yang Belum Diselesaikan!`
}
exports.NoWm = (prefix, command) => {
    return `Kirim perintah ${prefix + command} packname|author`
}
exports.DoneExif = (packname, author) => {
    return `Exif Berhasil Diubah Menjadi\n\nPackname : ${packname}\nAuthor : ${author}`
}
exports.NoTeksOne = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks*\n\nContoh : ${prefix + command} WhatsApp Bot`
}
exports.NoTeksTwo = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks 1|teks 2*\n\nContoh : ${prefix + command} WhatsApp|Bot`
}
exports.OffNsfw = () => {
    return `Fitur nsfw belum di aktifkan`
}
exports.CoverBanLol = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|jinx7`
}
exports.coverbannerlol = (style) => {
    return `*Heroes Yg Kamu Masukkan Salah*\n\n_Berikut list heroes yg benar, Total_ *${style}* _heroes_\n\n`
}
exports.pubglogomaker = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|women`
}
exports.pubglogomaker_ = (style) => {
    return `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style}* _style_\n\n`
}
exports.colorfulpubg = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|color\nUsage: ${prefix + command} zeeone|gold`
}
exports.colorfulpubg_ = (style) => {
    return `*Color Yg Kamu Masukkan Salah*\n\n_Berikut list color yg benar, Total_ *${style}* _color_\n\n`
}
exports.astronotspace = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`
}
exports.wallpaperaov = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|allain`
}
exports.maketeamlogo = (style, style2, prefix, command) => {
    return `Contoh: ${prefix + command} nama|${style}\nUsage: ${prefix + command} zeeone|${style2}`
}

exports.MaketeamlogoT = (a, b, c, d, e, f, g, h) => {
    return `Contoh: ${g + h} ${a}|${b}|${c}\nUsage: ${g + h} ${e}|${f}|${d}`
}
exports.maketeamlogo_ = (style, style2) => {
    return `*${style2} Yg Kamu Masukkan Salah*\n\n_Berikut List ${style2} Yg Benar, Total_ *${style}* _${style2}_\n\n`
}

exports.KisahNabi = (prefix, command, style) => {
    return `Contoh penggunaan : \n${prefix + command} ${style}`
}
exports.quran2 = (prefix, command, juz , brp) => {
    return `Contoh : ${prefix + command} ${juz}\nUsage: ${prefix + command} ${brp}`
}

exports.quran3 = (prefix, command, surah , ayat, brp, brp2) => {
return`Contoh penggunaan : ${prefix + command} ${surah}|${ayat}\nUsage: ${prefix + command} ${brp}|${brp2}`
}

exports.JwbErr = () => {
    return `ā Jawaban Salah`
}

exports.JwbTrue = (tebak) => {
return`š® ${tebak} š®\n\nJawaban Benar š\n\nIngin bermain lagi? tekan button dibawah`
}
exports.TbGam = () => {
    return `Tebak Gambar`
}
exports.TbKa = () => {
    return `Tebak Kata`
}
exports.TbBe = () => {
    return `Tebak Bendera`
}
exports.TbCak = () => {
    return `Cak Lontong`
}
exports.TbSu = () => {
    return `Susun Kata`
}
exports.TbAt = () => {
    return `Tebak Kalimat`
}
exports.TbSi = () => {
    return `Tebak Siapa`
}
exports.Tbte = () => {
    return `Teka Teki`
}
exports.TbEn = () => {
    return `Tebak Kabupaten`
}
exports.TbKi = () => {
    return `Tebak Kimia`
}
exports.TbLi = () => {
    return `Tebak Lirik`
}
exports.TbKan = () => {
    return `Tebak Tebakan`
}

exports.TbFamily = (soal, jawaban, find) => {
    return `*Jawablah Pertanyaan Berikut :*\n${soal}\n\nTerdapat *${jawaban}* Jawaban ${find(v => v.includes(' ')) ? '(Beberapa Jawaban Terdapat Spasi)' : ''}`
}

exports.TbAfk = (nama, afk) => {
    return `${nama} Telah Afk Dengan Alasan ${afk ? ': ' + afk : 'Nothing'}`
}

exports.TbGambar = (desk, time) => {
    return `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${desk}\nWaktu : ${time}`
}
exports.TbGambar_ = (jawaban) => {
    return `Waktu Habis\nJawaban:  ${jawaban}`
}
exports.TbGambar__ = (jawaban, desk) => {
    return `Waktu Habis\nJawaban:  ${jawaban}}\nDeskripsi : ${desk}`
}
exports.TbKata = (soal, time) => {
    return `Silahkan Jawab Pertanyaan Berikut\n\n${soal}\nWaktu : ${time}`
}
exports.TbBendera = (time) => {
    return `Silahkan Jawab Pertanyaan Diatas\n\nWaktu : ${time}`
}
exports.TbKabupaten = (time) => {
    return `Gambar Diatas Adalah Gambar dari Kabupaten?\nWaktu : ${time}`
}
exports.TbKimia = (soal, time) => {
    return `Apa Arti Dari Simbol : *${soal}*?\nWaktu : ${time}`
}
exports.TbLirik = (soal, time) => {
    return `Ini Adalah Lirik Dari Lagu? : *${soal}*?\nWaktu : ${time}`
}
exports.TbSusun = (soal, tipe, time) => {
    return `*Jawablah Pertanyaan Berikut :*\nSoal : ${soal}\nTipe : ${tipe}\nWaktu : ${time}`
}
exports.TbMath = (modes, prefix, command) => {
    return `Mode: ${modes}\nContoh penggunaan: ${prefix + command} medium`
}
exports.TbMath_ = (soal, time) => {
    return `*Berapa hasil dari: ${soal}*?\n\nWaktu: ${time} detik`
}
exports.TbJail = (prefix, command) => {
    return `Kirim/Reply Foto/Sticker Dengan Caption ${prefix + command}`
}
exports.TbRepo = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *user* *repo* *branch*\n\nExp. ${prefix + command} *zeeone-ofc* *Alphabot-Md* *v12*`
}
exports.StalkIg = () => {
    return `Masukkan username`
}
exports.Tomp4 = (prefix, command) => {
    return `Reply stiker gif dengan caption ${prefix + command}`
}
exports.Tourl = (prefix, command) => {
    return `Kirim/Reply Media Dengan Caption ${prefix + command}`
}
exports.Smeme = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`
}
exports.Smeme_ = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|tesk2*`
}
exports.Bcall = (anu, time, chat) => {
    return `Mengirim Broadcast Ke ${anu} ${chat}\nWaktu Selesai ${time * 1.5} detik`
}
exports.Stag = (prefix, command) => {
    return `Reply sticker dengan caption ${prefix + command}`
}
exports.Vtag = (prefix, command, video) => {
    return `Kirim/reply ${video} dengan caption ${prefix + command}`
}
exports.TrLate = (prefix, command) => {
    return `Contoh :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
	ā¢ Contoh : ${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
	ā¢ Contoh : ${prefix + command} id halo
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`
}
exports.Addlist = () => {
    return `Key tidak boleh sama dengan fitur / command bot`
}
exports.Addlist_ = (prefix, command) => {
    return `Gunakan dengan cara ${prefix + command} *key|response*\n\n_Contoh_\n\n${prefix + command} Hi|Halo`
}
exports.Addlist__ = (arg) => {
    return `List respon dengan key : *${arg}* sudah ada di group ini.`
}
exports.AddlistDone = (arg) => {
    return `Sukses set list message dengan key : *${arg}*\n\nNote : Tunggu beberapa menit jika list tidak berubah`
}
exports.Dellist = () => {
    return `Belum ada list message di database`
}
exports.Dellist_  = (prefix, command) => {
    return `Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} Hi`
}
exports.Dellist__ = (key) => {
    return `List respon dengan key *${key}* tidak ada di database!`
}
exports.DellistDone = (key) => {
    return `Sukses delete list message dengan key *${key}*`
}
exports.ListUp = (key) => {
    return `Maaf, untuk key *${key}* belum terdaftar di group ini`
}
exports.UpList = (key) => {
    return `Sukses update list message dengan key : *${key}*\n\nNote : Tunggu beberapa menit jika list tidak berubah`
}
exports.Anonymous = (pushname, prefix) => {
    return `Hai ${pushname} Selamat Datang di Anonymous Chat\n\nKetik ${prefix}start untuk mencari Teman Chat anda, atau bisa pencet tombol Search dibawah`
}
exports.Anon = () => {
    return `Cari Teman Chat`
}
exports.StopAnon = () => {
    return `Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner `
}
exports.AnonNew = () => {
    return `Cari Teman Baru`
}
exports.AnonDahStop = () => {
    return `ā Berhasil memberhentikan chat`
}
exports.StopAnonByFren = () => {
    return `ā ļø Sesi chat ini telah diberhentikan oleh teman chat kamu`
}
exports.AnonOn = () => {
    return `ā ļø Kamu masih dalam sesi chat dengan partner!`
}
exports.AnonFind = (prefix) => {
    return `_Pasangan Ditemukan š¼_\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_`
}
exports.AnonSearch = () => {
    return `š Mohon tunggu sedang mencari teman chat`
}
exports.NoAnon = () => {
    return `ā ļø Kamu belum pernah memulai chat!`
}
exports.NoAudRep = (prefix, command) => {
    return `Balas audio yang ingin diubah dengan caption *${prefix + command}*`
}

exports.NoTagBan = (prefix, command) => {
    return `Contoh penggunaan :\n${prefix + command} 62938828728992 \natau\n${prefix + command} @tagmember`
}
exports.getBan = (a) => {
    return `ā ļø Mohon maaf nomor kamu telah di banned oleh owner\n\nOwner š\nwa.me/${a}`
}
exports.Addstik = (prefix, command, t) => {
    return `Reply ${t} dengan caption ${prefix + command} text\n\nExample : ${prefix + command} bot`
}
exports.AllFitur = () => {
    return `\n_Semua fitur bot_`
}
exports.InfoMenu = () => {
    return `\n_Mencari informasi terkini melalui bot_`
}
exports.KhususOwn = () => {
    return `\n_Fitur khusus owner bot_`
}
exports.DataBor = () => {
    return `\n_Menyimpan sesuatu di database bot_`
}
exports.MenuGc = () => {
    return `\n_Menampilkan fitur khusus group_`
}
exports.MenuAni = () => {
    return `\n_Mencari random gambar anime_`
}
exports.TagMem = () => {
    return `\n_Menandai member group_`
}
exports.StalkOrk = () => {
    return `\n_Kepoin sosmed orang_`
}
exports.Hoja = () => {
    return `\n_Mencari sesuatu yang gk penting_`
}
exports.CovertWi = () => {
    return `\n_Mengkorversi sesuatu dengan bot_`
}
exports.AnuFoto = () => {
    return `\n_Mengubah gambar jadi lebih menarik_`
}
exports.HajuStik = () => {
    return `\n_Membuat stiker yang unik_`
}
exports.EloDown= () => {
    return `\n_Menampilkan fitur download_`
}
exports.StikerWibu = () => {
    return `\n_Random stiker anime_`
}
exports.ImageDewasa = () => {
    return `\n_Random image anime 18+_`
}
exports.MakeLogo = () => {
    return `\n_Untuk membuat logo menggunakan bot_`
}
exports.oterMenu = () => {
    return `\n_Menu lainnya_`
}
exports.GameBot = () => {
    return `\n_Fitur untuk bermain dengan bot_`
}
exports.RandRik = () => {
    return `\n_Random video tiktok_`
}
exports.RandCew = () => {
    return `\n_Random gambar cewe cantik_`
}
exports.RamalOi = () => {
    return `\n_Ramalan masa kini_`
}
exports.TeleStik= () => {
    return `\n_Random stiker dari telegram_`
}
exports.BuatLogoLagi = () => {
    return `\n_Membuat logo keren dengan bot_`
}
exports.SoundNih= () => {
    return `\n_Random sound_`
}
exports.KanLogoLagi = () => {
    return `\n_Membuat logo menarik_`
}
exports.TobatBro = () => {
    return `\n_Fitur islami_`
}
exports.MauJualan = () => {
    return `\n_Fitur untuk berjualan_`
}
exports.Maustorage = () => {
    return `\n_Fitur untuk menyimpan stiker, audio, foto dan video_`
}
exports.MauChanger = () => {
    return `\n_Fitur untuk mengubah suara audio / vn_`
}
exports.GadaChat = () => {
    return `\n_Fitur untuk melakukan chat random_`
}
exports.SumberBot = () => {
    return `\n_Sumber script bot ini_`
}
exports.Tqnya = () => {
    return `\n_Siapa aja yang berkontribusi di dalam bot ini_`
}
exports.SetAh = () => {
    return `Mau set menu ya ?`
}
exports.KickAh = (gc) => {
    return `*Antilink Group Terdeteksi*\n\nKamu akan dikeluarkan dari group ${gc}`
    }
    exports.GjdKick = () => {
    return `Sepertinya kamu mengirimkan link group ini, kamu tidak akan di keluarkan`
    }
/////////

/////////
exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `ā³ Mohon tunggu sebentar`
}
exports.ok = () => {
    return `ā Done.`
}

exports.err = () => {
    return `ā ļø Fitur Sedang Error`
}
exports.erorLink = () => {
    return `ā ļø Link nya error`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah ā Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `ā Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `ā Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `ā Command ini khusus Owner`
}

exports.doneOwner = () => {
    return `ā  ļøSudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `š„  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `š  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*āā ć HALL OF SHAME ć āā*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `ā User bukan seorang admin! ā`
}

exports.adminAlready = () => {
    return `ā Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! š`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hai kak ${pushname} š selamat ${salam} , 
saya ${botname}, bot ini adalah Beta Multi-Device Whatsapp.
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*āTime Server : ${time}*
*š List-Menu Bot :*

ā­āāā¢ ć Bot Info ć 
ā āøĶŪ«ŪŖ  !owner
ā āøĶŪ«ŪŖ  !rules
ā āøĶŪ«ŪŖ !sc
ā āøĶŪ«ŪŖ !ping
ā āøĶŪ«ŪŖ !runtime
ā āøĶŪ«ŪŖ !botstatus
ā āøĶŪ«ŪŖ !donate
ā°āāāāāāāāāāāāāāāāāāā


ā­āāā¢ ć Owner ć 
ā āøĶŪ«ŪŖ !setmenu [query]
ā āøĶŪ«ŪŖ !setmenu templateLocation
ā āøĶŪ«ŪŖ !setmenu templateTenor
ā āøĶŪ«ŪŖ !setmenu katalog
ā āøĶŪ«ŪŖ !setmenu katalog2
ā āøĶŪ«ŪŖ !setmenu list
ā āøĶŪ«ŪŖ !setwm packname|author
ā āøĶŪ«ŪŖ !sendsesi
ā āøĶŪ«ŪŖ !listpc
ā āøĶŪ«ŪŖ !listgc
ā āøĶŪ«ŪŖ !broadcast [text]
ā āøĶŪ«ŪŖ !bc [text]
ā āøĶŪ«ŪŖ !bcgc 
ā āøĶŪ«ŪŖ !bcimage
ā āøĶŪ«ŪŖ !bcaudio
ā āøĶŪ«ŪŖ !bcstiker
ā āøĶŪ«ŪŖ !bcvn
ā āøĶŪ«ŪŖ !bcvideo
ā āøĶŪ«ŪŖ !banuser
ā āøĶŪ«ŪŖ !unban
ā āøĶŪ«ŪŖ !banned
ā āøĶŪ«ŪŖ !listbanned
ā āøĶŪ«ŪŖ !block
ā āøĶŪ«ŪŖ !ublock
ā āøĶŪ«ŪŖ !listblock
ā āøĶŪ«ŪŖ !addpremium
ā āøĶŪ«ŪŖ !delpremium
ā āøĶŪ«ŪŖ !listpremium
ā āøĶŪ«ŪŖ !nsfw [on/off]
ā āøĶŪ«ŪŖ !mute [on/off]
ā āøĶŪ«ŪŖ !autoblok212 [on/off]
ā āøĶŪ«ŪŖ !banchat
ā āøĶŪ«ŪŖ !unbanchat
ā āøĶŪ«ŪŖ !autorespond [on/off]
ā āøĶŪ«ŪŖ !antiviewonce [on/off]
ā āøĶŪ«ŪŖ !autobio [on/off]
ā āøĶŪ«ŪŖ !join [link]
ā āøĶŪ«ŪŖ !self
ā āøĶŪ«ŪŖ !public [only bot]
ā āøĶŪ«ŪŖ !del [reply pesan bot]
ā āøĶŪ«ŪŖ !pppanjang
ā āøĶŪ«ŪŖ !setpppanjang
ā āøĶŪ«ŪŖ !setppbot [reply image]
ā°āāāāāāāāāāāāāāāāāāā

ā­āāā¢ ć Store Menu ć
ā āøĶŪ«ŪŖ !list
ā āøĶŪ«ŪŖ !addlist [key|respond]
ā āøĶŪ«ŪŖ !dellist [key]
ā āøĶŪ«ŪŖ !update [key|respond]
ā āøĶŪ«ŪŖ !store
ā āøĶŪ«ŪŖ !kali
ā āøĶŪ«ŪŖ !bagi
ā āøĶŪ«ŪŖ !tambah
ā āøĶŪ«ŪŖ !kurang
ā āøĶŪ«ŪŖ !kalkulator
ā āøĶŪ«ŪŖ !setproses
ā āøĶŪ«ŪŖ !updateproses
ā āøĶŪ«ŪŖ !cekproses
ā āøĶŪ«ŪŖ !delproses
ā āøĶŪ«ŪŖ !setdone
ā āøĶŪ«ŪŖ !updatedone
ā āøĶŪ«ŪŖ !cekdone
ā āøĶŪ«ŪŖ !deldone
ā āøĶŪ«ŪŖ !pay
ā āøĶŪ«ŪŖ !setcaptionpay
ā āøĶŪ«ŪŖ !setpaysewa
ā āøĶŪ«ŪŖ !proses
ā āøĶŪ«ŪŖ !done
ā°āāāāāāāāāāāāāāāāāāā

ā­āāā¢ ć Anonymous ć
ā āøĶŪ«ŪŖ !anonymous 
ā āøĶŪ«ŪŖ !start
ā āøĶŪ«ŪŖ !skip [daerah]
ā āøĶŪ«ŪŖ !stop [surah|ayat]
ā°āāāāāāāāāāāāāāāāāāā


ā­āāā¢ ć Database ć 
ā āøĶŪ«ŪŖ !setcmd [reply stiker]
ā āøĶŪ«ŪŖ !delcmd [reply stiker]
ā āøĶŪ«ŪŖ !listcmd
ā āøĶŪ«ŪŖ !absen
ā āøĶŪ«ŪŖ !cekabsen
ā āøĶŪ«ŪŖ !deleteabsen
ā āøĶŪ«ŪŖ !absenstart
ā āøĶŪ«ŪŖ !addmsg [nama file]
ā āøĶŪ«ŪŖ !getmsg [nama file]
ā āøĶŪ«ŪŖ !listmsg
ā āøĶŪ«ŪŖ !delmsg [nama file]
ā°āāāāāāāāāāāāāāāāāāā

ā­āāā¢ ć Rpg Games ć
ā āøĶŪ«ŪŖ !adventure
ā āøĶŪ«ŪŖ !weekly
ā āøĶŪ«ŪŖ !use
ā āøĶŪ«ŪŖ !transfer
ā āøĶŪ«ŪŖ !slot
ā āøĶŪ«ŪŖ !shop
ā āøĶŪ«ŪŖ !pasar
ā āøĶŪ«ŪŖ !profile
ā āøĶŪ«ŪŖ !ojek
ā āøĶŪ«ŪŖ !open
ā āøĶŪ«ŪŖ !nguli
ā āøĶŪ«ŪŖ !narik
ā āøĶŪ«ŪŖ !nabung
ā āøĶŪ«ŪŖ !monthly
ā āøĶŪ«ŪŖ !mining
ā āøĶŪ«ŪŖ !merampok
ā āøĶŪ«ŪŖ !mancing
ā āøĶŪ«ŪŖ !kolam
ā āøĶŪ«ŪŖ !koboy
ā āøĶŪ«ŪŖ !kerja
ā āøĶŪ«ŪŖ !kandang
ā āøĶŪ«ŪŖ !judi
ā āøĶŪ«ŪŖ !inventory
ā āøĶŪ«ŪŖ !hourly
ā āøĶŪ«ŪŖ !fishop
ā āøĶŪ«ŪŖ !feed
ā āøĶŪ«ŪŖ !duel
ā āøĶŪ«ŪŖ !daily
ā āøĶŪ«ŪŖ !craft
ā āøĶŪ«ŪŖ !cooldown
ā āøĶŪ«ŪŖ !cook
ā āøĶŪ«ŪŖ !collect
ā āøĶŪ«ŪŖ !chop
ā āøĶŪ«ŪŖ !casino
ā āøĶŪ«ŪŖ !buy
ā āøĶŪ«ŪŖ !bank 
ā āøĶŪ«ŪŖ !bansos
ā āøĶŪ«ŪŖ !berdagang
ā āøĶŪ«ŪŖ !berkebon
ā āøĶŪ«ŪŖ !build
ā°āāāāāāāāāāāāāāāāāāā

ā­āāā¢ ć Group ć 
ā āøĶŪ«ŪŖ !addsewa
ā āøĶŪ«ŪŖ !delsewa
ā āøĶŪ«ŪŖ !register
ā āøĶŪ«ŪŖ !unregister
ā āøĶŪ«ŪŖ !ceksn
ā āøĶŪ«ŪŖ !listonline
ā āøĶŪ«ŪŖ !sider
ā āøĶŪ«ŪŖ !wm packname|author
ā āøĶŪ«ŪŖ !infochat
ā āøĶŪ«ŪŖ !setdesk [text]
ā āøĶŪ«ŪŖ !setppgrup [reply image]
ā āøĶŪ«ŪŖ !pppanjanggc
ā āøĶŪ«ŪŖ !setpppanjanggc
ā āøĶŪ«ŪŖ !revoke
ā āøĶŪ«ŪŖ !leave
ā āøĶŪ«ŪŖ !add [62***]
ā āøĶŪ«ŪŖ !kick @tag
ā āøĶŪ«ŪŖ !leave
ā āøĶŪ«ŪŖ !linkgc
ā āøĶŪ«ŪŖ !welcome [on/off]
ā āøĶŪ«ŪŖ !goodbye [on/off]
ā āøĶŪ«ŪŖ !demotedetect [on/off]
ā āøĶŪ«ŪŖ !promotedetect  [on/off]
ā āøĶŪ«ŪŖ !setwelcome
ā āøĶŪ«ŪŖ !updatewelcome
ā āøĶŪ«ŪŖ !delwelcome
ā āøĶŪ«ŪŖ !cekwelcome
ā āøĶŪ«ŪŖ !setgoodbye
ā āøĶŪ«ŪŖ !updategoodbye
ā āøĶŪ«ŪŖ !delgoodbye
ā āøĶŪ«ŪŖ !cekgoodbye
ā āøĶŪ«ŪŖ !setpromote
ā āøĶŪ«ŪŖ !updatepromote
ā āøĶŪ«ŪŖ !setdemote
ā āøĶŪ«ŪŖ !updatedemote
ā āøĶŪ«ŪŖ !cekpromote
ā āøĶŪ«ŪŖ !cekdemote
ā āøĶŪ«ŪŖ !delpromote
ā āøĶŪ«ŪŖ !deldemote
ā āøĶŪ«ŪŖ !nsfw [on/off]
ā āøĶŪ«ŪŖ !antilink [on/off]
ā āøĶŪ«ŪŖ !take packname|author
ā āøĶŪ«ŪŖ !group [open/close]
ā āøĶŪ«ŪŖ !tagall [text]
ā āøĶŪ«ŪŖ !hidetag [text]
ā°āāāāāāāāāāāāāāāāāāā

ā­āāā¢ ć Anime ć 
ā āøĶŪ«ŪŖ !quotesanime
ā āøĶŪ«ŪŖ !anime [query]
ā āøĶŪ«ŪŖ !animeinfo
ā āøĶŪ«ŪŖ !manga [query]
ā āøĶŪ«ŪŖ !character [query]
ā°āāāāāāāāāāāāāāāāāāā

ā­āāā¢ ć Tag ć 
ā āøĶŪ«ŪŖ !stickertag
ā āøĶŪ«ŪŖ !videotag [query]
ā āøĶŪ«ŪŖ !vntag [query]
ā āøĶŪ«ŪŖ !imagetag [query]
ā°āāāāāāāāāāāāāāāāāāā

ā­āāā¢ ć Stalking ć 
ā āøĶŪ«ŪŖ !igstalk [username]
ā āøĶŪ«ŪŖ !ghstalk [username]
ā āøĶŪ«ŪŖ !ytstalk [channel]
ā°āāāāāāāāāāāāāāāāāāā


ā­āāā¢ ć Search ć 
ā āøĶŪ«ŪŖ !ytsearch [query]
ā āøĶŪ«ŪŖ !wallpaper [query]
ā āøĶŪ«ŪŖ !google [query]
ā āøĶŪ«ŪŖ !wikimedia [query]
ā āøĶŪ«ŪŖ !apksearch
ā āøĶŪ«ŪŖ !findapk
ā āøĶŪ«ŪŖ !hentai
ā āøĶŪ«ŪŖ !wattpad [query]
ā āøĶŪ«ŪŖ !webtoons [query]
ā āøĶŪ«ŪŖ !drakor [query]
ā āøĶŪ«ŪŖ !pinterest [query]
ā°āāāāāāāāāāāāāāāāāāā


ā­āāā¢ ć Converter ć
ā āøĶŪ«ŪŖ !emoji [š­]
ā āøĶŪ«ŪŖ !emojimix [š­+š©]
ā āøĶŪ«ŪŖ !toaudio [video]
ā āøĶŪ«ŪŖ !tomp3 [video]
ā āøĶŪ«ŪŖ !tovn [video]
ā āøĶŪ«ŪŖ !stiker [reply image]
ā āøĶŪ«ŪŖ !tourl [image/video/stiker]
ā āøĶŪ«ŪŖ !togif [sticker]
ā āøĶŪ«ŪŖ !tomp4 [sticker]
ā āøĶŪ«ŪŖ${prefix}toimg [reply sticker]
ā°āāāāāāāāāāāāāāāāāāā


ā­āāā¢ ć Image Effect ć 
ā āøĶŪ«ŪŖ !wanted [reply image/stiker]
ā āøĶŪ«ŪŖ !utatoo [reply image/stiker]
ā āøĶŪ«ŪŖ !unsharpen [reply image/stiker]
ā āøĶŪ«ŪŖ !thanos [reply image/stiker]
ā āøĶŪ«ŪŖ !sniper [reply image/stiker]
ā āøĶŪ«ŪŖ !sharpen [reply image/stiker]
ā āøĶŪ«ŪŖ !sepia [reply image/stiker]
ā āøĶŪ«ŪŖ !scary [reply image/stiker]
ā āøĶŪ«ŪŖ !rip [reply image/stiker]
ā āøĶŪ«ŪŖ !redple [reply image/stiker]
ā āøĶŪ«ŪŖ !rejected [reply image/stiker]
ā āøĶŪ«ŪŖ !posterize [reply image/stiker]
ā āøĶŪ«ŪŖ !ps4 [reply image/stiker]
ā āøĶŪ«ŪŖ !pixelize [reply image/stiker]
ā āøĶŪ«ŪŖ !missionpassed [reply image/stiker]
ā āøĶŪ«ŪŖ !moustache [reply image/stiker]
ā āøĶŪ«ŪŖ !lookwhatkarenhave [reply image/stiker]
ā āøĶŪ«ŪŖ !jail [reply image/stiker]
ā āøĶŪ«ŪŖ !invert [reply image/stiker]
ā āøĶŪ«ŪŖ !instagram [reply image/stiker]
ā āøĶŪ«ŪŖ !greyscale [reply image/stiker]
ā āøĶŪ«ŪŖ !glitch2 [reply image/stiker]
ā āøĶŪ«ŪŖ !gay [reply image/stiker]
ā āøĶŪ«ŪŖ !frame [reply image/stiker]
ā āøĶŪ«ŪŖ !fire [reply image/stiker]
ā āøĶŪ«ŪŖ !distort [reply image/stiker]
ā āøĶŪ«ŪŖ !dictator [reply image/stiker]
ā āøĶŪ«ŪŖ !deepfry [reply image/stiker]
ā āøĶŪ«ŪŖ !ddungeon [reply image/stiker]
ā āøĶŪ«ŪŖ !circle [reply image/stiker]
ā āøĶŪ«ŪŖ !challenger [reply image/stiker]
ā āøĶŪ«ŪŖ !burn [reply image/stiker]
ā āøĶŪ«ŪŖ !brazzers [reply image/stiker]
ā āøĶŪ«ŪŖ !beautiful [reply image/stiker]
ā°āāāāāāāāāāāāāāāāāāā


ā­āāā¢ ć Sticker Effect ć 
ā āøĶŪ«ŪŖ !jail [reply image/stiker]
ā āøĶŪ«ŪŖ !red [reply image/stiker]
ā āøĶŪ«ŪŖ !gay [reply image/stiker]
ā āøĶŪ«ŪŖ !bloo [reply image/stiker]
ā āøĶŪ«ŪŖ !blue [reply image/stiker]
ā āøĶŪ«ŪŖ !sepia [reply image/stiker]
ā āøĶŪ«ŪŖ !green [reply image/stiker]
ā āøĶŪ«ŪŖ !glass [reply image/stiker]
ā āøĶŪ«ŪŖ !invert [reply image/stiker]
ā āøĶŪ«ŪŖ !blurple [reply image/stiker]
ā āøĶŪ«ŪŖ !blurple2 [reply image/stiker]
ā āøĶŪ«ŪŖ !wasted [reply image/stiker]
ā āøĶŪ«ŪŖ !passed [reply image/stiker]
ā āøĶŪ«ŪŖ !triggered [reply image/stiker]
ā āøĶŪ«ŪŖ !comrade [reply image/stiker]
ā āøĶŪ«ŪŖ !greyscale [reply image/stiker]
ā āøĶŪ«ŪŖ !threshold [reply image/stiker]
ā āøĶŪ«ŪŖ !brightness [reply image/stiker]
ā āøĶŪ«ŪŖ !invertgreyscale [reply image/stiker]
ā°āāāāāāāāāāāāāāāāāāā


ā­āāā¢ ć Download ć 
ā āøĶŪ«ŪŖ !tiktok [link]
ā āøĶŪ«ŪŖ !tiktoknowm [link]
ā āøĶŪ«ŪŖ !tiktokwm [link]
ā āøĶŪ«ŪŖ !tiktokaudio [link]
ā āøĶŪ«ŪŖ !ytdl [link]
ā āøĶŪ«ŪŖ !play [query]
ā āøĶŪ«ŪŖ !ytmp3 [link]
ā āøĶŪ«ŪŖ !ytshortmp3 [link]
ā āøĶŪ«ŪŖ !ytmp4 [link]
ā āøĶŪ«ŪŖ !ytshorts [link]
ā āøĶŪ«ŪŖ !facebook [link]
ā āøĶŪ«ŪŖ !facebooksd [link]
ā āøĶŪ«ŪŖ !facebookhd [link]
ā āøĶŪ«ŪŖ !fbaudio [link]
ā āøĶŪ«ŪŖ !igstory [username]
ā āøĶŪ«ŪŖ !igdl [link]
ā āøĶŪ«ŪŖ !igphoto [link]
ā āøĶŪ«ŪŖ !igvideo [link]
ā āøĶŪ«ŪŖ !igreels [link]
ā āøĶŪ«ŪŖ !igtv [link]
ā āøĶŪ«ŪŖ !soundcloud [link]
ā āøĶŪ«ŪŖ !gitclone [link repo]
ā āøĶŪ«ŪŖ !gitrepo [username repo branch]
ā āøĶŪ«ŪŖ !mediafire [link]
ā āøĶŪ«ŪŖ !twitter link
ā°āāāāāāāāāāāāāāāāāāā

ā­āāā¢ ć Primbon ć
ā āøĶŪ«ŪŖ !nomorhoki 887435047326
ā āøĶŪ«ŪŖ !artimimpi [query]
ā āøĶŪ«ŪŖ !artinama [query]
ā āøĶŪ«ŪŖ !ramaljodoh
ā āøĶŪ«ŪŖ !ramaljodohbali
ā āøĶŪ«ŪŖ !suamiistri
ā āøĶŪ«ŪŖ !ramalcinta
ā āøĶŪ«ŪŖ !cocoknama
ā āøĶŪ«ŪŖ !pasangan
ā āøĶŪ«ŪŖ !jadiannikah
ā āøĶŪ«ŪŖ !sifatusaha
ā āøĶŪ«ŪŖ !rezeki
ā āøĶŪ«ŪŖ !pekerjaan
ā āøĶŪ«ŪŖ !nasib
ā āøĶŪ«ŪŖ !penyakit
ā āøĶŪ«ŪŖ !tarot
ā āøĶŪ«ŪŖ !fengshui
ā āøĶŪ«ŪŖ !haribaik
ā āøĶŪ«ŪŖ !harisangar
ā āøĶŪ«ŪŖ !harisial
ā āøĶŪ«ŪŖ !nagahari
ā āøĶŪ«ŪŖ !arahrezeki
ā āøĶŪ«ŪŖ !peruntungan
ā āøĶŪ«ŪŖ !weton
ā āøĶŪ«ŪŖ !karakter
ā āøĶŪ«ŪŖ !keberuntungan
ā āøĶŪ«ŪŖ !memancing
ā āøĶŪ«ŪŖ !masasubur
ā āøĶŪ«ŪŖ !zodiak 
ā āøĶŪ«ŪŖ !shio [query]

ā­āāā¢ ć Random Anime ć
ā āøĶŪ«ŪŖ !loli
ā āøĶŪ«ŪŖ !neko
ā āøĶŪ«ŪŖ !waifu
ā āøĶŪ«ŪŖ !shinobu
ā āøĶŪ«ŪŖ !megumin
ā āøĶŪ«ŪŖ !bully
ā āøĶŪ«ŪŖ !cuddle
ā āøĶŪ«ŪŖ !cry
ā āøĶŪ«ŪŖ !hug
ā āøĶŪ«ŪŖ !awoo
ā āøĶŪ«ŪŖ !kiss
ā āøĶŪ«ŪŖ !lick
ā āøĶŪ«ŪŖ !pat
ā āøĶŪ«ŪŖ !smug
ā āøĶŪ«ŪŖ !bonk
ā āøĶŪ«ŪŖ !yeet
ā āøĶŪ«ŪŖ !blush
ā āøĶŪ«ŪŖ !smile
ā āøĶŪ«ŪŖ !wave
ā āøĶŪ«ŪŖ !highfive
ā āøĶŪ«ŪŖ !handhold
ā āøĶŪ«ŪŖ !nom
ā āøĶŪ«ŪŖ !bite
ā āøĶŪ«ŪŖ !glomp
ā āøĶŪ«ŪŖ !slap
ā āøĶŪ«ŪŖ !kill
ā āøĶŪ«ŪŖ !happy
ā āøĶŪ«ŪŖ !wink
ā āøĶŪ«ŪŖ !poke
ā āøĶŪ«ŪŖ !dance
ā āøĶŪ«ŪŖ !cringe
ā°āāāāāāāāāāāāāāāāāāā

ā­āāā¢ ć Voice Change Menu ć
ā āøĶŪ«ŪŖ !bass
ā āøĶŪ«ŪŖ !blown
ā āøĶŪ«ŪŖ !deep
ā āøĶŪ«ŪŖ !earrape
ā āøĶŪ«ŪŖ !fast
ā āøĶŪ«ŪŖ !fat
ā āøĶŪ«ŪŖ !nightcore
ā āøĶŪ«ŪŖ !reverse
ā āøĶŪ«ŪŖ !robot
ā āøĶŪ«ŪŖ !slow
ā āøĶŪ«ŪŖ !smooth
ā āøĶŪ«ŪŖ !tupai

ā­āāā¢ ć Storage Menu ć
ā āøĶŪ«ŪŖ !addvn
ā āøĶŪ«ŪŖ !listvn
ā āøĶŪ«ŪŖ !delvn
ā āøĶŪ«ŪŖ !addimage
ā āøĶŪ«ŪŖ !listimage
ā āøĶŪ«ŪŖ !delimage
ā āøĶŪ«ŪŖ !addvideo
ā āøĶŪ«ŪŖ !listvideo
ā āøĶŪ«ŪŖ !delvideo
ā āøĶŪ«ŪŖ !addstik
ā āøĶŪ«ŪŖ !delstik
ā āøĶŪ«ŪŖ !liststik
ā°āāāāāāāāāāāāāāāāāāā

ā­āāā¢ ć Nsfw & Sfw ć
ā āøĶŪ«ŪŖ !cuddle
ā āøĶŪ«ŪŖ !foxgirl
ā āøĶŪ«ŪŖ !kemonomimi2
ā āøĶŪ«ŪŖ !woof
ā āøĶŪ«ŪŖ !holo2
ā āøĶŪ«ŪŖ !hug
ā āøĶŪ«ŪŖ !kiss
ā āøĶŪ«ŪŖ !lizard
ā āøĶŪ«ŪŖ !meowi
ā āøĶŪ«ŪŖ !neko2
ā āøĶŪ«ŪŖ !pat
ā āøĶŪ«ŪŖ !poke
ā āøĶŪ«ŪŖ !slap
ā āøĶŪ«ŪŖ !tickle
ā āøĶŪ«ŪŖ !baka
ā āøĶŪ«ŪŖ !smug
ā āøĶŪ«ŪŖ !neko_sfw
ā āøĶŪ«ŪŖ !hentai
ā āøĶŪ«ŪŖ !hentai_gif
ā āøĶŪ«ŪŖ !spank
ā āøĶŪ«ŪŖ !blowjob
ā āøĶŪ«ŪŖ !cumarts
ā āøĶŪ«ŪŖ !eroyuri
ā āøĶŪ«ŪŖ !eroneko
ā āøĶŪ«ŪŖ !erokemonomimi
ā āøĶŪ«ŪŖ !erokitsune
ā āøĶŪ«ŪŖ !ero
ā āøĶŪ«ŪŖ !feet
ā āøĶŪ«ŪŖ !erofeet
ā āøĶŪ«ŪŖ !feetgif
ā āøĶŪ«ŪŖ !femdom
ā āøĶŪ«ŪŖ !futanari
ā āøĶŪ«ŪŖ !holoero
ā āøĶŪ«ŪŖ !holo
ā āøĶŪ«ŪŖ !keta
ā āøĶŪ«ŪŖ !kitsune
ā āøĶŪ«ŪŖ !kemonomimi
ā āøĶŪ«ŪŖ !pussyart
ā āøĶŪ«ŪŖ !pussywankgif
ā āøĶŪ«ŪŖ !girl_solo
ā āøĶŪ«ŪŖ !girl_solo_gif
ā āøĶŪ«ŪŖ !tits
ā āøĶŪ«ŪŖ !trap
ā āøĶŪ«ŪŖ !yuri
ā āøĶŪ«ŪŖ !avatar2
ā āøĶŪ«ŪŖ !anal
ā āøĶŪ«ŪŖ !bj
ā āøĶŪ«ŪŖ !boobs
ā āøĶŪ«ŪŖ !classic
ā āøĶŪ«ŪŖ !cumsluts
ā āøĶŪ«ŪŖ !kuni
ā āøĶŪ«ŪŖ !lesbian
ā āøĶŪ«ŪŖ !neko
ā āøĶŪ«ŪŖ !neko_gif
ā āøĶŪ«ŪŖ !ahegao
ā āøĶŪ«ŪŖ !bdsm
ā āøĶŪ«ŪŖ !cuckold
ā āøĶŪ«ŪŖ !cum
ā āøĶŪ«ŪŖ !foot
ā āøĶŪ«ŪŖ !gangbang
ā āøĶŪ«ŪŖ !glasses
ā āøĶŪ«ŪŖ !jahy
ā āøĶŪ«ŪŖ !masturbation
ā āøĶŪ«ŪŖ !nsfw_neko
ā āøĶŪ«ŪŖ !orgy
ā āøĶŪ«ŪŖ !panties
ā āøĶŪ«ŪŖ !tentacles
ā āøĶŪ«ŪŖ !thighs
ā āøĶŪ«ŪŖ !zettai
ā°āāāāāāāāāāāāāāāāāāā

ā­āāā¢ ć Ephoto360 Menu ć
ā āøĶŪ«ŪŖ !youtubegold
ā āøĶŪ«ŪŖ !youtubesilver
ā āøĶŪ«ŪŖ !facebookgold
ā āøĶŪ«ŪŖ !facebooksilver
ā āøĶŪ«ŪŖ !instagramgold
ā āøĶŪ«ŪŖ !instagramsilver
ā āøĶŪ«ŪŖ !twittergold
ā āøĶŪ«ŪŖ !twittersilver
ā āøĶŪ«ŪŖ !retrotext
ā āøĶŪ«ŪŖ !halloweenbats
ā āøĶŪ«ŪŖ !texthalloween
ā āøĶŪ«ŪŖ !cardhalloween
ā āøĶŪ«ŪŖ !birthdaycake
ā āøĶŪ«ŪŖ !thundertext
ā āøĶŪ«ŪŖ !icetext
ā āøĶŪ«ŪŖ !milkcake
ā āøĶŪ«ŪŖ !snowontext
ā āøĶŪ«ŪŖ !metalstar
ā āøĶŪ«ŪŖ !dragonfire
ā āøĶŪ«ŪŖ !zombie3d
ā āøĶŪ«ŪŖ !merrycard
ā āøĶŪ«ŪŖ !generalexam 
ā āøĶŪ«ŪŖ !viettel
ā āøĶŪ«ŪŖ !embroider
ā āøĶŪ«ŪŖ !graffititext
ā āøĶŪ«ŪŖ !graffititext2
ā āøĶŪ«ŪŖ !graffititext3
ā āøĶŪ«ŪŖ !covergraffiti
ā āøĶŪ«ŪŖ !moderngold
ā āøĶŪ«ŪŖ !capercut
ā āøĶŪ«ŪŖ !lovecard
ā āøĶŪ«ŪŖ !heartflashlight
ā āøĶŪ«ŪŖ !heartcup
ā āøĶŪ«ŪŖ !sunglightshadow
ā āøĶŪ«ŪŖ !graffiti3d
ā āøĶŪ«ŪŖ !moderngoldsilver
ā āøĶŪ«ŪŖ !moderngold2
ā āøĶŪ«ŪŖ !moderngold3
ā āøĶŪ«ŪŖ !fabrictext
ā āøĶŪ«ŪŖ !masteryavatar
ā āøĶŪ«ŪŖ !messagecoffee
ā āøĶŪ«ŪŖ !announofwin
ā āøĶŪ«ŪŖ !writeblood
ā āøĶŪ«ŪŖ !horrorletter
ā āøĶŪ«ŪŖ !writehorror
ā āøĶŪ«ŪŖ !shirtclub
ā āøĶŪ«ŪŖ !angelwing
ā āøĶŪ«ŪŖ !christmasseason
ā āøĶŪ«ŪŖ !projectyasuo
ā āøĶŪ«ŪŖ !lovelycute
ā āøĶŪ«ŪŖ !womansday
ā āøĶŪ«ŪŖ !covergamepubg
ā āøĶŪ«ŪŖ !nameonheart
ā āøĶŪ«ŪŖ !funnyhalloween
ā āøĶŪ«ŪŖ !lightningpubg
ā āøĶŪ«ŪŖ !greetingcardvideo 
ā āøĶŪ«ŪŖ !christmascard 
ā āøĶŪ«ŪŖ !galaxybat
ā āøĶŪ«ŪŖ !writegalaxy
ā āøĶŪ«ŪŖ !starsnight
ā āøĶŪ«ŪŖ !noeltext
ā āøĶŪ«ŪŖ !textcakes
ā āøĶŪ«ŪŖ !pubgbirthday
ā āøĶŪ«ŪŖ !galaxywallpaper
ā āøĶŪ«ŪŖ !pubgglicthvideo 
ā āøĶŪ«ŪŖ !pubgmascotlogo
ā āøĶŪ«ŪŖ !realembroidery
ā āøĶŪ«ŪŖ !vintagetelevision
ā āøĶŪ«ŪŖ !funnyanimations
ā āøĶŪ«ŪŖ !glowingtext
ā āøĶŪ«ŪŖ !textonglass
ā āøĶŪ«ŪŖ !cartoonstyle
ā āøĶŪ«ŪŖ !multicolor
ā āøĶŪ«ŪŖ !watercolor2
ā āøĶŪ«ŪŖ !textsky
ā āøĶŪ«ŪŖ !summerbeach
ā āøĶŪ«ŪŖ !1917text
ā āøĶŪ«ŪŖ !puppycute
ā āøĶŪ«ŪŖ !rosebirthday
ā°āāāāāāāāāāāāāāāāāāā

ā­āāā¢ ć Textpro Menu ć
ā āøĶŪ«ŪŖ !halloween2 text|text2
ā āøĶŪ«ŪŖ !horror text|text2
ā āøĶŪ«ŪŖ !game8bit text|text2
ā āøĶŪ«ŪŖ !layered text|text2
ā āøĶŪ«ŪŖ !glitch2 text|text2
ā āøĶŪ«ŪŖ !coolg text|text2
ā āøĶŪ«ŪŖ !coolwg text|text2
ā āøĶŪ«ŪŖ !realistic text|text2
ā āøĶŪ«ŪŖ !space3d text|text2
ā āøĶŪ«ŪŖ !gtiktok text|text2
ā āøĶŪ«ŪŖ !stone text|text2
ā āøĶŪ«ŪŖ !marvel text|text2
ā āøĶŪ«ŪŖ !marvel2 text|text2
ā āøĶŪ«ŪŖ !pornhub text|text2
ā āøĶŪ«ŪŖ !avengers text|text2
ā āøĶŪ«ŪŖ !metalr text|text2
ā āøĶŪ«ŪŖ !metalg text|text2
ā āøĶŪ«ŪŖ !metalg2 text|text2
ā āøĶŪ«ŪŖ !halloween2 text|text2
ā āøĶŪ«ŪŖ !lion text|text2
ā āøĶŪ«ŪŖ !wolf_bw text|text2
ā āøĶŪ«ŪŖ !wolf_g text|text2
ā āøĶŪ«ŪŖ !ninja text|text2
ā āøĶŪ«ŪŖ !3dsteel text|text2
ā āøĶŪ«ŪŖ !horror2 text|text2
ā āøĶŪ«ŪŖ !lava text|text2
ā āøĶŪ«ŪŖ !bagel text|text2
ā āøĶŪ«ŪŖ !blackpink text
ā āøĶŪ«ŪŖ !rainbow2 text
ā āøĶŪ«ŪŖ !water_pipe text
ā āøĶŪ«ŪŖ !halloween text
ā āøĶŪ«ŪŖ !sketch text
ā āøĶŪ«ŪŖ !sircuit text
ā āøĶŪ«ŪŖ !discovery text
ā āøĶŪ«ŪŖ !metallic2 text
ā āøĶŪ«ŪŖ !fiction text
ā āøĶŪ«ŪŖ !demon text
ā āøĶŪ«ŪŖ !transformer text
ā āøĶŪ«ŪŖ !berry text
ā āøĶŪ«ŪŖ !thunder text
ā āøĶŪ«ŪŖ !magma text
ā āøĶŪ«ŪŖ !3dstone text
ā āøĶŪ«ŪŖ !neon text
ā āøĶŪ«ŪŖ !glitch text
ā āøĶŪ«ŪŖ !harry_potter text
ā āøĶŪ«ŪŖ !embossed text
ā āøĶŪ«ŪŖ !broken text
ā āøĶŪ«ŪŖ !papercut text
ā āøĶŪ«ŪŖ !gradient text
ā āøĶŪ«ŪŖ !glossy text
ā āøĶŪ«ŪŖ !watercolor text
ā āøĶŪ«ŪŖ !multicolor text
ā āøĶŪ«ŪŖ !neon_devil text
ā āøĶŪ«ŪŖ !underwater text
ā āøĶŪ«ŪŖ !bear text
ā āøĶŪ«ŪŖ !wonderfulg text
ā āøĶŪ«ŪŖ !christmas text
ā āøĶŪ«ŪŖ !neon_light text
ā āøĶŪ«ŪŖ !snow text
ā āøĶŪ«ŪŖ !cloudsky text
ā āøĶŪ«ŪŖ !luxury2 text
ā āøĶŪ«ŪŖ !gradient2 text
ā āøĶŪ«ŪŖ !summer text
ā āøĶŪ«ŪŖ !writing text
ā āøĶŪ«ŪŖ !engraved text
ā āøĶŪ«ŪŖ !summery text
ā āøĶŪ«ŪŖ !3dglue text
ā āøĶŪ«ŪŖ !metaldark text
ā āøĶŪ«ŪŖ !neonlight text
ā āøĶŪ«ŪŖ !oscar text
ā āøĶŪ«ŪŖ !minion text
ā āøĶŪ«ŪŖ !holographic text
ā āøĶŪ«ŪŖ !purple text
ā āøĶŪ«ŪŖ !glossyb text
ā āøĶŪ«ŪŖ !deluxe2 text
ā āøĶŪ«ŪŖ !glossyc text
ā āøĶŪ«ŪŖ !fabric text
ā āøĶŪ«ŪŖ !neonc text
ā āøĶŪ«ŪŖ !newyear text
ā āøĶŪ«ŪŖ !newyear2 text
ā āøĶŪ«ŪŖ !metals text
ā āøĶŪ«ŪŖ !xmas text
ā āøĶŪ«ŪŖ !blood text
ā āøĶŪ«ŪŖ !darkg text
ā āøĶŪ«ŪŖ !joker text
ā āøĶŪ«ŪŖ !wicker text
ā āøĶŪ«ŪŖ !natural text
ā āøĶŪ«ŪŖ !firework text
ā āøĶŪ«ŪŖ !skeleton text
ā āøĶŪ«ŪŖ !balloon text
ā āøĶŪ«ŪŖ !balloon2 text
ā āøĶŪ«ŪŖ !balloon3 text
ā āøĶŪ«ŪŖ !balloon4 text
ā āøĶŪ«ŪŖ !balloon5 text
ā āøĶŪ«ŪŖ !balloon6 text
ā āøĶŪ«ŪŖ !balloon7 text
ā āøĶŪ«ŪŖ !steel text
ā āøĶŪ«ŪŖ !gloss text
ā āøĶŪ«ŪŖ !denim text
ā āøĶŪ«ŪŖ !decorate text
ā āøĶŪ«ŪŖ !decorate2 text
ā āøĶŪ«ŪŖ !peridot text
ā āøĶŪ«ŪŖ !rock text
ā āøĶŪ«ŪŖ !glass text
ā āøĶŪ«ŪŖ !glass2 text
ā āøĶŪ«ŪŖ !glass3 text
ā āøĶŪ«ŪŖ !glass4 text
ā āøĶŪ«ŪŖ !glass5 text
ā āøĶŪ«ŪŖ !glass6 text
ā āøĶŪ«ŪŖ !glass7 text
ā āøĶŪ«ŪŖ !glass8 text
ā āøĶŪ«ŪŖ !captain_as2 text
ā āøĶŪ«ŪŖ !robot text
ā āøĶŪ«ŪŖ !equalizer text
ā āøĶŪ«ŪŖ !toxic text
ā āøĶŪ«ŪŖ !sparkling text
ā āøĶŪ«ŪŖ !sparkling2 text
ā āøĶŪ«ŪŖ !sparkling3 text
ā āøĶŪ«ŪŖ !sparkling4 text
ā āøĶŪ«ŪŖ !sparkling5 text
ā āøĶŪ«ŪŖ !sparkling6 text
ā āøĶŪ«ŪŖ !sparkling7 text
ā āøĶŪ«ŪŖ !decorative text
ā āøĶŪ«ŪŖ !chocolate text
ā āøĶŪ«ŪŖ !strawberry text
ā āøĶŪ«ŪŖ !koifish text
ā āøĶŪ«ŪŖ !bread text
ā āøĶŪ«ŪŖ !matrix text
ā āøĶŪ«ŪŖ !blood2 text
ā āøĶŪ«ŪŖ !neonligth2 text
ā āøĶŪ«ŪŖ !thunder2 text
ā āøĶŪ«ŪŖ !3dbox text
ā āøĶŪ«ŪŖ !neon2 text
ā āøĶŪ«ŪŖ !roadw text
ā āøĶŪ«ŪŖ !bokeh text
ā āøĶŪ«ŪŖ !gneon text
ā āøĶŪ«ŪŖ !advanced text
ā āøĶŪ«ŪŖ !dropwater text
ā āøĶŪ«ŪŖ !wall text
ā āøĶŪ«ŪŖ !chrismast text
ā āøĶŪ«ŪŖ !honey text
ā āøĶŪ«ŪŖ !drug text
ā āøĶŪ«ŪŖ !marble text
ā āøĶŪ«ŪŖ !marble2 text
ā āøĶŪ«ŪŖ !ice text
ā āøĶŪ«ŪŖ !juice text
ā āøĶŪ«ŪŖ !rusty text
ā āøĶŪ«ŪŖ !abstra text
ā āøĶŪ«ŪŖ !biscuit text
ā āøĶŪ«ŪŖ !wood text
ā āøĶŪ«ŪŖ !scifi text
ā āøĶŪ«ŪŖ !metalr text
ā āøĶŪ«ŪŖ !purpleg text
ā āøĶŪ«ŪŖ !shiny text 
ā āøĶŪ«ŪŖ !jewelry text
ā āøĶŪ«ŪŖ !jewelry2 text
ā āøĶŪ«ŪŖ !jewelry3 text
ā āøĶŪ«ŪŖ !jewelry4 text
ā āøĶŪ«ŪŖ !jewelry5 text
ā āøĶŪ«ŪŖ !jewelry6 text
ā āøĶŪ«ŪŖ !jewelry7 text
ā āøĶŪ«ŪŖ !jewelry8 text
ā āøĶŪ«ŪŖ !metalh text
ā āøĶŪ«ŪŖ !golden text
ā āøĶŪ«ŪŖ !glitter text
ā āøĶŪ«ŪŖ !glitter2 text
ā āøĶŪ«ŪŖ !glitter3 text
ā āøĶŪ«ŪŖ !glitter4 text
ā āøĶŪ«ŪŖ !glitter5 text
ā āøĶŪ«ŪŖ !glitter6 text
ā āøĶŪ«ŪŖ !glitter7 text
ā āøĶŪ«ŪŖ !metale text
ā āøĶŪ«ŪŖ !carbon text
ā āøĶŪ«ŪŖ !candy text
ā āøĶŪ«ŪŖ !metalb text
ā āøĶŪ«ŪŖ !gemb text
ā āøĶŪ«ŪŖ !3dchrome text
ā āøĶŪ«ŪŖ !metalb2 text
ā āøĶŪ«ŪŖ !metalg text
ā āøĶŪ«ŪŖ !metalg text
ā°āāāāāāāāāāāāāāāāāāā


ā­āāā¢ ć Others ć
ā āøĶŪ«ŪŖ !afk [reason]
ā āøĶŪ«ŪŖ !translate kode_bahasa text
ā āøĶŪ«ŪŖ !kalkulator [query]
ā āøĶŪ«ŪŖ !smeme [text]
ā āøĶŪ«ŪŖ !smeme2 [text|text]
ā āøĶŪ«ŪŖ !memegen [text|text]
ā°āāāāāāāāāāāāāāāāāāā

ā­āāā¢ ć Game Menu ć
ā āøĶŪ«ŪŖ !kuismath
ā āøĶŪ«ŪŖ !tebakgambar
ā āøĶŪ«ŪŖ !tebakkata
ā āøĶŪ«ŪŖ !tebakbendera
ā āøĶŪ«ŪŖ !tebakkalimat
ā āøĶŪ«ŪŖ !tebaksiapa
ā āøĶŪ«ŪŖ !tebakkabupaten
ā āøĶŪ«ŪŖ !tebakkimia
ā āøĶŪ«ŪŖ !tebaklirik
ā āøĶŪ«ŪŖ !tebaktebakan
ā āøĶŪ«ŪŖ !tekateki
ā āøĶŪ«ŪŖ !susunkata
ā āøĶŪ«ŪŖ !caklontong
ā°āāāāāāāāāāāāāāāāāāā


ā­āāā¢ ć Asupan Menu ć
ā āøĶŪ«ŪŖ !chika
ā āøĶŪ«ŪŖ !delvira
ā āøĶŪ«ŪŖ !ayu
ā āøĶŪ«ŪŖ !bunga
ā āøĶŪ«ŪŖ !aura
ā āøĶŪ«ŪŖ !nisa
ā āøĶŪ«ŪŖ !ziva
ā āøĶŪ«ŪŖ !yana
ā āøĶŪ«ŪŖ !viona
ā āøĶŪ«ŪŖ !syania
ā āøĶŪ«ŪŖ !riri
ā āøĶŪ«ŪŖ !syifa
ā āøĶŪ«ŪŖ !mama_gina
ā āøĶŪ«ŪŖ !alcakenya
ā āøĶŪ«ŪŖ !mangayutri
ā āøĶŪ«ŪŖ !rikagusriani
ā āøĶŪ«ŪŖ !asupan
ā āøĶŪ«ŪŖ !bocil
ā āøĶŪ«ŪŖ !geayubi
ā āøĶŪ«ŪŖ !santuy
ā āøĶŪ«ŪŖ !ukhty
ā āøĶŪ«ŪŖ !syifa
ā°āāāāāāāāāāāāāāāāāāā

ā­āāā¢ ć Telegram Sticker ć
ā āøĶŪ«ŪŖ !awoawo
ā āøĶŪ«ŪŖ !benedict
ā āøĶŪ«ŪŖ !chat
ā āøĶŪ«ŪŖ !dbfly
ā āøĶŪ«ŪŖ !dino_kuning
ā āøĶŪ«ŪŖ !doge
ā āøĶŪ«ŪŖ !gojosatoru
ā āøĶŪ«ŪŖ !hope_boy
ā āøĶŪ«ŪŖ !jisoo
ā āøĶŪ«ŪŖ !kr_robot
ā āøĶŪ«ŪŖ !kucing
ā āøĶŪ«ŪŖ !lonte
ā āøĶŪ«ŪŖ !manusia_lidi
ā āøĶŪ«ŪŖ !menjamet
ā āøĶŪ«ŪŖ !meow
ā āøĶŪ«ŪŖ !nicholas
ā āøĶŪ«ŪŖ !patrick
ā āøĶŪ«ŪŖ !popoci
ā āøĶŪ«ŪŖ !sponsbob
ā āøĶŪ«ŪŖ !kawan_sponsbob
ā āøĶŪ«ŪŖ !tyni
ā°āāāāāāāāāāāāāāāāāāā

ā­āāā¢ ć Random Cewe ć
ā āøĶŪ«ŪŖ !china 
ā āøĶŪ«ŪŖ !indonesia 
ā āøĶŪ«ŪŖ !malaysia 
ā āøĶŪ«ŪŖ !thailand 
ā āøĶŪ«ŪŖ !korea 
ā āøĶŪ«ŪŖ !japan 
ā āøĶŪ«ŪŖ !vietnam 
ā āøĶŪ«ŪŖ !jenni 
ā āøĶŪ«ŪŖ !jiso 
ā āøĶŪ«ŪŖ !lisa  
ā āøĶŪ«ŪŖ !rose
ā°āāāāāāāāāāāāāāāāāāā

ā­āāā¢ ć Logo Menu ć
ā āøĶŪ«ŪŖ !coverbannerlol text|heroes
ā āøĶŪ«ŪŖ !pubglogomaker text|style
ā āøĶŪ«ŪŖ !colorfulpubg text|color
ā āøĶŪ«ŪŖ !astronotspace text|style
ā āøĶŪ«ŪŖ !wallpaperaov text|heroes
ā āøĶŪ«ŪŖ !maketeamlogo text|style
ā āøĶŪ«ŪŖ !circlemarcotteam text|logo
ā āøĶŪ«ŪŖ !wallpaperml text|heroes
ā āøĶŪ«ŪŖ !dragonballfb text|character
ā āøĶŪ«ŪŖ !bannerofaov text|character
ā āøĶŪ«ŪŖ !effect3donbeach text|background
ā āøĶŪ«ŪŖ !cutegirlgamer text|logo
ā āøĶŪ«ŪŖ !footballteam text|logo
ā āøĶŪ«ŪŖ !beautifulshimmering text|champion
ā āøĶŪ«ŪŖ !pubgcutelogo text|logo
ā āøĶŪ«ŪŖ !elegantrotation text|logo
ā āøĶŪ«ŪŖ !logogamingassasin text|logo
ā āøĶŪ«ŪŖ !introvideomaker text|logo
ā āøĶŪ«ŪŖ !gaminglogo4fvs text|logo
ā āøĶŪ«ŪŖ !blueneon text|logo
ā āøĶŪ«ŪŖ !metalmascot text|logo
ā āøĶŪ«ŪŖ !anonymous2 text|style
ā āøĶŪ«ŪŖ !lolpentakill text|style
ā āøĶŪ«ŪŖ !avatarleagueofking text|style
ā āøĶŪ«ŪŖ !avatarff text|character
ā āøĶŪ«ŪŖ !overwatchwallpaper text|character
ā āøĶŪ«ŪŖ !rovwallpaperhd text|hero
ā āøĶŪ«ŪŖ !rovwallpaper text|avatar
ā āøĶŪ«ŪŖ !beautifulgalaxylol text|style
ā āøĶŪ«ŪŖ !crossfirecover text|character
ā āøĶŪ«ŪŖ !lolwallpaper text|wallpaper
ā āøĶŪ«ŪŖ !coverdota2 text|heroes
ā āøĶŪ«ŪŖ !coverleagueofking text|character
ā āøĶŪ«ŪŖ !avatar3q360 text|avatar
ā āøĶŪ«ŪŖ !coverofwarface text|character
ā āøĶŪ«ŪŖ !newlolavatar text|avatar
ā āøĶŪ«ŪŖ !csgocover text|background
ā āøĶŪ«ŪŖ !coverloknew text|hero
ā āøĶŪ«ŪŖ !coverfblol text|letters
ā āøĶŪ«ŪŖ !overwatchcover text|hero
ā āøĶŪ«ŪŖ !crossfirestyle text|avatar
ā āøĶŪ«ŪŖ !avatarlolbyname text|style
ā āøĶŪ«ŪŖ !lolcoverbyname text|avatar
ā āøĶŪ«ŪŖ !cyberhunterfb text|character
ā āøĶŪ«ŪŖ !coverfreefirefb text|character
ā āøĶŪ«ŪŖ !gamingmascot text|style
ā āøĶŪ«ŪŖ !coveronepiecefb text|character
ā āøĶŪ«ŪŖ !bannerytcsgo text|banner
ā āøĶŪ«ŪŖ !fbgamepubgcover text|template
ā āøĶŪ«ŪŖ !banneroflol text|text2|banner
ā āøĶŪ«ŪŖ !bannerofaov2 text|text2|banner
ā āøĶŪ«ŪŖ !teamlogo text|text2|background
ā āøĶŪ«ŪŖ !companylogo2 text|text2|background
ā āøĶŪ«ŪŖ !companylogo text|text2|background
ā āøĶŪ«ŪŖ !gradientlogo text|text2|background
ā āøĶŪ«ŪŖ !pencilsketch text|text2|icon
ā āøĶŪ«ŪŖ !gunlogogaming text|text2|background
ā āøĶŪ«ŪŖ !banneroffreefire text|text2|background
ā āøĶŪ«ŪŖ !letterlogos text|text2|thumb
ā āøĶŪ«ŪŖ !bannerofoverwatch text|text2|background
ā āøĶŪ«ŪŖ !bannerofapex text|text2|background
ā āøĶŪ«ŪŖ !bannerofpubg text|text2|background
ā āøĶŪ«ŪŖ !mascotstyle text|text2|thumb
ā āøĶŪ«ŪŖ !logoaccording text|text2|thumb
ā āøĶŪ«ŪŖ !avataroverwatch text|text2|thumb
ā°āāāāāāāāāāāāāāāāāāā


ā­āāā¢ ć Islamic Menu ć
ā āøĶŪ«ŪŖ !asmaulhusna
ā āøĶŪ«ŪŖ !kisahnabi [nabi]
ā āøĶŪ«ŪŖ !jadwalshalat [daerah]
ā āøĶŪ«ŪŖ !randomquran
ā āøĶŪ«ŪŖ !randomquran2
ā āøĶŪ«ŪŖ !listsurah
ā āøĶŪ«ŪŖ !tafsirsurah [surah]
ā āøĶŪ«ŪŖ !alquranaudio [surah|ayat]
ā°āāāāāāāāāāāāāāāāāāā

ā­āāā¢ ć Sound Menu ć
ā āøĶŪ«ŪŖ !sound1
ā āøĶŪ«ŪŖ !sound2
ā āøĶŪ«ŪŖ !sound3
ā āøĶŪ«ŪŖ !sound4
ā āøĶŪ«ŪŖ !sound5
ā āøĶŪ«ŪŖ !sound6
ā āøĶŪ«ŪŖ !sound7
ā āøĶŪ«ŪŖ !sound8
ā āøĶŪ«ŪŖ !sound9
ā āøĶŪ«ŪŖ !sound10
ā āøĶŪ«ŪŖ !sound11
ā āøĶŪ«ŪŖ !sound12
ā āøĶŪ«ŪŖ !sound13
ā āøĶŪ«ŪŖ !sound14
ā āøĶŪ«ŪŖ !sound15
ā āøĶŪ«ŪŖ !sound16
ā āøĶŪ«ŪŖ !sound17
ā āøĶŪ«ŪŖ !sound18 
ā āøĶŪ«ŪŖ !sound19
ā āøĶŪ«ŪŖ !sound20
ā āøĶŪ«ŪŖ !sound21
ā āøĶŪ«ŪŖ !sound22
ā āøĶŪ«ŪŖ !sound23
ā āøĶŪ«ŪŖ !sound24
ā āøĶŪ«ŪŖ !sound25
ā āøĶŪ«ŪŖ !sound26
ā āøĶŪ«ŪŖ !sound27
ā āøĶŪ«ŪŖ !sound28
ā āøĶŪ«ŪŖ !sound29
ā āøĶŪ«ŪŖ !sound30
ā āøĶŪ«ŪŖ !sound31
ā āøĶŪ«ŪŖ !sound32
ā āøĶŪ«ŪŖ !sound33
ā āøĶŪ«ŪŖ !sound34
ā āøĶŪ«ŪŖ !sound35
ā āøĶŪ«ŪŖ !sound36
ā āøĶŪ«ŪŖ !sound37
ā āøĶŪ«ŪŖ !sound38
ā āøĶŪ«ŪŖ !sound39
ā āøĶŪ«ŪŖ !sound40
ā āøĶŪ«ŪŖ !sound41
ā āøĶŪ«ŪŖ !sound42
ā āøĶŪ«ŪŖ !sound43
ā āøĶŪ«ŪŖ !sound44
ā āøĶŪ«ŪŖ !sound45
ā āøĶŪ«ŪŖ !sound46
ā āøĶŪ«ŪŖ !sound47
ā āøĶŪ«ŪŖ !sound48
ā āøĶŪ«ŪŖ !sound49
ā āøĶŪ«ŪŖ !sound50
ā āøĶŪ«ŪŖ !sound51
ā āøĶŪ«ŪŖ !sound52
ā āøĶŪ«ŪŖ !sound53
ā āøĶŪ«ŪŖ !sound54
ā āøĶŪ«ŪŖ !sound55
ā āøĶŪ«ŪŖ !sound56
ā āøĶŪ«ŪŖ !sound57
ā āøĶŪ«ŪŖ !sound58
ā āøĶŪ«ŪŖ !sound59
ā āøĶŪ«ŪŖ !sound60
ā āøĶŪ«ŪŖ !sound61
ā āøĶŪ«ŪŖ !sound62
ā āøĶŪ«ŪŖ !sound63
ā āøĶŪ«ŪŖ !sound64
ā āøĶŪ«ŪŖ !sound65
ā āøĶŪ«ŪŖ !sound66
ā āøĶŪ«ŪŖ !sound67
ā āøĶŪ«ŪŖ !sound68
ā āøĶŪ«ŪŖ !sound69
ā āøĶŪ«ŪŖ !sound70
ā°āāāāāāāāāāāāāāāāāāā

ā­āāā¢ ć TqTo ć 
ā āøĶŪ«ŪŖ My God
ā āøĶŪ«ŪŖ My Parents
ā āøĶŪ«ŪŖ Fatih A.
ā āøĶŪ«ŪŖ Ferdi
ā āøĶŪ«ŪŖ Reza (Owner)
ā āøĶŪ«ŪŖ DikaArdnt
ā āøĶŪ«ŪŖ Mhankbarbar
ā āøĶŪ«ŪŖ Nurutomo
ā āøĶŪ«ŪŖ Rashid
ā āøĶŪ«ŪŖ ZeeoneOfc
ā āøĶŪ«ŪŖ Penyedia Module
ā āøĶŪ«ŪŖ And All Support
ā°āāāāāāāāāāāāāāāāāāā
    `
}

exports.rules = (prefix) => {
    return `
ā­āāāāā[ *RULES* ]āāāāāā§
ā“
āĀ¹ Dilarang Jual Sc Ini!!
āĀ² Dilarang Spam Command, Banned!
āĀ³ Dilarang Kirim Virtex
āā“ Dilarang Spam Menu Ga Jelas
āāµ Dilarang Telp / Vc Bot/Owner
āā¶ Dilarang Culik Bot
āā· Dilarang Promosi
āāø Dilarang Meniru pesan ZEN BOT
āā¹ Dilarang Chat Owner Ga Jelas
āĀ¹ā° Dilarang Plagiat
ā¬
ā°āāāāāāāāāāĀ·Ā·Ā·

ā­āāāāā[ *HUKUM* ]āāāāāā§
ā“
ā 1 & 10 = Block + banned permanent
ā 2,4,6 & 8 = Banned sementara
ā 3 = War
ā 5 = Block sementara
ā 9 & 10 = Block permanent
ā¬
ā°āāāāāāāāāāĀ·Ā·Ā·
`
}
exports.welcome = () =>{
	return`š©šŗšššŗš ššššŗ ššššš ššŗš š¤
	
ā­ š­šŗššŗ :
ā āøĶŪ«ŪŖ š“ššš :
ā āøĶŪ«ŪŖ š¦š¾šš½š¾š :
ā āøĶŪ«ŪŖ š šššš :
ā āøĶŪ«ŪŖ šÆšŗšššš šššš¾š šššš ššŗ ššŗk ~
ā°āāāāāāāāāāāāāāāāāāā`
}
exports.leave = () =>{
	return`Yah kok out š£ Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*------ć SOURCE CODE ć ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://github.com/zenbotz/ZennV1
`
}
exports.tos = (ownernomer) => {
    return `
*-------ć DONATE ć -------*

Hai kak āŗļø 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti š
Buat kalian yang sudah donasi bisa kirim bukti
donasi ke owner agar bisa di masukkan ke list donasi

Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`ā­āāā¢ ć Bot Info ć 
ā āøĶŪ«ŪŖ !owner
ā āøĶŪ«ŪŖ !rules
ā āøĶŪ«ŪŖ !sc
ā āøĶŪ«ŪŖ !ping
ā āøĶŪ«ŪŖ !runtime
ā āøĶŪ«ŪŖ !botstatus
ā āøĶŪ«ŪŖ !donate
ā°āāāāāāāāāāāāāāāāāāā
`}

exports.ownermenu = (prefix) =>{
return`ā­āāā¢ ć Owner ć 
ā āøĶŪ«ŪŖ !setmenu [query]
ā āøĶŪ«ŪŖ !setmenu templateLocation
ā āøĶŪ«ŪŖ !setmenu templateTenor
ā āøĶŪ«ŪŖ !setmenu katalog
ā āøĶŪ«ŪŖ !setmenu katalog2
ā āøĶŪ«ŪŖ !setmenu list
ā āøĶŪ«ŪŖ !setwm packname|author
ā āøĶŪ«ŪŖ !sendsesi
ā āøĶŪ«ŪŖ !listpc
ā āøĶŪ«ŪŖ !listgc
ā āøĶŪ«ŪŖ !broadcast [text]
ā āøĶŪ«ŪŖ !bc [text]
ā āøĶŪ«ŪŖ !bcgc 
ā āøĶŪ«ŪŖ !bcimage
ā āøĶŪ«ŪŖ !bcaudio
ā āøĶŪ«ŪŖ !bcstiker
ā āøĶŪ«ŪŖ !bcvn
ā āøĶŪ«ŪŖ !bcvideo
ā āøĶŪ«ŪŖ !banuser
ā āøĶŪ«ŪŖ !unban
ā āøĶŪ«ŪŖ !banned
ā āøĶŪ«ŪŖ !listbanned
ā āøĶŪ«ŪŖ !block
ā āøĶŪ«ŪŖ !ublock
ā āøĶŪ«ŪŖ !listblock
ā āøĶŪ«ŪŖ !addpremium
ā āøĶŪ«ŪŖ !delpremium
ā āøĶŪ«ŪŖ !listpremium
ā āøĶŪ«ŪŖ !nsfw [on/off]
ā āøĶŪ«ŪŖ !mute [on/off]
ā āøĶŪ«ŪŖ !autoblok212 [on/off]
ā āøĶŪ«ŪŖ !banchat
ā āøĶŪ«ŪŖ !unbanchat
ā āøĶŪ«ŪŖ !autorespond [on/off]
ā āøĶŪ«ŪŖ !antiviewonce [on/off]
ā āøĶŪ«ŪŖ !autobio [on/off]
ā āøĶŪ«ŪŖ !join [link]
ā āøĶŪ«ŪŖ !self
ā āøĶŪ«ŪŖ !public [only bot]
ā āøĶŪ«ŪŖ !del [reply pesan bot]
ā āøĶŪ«ŪŖ !pppanjang
ā āøĶŪ«ŪŖ !setpppanjang
ā āøĶŪ«ŪŖ !setppbot [reply image]
ā°āāāāāāāāāāāāāāāāāāā
`}

exports.database = (prefix) =>{
	return`ā­āāā¢ ć Database ć 
ā āøĶŪ«ŪŖ !setcmd [reply stiker]
ā āøĶŪ«ŪŖ !delcmd [reply stiker]
ā āøĶŪ«ŪŖ !listcmd
ā āøĶŪ«ŪŖ !absen
ā āøĶŪ«ŪŖ !cekabsen
ā āøĶŪ«ŪŖ !deleteabsen
ā āøĶŪ«ŪŖ !absenstart
ā āøĶŪ«ŪŖ !addmsg [nama file]
ā āøĶŪ«ŪŖ !getmsg [nama file]
ā āøĶŪ«ŪŖ !listmsg
ā āøĶŪ«ŪŖ !delmsg [nama file]
ā°āāāāāāāāāāāāāāāāāāā
`}

exports.group = (prefix) =>{
	return`ā­āāā¢ ć Group ć 
ā āøĶŪ«ŪŖ !addsewa
ā āøĶŪ«ŪŖ !delsewa
ā āøĶŪ«ŪŖ !register
ā āøĶŪ«ŪŖ !unregister
ā āøĶŪ«ŪŖ !ceksn
ā āøĶŪ«ŪŖ !listonline
ā āøĶŪ«ŪŖ !sider
ā āøĶŪ«ŪŖ !wm packname|author
ā āøĶŪ«ŪŖ !infochat
ā āøĶŪ«ŪŖ !setdesk [text]
ā āøĶŪ«ŪŖ !setppgrup [reply image]
ā āøĶŪ«ŪŖ !pppanjanggc
ā āøĶŪ«ŪŖ !setpppanjanggc
ā āøĶŪ«ŪŖ !revoke
ā āøĶŪ«ŪŖ !leave
ā āøĶŪ«ŪŖ !add [62***]
ā āøĶŪ«ŪŖ !kick @tag
ā āøĶŪ«ŪŖ !leave
ā āøĶŪ«ŪŖ !linkgc
ā āøĶŪ«ŪŖ !welcome [on/off]
ā āøĶŪ«ŪŖ !goodbye [on/off]
ā āøĶŪ«ŪŖ !demotedetect [on/off]
ā āøĶŪ«ŪŖ !promotedetect  [on/off]
ā āøĶŪ«ŪŖ !setwelcome
ā āøĶŪ«ŪŖ !updatewelcome
ā āøĶŪ«ŪŖ !delwelcome
ā āøĶŪ«ŪŖ !cekwelcome
ā āøĶŪ«ŪŖ !setgoodbye
ā āøĶŪ«ŪŖ !updategoodbye
ā āøĶŪ«ŪŖ !delgoodbye
ā āøĶŪ«ŪŖ !cekgoodbye
ā āøĶŪ«ŪŖ !setpromote
ā āøĶŪ«ŪŖ !updatepromote
ā āøĶŪ«ŪŖ !setdemote
ā āøĶŪ«ŪŖ !updatedemote
ā āøĶŪ«ŪŖ !cekpromote
ā āøĶŪ«ŪŖ !cekdemote
ā āøĶŪ«ŪŖ !delpromote
ā āøĶŪ«ŪŖ !deldemote
ā āøĶŪ«ŪŖ !nsfw [on/off]
ā āøĶŪ«ŪŖ !antilink [on/off]
ā āøĶŪ«ŪŖ !take packname|author
ā āøĶŪ«ŪŖ !group [open/close]
ā āøĶŪ«ŪŖ !tagall [text]
ā āøĶŪ«ŪŖ !hidetag [text]
ā°āāāāāāāāāāāāāāāāāāā
`}

exports.anime = (prefix) =>{
	return`ā­āāā¢ ć Anime ć 
ā āøĶŪ«ŪŖ !quotesanime
ā āøĶŪ«ŪŖ !anime [query]
ā āøĶŪ«ŪŖ !animeinfo
ā āøĶŪ«ŪŖ !manga [query]
ā āøĶŪ«ŪŖ !character [query]
ā°āāāāāāāāāāāāāāāāāāā
`}

exports.tag = (prefix) =>{
	return`ā­āāā¢ ć Tag ć 
ā āøĶŪ«ŪŖ !stickertag
ā āøĶŪ«ŪŖ !videotag [query]
ā āøĶŪ«ŪŖ !vntag [query]
ā āøĶŪ«ŪŖ !imagetag [query]
ā°āāāāāāāāāāāāāāāāāāā
`}

exports.stalk = (prefix) =>{
	return`ā­āāā¢ ć Stalking ć 
ā āøĶŪ«ŪŖ !igstalk [username]
ā āøĶŪ«ŪŖ !ghstalk [username]
ā āøĶŪ«ŪŖ !ytstalk [channel]
ā°āāāāāāāāāāāāāāāāāāā
`}

exports.search = (prefix) =>{
	return`ā­āāā¢ ć Search ć 
ā āøĶŪ«ŪŖ !ytsearch [query]
ā āøĶŪ«ŪŖ !wallpaper [query]
ā āøĶŪ«ŪŖ !google [query]
ā āøĶŪ«ŪŖ !wikimedia [query]
ā āøĶŪ«ŪŖ !apksearch
ā āøĶŪ«ŪŖ !findapk
ā āøĶŪ«ŪŖ !hentai
ā āøĶŪ«ŪŖ !wattpad [query]
ā āøĶŪ«ŪŖ !webtoons [query]
ā āøĶŪ«ŪŖ !drakor [query]
ā āøĶŪ«ŪŖ !pinterest [query]
ā°āāāāāāāāāāāāāāāāāāā
`}

exports.converter = (prefix) =>{
	return`ā­āāā¢ ć Converter ć 
ā āøĶŪ«ŪŖ !emoji [š­]
ā āøĶŪ«ŪŖ !emojimix [š­+š©]
ā āøĶŪ«ŪŖ !toaudio [video]
ā āøĶŪ«ŪŖ !tomp3 [video]
ā āøĶŪ«ŪŖ !tovn [video]
ā āøĶŪ«ŪŖ !stiker [reply image]
ā āøĶŪ«ŪŖ !tourl [image/video]
ā āøĶŪ«ŪŖ !togif [sticker]
ā āøĶŪ«ŪŖ !tomp4 [sticker]
ā āøĶŪ«ŪŖ ${prefix}toimg [reply sticker]
ā°āāāāāāāāāāāāāāāāāāā
`}

exports.effect = (prefix) =>{
	return`ā­āāā¢ ć Image Effect ć 
ā āøĶŪ«ŪŖ !wanted [reply image/stiker]
ā āøĶŪ«ŪŖ !utatoo [reply image/stiker]
ā āøĶŪ«ŪŖ !unsharpen [reply image/stiker]
ā āøĶŪ«ŪŖ !thanos [reply image/stiker]
ā āøĶŪ«ŪŖ !sniper [reply image/stiker]
ā āøĶŪ«ŪŖ !sharpen [reply image/stiker]
ā āøĶŪ«ŪŖ !sepia [reply image/stiker]
ā āøĶŪ«ŪŖ !scary [reply image/stiker]
ā āøĶŪ«ŪŖ !rip [reply image/stiker]
ā āøĶŪ«ŪŖ !redple [reply image/stiker]
ā āøĶŪ«ŪŖ !rejected [reply image/stiker]
ā āøĶŪ«ŪŖ !posterize [reply image/stiker]
ā āøĶŪ«ŪŖ !ps4 [reply image/stiker]
ā āøĶŪ«ŪŖ !pixelize [reply image/stiker]
ā āøĶŪ«ŪŖ !missionpassed [reply image/stiker]
ā āøĶŪ«ŪŖ !moustache [reply image/stiker]
ā āøĶŪ«ŪŖ !lookwhatkarenhave [reply image/stiker]
ā āøĶŪ«ŪŖ !jail [reply image/stiker]
ā āøĶŪ«ŪŖ !invert [reply image/stiker]
ā āøĶŪ«ŪŖ !instagram [reply image/stiker]
ā āøĶŪ«ŪŖ !greyscale [reply image/stiker]
ā āøĶŪ«ŪŖ !glitch [reply image/stiker]
ā āøĶŪ«ŪŖ !gay [reply image/stiker]
ā āøĶŪ«ŪŖ !frame [reply image/stiker]
ā āøĶŪ«ŪŖ !fire [reply image/stiker]
ā āøĶŪ«ŪŖ !distort [reply image/stiker]
ā āøĶŪ«ŪŖ !dictator [reply image/stiker]
ā āøĶŪ«ŪŖ !deepfry [reply image/stiker]
ā āøĶŪ«ŪŖ !ddungeon [reply image/stiker]
ā āøĶŪ«ŪŖ !circle [reply image/stiker]
ā āøĶŪ«ŪŖ !challenger [reply image/stiker]
ā āøĶŪ«ŪŖ !burn [reply image/stiker]
ā āøĶŪ«ŪŖ !brazzers [reply image/stiker]
ā āøĶŪ«ŪŖ !beautiful [reply image/stiker]
ā°āāāāāāāāāāāāāāāāāāā
`}

//
exports.effect2 = (prefix) =>{
	return`ā­āāā¢ ć Sticker Effect ć 
ā āøĶŪ«ŪŖ !jail [reply image/stiker]
ā āøĶŪ«ŪŖ !red [reply image/stiker]
ā āøĶŪ«ŪŖ !gay [reply image/stiker]
ā āøĶŪ«ŪŖ !bloo [reply image/stiker]
ā āøĶŪ«ŪŖ !blue [reply image/stiker]
ā āøĶŪ«ŪŖ !sepia [reply image/stiker]
ā āøĶŪ«ŪŖ !green [reply image/stiker]
ā āøĶŪ«ŪŖ !glass [reply image/stiker]
ā āøĶŪ«ŪŖ !invert [reply image/stiker]
ā āøĶŪ«ŪŖ !blurple [reply image/stiker]
ā āøĶŪ«ŪŖ !blurple2 [reply image/stiker]
ā āøĶŪ«ŪŖ !wasted [reply image/stiker]
ā āøĶŪ«ŪŖ !passed [reply image/stiker]
ā āøĶŪ«ŪŖ !triggered [reply image/stiker]
ā āøĶŪ«ŪŖ !comrade [reply image/stiker]
ā āøĶŪ«ŪŖ !greyscale [reply image/stiker]
ā āøĶŪ«ŪŖ !threshold [reply image/stiker]
ā āøĶŪ«ŪŖ !brightness [reply image/stiker]
ā āøĶŪ«ŪŖ !invertgreyscale [reply image/stiker]
ā°āāāāāāāāāāāāāāāāāāā
`
}

exports.download = (prefix) =>{
return`ā­āāā¢ ć Download ć 
ā āøĶŪ«ŪŖ !tiktok [link]
ā āøĶŪ«ŪŖ !tiktoknowm [link]
ā āøĶŪ«ŪŖ !tiktokwm [link]
ā āøĶŪ«ŪŖ !tiktokaudio [link]
ā āøĶŪ«ŪŖ !ytdl [link]
ā āøĶŪ«ŪŖ !play [query]
ā āøĶŪ«ŪŖ !ytmp3 [link]
ā āøĶŪ«ŪŖ !ytshortmp3 [link]
ā āøĶŪ«ŪŖ !ytmp4 [link]
ā āøĶŪ«ŪŖ !ytshorts [link]
ā āøĶŪ«ŪŖ !facebook [link]
ā āøĶŪ«ŪŖ !facebooksd [link]
ā āøĶŪ«ŪŖ !facebookhd [link]
ā āøĶŪ«ŪŖ !fbaudio [link]
ā āøĶŪ«ŪŖ !igstory [username]
ā āøĶŪ«ŪŖ !igdl [link]
ā āøĶŪ«ŪŖ !igphoto [link]
ā āøĶŪ«ŪŖ !igvideo [link]
ā āøĶŪ«ŪŖ !igreels [link]
ā āøĶŪ«ŪŖ !igtv [link]
ā āøĶŪ«ŪŖ !soundcloud [link]
ā āøĶŪ«ŪŖ !gitclone [link repo]
ā āøĶŪ«ŪŖ !gitrepo [username repo branch]
ā āøĶŪ«ŪŖ !mediafire [link]
ā āøĶŪ«ŪŖ !twitter link
ā°āāāāāāāāāāāāāāāāāāā
`
}

exports.ranime = (prefix) =>{
	return`ā­āāā¢ ć Random Anime ć
ā āøĶŪ«ŪŖ !loli
ā āøĶŪ«ŪŖ !neko
ā āøĶŪ«ŪŖ !waifu
ā āøĶŪ«ŪŖ !shinobu
ā āøĶŪ«ŪŖ !megumin
ā āøĶŪ«ŪŖ !bully
ā āøĶŪ«ŪŖ !cuddle
ā āøĶŪ«ŪŖ !cry
ā āøĶŪ«ŪŖ !hug
ā āøĶŪ«ŪŖ !awoo
ā āøĶŪ«ŪŖ !kiss
ā āøĶŪ«ŪŖ !lick
ā āøĶŪ«ŪŖ !pat
ā āøĶŪ«ŪŖ !smug
ā āøĶŪ«ŪŖ !bonk
ā āøĶŪ«ŪŖ !yeet
ā āøĶŪ«ŪŖ !blush
ā āøĶŪ«ŪŖ !smile
ā āøĶŪ«ŪŖ !wave
ā āøĶŪ«ŪŖ !highfive
ā āøĶŪ«ŪŖ !handhold
ā āøĶŪ«ŪŖ !nom
ā āøĶŪ«ŪŖ !bite
ā āøĶŪ«ŪŖ !glomp
ā āøĶŪ«ŪŖ !slap
ā āøĶŪ«ŪŖ !kill
ā āøĶŪ«ŪŖ !happy
ā āøĶŪ«ŪŖ !wink
ā āøĶŪ«ŪŖ !poke
ā āøĶŪ«ŪŖ !dance
ā āøĶŪ«ŪŖ !cringe
ā°āāāāāāāāāāāāāāāāāāā
`
}

exports.nsfw = (prefix) =>{
	return`ā­āāā¢ ć Nsfw & Sfw ć
ā āøĶŪ«ŪŖ !cuddle
ā āøĶŪ«ŪŖ !feed
ā āøĶŪ«ŪŖ !foxgirl
ā āøĶŪ«ŪŖ !kemonomimi2
ā āøĶŪ«ŪŖ !woof
ā āøĶŪ«ŪŖ !holo2
ā āøĶŪ«ŪŖ !hug
ā āøĶŪ«ŪŖ !kiss
ā āøĶŪ«ŪŖ !lizard
ā āøĶŪ«ŪŖ !meowi
ā āøĶŪ«ŪŖ !neko2
ā āøĶŪ«ŪŖ !pat
ā āøĶŪ«ŪŖ !poke
ā āøĶŪ«ŪŖ !slap
ā āøĶŪ«ŪŖ !tickle
ā āøĶŪ«ŪŖ !baka
ā āøĶŪ«ŪŖ !smug
ā āøĶŪ«ŪŖ !neko_sfw
ā āøĶŪ«ŪŖ !hentai
ā āøĶŪ«ŪŖ !hentai_gif
ā āøĶŪ«ŪŖ !spank
ā āøĶŪ«ŪŖ !blowjob
ā āøĶŪ«ŪŖ !cumarts
ā āøĶŪ«ŪŖ !eroyuri
ā āøĶŪ«ŪŖ !eroneko
ā āøĶŪ«ŪŖ !erokemonomimi
ā āøĶŪ«ŪŖ !erokitsune
ā āøĶŪ«ŪŖ !ero
ā āøĶŪ«ŪŖ !feet
ā āøĶŪ«ŪŖ !erofeet
ā āøĶŪ«ŪŖ !feetgif
ā āøĶŪ«ŪŖ !femdom
ā āøĶŪ«ŪŖ !futanari
ā āøĶŪ«ŪŖ !hentai
ā āøĶŪ«ŪŖ !holoero
ā āøĶŪ«ŪŖ !holo
ā āøĶŪ«ŪŖ !keta
ā āøĶŪ«ŪŖ !kitsune
ā āøĶŪ«ŪŖ !kemonomimi
ā āøĶŪ«ŪŖ !pussyart
ā āøĶŪ«ŪŖ !pussywankgif
ā āøĶŪ«ŪŖ !girl_solo
ā āøĶŪ«ŪŖ !girl_solo_gif
ā āøĶŪ«ŪŖ !tits
ā āøĶŪ«ŪŖ !trap
ā āøĶŪ«ŪŖ !yuri
ā āøĶŪ«ŪŖ !avatar2
ā āøĶŪ«ŪŖ !anal
ā āøĶŪ«ŪŖ !bj
ā āøĶŪ«ŪŖ !boobs
ā āøĶŪ«ŪŖ !classic
ā āøĶŪ«ŪŖ !cumsluts
ā āøĶŪ«ŪŖ !kuni
ā āøĶŪ«ŪŖ !lesbian
ā āøĶŪ«ŪŖ !neko
ā āøĶŪ«ŪŖ !neko_gif
ā āøĶŪ«ŪŖ !ahegao
ā āøĶŪ«ŪŖ !bdsm
ā āøĶŪ«ŪŖ !cuckold
ā āøĶŪ«ŪŖ !cum
ā āøĶŪ«ŪŖ !foot
ā āøĶŪ«ŪŖ !gangbang
ā āøĶŪ«ŪŖ !glasses
ā āøĶŪ«ŪŖ !jahy
ā āøĶŪ«ŪŖ !masturbation
ā āøĶŪ«ŪŖ !nsfw_neko
ā āøĶŪ«ŪŖ !orgy
ā āøĶŪ«ŪŖ !panties
ā āøĶŪ«ŪŖ !tentacles
ā āøĶŪ«ŪŖ !thighs
ā āøĶŪ«ŪŖ !zettai
ā°āāāāāāāāāāāāāāāāāāā
`
}

exports.textpro = (prefix) =>{
	return`ā­āāā¢ ć Textpro Menu ć
ā āøĶŪ«ŪŖ !halloween2 text|text2
ā āøĶŪ«ŪŖ !horror text|text2
ā āøĶŪ«ŪŖ !game8bit text|text2
ā āøĶŪ«ŪŖ !layered text|text2
ā āøĶŪ«ŪŖ !glitch2 text|text2
ā āøĶŪ«ŪŖ !coolg text|text2
ā āøĶŪ«ŪŖ !coolwg text|text2
ā āøĶŪ«ŪŖ !realistic text|text2
ā āøĶŪ«ŪŖ !space3d text|text2
ā āøĶŪ«ŪŖ !gtiktok text|text2
ā āøĶŪ«ŪŖ !stone text|text2
ā āøĶŪ«ŪŖ !marvel text|text2
ā āøĶŪ«ŪŖ !marvel2 text|text2
ā āøĶŪ«ŪŖ !pornhub text|text2
ā āøĶŪ«ŪŖ !avengers text|text2
ā āøĶŪ«ŪŖ !metalr text|text2
ā āøĶŪ«ŪŖ !metalg text|text2
ā āøĶŪ«ŪŖ !metalg2 text|text2
ā āøĶŪ«ŪŖ !halloween2 text|text2
ā āøĶŪ«ŪŖ !lion text|text2
ā āøĶŪ«ŪŖ !wolf_bw text|text2
ā āøĶŪ«ŪŖ !wolf_g text|text2
ā āøĶŪ«ŪŖ !ninja text|text2
ā āøĶŪ«ŪŖ !3dsteel text|text2
ā āøĶŪ«ŪŖ !horror2 text|text2
ā āøĶŪ«ŪŖ !lava text|text2
ā āøĶŪ«ŪŖ !bagel text|text2
ā āøĶŪ«ŪŖ !blackpink text
ā āøĶŪ«ŪŖ !rainbow2 text
ā āøĶŪ«ŪŖ !water_pipe text
ā āøĶŪ«ŪŖ !halloween text
ā āøĶŪ«ŪŖ !sketch text
ā āøĶŪ«ŪŖ !sircuit text
ā āøĶŪ«ŪŖ !discovery text
ā āøĶŪ«ŪŖ !metallic2 text
ā āøĶŪ«ŪŖ !fiction text
ā āøĶŪ«ŪŖ !demon text
ā āøĶŪ«ŪŖ !transformer text
ā āøĶŪ«ŪŖ !berry text
ā āøĶŪ«ŪŖ !thunder text
ā āøĶŪ«ŪŖ !magma text
ā āøĶŪ«ŪŖ !3dstone text
ā āøĶŪ«ŪŖ !neon text
ā āøĶŪ«ŪŖ !glitch text
ā āøĶŪ«ŪŖ !harry_potter text
ā āøĶŪ«ŪŖ !embossed text
ā āøĶŪ«ŪŖ !broken text
ā āøĶŪ«ŪŖ !papercut text
ā āøĶŪ«ŪŖ !gradient text
ā āøĶŪ«ŪŖ !glossy text
ā āøĶŪ«ŪŖ !watercolor text
ā āøĶŪ«ŪŖ !multicolor text
ā āøĶŪ«ŪŖ !neon_devil text
ā āøĶŪ«ŪŖ !underwater text
ā āøĶŪ«ŪŖ !bear text
ā āøĶŪ«ŪŖ !wonderfulg text
ā āøĶŪ«ŪŖ !christmas text
ā āøĶŪ«ŪŖ !neon_light text
ā āøĶŪ«ŪŖ !snow text
ā āøĶŪ«ŪŖ !cloudsky text
ā āøĶŪ«ŪŖ !luxury2 text
ā āøĶŪ«ŪŖ !gradient2 text
ā āøĶŪ«ŪŖ !summer text
ā āøĶŪ«ŪŖ !writing text
ā āøĶŪ«ŪŖ !engraved text
ā āøĶŪ«ŪŖ !summery text
ā āøĶŪ«ŪŖ !3dglue text
ā āøĶŪ«ŪŖ !metaldark text
ā āøĶŪ«ŪŖ !neonlight text
ā āøĶŪ«ŪŖ !oscar text
ā āøĶŪ«ŪŖ !minion text
ā āøĶŪ«ŪŖ !holographic text
ā āøĶŪ«ŪŖ !purple text
ā āøĶŪ«ŪŖ !glossyb text
ā āøĶŪ«ŪŖ !deluxe2 text
ā āøĶŪ«ŪŖ !glossyc text
ā āøĶŪ«ŪŖ !fabric text
ā āøĶŪ«ŪŖ !neonc text
ā āøĶŪ«ŪŖ !newyear text
ā āøĶŪ«ŪŖ !newyear2 text
ā āøĶŪ«ŪŖ !metals text
ā āøĶŪ«ŪŖ !xmas text
ā āøĶŪ«ŪŖ !blood text
ā āøĶŪ«ŪŖ !darkg text
ā āøĶŪ«ŪŖ !joker text
ā āøĶŪ«ŪŖ !wicker text
ā āøĶŪ«ŪŖ !natural text
ā āøĶŪ«ŪŖ !firework text
ā āøĶŪ«ŪŖ !skeleton text
ā āøĶŪ«ŪŖ !balloon text
ā āøĶŪ«ŪŖ !balloon2 text
ā āøĶŪ«ŪŖ !balloon3 text
ā āøĶŪ«ŪŖ !balloon4 text
ā āøĶŪ«ŪŖ !balloon5 text
ā āøĶŪ«ŪŖ !balloon6 text
ā āøĶŪ«ŪŖ !balloon7 text
ā āøĶŪ«ŪŖ !steel text
ā āøĶŪ«ŪŖ !gloss text
ā āøĶŪ«ŪŖ !denim text
ā āøĶŪ«ŪŖ !decorate text
ā āøĶŪ«ŪŖ !decorate2 text
ā āøĶŪ«ŪŖ !peridot text
ā āøĶŪ«ŪŖ !rock text
ā āøĶŪ«ŪŖ !glass text
ā āøĶŪ«ŪŖ !glass2 text
ā āøĶŪ«ŪŖ !glass3 text
ā āøĶŪ«ŪŖ !glass4 text
ā āøĶŪ«ŪŖ !glass5 text
ā āøĶŪ«ŪŖ !glass6 text
ā āøĶŪ«ŪŖ !glass7 text
ā āøĶŪ«ŪŖ !glass8 text
ā āøĶŪ«ŪŖ !captain_as2 text
ā āøĶŪ«ŪŖ !robot text
ā āøĶŪ«ŪŖ !equalizer text
ā āøĶŪ«ŪŖ !toxic text
ā āøĶŪ«ŪŖ !sparkling text
ā āøĶŪ«ŪŖ !sparkling2 text
ā āøĶŪ«ŪŖ !sparkling3 text
ā āøĶŪ«ŪŖ !sparkling4 text
ā āøĶŪ«ŪŖ !sparkling5 text
ā āøĶŪ«ŪŖ !sparkling6 text
ā āøĶŪ«ŪŖ !sparkling7 text
ā āøĶŪ«ŪŖ !decorative text
ā āøĶŪ«ŪŖ !chocolate text
ā āøĶŪ«ŪŖ !strawberry text
ā āøĶŪ«ŪŖ !koifish text
ā āøĶŪ«ŪŖ !bread text
ā āøĶŪ«ŪŖ !matrix text
ā āøĶŪ«ŪŖ !blood2 text
ā āøĶŪ«ŪŖ !neonligth2 text
ā āøĶŪ«ŪŖ !thunder2 text
ā āøĶŪ«ŪŖ !3dbox text
ā āøĶŪ«ŪŖ !neon2 text
ā āøĶŪ«ŪŖ !roadw text
ā āøĶŪ«ŪŖ !bokeh text
ā āøĶŪ«ŪŖ !gneon text
ā āøĶŪ«ŪŖ !advanced text
ā āøĶŪ«ŪŖ !dropwater text
ā āøĶŪ«ŪŖ !wall text
ā āøĶŪ«ŪŖ !chrismast text
ā āøĶŪ«ŪŖ !honey text
ā āøĶŪ«ŪŖ !drug text
ā āøĶŪ«ŪŖ !marble text
ā āøĶŪ«ŪŖ !marble2 text
ā āøĶŪ«ŪŖ !ice text
ā āøĶŪ«ŪŖ !juice text
ā āøĶŪ«ŪŖ !rusty text
ā āøĶŪ«ŪŖ !abstra text
ā āøĶŪ«ŪŖ !biscuit text
ā āøĶŪ«ŪŖ !wood text
ā āøĶŪ«ŪŖ !scifi text
ā āøĶŪ«ŪŖ !metalr text
ā āøĶŪ«ŪŖ !purpleg text
ā āøĶŪ«ŪŖ !shiny text 
ā āøĶŪ«ŪŖ !jewelry text
ā āøĶŪ«ŪŖ !jewelry2 text
ā āøĶŪ«ŪŖ !jewelry3 text
ā āøĶŪ«ŪŖ !jewelry4 text
ā āøĶŪ«ŪŖ !jewelry5 text
ā āøĶŪ«ŪŖ !jewelry6 text
ā āøĶŪ«ŪŖ !jewelry7 text
ā āøĶŪ«ŪŖ !jewelry8 text
ā āøĶŪ«ŪŖ !metalh text
ā āøĶŪ«ŪŖ !golden text
ā āøĶŪ«ŪŖ !glitter text
ā āøĶŪ«ŪŖ !glitter2 text
ā āøĶŪ«ŪŖ !glitter3 text
ā āøĶŪ«ŪŖ !glitter4 text
ā āøĶŪ«ŪŖ !glitter5 text
ā āøĶŪ«ŪŖ !glitter6 text
ā āøĶŪ«ŪŖ !glitter7 text
ā āøĶŪ«ŪŖ !metale text
ā āøĶŪ«ŪŖ !carbon text
ā āøĶŪ«ŪŖ !candy text
ā āøĶŪ«ŪŖ !metalb text
ā āøĶŪ«ŪŖ !gemb text
ā āøĶŪ«ŪŖ !3dchrome text
ā āøĶŪ«ŪŖ !metalb2 text
ā āøĶŪ«ŪŖ !metalg text
ā āøĶŪ«ŪŖ !metalg text
ā°āāāāāāāāāāāāāāāāāāā
`
}


exports.other = (prefix) =>{
return`ā­āāā¢ ć Others ć
ā āøĶŪ«ŪŖ !ttp [text]
ā āøĶŪ«ŪŖ !attp [text]
ā āøĶŪ«ŪŖ !afk [reason]
ā āøĶŪ«ŪŖ !translate kode_bahasa text
ā āøĶŪ«ŪŖ !kalkulator [query]
ā āøĶŪ«ŪŖ !smeme [text]
ā āøĶŪ«ŪŖ !smeme2 [text|text]
ā āøĶŪ«ŪŖ !memegen [text|text]
ā°āāāāāāāāāāāāāāāāāāā
`
}
exports.game = (prefix) =>{
return`ā­āāā¢ ć Game Menu ć
ā āøĶŪ«ŪŖ !kuismath
ā āøĶŪ«ŪŖ !tebakgambar
ā āøĶŪ«ŪŖ !tebakkata
ā āøĶŪ«ŪŖ !tebakbendera
ā āøĶŪ«ŪŖ !tebakkalimat
ā āøĶŪ«ŪŖ !tebaksiapa
ā āøĶŪ«ŪŖ !tebakkabupaten
ā āøĶŪ«ŪŖ !tebakkimia
ā āøĶŪ«ŪŖ !tebaklirik
ā āøĶŪ«ŪŖ !tebaktebakan
ā āøĶŪ«ŪŖ !tekateki
ā āøĶŪ«ŪŖ !susunkata
ā āøĶŪ«ŪŖ !caklontong
ā°āāāāāāāāāāāāāāāāāāā
`
}
exports.asupan = (prefix) =>{
return`ā­āāā¢ ć Asupan Menu ć
ā āøĶŪ«ŪŖ !chika
ā āøĶŪ«ŪŖ !delvira
ā āøĶŪ«ŪŖ !ayu
ā āøĶŪ«ŪŖ !bunga
ā āøĶŪ«ŪŖ !aura
ā āøĶŪ«ŪŖ !nisa
ā āøĶŪ«ŪŖ !ziva
ā āøĶŪ«ŪŖ !yana
ā āøĶŪ«ŪŖ !viona
ā āøĶŪ«ŪŖ !syania
ā āøĶŪ«ŪŖ !riri
ā āøĶŪ«ŪŖ !syifa
ā āøĶŪ«ŪŖ !mama_gina
ā āøĶŪ«ŪŖ !alcakenya
ā āøĶŪ«ŪŖ !mangayutri
ā āøĶŪ«ŪŖ !rikagusriani
ā āøĶŪ«ŪŖ !asupan
ā āøĶŪ«ŪŖ !bocil
ā āøĶŪ«ŪŖ !geayubi
ā āøĶŪ«ŪŖ !santuy
ā āøĶŪ«ŪŖ !ukhty
ā āøĶŪ«ŪŖ !syifa
ā°āāāāāāāāāāāāāāāāāāā
`
}
exports.cecan = (prefix) =>{
return`ā­āāā¢  ć Random Cewe ć
ā āøĶŪ«ŪŖ !china 
ā āøĶŪ«ŪŖ !indonesia 
ā āøĶŪ«ŪŖ !malaysia 
ā āøĶŪ«ŪŖ !thailand 
ā āøĶŪ«ŪŖ !korea 
ā āøĶŪ«ŪŖ !japan 
ā āøĶŪ«ŪŖ !vietnam 
ā āøĶŪ«ŪŖ !jenni 
ā āøĶŪ«ŪŖ !jiso 
ā āøĶŪ«ŪŖ !lisa  
ā āøĶŪ«ŪŖ !rose
ā°āāāāāāāāāāāāāāāāāāā
`
}

exports.tqto = () =>{
	return`ā­āāā¢ ć TqTo ć 
ā āøĶŪ«ŪŖ My God
ā āøĶŪ«ŪŖ My Parents
ā āøĶŪ«ŪŖ Fatih A.
ā āøĶŪ«ŪŖ Ferdi
ā āøĶŪ«ŪŖ DikaArdnt
ā āøĶŪ«ŪŖ Mhankbarbar
ā āøĶŪ«ŪŖ Nurutomo
ā āøĶŪ«ŪŖ Rashid
ā āøĶŪ«ŪŖ ZeeoneOfc
ā āøĶŪ«ŪŖ Penyedia Module
ā āøĶŪ«ŪŖ And All Support
ā°āāāāāāāāāāāāāāāāāāā
`
}

exports.primbonmenu = (prefix) =>{
	return`ā­āāā¢ ć Primbon ć
ā āøĶŪ«ŪŖ !nomorhoki 887435047326
ā āøĶŪ«ŪŖ !artimimpi [query]
ā āøĶŪ«ŪŖ !artinama [query]
ā āøĶŪ«ŪŖ !ramaljodoh
ā āøĶŪ«ŪŖ !ramaljodohbali
ā āøĶŪ«ŪŖ !suamiistri
ā āøĶŪ«ŪŖ !ramalcinta
ā āøĶŪ«ŪŖ !cocoknama
ā āøĶŪ«ŪŖ !pasangan
ā āøĶŪ«ŪŖ !jadiannikah
ā āøĶŪ«ŪŖ !sifatusaha
ā āøĶŪ«ŪŖ !rezeki
ā āøĶŪ«ŪŖ !pekerjaan
ā āøĶŪ«ŪŖ !nasib
ā āøĶŪ«ŪŖ !penyakit
ā āøĶŪ«ŪŖ !tarot
ā āøĶŪ«ŪŖ !fengshui
ā āøĶŪ«ŪŖ !haribaik
ā āøĶŪ«ŪŖ !harisangar
ā āøĶŪ«ŪŖ !harisial
ā āøĶŪ«ŪŖ !nagahari
ā āøĶŪ«ŪŖ !arahrezeki
ā āøĶŪ«ŪŖ !peruntungan
ā āøĶŪ«ŪŖ !weton
ā āøĶŪ«ŪŖ !karakter
ā āøĶŪ«ŪŖ !keberuntungan
ā āøĶŪ«ŪŖ !memancing
ā āøĶŪ«ŪŖ !masasubur
ā āøĶŪ«ŪŖ !zodiak 
ā āøĶŪ«ŪŖ !shio [query]
ā°āāāāāāāāāāāāāāāāāāā
`
}

exports.stcmenu = (prefix) =>{
	return`ā­āāā¢ ć Telegram Sticker ć
ā āøĶŪ«ŪŖ !awoawo
ā āøĶŪ«ŪŖ !benedict
ā āøĶŪ«ŪŖ !chat
ā āøĶŪ«ŪŖ !dbfly
ā āøĶŪ«ŪŖ !dino_kuning
ā āøĶŪ«ŪŖ !doge
ā āøĶŪ«ŪŖ !gojosatoru
ā āøĶŪ«ŪŖ !hope_boy
ā āøĶŪ«ŪŖ !jisoo
ā āøĶŪ«ŪŖ !kr_robot
ā āøĶŪ«ŪŖ !kucing
ā āøĶŪ«ŪŖ !lonte
ā āøĶŪ«ŪŖ !manusia_lidi
ā āøĶŪ«ŪŖ !menjamet
ā āøĶŪ«ŪŖ !meow
ā āøĶŪ«ŪŖ !nicholas
ā āøĶŪ«ŪŖ !patrick
ā āøĶŪ«ŪŖ !popoci
ā āøĶŪ«ŪŖ !sponsbob
ā āøĶŪ«ŪŖ !kawan_sponsbob
ā āøĶŪ«ŪŖ !tyni
ā°āāāāāāāāāāāāāāāāāāā
`}

exports.ephotomenu = (prefix) =>{
	return`ā­āāā¢ ć Ephoto360 Menu ć
ā āøĶŪ«ŪŖ !youtubegold text
ā āøĶŪ«ŪŖ !youtubesilver text
ā āøĶŪ«ŪŖ !facebookgold text
ā āøĶŪ«ŪŖ !facebooksilver text
ā āøĶŪ«ŪŖ !instagramgold text
ā āøĶŪ«ŪŖ !instagramsilver text
ā āøĶŪ«ŪŖ !twittergold text
ā āøĶŪ«ŪŖ !twittersilver text
ā āøĶŪ«ŪŖ !retrotext text
ā āøĶŪ«ŪŖ !halloweenbats text
ā āøĶŪ«ŪŖ !texthalloween text
ā āøĶŪ«ŪŖ !cardhalloween text
ā āøĶŪ«ŪŖ !birthdaycake text
ā āøĶŪ«ŪŖ !thundertext text
ā āøĶŪ«ŪŖ !icetext text
ā āøĶŪ«ŪŖ !milkcake text
ā āøĶŪ«ŪŖ !snowontext text
ā āøĶŪ«ŪŖ !metalstar text
ā āøĶŪ«ŪŖ !dragonfire text
ā āøĶŪ«ŪŖ !zombie3d text
ā āøĶŪ«ŪŖ !merrycard text
ā āøĶŪ«ŪŖ !generalexam text 
ā āøĶŪ«ŪŖ !viettel text
ā āøĶŪ«ŪŖ !embroider text
ā āøĶŪ«ŪŖ !graffititext text
ā āøĶŪ«ŪŖ !graffititext2 text
ā āøĶŪ«ŪŖ !graffititext3 text
ā āøĶŪ«ŪŖ !covergraffiti text
ā āøĶŪ«ŪŖ !moderngold text
ā āøĶŪ«ŪŖ !capercut text
ā āøĶŪ«ŪŖ !lovecard text
ā āøĶŪ«ŪŖ !heartflashlight text
ā āøĶŪ«ŪŖ !heartcup text
ā āøĶŪ«ŪŖ !sunglightshadow text
ā āøĶŪ«ŪŖ !graffiti3d text
ā āøĶŪ«ŪŖ !moderngoldsilver text
ā āøĶŪ«ŪŖ !moderngold2 text
ā āøĶŪ«ŪŖ !moderngold3 text
ā āøĶŪ«ŪŖ !fabrictext text
ā āøĶŪ«ŪŖ !masteryavatar text
ā āøĶŪ«ŪŖ !messagecoffee text
ā āøĶŪ«ŪŖ !announofwin text
ā āøĶŪ«ŪŖ !writeblood text
ā āøĶŪ«ŪŖ !horrorletter text
ā āøĶŪ«ŪŖ !writehorror text
ā āøĶŪ«ŪŖ !shirtclub text
ā āøĶŪ«ŪŖ !angelwing text
ā āøĶŪ«ŪŖ !christmasseason text
ā āøĶŪ«ŪŖ !projectyasuo text
ā āøĶŪ«ŪŖ !lovelycute text
ā āøĶŪ«ŪŖ !womansday text
ā āøĶŪ«ŪŖ !covergamepubg text
ā āøĶŪ«ŪŖ !nameonheart text
ā āøĶŪ«ŪŖ !funnyhalloween text
ā āøĶŪ«ŪŖ !lightningpubg text
ā āøĶŪ«ŪŖ !greetingcardvideo text 
ā āøĶŪ«ŪŖ !christmascard text 
ā āøĶŪ«ŪŖ !galaxybat text
ā āøĶŪ«ŪŖ !writegalaxy text
ā āøĶŪ«ŪŖ !starsnight text
ā āøĶŪ«ŪŖ !noeltext text
ā āøĶŪ«ŪŖ !textcakes text
ā āøĶŪ«ŪŖ !pubgbirthday text
ā āøĶŪ«ŪŖ !galaxywallpaper text
ā āøĶŪ«ŪŖ !pubgglicthvideo text 
ā āøĶŪ«ŪŖ !pubgmascotlogo text
ā āøĶŪ«ŪŖ !realembroidery text
ā āøĶŪ«ŪŖ !vintagetelevision text
ā āøĶŪ«ŪŖ !funnyanimations text
ā āøĶŪ«ŪŖ !glowingtext text
ā āøĶŪ«ŪŖ !textonglass text
ā āøĶŪ«ŪŖ !cartoonstyle text
ā āøĶŪ«ŪŖ !multicolor text
ā āøĶŪ«ŪŖ !watercolor2 text
ā āøĶŪ«ŪŖ !textsky text
ā āøĶŪ«ŪŖ !summerbeach text
ā āøĶŪ«ŪŖ !1917text text
ā āøĶŪ«ŪŖ !puppycute text
ā āøĶŪ«ŪŖ !rosebirthday text
ā āøĶŪ«ŪŖ !steellettering text|text2
ā āøĶŪ«ŪŖ !letterstext text|text2
ā āøĶŪ«ŪŖ !barcashirt text|text2
ā āøĶŪ«ŪŖ !premiercup text|text2
ā āøĶŪ«ŪŖ !stylepoligon text|text2
ā āøĶŪ«ŪŖ !lifebuoys text|text2
ā āøĶŪ«ŪŖ !juventusshirt text|text2`
ā°āāāāāāāāāāāāāāāāāāā
}

exports.logomenu = (prefix) =>{
	return`ā­āāā¢ ć Logo Menu ć
ā āøĶŪ«ŪŖ !coverbannerlol text|heroes
ā āøĶŪ«ŪŖ !pubglogomaker text|style
ā āøĶŪ«ŪŖ !colorfulpubg text|color
ā āøĶŪ«ŪŖ !astronotspace text|style
ā āøĶŪ«ŪŖ !wallpaperaov text|heroes
ā āøĶŪ«ŪŖ !maketeamlogo text|style
ā āøĶŪ«ŪŖ !circlemarcotteam text|logo
ā āøĶŪ«ŪŖ !wallpaperml text|heroes
ā āøĶŪ«ŪŖ !dragonballfb text|character
ā āøĶŪ«ŪŖ !bannerofaov text|character
ā āøĶŪ«ŪŖ !effect3donbeach text|background
ā āøĶŪ«ŪŖ !cutegirlgamer text|logo
ā āøĶŪ«ŪŖ !footballteam text|logo
ā āøĶŪ«ŪŖ !beautifulshimmering text|champion
ā āøĶŪ«ŪŖ !pubgcutelogo text|logo
ā āøĶŪ«ŪŖ !elegantrotation text|logo
ā āøĶŪ«ŪŖ !logogamingassasin text|logo
ā āøĶŪ«ŪŖ !introvideomaker text|logo
ā āøĶŪ«ŪŖ !gaminglogo4fvs text|logo
ā āøĶŪ«ŪŖ !blueneon text|logo
ā āøĶŪ«ŪŖ !metalmascot text|logo
ā āøĶŪ«ŪŖ !anonymous2 text|style
ā āøĶŪ«ŪŖ !lolpentakill text|style
ā āøĶŪ«ŪŖ !avatarleagueofking text|style
ā āøĶŪ«ŪŖ !avatarff text|character
ā āøĶŪ«ŪŖ !overwatchwallpaper text|character
ā āøĶŪ«ŪŖ !rovwallpaperhd text|hero
ā āøĶŪ«ŪŖ !rovwallpaper text|avatar
ā āøĶŪ«ŪŖ !beautifulgalaxylol text|style
ā āøĶŪ«ŪŖ !crossfirecover text|character
ā āøĶŪ«ŪŖ !lolwallpaper text|wallpaper
ā āøĶŪ«ŪŖ !coverdota2 text|heroes
ā āøĶŪ«ŪŖ !coverleagueofking text|character
ā āøĶŪ«ŪŖ !avatar3q360 text|avatar
ā āøĶŪ«ŪŖ !coverofwarface text|character
ā āøĶŪ«ŪŖ !newlolavatar text|avatar
ā āøĶŪ«ŪŖ !csgocover text|background
ā āøĶŪ«ŪŖ !coverloknew text|hero
ā āøĶŪ«ŪŖ !coverfblol text|letters
ā āøĶŪ«ŪŖ !overwatchcover text|hero
ā āøĶŪ«ŪŖ !crossfirestyle text|avatar
ā āøĶŪ«ŪŖ !avatarlolbyname text|style
ā āøĶŪ«ŪŖ !lolcoverbyname text|avatar
ā āøĶŪ«ŪŖ !cyberhunterfb text|character
ā āøĶŪ«ŪŖ !coverfreefirefb text|character
ā āøĶŪ«ŪŖ !gamingmascot text|style
ā āøĶŪ«ŪŖ !coveronepiecefb text|character
ā āøĶŪ«ŪŖ !bannerytcsgo text|banner
ā āøĶŪ«ŪŖ !fbgamepubgcover text|template
ā āøĶŪ«ŪŖ !banneroflol text|text2|banner
ā āøĶŪ«ŪŖ !bannerofaov2 text|text2|banner
ā āøĶŪ«ŪŖ !teamlogo text|text2|background
ā āøĶŪ«ŪŖ !companylogo2 text|text2|background
ā āøĶŪ«ŪŖ !companylogo text|text2|background
ā āøĶŪ«ŪŖ !gradientlogo text|text2|background
ā āøĶŪ«ŪŖ !pencilsketch text|text2|icon
ā āøĶŪ«ŪŖ !gunlogogaming text|text2|background
ā āøĶŪ«ŪŖ !banneroffreefire text|text2|background
ā āøĶŪ«ŪŖ !letterlogos text|text2|thumb
ā āøĶŪ«ŪŖ !bannerofoverwatch text|text2|background
ā āøĶŪ«ŪŖ !bannerofapex text|text2|background
ā āøĶŪ«ŪŖ !bannerofpubg text|text2|background
ā āøĶŪ«ŪŖ !mascotstyle text|text2|thumb
ā āøĶŪ«ŪŖ !logoaccording text|text2|thumb
ā āøĶŪ«ŪŖ !avataroverwatch text|text2|thumb
ā°āāāāāāāāāāāāāāāāāāā
`
}

exports.islammenu = (prefix) =>{
	return`ā­āāā¢ ć Islamic Menu ć
ā āøĶŪ«ŪŖ !asmaulhusna
ā āøĶŪ«ŪŖ !kisahnabi [nabi]
ā āøĶŪ«ŪŖ !jadwalshalat [daerah]
ā āøĶŪ«ŪŖ !randomquran
ā āøĶŪ«ŪŖ !randomquran2
ā āøĶŪ«ŪŖ !listsurah
ā āøĶŪ«ŪŖ !tafsirsurah [surah]
ā āøĶŪ«ŪŖ !alquranaudio [surah|ayat]
ā°āāāāāāāāāāāāāāāāāāā
`
}
exports.anonchat = (prefix) =>{
	return`ā­āāā¢ ć Anonymous ć
ā āøĶŪ«ŪŖ !anonymous 
ā āøĶŪ«ŪŖ !start
ā āøĶŪ«ŪŖ !skip [daerah]
ā āøĶŪ«ŪŖ !stop [surah|ayat]
ā°āāāāāāāāāāāāāāāāāāā
`
}

exports.storemenu = (prefix) =>{
	return`ā­āāā¢ ć Store Menu ć
ā āøĶŪ«ŪŖ !list
ā āøĶŪ«ŪŖ !addlist [key|respond]
ā āøĶŪ«ŪŖ !dellist [key]
ā āøĶŪ«ŪŖ !update [key|respond]
ā āøĶŪ«ŪŖ !store
ā āøĶŪ«ŪŖ !kali
ā āøĶŪ«ŪŖ !bagi
ā āøĶŪ«ŪŖ !tambah
ā āøĶŪ«ŪŖ !kurang
ā āøĶŪ«ŪŖ !kalkulator
ā āøĶŪ«ŪŖ !setproses
ā āøĶŪ«ŪŖ !updateproses
ā āøĶŪ«ŪŖ !cekproses
ā āøĶŪ«ŪŖ !delproses
ā āøĶŪ«ŪŖ !setdone
ā āøĶŪ«ŪŖ !updatedone
ā āøĶŪ«ŪŖ !cekdone
ā āøĶŪ«ŪŖ !deldone
ā āøĶŪ«ŪŖ !pay
ā āøĶŪ«ŪŖ !setcaptionpay
ā āøĶŪ«ŪŖ !setpaysewa
ā āøĶŪ«ŪŖ !proses
ā āøĶŪ«ŪŖ !done
ā°āāāāāāāāāāāāāāāāāāā
`
}

exports.voiceChange = (prefix) =>{
	return`ā­āāā¢ ć Voice Change Menu ć
ā āøĶŪ«ŪŖ !bass
ā āøĶŪ«ŪŖ !blown
ā āøĶŪ«ŪŖ !deep
ā āøĶŪ«ŪŖ !earrape
ā āøĶŪ«ŪŖ !fast
ā āøĶŪ«ŪŖ !fat
ā āøĶŪ«ŪŖ !nightcore
ā āøĶŪ«ŪŖ !reverse
ā āøĶŪ«ŪŖ !robot
ā āøĶŪ«ŪŖ !slow
ā āøĶŪ«ŪŖ !smooth
ā āøĶŪ«ŪŖ !tupai
ā°āāāāāāāāāāāāāāāāāāā
`
}
exports.storagemenu = (prefix) =>{
	return`ā­āāā¢ ć Storage Menu ć
ā āøĶŪ«ŪŖ !addvn
ā āøĶŪ«ŪŖ !listvn
ā āøĶŪ«ŪŖ !delvn
ā āøĶŪ«ŪŖ !addimage
ā āøĶŪ«ŪŖ !listimage
ā āøĶŪ«ŪŖ !delimage
ā āøĶŪ«ŪŖ !addvideo
ā āøĶŪ«ŪŖ !listvideo
ā āøĶŪ«ŪŖ !delvideo
ā āøĶŪ«ŪŖ !addstik
ā āøĶŪ«ŪŖ !delstik
ā āøĶŪ«ŪŖ !liststik
ā°āāāāāāāāāāāāāāāāāāā
`
}

exports.rpgmenu = (prefix) =>{
	return`ā­āāā¢ ć Rpg Games ć
ā āøĶŪ«ŪŖ !adventure
ā āøĶŪ«ŪŖ !weekly
ā āøĶŪ«ŪŖ !use
ā āøĶŪ«ŪŖ !transfer
ā āøĶŪ«ŪŖ !slot
ā āøĶŪ«ŪŖ !shop
ā āøĶŪ«ŪŖ !profile
ā āøĶŪ«ŪŖ !pasar
ā āøĶŪ«ŪŖ !ojek
ā āøĶŪ«ŪŖ !open
ā āøĶŪ«ŪŖ !nguli
ā āøĶŪ«ŪŖ !narik
ā āøĶŪ«ŪŖ !nabung
ā āøĶŪ«ŪŖ !monthly
ā āøĶŪ«ŪŖ !mining
ā āøĶŪ«ŪŖ !merampok
ā āøĶŪ«ŪŖ !mancing
ā āøĶŪ«ŪŖ !kolam
ā āøĶŪ«ŪŖ !koboy
ā āøĶŪ«ŪŖ !kerja
ā āøĶŪ«ŪŖ !kandang
ā āøĶŪ«ŪŖ !judi
ā āøĶŪ«ŪŖ !inventory
ā āøĶŪ«ŪŖ !hourly
ā āøĶŪ«ŪŖ !fishop
ā āøĶŪ«ŪŖ !feed
ā āøĶŪ«ŪŖ !duel
ā āøĶŪ«ŪŖ !daily
ā āøĶŪ«ŪŖ !craft
ā āøĶŪ«ŪŖ !cooldown
ā āøĶŪ«ŪŖ !cook
ā āøĶŪ«ŪŖ !collect
ā āøĶŪ«ŪŖ !chop
ā āøĶŪ«ŪŖ !casino
ā āøĶŪ«ŪŖ !buy
ā āøĶŪ«ŪŖ !bank 
ā āøĶŪ«ŪŖ !bansos
ā āøĶŪ«ŪŖ !berdagang
ā āøĶŪ«ŪŖ !berkebon
ā āøĶŪ«ŪŖ !build
ā°āāāāāāāāāāāāāāāāāāā
`
}

exports.photooxy = (prefix)=>{
	return`ā­āāā¢ ć Photooxy Menu ć
ā āøĶŪ«ŪŖ !battlegrounds-logo
ā āøĶŪ«ŪŖ !battlefield4
ā āøĶŪ«ŪŖ !text-8bit
ā āøĶŪ«ŪŖ !typography-flower 
ā āøĶŪ«ŪŖ !under-flower 
ā āøĶŪ«ŪŖ !bevel-text 
ā āøĶŪ«ŪŖ !silk-text 
ā āøĶŪ«ŪŖ !sweet-andy 
ā āøĶŪ«ŪŖ !smoke-typography 
ā āøĶŪ«ŪŖ !carvedwood 
ā āøĶŪ«ŪŖ !scary-cemetery 
ā āøĶŪ«ŪŖ !royallook 
ā āøĶŪ«ŪŖ !coffeecup2 
ā āøĶŪ«ŪŖ !illuminated 
ā āøĶŪ«ŪŖ !harry-potter2 //
ā āøĶŪ«ŪŖ !woodblack //
ā āøĶŪ«ŪŖ !butterfly-reflection //
ā āøĶŪ«ŪŖ !watermelon // 
ā āøĶŪ«ŪŖ !striking // 
ā āøĶŪ«ŪŖ !metallicglow //
ā āøĶŪ«ŪŖ !rainbow-text 
ā āøĶŪ«ŪŖ !birthday-cake 
ā āøĶŪ«ŪŖ !embroidery // 
ā āøĶŪ«ŪŖ !crisp 
ā āøĶŪ«ŪŖ !flaming 
ā āøĶŪ«ŪŖ !furtext 
ā āøĶŪ«ŪŖ !nightsky 
ā āøĶŪ«ŪŖ !glow-rainbow 
ā āøĶŪ«ŪŖ !gradient-avatar 
ā āøĶŪ«ŪŖ !white-cube // 
ā āøĶŪ«ŪŖ !honey-text // 
ā āøĶŪ«ŪŖ !vintage-style //
ā āøĶŪ«ŪŖ !glowing-3d // 
ā āøĶŪ«ŪŖ !army-camouflage 
ā āøĶŪ«ŪŖ !graffiti-cover 
ā āøĶŪ«ŪŖ !rainbow-shine 
ā āøĶŪ«ŪŖ !smoky-neon 
ā āøĶŪ«ŪŖ !quotes-underfall //
ā āøĶŪ«ŪŖ !layered-leaves 
ā āøĶŪ«ŪŖ !vector-nature 
ā āøĶŪ«ŪŖ !yellow-rose 
ā āøĶŪ«ŪŖ !love-text 
ā āøĶŪ«ŪŖ !underwater-ocean 
ā āøĶŪ«ŪŖ !nature-text 
ā āøĶŪ«ŪŖ !wolf-metal 
ā āøĶŪ«ŪŖ !summer-text 
ā āøĶŪ«ŪŖ !wooden-board //
ā āøĶŪ«ŪŖ !flower-heart
ā āøĶŪ«ŪŖ !quote-wood 
ā āøĶŪ«ŪŖ !love-text 
ā āøĶŪ«ŪŖ !quotes-undergrass 
ā āøĶŪ«ŪŖ !naruto-banner 
ā āøĶŪ«ŪŖ !love-message 
ā āøĶŪ«ŪŖ !textoncup2 
ā āøĶŪ«ŪŖ !burn-paper 
ā āøĶŪ«ŪŖ !smoke 
ā āøĶŪ«ŪŖ !romantic-messages 
ā āøĶŪ«ŪŖ !shadow-sky 
ā āøĶŪ«ŪŖ !text-cup 
ā āøĶŪ«ŪŖ !coffecup
ā°āāāāāāāāāāāāāāāāāāā
`
}
exports.soundmenu = (prefix) =>{
return`ā­āāā¢ ć Sound Menu ć
ā āøĶŪ«ŪŖ !sound1
ā āøĶŪ«ŪŖ !sound2
ā āøĶŪ«ŪŖ !sound3
ā āøĶŪ«ŪŖ !sound4
ā āøĶŪ«ŪŖ !sound5
ā āøĶŪ«ŪŖ !sound6
ā āøĶŪ«ŪŖ !sound7
ā āøĶŪ«ŪŖ !sound8
ā āøĶŪ«ŪŖ !sound9
ā āøĶŪ«ŪŖ !sound10
ā āøĶŪ«ŪŖ !sound11
ā āøĶŪ«ŪŖ !sound12
ā āøĶŪ«ŪŖ !sound13
ā āøĶŪ«ŪŖ !sound14
ā āøĶŪ«ŪŖ !sound15
ā āøĶŪ«ŪŖ !sound16
ā āøĶŪ«ŪŖ !sound17
ā āøĶŪ«ŪŖ !sound18 
ā āøĶŪ«ŪŖ !sound19
ā āøĶŪ«ŪŖ !sound20
ā āøĶŪ«ŪŖ !sound21
ā āøĶŪ«ŪŖ !sound22
ā āøĶŪ«ŪŖ !sound23
ā āøĶŪ«ŪŖ !sound24
ā āøĶŪ«ŪŖ !sound25
ā āøĶŪ«ŪŖ !sound26
ā āøĶŪ«ŪŖ !sound27
ā āøĶŪ«ŪŖ !sound28
ā āøĶŪ«ŪŖ !sound29
ā āøĶŪ«ŪŖ !sound30
ā āøĶŪ«ŪŖ !sound31
ā āøĶŪ«ŪŖ !sound32
ā āøĶŪ«ŪŖ !sound33
ā āøĶŪ«ŪŖ !sound34
ā āøĶŪ«ŪŖ !sound35
ā āøĶŪ«ŪŖ !sound36
ā āøĶŪ«ŪŖ !sound37
ā āøĶŪ«ŪŖ !sound38
ā āøĶŪ«ŪŖ !sound39
ā āøĶŪ«ŪŖ !sound40
ā āøĶŪ«ŪŖ !sound41
ā āøĶŪ«ŪŖ !sound42
ā āøĶŪ«ŪŖ !sound43
ā āøĶŪ«ŪŖ !sound44
ā āøĶŪ«ŪŖ !sound45
ā āøĶŪ«ŪŖ !sound46
ā āøĶŪ«ŪŖ !sound47
ā āøĶŪ«ŪŖ !sound48
ā āøĶŪ«ŪŖ !sound49
ā āøĶŪ«ŪŖ !sound50
ā āøĶŪ«ŪŖ !sound51
ā āøĶŪ«ŪŖ !sound52
ā āøĶŪ«ŪŖ !sound53
ā āøĶŪ«ŪŖ !sound54
ā āøĶŪ«ŪŖ !sound55
ā āøĶŪ«ŪŖ !sound56
ā āøĶŪ«ŪŖ !sound57
ā āøĶŪ«ŪŖ !sound58
ā āøĶŪ«ŪŖ !sound59
ā āøĶŪ«ŪŖ !sound60
ā āøĶŪ«ŪŖ !sound61
ā āøĶŪ«ŪŖ !sound62
ā āøĶŪ«ŪŖ !sound63
ā āøĶŪ«ŪŖ !sound64
ā āøĶŪ«ŪŖ !sound65
ā āøĶŪ«ŪŖ !sound66
ā āøĶŪ«ŪŖ !sound67
ā āøĶŪ«ŪŖ !sound68
ā āøĶŪ«ŪŖ !sound69
ā āøĶ Ū«ŪŖ!sound70
ā°āāāāāāāāāāāāāāāāāāā 
`
}


