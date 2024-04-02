import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { generateKeyPair } from './generate-keypair';

export async function checkBalance() {
  const keypair = generateKeyPair();
  const publicKey = keypair.publicKey;

  const connection = new Connection("https://api.devnet.solana.com", "confirmed");
  const balanceInLamports = await connection.getBalance(publicKey)
  const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

  console.log(
    `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
  );
}

checkBalance()