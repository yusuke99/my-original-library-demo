const figlet = require('figlet');
const emojiRegex = require('emoji-regex/RGI_Emoji.js');

const myOriginalLibrary = (emoji) => {
  const message = 'Awesome work !';
  const isEmoji = emojiRegex().exec(emoji);

  if (isEmoji) {
    const decoration = emoji.repeat(30);

    figlet(message, (_, result) => {
      console.log(decoration);
      console.log(result);
      console.log(decoration);
    });

    return 'OK';
  }

  throw new Error(`
    ❌ Please pass emoji as argument
    👉 ex) myOriginalLibrary("🎉")
  `);
};

module.exports = myOriginalLibrary;
