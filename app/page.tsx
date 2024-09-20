'use client'

import {
  createPasskey,
  storePasskeyInLocalStorage,
  loadPasskeyFromLocalStorage
} from '../lib/passkeys'
import { executeTransaction } from '../lib/executeTransaction'

export default function Home () {
  async function handleCreatePasskey () {
    const passkey = await createPasskey()
    storePasskeyInLocalStorage(passkey)
    console.log('Passkey stored:', passkey)
  }

  async function handleExecuteTransaction () {
    const passkey = loadPasskeyFromLocalStorage()
    await executeTransaction(passkey)
  }

  return (
    <div>
      <button onClick={handleCreatePasskey}>Create and Store Passkey</button>
      <button onClick={handleExecuteTransaction}>
        Execute Transaction and Deploy Safe
      </button>
    </div>
  )
}
