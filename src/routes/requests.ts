import { BadRequest, NotFound } from "../models/error"
import got from "got"

export async function requestToken(url: string, code: string, id: string, secret: string, redirect: string) {

  try {
    const tokenData = await got.post(url, {
      method: "POST",
      body: `grant_type=authorization_code&code=${code}&client_id=${id}&client_secret=${secret}&redirect_uri=${redirect}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    const { access_token } = JSON.parse(tokenData.body)
    console.log("Retrieved access token", access_token)
    return access_token

  } catch (error) {
    console.log(error)
    if (error instanceof Error) throw new BadRequest("Problem retreiving access token")
  }

}

export async function requestResources(url: string, token: string) {

  try {
    const resourcesData = await got.get(url, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    const resources = JSON.parse(resourcesData.body)
    return resources

  } catch (error) {
    console.log(error)
    if (error instanceof Error) throw new NotFound("Resources could not be found")
  }

}