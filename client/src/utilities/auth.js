
export async function checkAuth() {
  const response = await fetch("/auth/current-session")
  return await response.json()
}