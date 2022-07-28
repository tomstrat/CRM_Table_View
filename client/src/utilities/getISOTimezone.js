export default function (date) {
  
  const tzoffset = (new Date()).getTimezoneOffset() * 60000 //offset in milliseconds
  const localISOTime = (new Date(date - tzoffset)).toISOString().slice(0, -1)

  return (localISOTime)
}