{
    "name": "ᴀɴᴏɴ ダ ᴍᴜsɪᴄ",
    "description": "A Telegram Music Player Bot, written in Python with Pyrogram and Py-Tgcalls.",
    "logo": "https://te.legra.ph/file/b8a0c1a00db3e57522b53.jpg",
    "keywords": [
    "python3",
    "telegram",
    "bot",
    "AnonX",
    "MusicBot",
    "telegram-bot",
    "pyrogram"
    ],
    "env": {
      "API_ID": {
        "description": "Get this value from https://my.telegram.org",
        "value": "",
        "required": true
      },
      "API_HASH": {
        "description": "Get this value from https://my.telegram.org",
        "value": "",
        "required": true
      },
      "BOT_TOKEN": {
        "description": "A Bot's token from Botfather",
        "value": "",
        "required": true
      },
      "MONGO_DB_URI": {
        "description": "Get a mongodb url from https://cloud.mongodb.com.",
        "value": "",
        "required": true
      },
      "OWNER_ID": {
        "description": "The user id of user whom you would like to add as OWNER.",
        "value": "",
        "required": true
      },
      "STRING_SESSION": {
        "description": "A Pyrogram v2 String Session from @StringFatherBot on Telegram.",
        "value": "",
        "required": true
      },
      "HEROKU_API_KEY": {
        "description": "Your Heroku account's API key",
        "value": "",
        "required": false
      },
      "HEROKU_APP_NAME": {
        "description": "Your heroku app name",
        "value": "",
        "required": false
      },
      "LOGGER_ID": {
        "description": "Your Log Group ID, add your bot and promote as an admin with full rights!. Channel ki id mat daal dena bsdk.",
        "value": "",
        "required": true
      }
    },
    "buildpacks": [
          {
              "url": "heroku/python"
          },
          {
              "url": "heroku/nodejs"
          },
          {
              "url": "https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git"
          }
      ],
      "stack": "container"
  }
