import { IRequestAuth, IResponseAuth } from "../store/root/types"
import { getLocalStorage } from "../utils/localStorage"

export const AuthService = {
  async login(): Promise<IRequestAuth> {
    const body: IResponseAuth = {
      login: "sergei.stralenia@gmail.com",
      password: "paralect123",
      client_id: 2356,
      client_secret: "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
      hr: 0
    }

    const res = await fetch('https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-secret-key': 'GEU4nvd3rej*jeh.eqp'
      },
      body: JSON.stringify(body)
    }) 
    
    return await res.json()
  },

  refreshToken() {
    const user = getLocalStorage('user')
    user?.access_token
  }
}