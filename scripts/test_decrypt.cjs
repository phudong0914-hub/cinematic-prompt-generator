const fs = require('fs');
const path = require('path');

const outPath = path.join(__dirname, '../public/data/prompts.enc.json');
const rawPath = path.join(__dirname, '../public/data/prompts.json');

const encryptedObj = JSON.parse(fs.readFileSync(outPath, 'utf-8'));
const payload = encryptedObj.payload;
const key = "CINE_PROMPT_SECRET_KEY_2026";

// base64 decode to binary string (simulating atob)
const decodedBinary = Buffer.from(payload, 'base64').toString('binary');

// XOR
const bytes = new Uint8Array(decodedBinary.length);
for (let i = 0; i < decodedBinary.length; i++) {
  bytes[i] = decodedBinary.charCodeAt(i) ^ key.charCodeAt(i % key.length);
}

// UTF-8 decode
const decrypted = new TextDecoder('utf-8').decode(bytes);

const rawData = fs.readFileSync(rawPath, 'utf-8');

if (decrypted === rawData) {
    console.log("DECRYPTION MATCHES ORIGINAL PERFECTLY!");
} else {
    console.log("MISMATCH!");
    console.log("Start of decrypted:", decrypted.substring(0, 100));
}
