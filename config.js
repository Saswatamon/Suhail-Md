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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_23_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMixcbiAgICAgICAgNjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDg3LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgODcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDgwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU4LFxuICAgICAgICAzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg3LFxuICAgICAgICA0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEwLFxuICAgICAgICA1MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM2LFxuICAgICAgICAzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTnFGWkJ0azNXMDBQQ0pNbWtBODNEcThIeUhVMHBNWnRVZDFIeGpJdFJGbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTc0MzkwOTYwMjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc5QUQ1RjFBNjUzMTYyNTJDNTY5NUY3QkIxNjM0MTYyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDIwMDE4N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2ZGNBRkpWeFI3MjBoZUFPaXZDZVNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJhMTlkNTc1LWVjMjktNGQ3NS04OWJmLWFhMjc2MGQzYWYzZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDEsXG4gICAgICA3NSxcbiAgICAgIDIyLFxuICAgICAgMTc4LFxuICAgICAgNDMsXG4gICAgICAyNixcbiAgICAgIDEzMixcbiAgICAgIDIwOCxcbiAgICAgIDEwMCxcbiAgICAgIDg3LFxuICAgICAgMTI4LFxuICAgICAgMTAzLFxuICAgICAgMTg2LFxuICAgICAgMTI5LFxuICAgICAgMTg3LFxuICAgICAgNDIsXG4gICAgICAxMTgsXG4gICAgICAxODIsXG4gICAgICAxMDQsXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg3LFxuICAgICAgMjM3LFxuICAgICAgMTcsXG4gICAgICAyMjcsXG4gICAgICA4NixcbiAgICAgIDIzNyxcbiAgICAgIDIxNixcbiAgICAgIDIwOCxcbiAgICAgIDMwLFxuICAgICAgMjEyLFxuICAgICAgMTMxLFxuICAgICAgMjIzLFxuICAgICAgMTc4LFxuICAgICAgOTksXG4gICAgICAzNyxcbiAgICAgIDEyOCxcbiAgICAgIDUxLFxuICAgICAgNSxcbiAgICAgIDQxLFxuICAgICAgMTQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRBSkFaN1FQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc0MzkwOTYwMjU6NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxNjkwMDI2MDkwOTIwODo3NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNNjJpZmNCRVBUWG9MUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImpwTXphTkRVTVlBZWFQTXEzQnlYUE5OMitHcjZOTnBPcGNPbDZJLzc4VGc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYmt6aW5SbmJnSE5zNFhUOTE1WDgrVmJ3Mm8zMGlVbUoxZXkya1pSZWpja0FhZEVId3lFVEswMjdZcDh1dWxlbkhWMkFySTR4YXF6M2NGRkRJWTVJREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUFJ6Q0l0SlNZaktsQVc3NUt3SE5KaDNvVEtQSlhBZ3piaUg3Q0EvYjdvbTFTa2pBMjE5bENRMzRqWVVZRVJVQ2RnSnM4UzcwRFJPRkpNWEtSYVZYaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3NDM5MDk2MDI1Ojc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjAwMTg1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTVZGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNVkYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKMThVSEQ0Q2FEdTZrcFBXaTFTSEwxOWZWdTRYNEpHc2g0UWc2TE5uSk00PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUxODE1MDk4NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NTUxMDgyNTc2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
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
