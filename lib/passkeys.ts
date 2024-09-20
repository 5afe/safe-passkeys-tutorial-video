import { PasskeyArgType, extractPasskeyData } from '@safe-global/protocol-kit'

export async function createPasskey (): Promise<PasskeyArgType> {
  const passkeyCredential = await navigator.credentials.create({
    publicKey: {
      pubKeyCredParams: [
        {
          alg: -7,
          type: 'public-key'
        }
      ],
      challenge: crypto.getRandomValues(new Uint8Array(32)),
      rp: {
        name: 'Safe Smart Account'
      },
      user: {
        displayName: 'Safe Owner',
        id: crypto.getRandomValues(new Uint8Array(32)),
        name: 'safeowner'
      },
      timeout: 60000,
      attestation: 'none'
    }
  })

  if (!passkeyCredential) {
    throw Error('Passkey creation failed.')
  }

  const passkey = await extractPasskeyData(passkeyCredential)
  console.log('Created Passkey: ', passkey)

  return passkey
}

const STORAGE_PASSKEY_KEY = 'passkey'

export function storePasskeyInLocalStorage (passkey: PasskeyArgType) {
  localStorage.setItem(STORAGE_PASSKEY_KEY, JSON.stringify(passkey))
}

export function loadPasskeyFromLocalStorage (): PasskeyArgType | null {
  const passkeyStored = localStorage.getItem(STORAGE_PASSKEY_KEY)
  return passkeyStored ? JSON.parse(passkeyStored) : null
}
