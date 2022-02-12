export default function getCurrentDate(date) {
  return date
    ? date
    : new Date().toISOString().slice(0,10)
}