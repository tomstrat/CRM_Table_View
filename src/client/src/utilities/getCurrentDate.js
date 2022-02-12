export default function getCurrentDate(date) {
  return date
    ? new Date(date).toISOString().slice(0,10)
    : new Date().toISOString().slice(0,10)
}