𝖼𝗈𝗇𝗌𝗍 𝖺𝗑𝗂𝗈𝗌 = 𝗋𝖾𝗊𝗎𝗂𝗋𝖾('𝖺𝗑𝗂𝗈𝗌');

𝗆𝗈𝖽𝗎𝗅𝖾.𝖾𝗑𝗉𝗈𝗋𝗍𝗌.𝖼𝗈𝗇𝖿𝗂𝗀 = {
  𝗇𝖺𝗆𝖾: '𝖺𝗂',
  𝗏𝖾𝗋𝗌𝗂𝗈𝗇: '1.0.0',
  𝗋𝗈𝗅𝖾: 0,
  𝗁𝖺𝗌𝖯𝗋𝖾𝖿𝗂𝗑: 𝖿𝖺𝗅𝗌𝖾,
  𝖺𝗅𝗂𝖺𝗌𝖾𝗌: ['𝗀𝗉𝗍', '𝗀𝗂𝗆𝖺𝗀𝖾'],
  𝖽𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇: "𝖠𝗇𝖺𝗅𝗒𝗓𝖾 𝗊𝗎𝖾𝗌𝗍𝗂𝗈𝗇 𝗈𝗋 𝖵𝗂𝗌𝗂𝗈𝗇",
  𝗎𝗌𝖺𝗀𝖾: "𝖺𝗂 [𝗊𝗎𝖾𝗌𝗍𝗂𝗈𝗇] 𝗈𝗋 𝗋𝖾𝗉𝗅𝗒 𝗍𝗈 𝖺𝗇 𝗂𝗆𝖺𝗀𝖾",
  𝖼𝗋𝖾𝖽𝗂𝗍𝗌: '𝖵𝖾𝗋𝗇',
  𝖼𝗈𝗈𝗅𝖽𝗈𝗐𝗇: 3,
};

𝗆𝗈𝖽𝗎𝗅𝖾.𝖾𝗑𝗉𝗈𝗋𝗍𝗌.𝗋𝗎𝗇 = 𝖺𝗌𝗒𝗇𝖼 𝖿𝗎𝗇𝖼𝗍𝗂𝗈𝗇({ 𝖺𝗉𝗂, 𝖾𝗏𝖾𝗇𝗍, 𝖺𝗋𝗀𝗌 }) {
  𝖼𝗈𝗇𝗌𝗍 𝗉𝗋𝗈𝗆𝗉𝗍𝖳𝖾𝗑𝗍 = 𝖺𝗋𝗀𝗌.𝗃𝗈𝗂𝗇(" ").𝗍𝗋𝗂𝗆();
  𝖼𝗈𝗇𝗌𝗍 𝗎𝗌𝖾𝗋𝖱𝖾𝗉𝗅𝗒 = 𝖾𝗏𝖾𝗇𝗍.𝗆𝖾𝗌𝗌𝖺𝗀𝖾𝖱𝖾𝗉𝗅𝗒?.𝖻𝗈𝖽𝗒 || '';
  𝖼𝗈𝗇𝗌𝗍 𝖿𝗂𝗇𝖺𝗅𝖯𝗋𝗈𝗆𝗉𝗍 = `${𝗎𝗌𝖾𝗋𝖱𝖾𝗉𝗅𝗒} ${𝗉𝗋𝗈𝗆𝗉𝗍𝖳𝖾𝗑𝗍}`.𝗍𝗋𝗂𝗆();
  𝖼𝗈𝗇𝗌𝗍 𝗌𝖾𝗇𝖽𝖾𝗋𝖨𝖣 = 𝖾𝗏𝖾𝗇𝗍.𝗌𝖾𝗇𝖽𝖾𝗋𝖨𝖣;
  𝖼𝗈𝗇𝗌𝗍 𝗍𝗁𝗋𝖾𝖺𝖽𝖨𝖣 = 𝖾𝗏𝖾𝗇𝗍.𝗍𝗁𝗋𝖾𝖺𝖽𝖨𝖣;
  𝖼𝗈𝗇𝗌𝗍 𝗆𝖾𝗌𝗌𝖺𝗀𝖾𝖨𝖣 = 𝖾𝗏𝖾𝗇𝗍.𝗆𝖾𝗌𝗌𝖺𝗀𝖾𝖨𝖣;

  𝗂𝖿 (!𝖿𝗂𝗇𝖺𝗅𝖯𝗋𝗈𝗆𝗉𝗍 && !𝖾𝗏𝖾𝗇𝗍.𝗆𝖾𝗌𝗌𝖺𝗀𝖾𝖱𝖾𝗉𝗅𝗒?.𝖺𝗍𝗍𝖺𝖼𝗁𝗆𝖾𝗇𝗍𝗌?.[0]?.𝗎𝗋𝗅) {
    𝗋𝖾𝗍𝗎𝗋𝗇 𝖺𝗉𝗂.𝗌𝖾𝗇𝖽𝖬𝖾𝗌𝗌𝖺𝗀𝖾("❌ 𝖯𝗅𝖾𝖺𝗌𝖾 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝖺 𝗉𝗋𝗈𝗆𝗉𝗍 𝗈𝗋 𝗋𝖾𝗉𝗅𝗒 𝗍𝗈 𝖺𝗇 𝗂𝗆𝖺𝗀𝖾.", 𝗍𝗁𝗋𝖾𝖺𝖽𝖨𝖣, 𝗆𝖾𝗌𝗌𝖺𝗀𝖾𝖨𝖣);
  }

  𝖺𝗉𝗂.𝗌𝖾𝗇𝖽𝖬𝖾𝗌𝗌𝖺𝗀𝖾('🤖 𝗔𝗜 𝗜𝗦 𝗣𝗥𝗢𝗖𝗘𝗦𝗦𝗜𝗡𝗚 𝗬𝗢𝗨𝗥 𝗥𝗘𝗾𝗨𝗘𝗦𝗧...', 𝗍𝗁𝗋𝖾𝖺𝖽𝖨𝖣, 𝖺𝗌𝗒𝗇𝖼 (𝖾𝗋𝗋, 𝗂𝗇𝖿𝗈) => {
    𝗂𝖿 (𝖾𝗋𝗋) 𝗋𝖾𝗍𝗎𝗋𝗇;
    𝗍𝗋𝗒 {
      𝗅𝖾𝗍 𝗂𝗆𝖺𝗀𝖾𝖴𝗋𝗅 = "";
      𝗂𝖿 (𝖾𝗏𝖾𝗇𝗍.𝗆𝖾𝗌𝗌𝖺𝗀𝖾𝖱𝖾𝗉𝗅𝗒?.𝖺𝗍𝗍𝖺𝖼𝗁𝗆𝖾𝗇𝗍𝗌?.[0]?.𝗍𝗒𝗉𝖾 === '𝗉𝗁𝗈𝗍𝗈') {
        𝗂𝗆𝖺𝗀𝖾𝖴𝗋𝗅 = 𝖾𝗏𝖾𝗇𝗍.𝗆𝖾𝗌𝗌𝖺𝗀𝖾𝖱𝖾𝗉𝗅𝗒.𝖺𝗍𝗍𝖺𝖼𝗁𝗆𝖾𝗇𝗍𝗌[0].𝗎𝗋𝗅;
      }

      𝖼𝗈𝗇𝗌𝗍 { 𝖽𝖺𝗍𝖺 } = 𝖺𝗐𝖺𝗂𝗍 𝖺𝗑𝗂𝗈𝗌.𝗀𝖾𝗍("𝗁𝗍𝗍𝗉𝗌://𝖺𝗉𝗂𝗌-𝗋𝗁𝗈-𝗇𝗂𝗇𝖾.𝗏𝖾𝗋𝖼𝖾𝗅.𝖺𝗉𝗉/𝗀𝖾𝗆𝗂𝗇𝗂", { 𝗉𝖺𝗋𝖺𝗆𝗌: { 𝖺𝗌𝗄: 𝖿𝗂𝗇𝖺𝗅𝖯𝗋𝗈𝗆𝗉𝗍, 𝗂𝗆𝖺𝗀𝗎𝗋𝗅: 𝗂𝗆𝖺𝗀𝖾𝖴𝗋𝗅 } });

      𝖼𝗈𝗇𝗌𝗍 𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾𝖳𝖾𝗑𝗍 = 𝖽𝖺𝗍𝖺.𝖽𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇 || "❌ 𝖭𝗈 𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾 𝗋𝖾𝖼𝖾𝗂𝗏𝖾𝖽 𝖿𝗋𝗈𝗆 𝖠𝖨.";

      // 𝖮𝗉𝗍𝗂𝗈𝗇𝖺𝗅: 𝖦𝖾𝗍 𝗎𝗌𝖾𝗋'𝗌 𝗇𝖺𝗆𝖾
      𝗍𝗋𝗒 {
        𝖼𝗈𝗇𝗌𝗍 𝗎𝗌𝖾𝗋𝖨𝗇𝖿𝗈 = 𝖺𝗐𝖺𝗂𝗍 𝖺𝗉𝗂.𝗀𝖾𝗍𝖴𝗌𝖾𝗋𝖨𝗇𝖿𝗈(𝗌𝖾𝗇𝖽𝖾𝗋𝖨𝖣);
        𝖼𝗈𝗇𝗌𝗍 𝗎𝗌𝖾𝗋𝖭𝖺𝗆𝖾 = 𝗎𝗌𝖾𝗋𝖨𝗇𝖿𝗈?.[𝗌𝖾𝗇𝖽𝖾𝗋𝖨𝖣]?.𝗇𝖺𝗆𝖾 || "𝖴𝗇𝗄𝗇𝗈𝗐𝗇 𝖴𝗌𝖾𝗋";
        𝖼𝗈𝗇𝗌𝗍 𝗍𝗂𝗆𝖾𝖯𝖧 = 𝗇𝖾𝗐 𝖣𝖺𝗍𝖾().𝗍𝗈𝖫𝗈𝖼𝖺𝗅𝖾𝖲𝗍𝗋𝗂𝗇𝗀('𝖾𝗇-𝖴𝖲', { 𝗍𝗂𝗆𝖾𝖹𝗈𝗇𝖾: '𝖠𝗌𝗂𝖺/𝖬𝖺𝗇𝗂𝗅𝖺' });
        𝖼𝗈𝗇𝗌𝗍 𝗋𝖾𝗉𝗅𝗒𝖬𝖾𝗌𝗌𝖺𝗀𝖾 = `🤖 𝗔𝗜 𝗔𝗦𝗦𝗜𝗦𝗧𝗔𝗡𝗧\𝗇━━━━━━━━━━━━━━━━━━\𝗇${𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾𝖳𝖾𝗑𝗍}\𝗇━━━━━━━━━━━━━━━━━━\𝗇🗣 𝗔𝘀𝗸𝗲𝗱 𝗕𝘆: ${𝗎𝗌𝖾𝗋𝖭𝖺𝗆𝖾}\𝗇⏰ 𝗧𝗶𝗺𝗲: ${𝗍𝗂𝗆𝖾𝖯𝖧}`;
        𝖺𝗐𝖺𝗂𝗍 𝖺𝗉𝗂.𝖾𝖽𝗂𝗍𝖬𝖾𝗌𝗌𝖺𝗀𝖾(𝗋𝖾𝗉𝗅𝗒𝖬𝖾𝗌𝗌𝖺𝗀𝖾, 𝗂𝗇𝖿𝗈.𝗆𝖾𝗌𝗌𝖺𝗀𝖾𝖨𝖣);
      } 𝖼𝖺𝗍𝖼𝗁 (𝗎𝗌𝖾𝗋𝖤𝗋𝗋𝗈𝗋) {
        𝖼𝗈𝗇𝗌𝗈𝗅𝖾.𝖾𝗋𝗋𝗈𝗋("𝖤𝗋𝗋𝗈𝗋 𝗀𝖾𝗍𝗍𝗂𝗇𝗀 𝗎𝗌𝖾𝗋 𝗂𝗇𝖿𝗈:", 𝗎𝗌𝖾𝗋𝖤𝗋𝗋𝗈𝗋);
        𝖺𝗉𝗂.𝖾𝖽𝗂𝗍𝖬𝖾𝗌𝗌𝖺𝗀𝖾("🤖 𝗔𝗜 𝗔𝗦𝗦𝗜𝗦𝗧𝗔𝗡𝗧\𝗇━━━━━━━━━━━━━━━━━━\𝗇${𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾𝖳𝖾𝗑𝗍}\𝗇━━━━━━━━━━━━━━━━━━\𝗇🗣 𝗔𝘀𝗸𝗲𝗱 𝗕𝘆: 𝖴𝗇𝗄𝗇𝗈𝗐𝗇 𝖴𝗌𝖾𝗋\𝗇⏰ 𝗧𝗶𝗺𝗲: ${𝗇𝖾𝗐 𝖣𝖺𝗍𝖾().𝗍𝗈𝖫𝗈𝖼𝖺𝗅𝖾𝖲𝗍𝗋𝗂𝗇𝗀('𝖾𝗇-𝖴𝖲', { 𝗍𝗂𝗆𝖾𝖹𝗈𝗇𝖾: '𝖠𝗌𝗂𝖺/𝖬𝖺𝗇𝗂𝗅𝖺' })}", 𝗂𝗇𝖿𝗈.𝗆𝖾𝗌𝗌𝖺𝗀𝖾𝖨𝖣);
      }

    } 𝖼𝖺𝗍𝖼𝗁 (𝖾𝗋𝗋𝗈𝗋) {
      𝖼𝗈𝗇𝗌𝗈𝗅𝖾.𝖾𝗋𝗋𝗈𝗋("𝖠𝖨 𝖤𝗋𝗋𝗈𝗋:", 𝖾𝗋𝗋𝗈𝗋);
      𝖼𝗈𝗇𝗌𝗍 𝖾𝗋𝗋𝖬𝗌𝗀 = "❌ 𝖤𝗋𝗋𝗈𝗋: " + (𝖾𝗋𝗋𝗈𝗋.𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾?.𝖽𝖺𝗍𝖺?.𝗆𝖾𝗌𝗌𝖺𝗀𝖾 || 𝖾𝗋𝗋𝗈𝗋.𝗆𝖾𝗌𝗌𝖺𝗀𝖾 || "𝖴𝗇𝗄𝗇𝗈𝗐𝗇 𝖾𝗋𝗋𝗈𝗋 𝗈𝖼𝖼𝗎𝗋𝗋𝖾𝖽.");
      𝖺𝗉𝗂.𝖾𝖽𝗂𝗍𝖬𝖾𝗌𝗌𝖺𝗀𝖾(𝖾𝗋𝗋𝖬𝗌𝗀, 𝗂𝗇𝖿𝗈.𝗆𝖾𝗌𝗌𝖺𝗀𝖾𝖨𝖣);
    }
  });
};
