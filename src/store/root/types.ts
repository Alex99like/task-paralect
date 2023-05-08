export interface IRequestAuth {
  access_token: string
  refresh_token: string
  ttl: number
  expires_in: number
  token_type: string
  reg_user_resumes_count: number
}

export interface IResponseAuth {
  login: string
  password: string
  client_id: number
  client_secret: string
  hr: number
}