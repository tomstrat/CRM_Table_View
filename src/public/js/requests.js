const fillErrors = (errors) => {
	const errorTags = document.querySelectorAll(".valError")
	
	errors.errors.forEach(error => {
		const errorTag = document.querySelector(`.valError[data-error="${error.param}"]`)
		errorTag.innerHTML = error.msg
	})
}

const handleFormSubmitAndGet = async event => {
  event.preventDefault()

	try {
    const form = event.currentTarget
    const url = form.action
		const formData = new FormData(form)
		await postFormDataAsJson({ url, formData })
    formatData(await getData({url}))
	} catch (error) {
		fillErrors(JSON.parse(error.message))
		console.error(error)
	}
}

const getData = async ({url}) => {
  const response = await fetch(url, {
    method: "GET",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		}
  })
  if (!response.ok) {
		const errorMessage = await response.text()
		throw new Error(errorMessage)
	}
  return response.json()
}

const postFormDataAsJson = async ({url, formData}) => {
  const plainFormData = Object.fromEntries(formData.entries())
	const formDataJsonString = JSON.stringify(plainFormData)

  const response = await fetch(url, {
    method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: formDataJsonString,
  })
  if (!response.ok) {
		const errorMessage = await response.text()
		throw new Error(errorMessage)
	}
}

function formatData(data){
	
	const formattedData = data.reduce((htmlString, next) => {
		const newObject = R.omit(["id", "password", "roster"], next) 
		htmlString += `<a href="/ops/users/${next.id}" class="row-link"><div class="row">`
		for (const property in newObject) {
			htmlString += `<div class="column">${newObject[property]}</div>`
		}
		return htmlString + "</div></a>"
	}, "")
	document.querySelector(".tbody").innerHTML = `${formattedData}`
	
}

(loadPageData = async () => {
	const url = document.getElementById("dataLoad").innerHTML
	if(url) formatData(await getData({url}))
})()

