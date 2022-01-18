import got from "got"

const getData = async () => {
  try {
    // const response = await got.post("https://o2ebrands.okta.com/api/v1/authn", {
    //   body: JSON.stringify({
    //     password: "Facchino6",
    //     username: "kate.facchino@1800gotjunk.com"
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json",
    //   }
    // })
    // const { headers } = response
    // console.log(headers)
    const url = "https://o2ebrandsinc.force.com/1800GOTJUNK/services/data/v33.0"
    const data = await got.get(url, {
      headers: {
        "Authorization": "Bearer 00D6g000004Z341!AQsAQEx6mpg_wpei4EVwlyCu3.gLv5_YndJuLg_r13V.Qkxmh3ZTEjPwLeEauuIhLk2gu8Dus3358paay7VxlkiDmWEmrK_X"
      }
    })
    console.log(JSON.parse(data.body))

  } catch (err) {
    console.log(err)
  }
}

getData()
