import { Safe4337Pack } from '@safe-global/relay-kit'
import { PasskeyArgType } from '@safe-global/protocol-kit'

export async function executeTransaction (passkey: PasskeyArgType) {
  const safe4337Pack = await Safe4337Pack.init({
    provider: 'https://rpc.ankr.com/eth_sepolia',
    signer: passkey,
    bundlerUrl: `https://api.pimlico.io/v1/sepolia/rpc?apikey=pim_jJskkHrNovUqSu6HH4Xiqf`,
    options: {
      owners: [],
      threshold: 1
    },
    paymasterOptions: {
      isSponsored: true, // Paymaster will pay for the transaction (and has unlimited funds on Sepolia)
      paymasterUrl: `https://api.pimlico.io/v2/sepolia/rpc?apikey=pim_jJskkHrNovUqSu6HH4Xiqf`,
      paymasterAddress: '0x0000000000325602a77416A16136FDafd04b299f'
    }
  })

  // Define the transaction details
  const transaction = {
    to: '0x0000000000000000000000000000000000000000',
    value: '0',
    data: '0x'
  }

  // Create the Safe transaction
  const safeOperation = await safe4337Pack.createTransaction({
    transactions: [transaction]
  })

  // Sign the transaction with the passkey
  const signedSafeOperation = await safe4337Pack.signSafeOperation(
    safeOperation
  )

  // Execute the transaction and deploy the Safe
  const userOperationHash = await safe4337Pack.executeTransaction({
    executable: signedSafeOperation
  })

  console.log('Transaction submitted; userOperationHash:', userOperationHash)
}
