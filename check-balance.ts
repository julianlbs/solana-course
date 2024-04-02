import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { generateKeyPair } from './generate-keypair';

export async function checkBalance() {
  try {
    const publicKey = new PublicKey('DPxe3juWL2QNY2jBfvqQ9KzAqpTPTkFWVeeKxjf1EDMW')

    const connection = new Connection("https://api.devnet.solana.com", "confirmed");
    const balanceInLamports = await connection.getBalance(publicKey)
    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

    console.log(
      `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
    );
  } catch (error) {
    console.error(error)
  }
}

checkBalance()