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
		formatHeaders(await getData({url}))
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

function formatHeaders(data) {
	const noIdea = R.omit(["password", "roster"], data[0]) 
	
	console.log(noIdea)
	let headers = Object.keys(noIdea).map(header => `<div class="column">${header.charAt(0).toUpperCase() + header.slice(1)}</div>`).join("")
	document.querySelector(".theaders").innerHTML = `${headers}`
}


function formatData(data){
	const formattedData = data.reduce((htmlString, next) => {
		const newObject = R.omit(["password", "roster"], next) 
		htmlString += `<a href="/ops/users/${next.id}" class="row-link">`
		for (const property in newObject) {
			htmlString += `<div class="column">${newObject[property]}</div>`
		}
		return htmlString + '</a>'
	}, "")
	document.querySelector(".tbody").innerHTML = `${formattedData}`
	
}

(loadPageData = async () => {
	const url = document.getElementById("dataLoad").innerHTML
	if(url) formatHeaders(await getData({url})), formatData(await getData({url}))
})()

