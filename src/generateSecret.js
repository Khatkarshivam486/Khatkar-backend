import crypto from "crypto"

const secret = crypto.createHash("sha256").update(crypto.randomBytes(64)).digest("hex")

console.log(secret);
