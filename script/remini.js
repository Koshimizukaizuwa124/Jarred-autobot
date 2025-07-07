const axios = require("axios");
const { sendMessage } = require("../handles/sendMessage");

module.exports = {
  name: "remini",
  description: "Enhance image to 4K quality",
  author: "Hershey Mademoiselle AI",
  usage: "Send any picture first then reply remini",

  async execute(senderId, args, pageAccessToken, imageUrl) {
    if (!imageUrl) {
      return sendMessage(senderId, {
        text: `❌ 𝗣𝗹𝗲𝗮𝘀𝗲 𝘀𝗲𝗻𝗱 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝗳𝗶𝗿𝘀𝘁, 𝘁𝗵𝗲𝗻 𝘁𝘆𝗽𝗲 "𝗿𝗲𝗺𝗶𝗻𝗶" 𝘁𝗼 𝗲𝗻𝗵𝗮𝗻𝗰𝗲 𝗶𝘁.`
      }, pageAccessToken);
    }

    sendMessage(senderId, { text: "⌛ 𝗘𝗻𝗵𝗮𝗻𝗰𝗶𝗻𝗴 𝗶𝗺𝗮𝗴𝗲, 𝗽𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁..." }, pageAccessToken);

    try {
      const url = `https://www.smfahim.xyz/4k?url=${encodeURIComponent(imageUrl)}`;
      const res = await axios.get(url);

      if (res.data && res.data.status && res.data.image) {
        const resultImage = res.data.image;

        await sendMessage(senderId, {
          attachment: {
            type: "image",
            payload: {
              url: resultImage
            }
          }
        }, pageAccessToken);
      } else {
        await sendMessage(senderId, {
          text: `❌ Failed to enhance image. Reason: ${res.data.message || 'Unknown error'}`
        }, pageAccessToken);
      }

    } catch (error) {
      console.error("❌ Error enhancing image:", error);
      await sendMessage(senderId, {
        text: `❌ An error occurred while enhancing the image. Please try again later.`
      }, pageAccessToken);
    }
  }
};
