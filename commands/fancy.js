// Font maps
const cursiveMap = {
  a: '𝒶', b: '𝒷', c: '𝒸', d: '𝒹', e: 'ℯ', f: '𝒻', g: 'ℊ', h: '𝒽', i: '𝒾', j: '𝒿', k: '𝓀',
  l: '𝓁', m: '𝓂', n: '𝓃', o: 'ℴ', p: '𝓅', q: '𝓆', r: '𝓇', s: '𝓈', t: '𝓉', u: '𝓊',
  v: '𝓋', w: '𝓌', x: '𝓍', y: '𝓎', z: '𝓏',
  A: '𝒜', B: 'ℬ', C: '𝒞', D: '𝒟', E: 'ℰ', F: 'ℱ', G: '𝒢', H: 'ℋ', I: 'ℐ', J: '𝒥',
  K: '𝒦', L: 'ℒ', M: 'ℳ', N: '𝒩', O: '𝒪', P: '𝒫', Q: '𝒬', R: 'ℛ', S: '𝒮', T: '𝒯',
  U: '𝒰', V: '𝒱', W: '𝒲', X: '𝒳', Y: '𝒴', Z: '𝒵'
};

const boldMap = {
  a: '𝐚', b: '𝐛', c: '𝐜', d: '𝐝', e: '𝐞', f: '𝐟', g: '𝐠', h: '𝐡', i: '𝐢', j: '𝐣',
  k: '𝐤', l: '𝐥', m: '𝐦', n: '𝐧', o: '𝐨', p: '𝐩', q: '𝐪', r: '𝐫', s: '𝐬', t: '𝐭',
  u: '𝐮', v: '𝐯', w: '𝐰', x: '𝐱', y: '𝐲', z: '𝐳',
  A: '𝐀', B: '𝐁', C: '𝐂', D: '𝐃', E: '𝐄', F: '𝐅', G: '𝐆', H: '𝐇', I: '𝐈', J: '𝐉',
  K: '𝐊', L: '𝐋', M: '𝐌', N: '𝐍', O: '𝐎', P: '𝐏', Q: '𝐐', R: '𝐑', S: '𝐒', T: '𝐓',
  U: '𝐔', V: '𝐕', W: '𝐖', X: '𝐗', Y: '𝐘', Z: '𝐙'
};

const italicMap = {
  a: '𝑎', b: '𝑏', c: '𝑐', d: '𝑑', e: '𝑒', f: '𝑓', g: '𝑔', h: 'ℎ', i: '𝑖', j: '𝑗',
  k: '𝑘', l: '𝑙', m: '𝑚', n: '𝑛', o: '𝑜', p: '𝑝', q: '𝑞', r: '𝑟', s: '𝑠', t: '𝑡',
  u: '𝑢', v: '𝑣', w: '𝑤', x: '𝑥', y: '𝑦', z: '𝑧',
  A: '𝐴', B: '𝐵', C: '𝐶', D: '𝐷', E: '𝐸', F: '𝐹', G: '𝐺', H: '𝐻', I: '𝐼', J: '𝐽',
  K: '𝐾', L: '𝐿', M: '𝑀', N: '𝑁', O: '𝑂', P: '𝑃', Q: '𝑄', R: '𝑅', S: '𝑆', T: '𝑇',
  U: '𝑈', V: '𝑉', W: '𝑊', X: '𝑋', Y: '𝑌', Z: '𝑍'
};

const boldItalicMap = {
  a: '𝒂', b: '𝒃', c: '𝒄', d: '𝒅', e: '𝒆', f: '𝒇', g: '𝒈', h: '𝒉', i: '𝒊', j: '𝒋',
  k: '𝒌', l: '𝒍', m: '𝒎', n: '𝒏', o: '𝒐', p: '𝒑', q: '𝒒', r: '𝒓', s: '𝒔', t: '𝒕',
  u: '𝒖', v: '𝒗', w: '𝒘', x: '𝒙', y: '𝒚', z: '𝒛',
  A: '𝑨', B: '𝑩', C: '𝑪', D: '𝑫', E: '𝑬', F: '𝑭', G: '𝑮', H: '𝑯', I: '𝑰', J: '𝑱',
  K: '𝑲', L: '𝑳', M: '𝑴', N: '𝑵', O: '𝑶', P: '𝑷', Q: '𝑸', R: '𝑹', S: '𝑺', T: '𝑻',
  U: '𝑼', V: '𝑽', W: '𝑾', X: '𝑿', Y: '𝒀', Z: '𝒁'
};

const squaredMap = {
  A: '🄰', B: '🄱', C: '🄲', D: '🄳', E: '🄴', F: '🄵', G: '🄶', H: '🄷', I: '🄸', J: '🄹',
  K: '🄺', L: '🄻', M: '🄼', N: '🄽', O: '🄾', P: '🄿', Q: '🅀', R: '🅁', S: '🅂', T: '🅃',
  U: '🅄', V: '🅅', W: '🅆', X: '🅇', Y: '🅈', Z: '🅉'
};

// Fonts 4–7 and 10 with maps
const classicFonts = [
    (t) => t, // 1. Normal
    (t) => t.toUpperCase(), // 2. UPPERCASE
    (t) => t.toLowerCase(), // 3. lowercase
    (t) => [...t].map(c => cursiveMap[c] || c).join(''), // 4. Cursive ✓
    (t) => [...t].map(c => boldMap[c] || c).join(''), // 5. Bold ✓
    (t) => [...t].map(c => italicMap[c] || c).join(''), // 6. Italic ✓
    (t) => [...t].map(c => boldItalicMap[c] || c).join(''), // 7. Bold Italic ✓
    (t) => `\`\`\`${t}\`\`\``, // 8. Monospace
    (t) => [...t].map(c => 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ'['abcdefghijklmnopqrstuvwxyz'.indexOf(c.toLowerCase())] || c).join(''), // 9. Circled
    (t) => [...t].map(c => squaredMap[c.toUpperCase()] || c).join(''), // 10. Squared ✓
    (t) => [...t].map(c => `(${c})`).join(''), // 11. Bracketed
    (t) => t.toUpperCase(), // 12. Weird caps
    (t) => [...t].map(c => c + '亭').join(''), // 13. Ghost text
    (t) => t.split('').join(' '), // 14. Spaced
    (t) => t.split('').map(c => c + '蜏汀').join(''), // 15. Hacker style
    (t) => `「${t}」`, // 16. Double brackets
    (t) => `「${t}」`, // 17. Japanese-style quote
    (t) => `「✦${t}✦」`, // 18. Star-bracket
    (t) => `⟦${t}⟧`, // 19. Math brackets
    (t) => `*${t}*`, // 20. Classic bold marker
];

const decorativeFonts = [
    // 21–30: Emojified / decorative styles
    (t) => `✨ ${t} ✨`,
    (t) => `🔟 ${t.toUpperCase()} 🔟`,
    (t) => [...t].map(c => `📌${c}`).join(''),
    (t) => `🌸 ${t} 🌸`,
    (t) => `💫 ${t} 💫`,
    (t) => `⭐ ${t} ⭐`,
    (t) => `👑${t.toUpperCase()}👑`,
    (t) => `🎀 ${t} 🎀`,
    (t) => `💖${t}💖`,
    (t) => `✨ *✨ ${t} ✨* ✨`,
];

const fancyFonts = [...classicFonts, ...decorativeFonts];

export async function fancyCommand(client, message) {
    const remoteJid = message.key.remoteJid;
    const text = message.message?.extendedTextMessage?.text || message.message?.conversation || '';
    const parts = text.trim().split(' ');
    const args = parts.slice(1).filter(p => p.trim() !== '');

    // Preview all if no number or only whitespace
    if (args.length === 0 || isNaN(parseInt(args[0]))) {
        const sampleText = "Fancy Text";
        const preview = fancyFonts.map((f, i) => `*${i + 1}.* ${f(sampleText)}`).join('\n\n');
        return await client.sendMessage(remoteJid, { text: preview });
    }

    const styleIndex = parseInt(args[0]) - 1;
    const content = args.slice(1).join(' ');

    if (styleIndex < 0 || styleIndex >= fancyFonts.length) {
        return await client.sendMessage(remoteJid, {
            text: `❌ Invalid style number. Use *.fancy* to view styles.`,
        });
    }

    if (!content.trim()) {
        return await client.sendMessage(remoteJid, {
            text: `⚠️ Please provide text to style.\nExample: *.fancy 3 Hello World!*`,
        });
    }

    const styled = fancyFonts[styleIndex](content);
    await client.sendMessage(remoteJid, { text: styled });
}

export default fancyCommand;