export default function getCurrentDate() {
  const date1 = new Date().toISOString().slice(0,10)
  return date1
}