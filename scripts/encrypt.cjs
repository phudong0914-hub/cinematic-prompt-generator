const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../public/data/prompts.json');
const outPath = path.join(__dirname, '../public/data/prompts.enc.json');

const rawData = fs.readFileSync(dataPath, 'utf-8');
const key = "CINE_PROMPT_SECRET_KEY_2026"; // Secret key

// Basic XOR encryption on UTF-8 bytes
const utf8Bytes = Buffer.from(rawData, 'utf-8');
const keyBytes = Buffer.from(key, 'utf-8');

const encryptedBytes = Buffer.alloc(utf8Bytes.length);
for (let i = 0; i < utf8Bytes.length; i++) {
  encryptedBytes[i] = utf8Bytes[i] ^ keyBytes[i % keyBytes.length];
}

const encryptedData = encryptedBytes.toString('base64');
fs.writeFileSync(outPath, JSON.stringify({ payload: encryptedData }));

console.log("Encrypted prompts.json -> prompts.enc.json successfully.");
