export interface AccessToken {
  access_token: string
  signature: string
  scope: string,
  id_token: string
  instance_url: string
  id: string
  token_type: "Bearer"
  issued_at: string
}