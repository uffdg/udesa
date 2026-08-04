import { useWalletStore } from '../store/useWalletStore'

// zustand persist escribe en localStorage pero no re-hidrata otras
// pestañas solo. Esto es lo que hace que un pago hecho en /member se vea
// reflejado en vivo en /manager si están abiertas en pestañas distintas
// (truco de demo: abrir las dos rutas en dos ventanas lado a lado).
export function setupCrossTabSync() {
  window.addEventListener('storage', (e) => {
    if (e.key === 'coto-wallet-demo') {
      useWalletStore.persist.rehydrate()
    }
  })
}
