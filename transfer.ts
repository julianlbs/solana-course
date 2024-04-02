import "dotenv/config";
import { getKeypairFromEnvironment } from '@solana-developers/helpers';
import { Connection, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from '@solana/web3.js';

export async function transferFunds() {
  try {

    const suppliedToPubkey = process.argv[2] || null;
    if (!suppliedToPubkey) {
      console.log('Please provide a public key to send to');
      process.exit(1);
    }

    const senderKeyPair = getKeypairFromEnvironment("SECRET_KEY");
    console.log(`suppliedToPubKey: ${suppliedToPubkey}`);
    const toPubkey = new PublicKey(suppliedToPubkey);

    const connection = new Connection("https://api.devnet.solana.com", "confirmed");
    console.log(`✅ Loaded our own keypair, the destination public key, and connected to Solana`);

    const transaction = new Transaction();
    const LAMPORTS_TO_SEND = 5000;
    const sendSolInstruction = SystemProgram.transfer({
      fromPubkey: senderKeyPair.publicKey,
      toPubkey,
      lamports: LAMPORTS_TO_SEND,
    });
    transaction.add(sendSolInstruction);

    const signature = await sendAndConfirmTransaction(connection, transaction, [senderKeyPair]);

    console.log(`💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `);
    console.log(`Transaction signature is ${signature}`);

  } catch (err) {
    console.error(err);
  }
}

transferFunds()