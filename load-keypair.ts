import "dotenv/config";
import { getKeypairFromEnvironment } from '@solana-developers/helpers';

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`✅ Finished! We've loaded our secret key securely, using an env file!`);
console.log(`🔐 Here's our public key: ${keypair.publicKey}`);
console.log(`🔐 Here's our secret key: ${keypair.secretKey}`);