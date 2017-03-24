const http = require('http');
const Bot = require('messenger-bot');

let bot = new Bot({
    token: process.env.PAGE_TOKEN || '',
    verify: process.env.VERIFY_TOKEN || '',
});

bot.on('error', (err) => {
    console.log(err.message)
});

bot.on('message', (payload, reply) => {
    let text = payload.message.text;
let text2 = "DEafult";
    switch(text) {
    case "help":
        text2 = "Help is on the way";
        break;
    case n:
       text2 = "DEafult";
        break;
    default:
        text2 = "DEafult";
}
    reply({ text: text2 }, function(err) {
        if (err) console.log(err);
    });
});

let port = process.env.PORT || 3000;
http.createServer(bot.middleware()).listen(port);
