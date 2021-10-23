// The following code is private, only used for verification.
// NOTE: I HAVE HID THE TOKEN FOR PRIVACY ISSUES

const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Ansorry'd is now Online!")
})

app.listen(3000, () => {
  console.log(`listening at http://localhost:${port}`)
})

let Discord = require("discord.js");
const canvacord = require('canvacord');
const client = new Discord.Client();
let snipe = new Discord.Collection();
const ms = require('ms');
const PS = require("google-play-scraper");
const fs = require("fs");
const disbut = require('discord-buttons')(client);
const SnakeGame = require('snakecord');
const { Database } = require("quick.replit");
const Levels = require("discord-xp");
const DisTube = require("distube");
const distube = new DisTube(client, {
    searchSongs: true,
    emitNewSongOnly: true
});


Levels.setURL("mongodb+srv://TDSwamp:TDSwamp1234@tdswamp.n7myy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
const { tictactoe } = require('reconlx')

let db = require("quick.db");
const activities_list =
  [
    "68 servers | n!help",
    "tiny.cc/botadd | n!help"
  ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
    client.user.setActivity(activities_list[index], { type: 'WATCHING' }); // sets bot's activities to one of the phrases in the arraylist.
  }, 15000); // Runs this every 60 seconds. [ 15000ms=15s=0.15m ]
});

client.on("ready", () => {
  client.user.setActivity('118 servers | n!help', { type: 'WATCHING', }).catch(console.error);
})
 client.on("guildMemberAdd", async member => {
if(member.guild.id !== "813864537916309566") return;
  const welcomeCard = new canvacord.Welcomer()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setAvatar(member.user.displayAvatarURL({format: "png"}))
  .setColor("title", "#1a9d6c")
  .setColor("username-box", "#1a9d6c")
  .setColor("discriminator-box", "#1a9d6c")
  .setColor("message-box", "#1a9d6c")
  .setColor("border", "#00FF00")
  .setColor("avatar", "#1a9d6c")
  .setBackground("https://wallpaperaccess.com/full/2083617.jpg")
  .setMemberCount(member.guild.memberCount)
  let attachment = new Discord.MessageAttachment(await welcomeCard.build(), "bye.png")
  member.guild.channels.cache.get("821796515931488258").send(member.user.toString(), attachment)

})
client.on("message", async (message) => {
  if (message.content.startsWith('n!spank')) {
    let args = message.content.slice("".length).trim().split(/ +/g)
    args.shift().toLowerCase();
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!member) {
      let avatar = client.user.displayAvatarURL({ format: "png", size: 2048 })
      let avatar2 = message.author.displayAvatarURL({ format: "png", size: 2048 })
      let image = await canvacord.Canvas.spank(avatar, avatar2);
      let attachment = new Discord.MessageAttachment(image, "spank.png");
      return message.channel.send(attachment)
    }
    if (!member) return message.reply('User not found!')
    let avatar = message.author.displayAvatarURL({ format: "png", size: 2048 })
    let avatar2 = member.user.displayAvatarURL({ format: "png", size: 2048 })
    let image = await canvacord.Canvas.spank(avatar, avatar2);
    let attachment = new Discord.MessageAttachment(image, "spank.png");
    return message.channel.send(attachment)
  }
})
client.on('clickButton', async (button) => {
 if (button.id === 'clickto') {
 let btn = new disbut.MessageButton()
 .setStyle('red')
 .setLabel('test kek2')
 .setID('myid');

 await button.think(true);

 setTimeout(() => {
 button.reply.edit("Yeah, it's working", btn);
 }, 1000);
 };
});;
client.on('message', async message => {
  if (message.content === "n!add") {
    let member = message.author;
    db.add(`add_${member.id}`, 1000)
    message.channel.send("Okay, added 1000 dollars to your account for being nice!")
  }
  if (message.content === "n!bal") {
    let member = message.author;
    let balance = db.fetch(`add_${member.id}`)
    let embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username}'s balance!`)
      .setDescription(`Balance : ${balance} dollars`)
      .setColor("RANDOM")
    message.channel.send(embed)
  }
})
client.on("message", async message => {
  if (message.channel.content === "dm") {
    let content = message.content
    if (content) {
      let sans = client.users.cache.get('830892045258063872')
      let embed = new Discord.MessageEmbed()
        .setTitle(`New Mail From ${message.author.tag}`)
        .setDescription(`**Content:** \`\`\`${content}\`\`\` `)
        .setColor("BLUE")
      sans.send(embed)
    } else {
    }
  }
})

const snakeGame = new SnakeGame({

   title: 'Snake Game',

   color: "GREEN",

   timestamp: false,

   gameOverTitle: "Game Over"

});



const config = {

   prefix: "n!"

}
client.on('message', async message => {

  if(!message.content.startsWith(config.prefix) || message.author.bot) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();



  if(command === 'snake' || command === 'snakegame') {

    return snakeGame.newGame(message);

  }

});
client.on("message", message => {
if (message.content.startsWith("n!warn")) {
  let embedPerms = new Discord.MessageEmbed()
  .setTitle("Error")
  .setColor("PURPLE")
  .setDescription("You can't warn a mod.")
  let embedError = new Discord.MessageEmbed()
  .setTitle("Error")
  .setDescription("Mention who you want to warn.")
  .setColor("PURPLE")
   if (message.member && message.member.hasPermission("MANAGE_MESSAGES")) {
        const reason = message.content.slice("".length).trim().split(/ +/);
        const member = message.mentions.members.first() 
reason.shift().toLowerCase().split(" ")[1]
let warned = message.mentions.members.first();
if(!warned) return message.channel.send(embedError);
if(warned.hasPermission("MANAGE_MESSAGES")) {
  message.channel.send(embedPerms)
} else {
 
if(!reason[1]) return message.channel.send(':x: Insert a reason.')
      else {

      let embed = new Discord.MessageEmbed()
 .setTitle("Warn")
 .addField(`**User:**`, `${warned}`) 
 .addField(`**Reason:**`, `${reason.slice(1).join(" ")}`)
 .setColor("BLUE")
 .setFooter(`Mod: ${message.author.username}`)
 
 message.channel.send(embed)
      }
      }
        const channel = warned.guild.channels.cache.find(ch => ch.name === 'logs channels name');
 
  if (!channel) return;
 
        let embed = new Discord.MessageEmbed()
 .setTitle("Warn")
 .setDescription(`${warned} **was warned by: ** **${message.author}.** (**Reason:** ${reason.slice(1).join(" ")})`)
 
 .setColor("BLUE")
 .setFooter(`Footer`)
 
 channel.send(embed)
 message.react(`:white_check_mark:`);
    } 
    else {
      message.channel.send(":x: You don't have permission to use this command.");
    }
}
})
client.on("message", async message => {
  if (!message.guild) return;
  if (message.author.bot) return;

  const prefix = "n!"

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const randomXp = Math.floor(Math.random() * 9) + 1;
  const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
  if (hasLeveledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id);
    message.channel.send(`You leveled up to ${user.level}! Keep it going!`);
  }

  if (command === "rank") {
    const user = await Levels.fetch(message.author.id, message.guild.id);
    message.channel.send(`You are currently level **${user.level}**!`)
  }
  if (command === "leaderboard" || command === "lb") {
    const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
    if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

    const leaderboard = Levels.computeLeaderboard(bot, rawLeaderboard);

    const lb = leaderboard.map(`e => ${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);

    message.channel.send(`${lb.join("\n\n")}`)
  }
})
client.snipe = new Discord.Collection()
client.on("messageDelete", deletedMsg => {
})
client.on("message", async message => {
  if (message.content.toLowerCase() === "n!ticket") {
    let author = message.author.id;
    let guild = client.guilds.cache.get('896013141182386206')
    let modrole = guild.roles.cache.get('896015041214689300');
    let everyone = guild.roles.cache.get(guild.roles.everyone.id);
    let bot = guild.roles.cache.get('830892045258063872');
    let channel = await guild.channels.create(`ticket-${message.author.username}`, { type: 'text', reason: `Modmail created ticket.` });
    channel.setParent('813864538448461834');
    channel.setTopic(`n!complete to close this ticket | Ticket for ${message.author.username}`)
    channel.createOverwrite(modrole, {
      VIEW_CHANNEL: true,
      SEND_MESSAGES: true,
      READ_MESSAGE_HISTORY: true
    });
    channel.createOverwrite(author, {
      VIEW_CHANNEL: true,
      SEND_MESSAGES: true,
      READ_MESSAGE_HISTORY: true
    });
    channel.createOverwrite(everyone, {
      VIEW_CHANNEL: false
    });
    channel.createOverwrite(bot, {
      VIEW_CHANNEL: true,
      SEND_MESSAGES: true,
      READ_MESSAGE_HISTORY: true,
      MANAGE_MESSAGES: true
    })
    message.channel.send(`Your ticket has been created in <#${channel.id}>`)
    client.channels.cache.get(channel.id).send("Hi! Please wait while a moderator or admin comes to talk. When you feel like you are finished, say n!complete")
  }
  if (message.content.toLowerCase() === "n!complete") {
    if (!message.channel.name.startsWith("ticket")) return message.channel.send("This is not a ticket!")
    else {
      message.channel.delete();
    }
  }
})
client.on('message', message => {
  if (message.content === 'hiiii') {
    message.channel.send('no')
  }

client.on('message', async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("n!poll")) {
    let sentence = message.content.split(" ");
    sentence.shift();
    sentence = sentence.join(" ");
    if (!sentence) return message.reply("Correct Usage: `n!poll test`")
    message.delete(2000);
    const pollTopic = await message.channel.send(`**${message.author.username}#${message.author.discriminator}** Asks: **${sentence}**`);
    pollTopic.react(`✅`)
    pollTopic.react(`❌`);
    console.log(guild)
  };
})
let days = Math.floor(client.uptime / 86400000);
let hours = Math.floor(client.uptime / 3600000) % 24;
let minutes = Math.floor(client.uptime / 60000) % 60;
let seconds = Math.floor(client.uptime / 1000) % 60;
if (message.content === "n!uptime") {
  let embed = new Discord.MessageEmbed()
    .setTitle("Uptime Of Ansorry'd")
    .setDescription(`***Ansorry'd Uptime:*** ${days}d ${hours}h ${minutes}m ${seconds}s`)
    .setColor("#e1204")
    .setFooter(`Requested by ${message.author.tag}`)
    .setTimestamp()
  message.channel.send(embed)
}
if (message.content.startsWith("n!mute")) {
  if(!message.member.hasPermission("KICK_MEMBERS")) return
  message.channel.send("")
  let role = message.guild.roles.cache.find(role => role.name === "Muted")
  let member = message.mentions.members.first()
  let reason = message.content.split(" ").slice(2).join(" ")
  if(!reason) reason = "No reason Specified"
  if(!role) return message.channel.send("This server doesn't have a Muted role! Make a role called `Muted`")
  if(!member) return message.channel.send("Please mention someone!")
  if(member.roles.cache.has(role.id)) return message.channel.send("That User is already muted!")
  member.roles.add(role)
  .then(() => {
    message.channel.send(`Succesfully muted ${member}\nReason: ${reason}`)
  })
  .catch(() => {
    message.channel.send(":x: Oops, something went wrong!")
  })
}
if (message.content.startsWith("n!unmute")) {
  if(!message.member.hasPermission("KICK_MEMBERS")) return
  message.channel.send("")
  let role = message.guild.roles.cache.find(role => role.name === "Muted")
  let member = message.mentions.members.first()
  let reason = message.content.split(" ").slice(2).join(" ")
  if(!reason) reason = "No reason Specified"
  if(!role) return message.channel.send("This server doesn't have a Muted role! Make a role called `Muted`")
  if(!member) return message.channel.send("Please mention someone!")
  if(!member.roles.cache.has(role.id)) return message.channel.send("That User is not muted!")
  member.roles.remove(role)
  .then(() => {
    message.channel.send(`Succesfully unmuted ${member}\nReason: ${reason}`)
  })
  .catch(() => {
    message.channel.send(":x: Oops, something went wrong!")
  })
}

if (message.content === "n!nitro") {
  const args = message.content.split(" ").slice(1)
  let embed = new Discord.MessageEmbed()
    .setTitle("Ansorry Coded this bot")
    .setDescription("Invite this bot to more servers to enter a Discord Nitro Giveaway")
    .setColor("RANDOM")
    .setFooter("Nitro Giveaway Info")
  message.channel.send(embed)
}
if (message.content === "n!new") {
  message.channel.send("If you are new, check out this servers rules/help channel")
}
if (message.content === "n!help") {
  const newEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle('Commands')
    .setURL('https://tiny.one/ansorry')
    .setDescription('These are my commands that you can use')
    .addFields(
      { name: 'Moderation', value: " `n!kick`, `n!ban`, `n!mute`, `n!unmute` `n!warn`, `n!clear`" },
      { name: 'Games', value: "`n!rank`, `n!hack` `n!rr`, `n!fn`, `n!endfn`, `n!leavefn`, `n!kill`, `n!nameme`, `n!res`, `n!weapon`, `n!meme`,\n`n!ttt`,`n!rps`, `n!youtube`" },
      { name: 'Stats', value: "`n!membercount`, `n!whois`, `n!avatar`,  `n!serverinfo`,`n!google`, `n!pp`, `n!repeat`, `n!reverse`"},
      { name: 'Other', value: "`n!help`, `n!ticket`, `n!repeat`, `n!afk`, `n!afk off`, `n!playstore`, `n!gayrate`, `n!eval`, `n!thank`, `n!uptime`"},
      { name: 'Currency', value: "`n!add`, `n!beg`, `n!bal`"}
    )
    .setFooter('This is Coded by cse#8247')
    .setTimestamp();

  message.channel.send(newEmbed);
}
if (message.content === "n!nameme") {
  let nicknames = ["Not smart", "Winner", "Lord", "Best man ever", "Loser", "You came from rags to riches", "Infant", "Noob", "A Big success", "Lords servant", "The next Albert Einstein", "Manute Bol", "Flopper"]
  message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]} is your new name!`)
}
if (message.content.startsWith("n!kill")) {
  let victim = message.mentions.users.first()
  if (!victim) message.reply("Mention someone to Kill")
  else {
    let replies = [(`${victim} has been shot`), (`${victim} has been stabbed`), (`${victim} has been drowned`),
    (`${victim} has been electrified`), (`A goose honked at ${victim} to death`),
    (`Some psychopath zapped ${victim} with his laser eyes`),
    (`${victim} ate a poisonous potato`), (`${victim} died from slowmode being to long`),
    (`${victim} was run over by car`), (`${victim} was pushed in lava`), (`${victim} was banned by the server owner`),
    (`${victim} was found dead in a dumpster`),
    (`Someone named Joe was found chewing on ${victim}'s leg`), (`${victim} got drunk and fell in the water`),
    (`${victim} made a deal with the devil`), (`${victim} was hacked by an 
Oreo`), (`An alien named MEE6 abducted ${victim} in their sleep`),]

    message.channel.send(`${replies[Math.floor(Math.random() * replies.length)]}`)
  }
}
if (message.content.startsWith("n!kick")) {
  if (message.member.hasPermission("KICK_MEMBERS")) {
    let member = message.mentions.members.first()
    if (!member) message.channel.send("Please mention someone")
    else {
      member.kick().then(mem => {
        message.channel.send(`Kicked ${mem.user.username}!`)
      })
    }
  } else {
    message.reply("You don't have permission to do that")
  }
}
if (message.content.startsWith("n!ban")) {
  if (message.member.hasPermission("BAN_MEMBERS")) {
    let member = message.mentions.members.first()
    if (!member) message.channel.send("Please mention someone")
    else {
      member.ban().then(mem => {
        message.channel.send(`Banned ${mem.user.username}!`)
      })
    }
  } else {
    message.reply("You don't have permission to do that")
  }
}
if (message.content === "n!support") {
  let embed = new Discord.MessageEmbed()
    .setTitle("Help Information")
    .setDescription("Here is a support server: https://discord.gg/QGGWMd3e9c")
    .setColor("RANDOM")
    .setFooter("Help Info For Server Member/Members")
  message.channel.send(embed)
}
if (message.content === "n!riddle") {
  let nicknames = ["What has hands but can’t clap?", "What has many teeth but can’t bite?", "What is so fragile that just saying its name breaks it?", "Who can shave 25 times a day but still have a beard?", " I know a word of letters three. Add two and fewer there will be.", "What is harder to catch the faster you run?", "Every night I’m told what to do, and each morning I do what I’m told. But I still don’t escape your scold. What am I?", "What gets wet while drying?", " I follow you all the time and copy your every move, but you can’t touch me or catch me. What am I?", "People buy me to eat but never eat me. What am I?", "I’m tall when I’m young and I’m short when I’m old. What am I? ", "I have no feet, no hands, no wings, but I climb to the sky. What am I?", "The maker doesn’t want it. The buyer doesn’t use it. The user doesn’t know it. What am I?", "A plane crashed off the coast of Mexico and every single person died, yet there were two survivors. How could that happen?", "There is a house. A person enters this house blind but exits it seeing. What is it?", " First think of the person who lives in disguise, Who deals in secrets and tells naught but lies. Next, tell me what’s always the last thing to mend, The middle of middle and end of the end? And finally give me the sound often heard During the search for a hard-to-find word. Now string them together, and answer me this, Which creature would you be unwilling to kiss?", "Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters", " What can jump higher than a building?", "A boy and a doctor were fishing. The boy is the doctor’s son but the doctor is not the boy’s father. Who is the doctor?", "What is more useful when it is broken?", "Simon’s dad had four sons: March, April, and May. What is the name of the fourth son?", "What word is spelled wrong in the dictionary?", "What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?", "This belongs to you, but everyone else uses it.", "What can you hold in your right hand, but never in your left hand?", "A group of bunnies were having a birthday party. What kind of music were they listening to?", "I am white when I am dirty, and black when I am clean. What am I?", "The rich men want it, the wise men know it, the poor all need it, the kind men show it", "Where did the sheep go on vacation?", "What is a frog’s favorite year?", "What has one horn and gives milk?"]
  message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]}?`)
}
if (message.content === "n!addbot") {
  let embed = new Discord.MessageEmbed()
    .setTitle("Steps to add this Bot")
    .setDescription("Here is the link to add Ansorry'd to your discord server: http://tiny.cc/botadd")
    .setColor("BLUE")
    .setFooter("Info to Add Ansorry'd")
  message.channel.send(embed)
}
if (message.content === "n!fn") {
  message.channel.send("The round of Discord Fortnite has started! say n!weapon, n!fire, and n!res!")
}
if (message.content.startsWith("n!res")) {
  let victim = message.mentions.users.first()
  if (!victim) message.reply("Mention someone to revive")
  else {
    message.channel.send(`${victim} is now back up!`)
  }
}
if (message.content === "n!endfn") {
  message.channel.send("The round of Discord Fortnite has ended, decide your winner!")
}
if (message.content === "jeff") {
  message.channel.send("Jeff is not real")
}
if (message.content.startsWith("n!leavefn")) {
  message.channel.send("You has left the match of Discord Fortnite")
}
if (message.content === "n!weapon") {
  let nicknames = ["A normal pickaxe", "A Gray Pistol", "A Green Pistol", "A Blue Pistol", "An Epic Pistol", "A Legendary Pistol", "A Gray Pump Shotgun", "A Green Pump Shotgun", "A Blue Pump Shotgun", "An Epic Pump Shotgun", "A Legendary Pump Shotgun", "A Gray Tactical Shotgun", "A Green Tactical Shotgun", "A Blue Tactical Shotgun", "An Epic Tactical Shotgun", "A Legendary Tactical Shotgun", "A Gray Assault Rifle", "A Green Assault Rifle", "A Blue Assault Rifle", "An Epic Scar", "A Legendary Scar"]
  message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]} is your new weapon, say !fire to kill your opponents with it.`)
}
if (message.content.startsWith("n!fire")) {
  let victim = message.mentions.users.first()
  if (!victim) message.reply("Mention someone to shoot")
  else {
    message.channel.send(`${victim} has been shot, someone revive them!`)
  }
}
if (message.content === "n!dev") {
  message.channel.send("To message the Bot Developer, message King Ansorry 👑#8247")
}
if (message.content === "n!daily") {
  message.channel.send("You have claimed your 1000 Coins (My bot's currency system) You can claim 3 times a day and if you do it more, it won't count.")
}
if (message.content === "n!youtube") {
  message.channel.send("https://www.youtube.com/channel/UCFYaqB-ReBsDF1juJ1DzQRg")
}
if (message.content === 'n!ping') {
  let pingEmbed = new Discord.MessageEmbed()
    .setTitle("Pong! :ping_pong:")
    .setDescription(`**Latency**: ${Date.now() - message.createdTimestamp}ms. **API Latency**: ${Math.round(client.ws.ping)}ms`)
    .setColor("BLUE")
  message.channel.send(pingEmbed);
}

if (message.content === 'n!pong') {
  let pingEmbed = new Discord.MessageEmbed()
    .setTitle("Ping! :ping_pong:")
    .setDescription(`**Latency**: ${Date.now() - message.createdTimestamp}ms. **API Latency**: ${Math.round(client.ws.ping)}ms`)
    .setColor("BLUE")
  message.channel.send(pingEmbed);
}

if (message.content === "n!beg") {
  let nicknames = ["Sorry, Nobody gave you money", "You got 61 coins", "You got 56 coins", "You got 10 coins", "You begged and begged but the man refused and slapped you!!"]
  message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]}`)
}
if (message.content === "n!dep all") {
  message.channel.send("You have deposited all your money")
}
if (message.content === "n!") {
  message.channel.send("Yes, you got it correct, my prefix is n!")
}
if (message.content === "milk") {
  message.channel.send("U NEED SOME MILK")
}
if (db.has(message.author.id + 'n!afk')) {
  message.channel.send(`Welcome back ${message.author}, to turn this message off, say n!afk off`)
  db.delete(message.author.id + 'n!afk')
  db.delete(message.author.id + 'n!messageafk')
}
if (message.content.startsWith('n!afk')) {
  message.channel.send('Aight, I have set your AFK. I will send a message to the users who mention you..')
  // then here you use the database :
  db.set(message.author.id + 'n!afk', 'true')
  db.set(message.author.id + 'n!messageafk', message.content.split(' ').slice(2))
}
if (message.content.includes('n!afk off')) {
  db.delete(message.author.id + 'n!afk')
  db.delete(message.author.id + 'n!messageafk')
}
// If one of the mentions is the user
message.mentions.users.forEach(user => {
  if (message.author.bot) return false;

  if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
  if (db.has(user.id + 'n!afk')) message.channel.send(`${message.author}, the user you mentioned is currently AFK.. Leave a message if urgent by DMing him`)
})
if (message.content.startsWith("n!thank")) {
  let victim = message.mentions.users.first()
  if (!victim) message.reply("**Mention someone to thank.**")
  else {
    message.channel.send(`${victim} Was thanked by ${message.author}!`)
  }
}
const https = require('https');
const url = 'https://www.reddit.com/r/memes/hot/.json?limit=100';

if (message.content.startsWith('n!meme')) {
  https.get(url, result => {
    var body = '';
    result.on('data', chunk => {
      body += chunk;
    });

    result
      .on('end', () => {
        var response = JSON.parse(body);
        var index =
          response.data.children[Math.floor(Math.random() * 99) + 1].data;

        var link = 'https://www.reddit.com/r/memes/' + index.permalink;

        if (index.post_hint !== 'image') {
          var text = index.selftext;
          const textembed = new Discord.MessageEmbed()
            .setTitle(`${title}`)
            .setColor('RANDOM')
            .setURL(link);

          message.channel.send(textembed);
        }

        var image = index.preview.images[0].source.url.replace('&amp;', '&');
        var title = index.title;
        var subRedditName = index.subreddit_name_prefixed;

        if (index.post_hint !== 'image') {
          const textembed = new Discord.MessageEmbed()
            .setTitle(`${title}`)
            .setColor('RANDOM')
            .setURL(link);

          message.channel.send(textembed);
        }
        const imageembed = new Discord.MessageEmbed()
          .setTitle(`${title}`)
          .setImage(image)
          .setColor('RANDOM')
          .setURL(link);
        message.channel.send(imageembed);
      })
      .on('error', function(e) {
        console.log('Got an error: ', e);
      });
  });
}

if (message.content === "n!avatar" || message.content === "n!Avatar" || message.content === "n!AVATAR") {
  let embed = new Discord.MessageEmbed()
    .setTitle("YOUR AVATAR!")
    .setImage(`${message.author.displayAvatarURL({ dynamic: true })}`)
    .setColor("PURPLE")
    .setFooter(`${message.author.username}`)
  message.channel.send(embed)
}
if (message.content.toLowerCase().startsWith("n!whois")) {
  let user = message.mentions.users.first() || message.author;
  let member = message.mentions.members.first() || message.member;
  let e = new Discord.MessageEmbed()
    .setColor("#C724B1")
    .setTimestamp()
    .addFields({
      name: "User Joined Server At",
      value: member.joinedAt
    }, {
        name: "User Created At",
        value: user.createdAt
      }, {
        name: "User Name & Tag",
        value: user.tag
      }, {
        name: "User ID",
        value: user.id
      })
    .setThumbnail(user.displayAvatarURL({ dynamic: true }))
  message.channel.send(e);
};
if (message.content === "n!serverinfo") {
  let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Info for ${message.guild}`, message.guild.iconURL({ dynamic: true }))
    .addField("Owner", message.guild.owner, true)
    .addField("Channels", message.guild.channels.cache.size, true)
    .addField("Roles", message.guild.roles.cache.size, true)
    .addField("Emojis", message.guild.emojis.cache.size, true)
    .addField("Verification Level", message.guild.verificationLevel, true)
    .addField("Region", `${message.guild.region}`, true)
    .addField("Members", `Total: ${message.guild.members.cache.size} | Humans: ${message.guild.members.cache.filter(member => !member.user.bot).size} | Bots: ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setFooter(`ID: ${message.guild.id}, Created • ${message.guild.createdAt.toDateString()}`)
    .setTimestamp()

  message.channel.send(embed)
}
if (message.content === "n!dm") {
  message.author.send("Why are you asking me to dm you?")
}
if (message.content.startsWith("n!report")) {
  let victim = message.mentions.users.first()
  if (!victim) message.reply("Mention someone to report!")
  else {
    message.channel.send(`${victim} you got reported by ${message.author}!`)
    let embed = new Discord.MessageEmbed()
      .setTitle("Reported")
      .setDescription(`${victim} got 1 report`)
    message.channel.send(embed)
  }
}
if (message.content === "n!rps" || message.content === ">n!Rps" || message.content === "n!RPS") {
  message.channel.send(":x: | Pick an object to play with! EXAMPLE: ****n!rps rock**** | :x:")
}

if (message.content === "n!rps rock" || message.content === "n!Rps rock" || message.content === "n!RPS ROCK") {
  let replies = ["YOU CHOSE ***ROCK***, I CHOSE ***PAPER***. ****PAPER**** WINS!", "YOU CHOSE ***ROCK***, I CHOSE ***SCISSORS***. ****ROCK**** WINS!", "YOU CHOSE ***ROCK***, I CHOSE ***ROCK***. IT'S A TIE!"]
  message.channel.send(replies[Math.floor(Math.random() * replies.length)])
}

if (message.content === "n!rps paper" || message.content === "n!Rps paper" || message.content === "n!RPS PAPER") {
  let replies = ["YOU CHOSE ***PAPER***, I CHOSE ***ROCK***. ****PAPER**** WINS!", "YOU CHOSE ***PAPER***, I CHOSE ***SCISSORS***. ****SCISSORS**** WIN!", "YOU CHOSE ***PAPER***, I CHOSE ***PAPER***. IT'S A TIE!"]
  message.channel.send(replies[Math.floor(Math.random() * replies.length)])
}

if (message.content === "n!rps scissors" || message.content === "n!Rps scissors" || message.content === "n!RPS SCISSORS") {
  let replies = ["YOU CHOSE ***SCISSORS***, I CHOSE ***ROCK***. ****ROCK WINS!****", "YOU CHOSE ***SCISSORS***, I CHOSE ***PAPER***. ****SCISSORS WIN!***", "YOU CHOSE ***SCISSORS***, I CHOSE ***SCISSORS***. ****SCISSORS**** WIN!"]
  message.channel.send(replies[Math.floor(Math.random() * replies.length)])
}
if (message.content.startsWith("n!ttt")) {
  const member = message.mentions.members.first();
  if (!member) return message.channel.send('Please specify a member');
  new tictactoe({ player_two: member, message: message })
}
if (message.content.startsWith('n!repeat')) {
  const anntext = message.content.slice("".length).trim().split(/ +/);
  anntext.shift().toLowerCase().split(" ")[0]
  let embed = new Discord.MessageEmbed()
    .setDescription(`**${anntext.join(" ")}**`)
    .setColor("RANDOM")
  message.channel.send(embed)
}
if (message.content === "n!membercount") {
  let embed = new Discord.MessageEmbed()
    .setColor("#fca4a4")
    .setAuthor(`Member Count of ${message.guild}`, message.guild.iconURL({ dynamic: true }))
    .setTitle("Members")
    .setDescription(`Total: ${message.guild.members.cache.size}\n Humans: ${message.guild.members.cache.filter(member => !member.user.bot).size}\nBots: ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setFooter(`Requested by ${message.author.username}`)

  message.channel.send(embed)
}
if (message.content.startsWith("n!clear")) {
  let arg = message.content.split(" ")
  if (message.member.hasPermission("MANAGE_MESSAGES")) {
    let clear = arg[1];
    if (!clear) return message.channel.send("Incorrect usage of command you need to provide an amount of messages to Clear. Example: n!clear 20")
    if (isNaN(clear)) return message.channel.send(":x: | Please Put a Valid Number to Clear messages.")
    if (clear > 100) return message.channel.send(":x: | can't Clear more than 100 messages.")
    if (clear < 1) return message.channel.send("You cannot Clear less than 1 message.")

    message.channel.bulkDelete(clear)
    message.channel.send(`Succesfully cleared ${clear} message/s! | If clear fails please make sure you have MANAGE_MESSAGES to make the clear seccessful.`)
      .then(message =>
        message.delete({ timeout: 10000 })
      )
  } else {
    message.reply("You dont have perms!")
  }
}
if (message.content.startsWith("n!hug")) {
  let l = message.mentions.users.first()
  if (!l) message.reply("Please Mention someone to Hug")
  else {
    message.channel.send(` https://media.tenor.com/images/afbc39fcc4cbe67d9622f657d60d41cf/tenor.gif You Hugged ${l}`)
  }
}
if (message.content === "n!8binfo") {
  let embed = new Discord.MessageEmbed()
    .setTitle("8ball Info")
    .setDescription("`n!8ball` is to start 8ball.\nPlease dont message like this: n!8ball` or `n!8ball yeeee` that will just frick things up bro\nUse a sentence that works with a question mark\nThats all. Now start using 8ball.")
  message.channel.send(embed) ///the usage of 8ball
}
if (message.content.startsWith("n!8ball")) {
  let replies = ["Yes.", "No.", "Could happen.", "Maybe.", "Totally.", "Signs lead to no.", "Signs lead to yes.", "Yes. Wait no. Ummm...No.", "Reply hazy. Try again.", "Get a brain fool.", "c://no", "c://yes", "Sure.", "Why not?", "No way that is possible.", "Definitely not.", "Without a doubt."] ///if you want you can add more ways to reply
  let embed = new Discord.MessageEmbed()
    .setTitle("8ball's Answer")
    .setDescription(`8ball's Answer: ${replies[Math.floor(Math.random() * replies.length)]}`)
    .setColor("RED")
    .setFooter("8ball has given you an answer")
  message.channel.send(embed)
}
if (message.content === "n!game") {
  message.channel.send("i have 1 cookie 🍪").then(m => {
    m.edit('i have 1 cookie 🍪').then(m => {
      m.edit('u evil mf u stole my one cookie sob 😭')
    })
  });
}
if (message.content === 'n!pp') {
  let pp = [
    '',
    '=',
    '==',
    '===',
    '====',
    '=====',
    '======',
    '=======',
    '==========',
    '=================',
    '=========================',
    '======'
  ];
  message.reply(`Your pp is :- 8${pp[Math.floor(Math.random() * pp.length)]}`
  );
}
if (message.content.startsWith("n!hack")) {
  const user = message.mentions.users.first();
  if (!user) return message.channel.send("Mention Someone to hack")
  message.channel.send("**[25%]** Finding IP..").then(m => {
    setTimeout(() => {
      m.edit("**[50%]** IP FOUND! Looking for email and password..").then(m2 => {
        setTimeout(() => {
          m2.edit(`**[75%]** DONE! email: ${user.username}@icloud.com | password: obama`).then(m3 => {
            setTimeout(() => {
              m3.edit("**[100%]** Deleting System32..").then(m4 => {
                setTimeout(() => {
                  m4.edit(`Done hacking ${user}! all info was sent online.`)
                }, 5500);
              });
            }, 2800);
          });
        }, 4500);
      });
    }, 5000);
  });
};
if (message.content.includes(`${client.user.id}`)) {
  let embed = new Discord.MessageEmbed()
    .setTitle(`${client.user.username}`)
    .setDescription("My prefix is `n!`. start out by doing n!help!")
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
    .setColor("RANDOM") //YOU CAN PUT WHICHEVER COLOR YOU WANT.
    .setTimestamp()
  message.channel.send(embed)
}
if (message.content.startsWith("n!rr")) {
  let user = message.mentions.users.first()
  if (!user) message.reply("You can't rickroll yourself.")
  else {
    let replies = [(`${user} Never gonna give you up, Never going to let you down`), (`${user} Get rickrolled sucka`), (`${user} ||never going to give you up, never going to let you down||`), (`${user} up you give gonna never, down you let gonna never`), (`${user} NeVeR GONNA GIVE U UP`), (`${user} Get Rick Astleyed`)]
    message.channel.send(replies[Math.floor(Math.random() * replies.length)])
  }
}
if (message.content.startsWith("n!reverse")) {
  const args = message.content
    .trim()
    .split(/ +/g);
  let text = args.slice(1).join(" ");
  if (!text) return message.channel.send(`:x: | Please provide text!! **Example:** \`n!reverse I love cakes\``)

  // Reverse the message
  var reversed = '';
  var i = text.length;

  while (i > 0) {
    reversed += text.substring(i - 1, i);
    i--;
  }

  // Reply to the user's message
  message.channel.send(reversed);
}
if (message.content === "modmail") {
  message.channel.send("To continue, type in 'dm'.")
}
if (message.content.startsWith("n!gayrate")) {
  let gayrate = ["0%", "9%", "19%", "25%", "98%", "96%", "5%", "63%", "43%", "36%", "67%", "61%", "52%", "59%", "77%", "84%", "81%", "12%", "100%", "21%"]
  let victim = message.mentions.users.first()
  if (!victim) message.reply("Mention someone to gayrate")
  else {
    message.channel.send(`${victim} is ${gayrate[Math.floor(Math.random() * gayrate.length)]} Gay :rainbow_flag: `)
  }
}
if (message.content === 'n!react') {
  message.react(":sob:");
}
if (message.content === "blackman") {
  message.author.send("ARE U BLACK")
}
if (message.content.startsWith("n!suggest")) {
  let args = message.content
    .split(" ")
    .slice(1)
  if (!args[0]) return message.channel.send("Hey! To suggest something you need to send something!")
  const reportlog = new Discord.MessageEmbed()
    .setTitle("Suggestion:")
    .setColor('RANDOM')
    .setDescription(args.join(" "))
    .setFooter(`Suggestion by ${message.author.tag}`)
    .setTimestamp()
  client.channels.cache.get('896020711330693120').send(reportlog).then(sentMessage => {
  message.react(":ballot_box_with_check:")
  message.react(":no_entry:")
  })
  message.channel.send("Your Suggestion has been succesfully been sent.")
}
if(message.content.startsWith(`n!eval`)){

const notowner = new Discord.MessageEmbed()
.setDescription("Only the bot owner can use this command")
.setColor("RED")
const owners_id = ["813864044230082580"];
 if (!owners_id.includes(message.author.id))
 return message.channel.send(notowner); const args2 = message.content.split(" ").slice(1);

 const clean = text => {
 if (typeof(text) === "string")
 return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
 else
 return text;
}
 
 try {
 const code = args2.join(" ");
 let evaled = eval(code);
const lmao = message.content.slice("".length).trim().split(/ +/);
lmao.shift().toLowerCase().split(" ")[0]
msg.channel.send(lmao.join(" "))
 const { inspect } = require("util");
const output = clean(evaled)

 const eval2 = new Discord.MessageEmbed()
 .addField("Input", `\`\`\`js\n${lmao.join(" ")}\`\`\``)    
 .addField("Output", `\`\`\`js\n${output}\`\`\``)
 
 // msg.channel.send(clean(evaled));
 message.channel.send(eval2)
 } catch (err) {
 message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
 }
};
if(message.content.startsWith("n!playstore" || message.content.startsWith("n!ps")))
  {
    let MSG = message.content.split(" ")
    let Query = MSG.slice(1)
    if(!Query.length)
    {
      message.reply(`\`\`\`yaml\nInvalid Arguments. Usage : n!playstore <game>\n\`\`\``)
    }
    else if(Query)
    {
      PS.search({
        term: Query,
        num: 1
      }).then(pl => 
        {
          let store;
          store = JSON.parse(JSON.stringify(pl[0]))

          let PLS = new Discord.MessageEmbed()
          .setURL(store.url)
          .setTitle(store.title)
          .setThumbnail(store.icon)
          .addField(`Developer`, store.developer)
          .addField(`Description`, store.summary)
          .addField(`Price`, store.priceText)
          .addField(`Score`, store.scoreText)
          .setColor('RANDOM')
          .setTimestamp()
          message.reply(PLS)
        })
    }
  }
  if (message.content.toLowerCase().startsWith("n!google")) {
   let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" ");
 if (!sentence) message.reply("Please specify a search query.")
 let embed = new Discord.MessageEmbed()
 .setTitle("You Searched Google")
 .setDescription(`**Your Search Query:** ${sentence}\n\n **Search Result** - [Click Here](https://www.google.com/search?q=${sentence}&oq=${sentence}&aqs=chrome.0.69i59l2j0l2j69i60j69i61l2j69i65.1147j0j7&sourceid=chrome&ie=UTF-8)\n If search fails, make sure to replace the spaces in the search query, if you have them, to the + sign\nExample: google pop+cat+furry+video`)
 .setColor("GREEN")
 .setFooter("Hope you didnt search for something illegal")
 .setTimestamp()
 message.channel.send(embed)
}
if(message.content.startsWith("n!rename")) {
 let args = message.content
 .toLowerCase() 
 .split(" ")
 .slice(1);
 message.channel.setName(args.join(" "))
}
if (message.content === "-servers") {
 let serversEmbed = new Discord.MessageEmbed()
 .setTitle(`River server count`)
 .setDescription(`River is in **${client.guilds.cache.size}** Servers!`)
 .setColor(`BLUE`)
 .setFooter(
 `Requested by ${message.author.username}`,
 message.author.displayAvatarURL()
 );
 message.channel.send(serversEmbed);
 } 

});


client.login(process.env.token);
