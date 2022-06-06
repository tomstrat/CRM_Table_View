import { pipeWith } from "ramda"

const pipeWithPromise = pipeWith((func, prev) => {
  return (prev && prev.then) ? prev.then(func) : func(prev)
})


export default pipeWithPromise