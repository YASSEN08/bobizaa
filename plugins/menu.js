let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => {
const caption =`


  ‎‎داڪشي ديال الـذڪاء الاصـطناعي🖤🤙
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁🤖

*.bardai*
*.bingcreate*
*.chawnyma*
*.ai*
*.ai2*
*.dalle2*
*.resvimg*
*.chatgbt*
*.drawing*
*.bard*
*.bard2*
*.wordle*
*.zombie*
*.nobg*
*.mic*
*.gemini*
بغيتي تـأنسطـالي شـي حـاجـة🖤🤙
 ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁❤️‍🩹

*.apk*
*.apk2*
*.apkmirror*
*.ytv*
*.yts*
*.ytmp4*
*.ytvideo*
*.ytdoc*
*.storyset*
*.spotifysearch*
*.spotify3*
*.play2*
*.play3*
*.pinterest*
*.mediafire2*
*.manga*
*.gateanime*
*.bookslib*



🤙🖤‎‎‎مـعرفـتش لاش تـيـصلحو  
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁🫶

*.toanime*
*.translate*
*.wasted*
*.topdf*
*.textpdf*
*.tomp3*
*.tweet*
*.tts*
*.sticker*
*.wm*‎‎
*.attp*
*.quotlyv2*
*.quotlyv3*
*.quotly*
*.naruto*
*.logo1*
*.lg3*
*.lg4*
*.lg5*
*.get*
*.hd*
*.dehaze*
*.recolor*



🛡️‎‎صاحب البوت ‎‎
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁🫂

*.tagall*
*.setpp*
*.owner*
*.cleartmp*

 البـوت فيه ميـزة التحميـل التلقـائي من انسـتغرام وفيسبـوك ويوتوب ♥
  ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
 info sc owner :
 -----------------------------
  ⌬ | *group dialna* https://chat.whatsapp.com/CTs2QVMyzqf0ec4ia4fr73
  ⌬ | *whatsapp dialee 212664012616
⌬ | *𝙵𝙰𝙲𝙴𝙱𝙾𝙾c𝙺*:\https://www.facebook.com/profile.php?id=61555790104840
  ----------------------------- 
`


await conn.sendMessage( m.chat, {
        video: {
          url: 'https://telegra.ph/file/bba27bc6b305ac6a5229d.mp4'
        },
        caption: caption,
        gifPlayback: true,
        gifAttribution: Math.floor( Math.random( ) * 2 ) + 1
      }, {
        quoted: m
      } );
}

handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['menu'] 
export default handler
