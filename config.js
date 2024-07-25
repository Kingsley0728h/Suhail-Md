const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "24104552653";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "24104552653";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "24104552653";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "24104552653,241xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_45_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMSxcbiAgICAgICAgNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDksXG4gICAgICAgIDgwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMixcbiAgICAgICAgMjI5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMixcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE3LFxuICAgICAgICAzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM0LFxuICAgICAgICA1OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNixcbiAgICAgICAgOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDMyLFxuICAgICAgICAyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDMzLFxuICAgICAgICA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDgxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg3LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzIsXG4gICAgICAgIDU0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk5LFxuICAgICAgICA4MixcbiAgICAgICAgMjI4LFxuICAgICAgICA1MixcbiAgICAgICAgMjA5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NixcbiAgICAgICAgOTUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc5LFxuICAgICAgICAxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQsXG4gICAgICAgIDI1LFxuICAgICAgICAzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM3LFxuICAgICAgICA4MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgOTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1uWGJzdGEwOUFUNWcvbEpkQStvQ1A2SndJOVBQK2hzNU90d1hjNDRPdGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldLNGkxMTdZUWZxU0V4R3ZqMXBUWXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGY4ODk4ZjYtODljYy00N2U1LWE3ODItNGZhZDUxMDU4ZWM4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OCxcbiAgICAgIDEwMixcbiAgICAgIDk2LFxuICAgICAgMjUsXG4gICAgICAyMjksXG4gICAgICAxMjAsXG4gICAgICAzMCxcbiAgICAgIDMsXG4gICAgICAyMTIsXG4gICAgICAxMjYsXG4gICAgICAyMjgsXG4gICAgICAxNzIsXG4gICAgICAyMixcbiAgICAgIDUxLFxuICAgICAgMjAyLFxuICAgICAgMTY1LFxuICAgICAgODQsXG4gICAgICAyMTMsXG4gICAgICAyMjgsXG4gICAgICA5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNyxcbiAgICAgIDYwLFxuICAgICAgMTk2LFxuICAgICAgMTU4LFxuICAgICAgOTksXG4gICAgICAxNDEsXG4gICAgICAxODIsXG4gICAgICAyNDQsXG4gICAgICAyMjcsXG4gICAgICAyMjYsXG4gICAgICAxNDQsXG4gICAgICAyMjQsXG4gICAgICAyMTYsXG4gICAgICA2NixcbiAgICAgIDE2NCxcbiAgICAgIDIzOCxcbiAgICAgIDgyLFxuICAgICAgMTQxLFxuICAgICAgNTgsXG4gICAgICAxNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1NIOFg3UEtcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI0MTA0NTUyNjUzOjg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QivCdmrDwnZq08J2QhvCdkJLwnZCL8J2atfCdkJhf8J2atPCdkJgg8J2arvCdmqvwnZCD8J2atfCdkJJcIixcbiAgICBcImxpZFwiOiBcIjExMjM5OTgxNDI5MTcwMzo4N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOalM5UEVIRU9TUmliVUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVsTC9TSmw1c1B2elM2MHV6NmRua09iTldkelJXcWZFSGR1dzN3K2Q1Qms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYmZBeGlvMjFkeGUvMFJuMTdXWnRWYUg5ZEpHcmltWFRFVzdUWFNQeFBGdXNNTWdwT0l5RXp6SU0rY2dDNVczUGhvVHh6SkhCRjVZeFR3N1VrN2pEQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN3BmT0ZEZTVYdVY2VTVHdkhZbmFrUHk2UkRRc1lVZU9DdEpFSS92K1BKSkRrNzVqN05TZ0hiWDI2Z3FKek40NERWWlNUeUh1cVcxaUJPZmwxcWdqQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjQxMDQ1NTI2NTM6ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5MTE1MjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQbEFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBsQS5qc29uIjogIntcImtleURhdGFcIjpcInp5c2dDM3dQZDR6SzJoVldwaFFqeXJJYTh2RXNVQy9HM3NjUzMwNUE3Y1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjExNzkzNzQ5NixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE5MDc0MDI1OTRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Kingsley",
  packname: process.env.PACK_NAME || Kingsley",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
