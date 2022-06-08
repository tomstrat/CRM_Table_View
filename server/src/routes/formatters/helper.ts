import { filter } from "ramda"

export function cleanObject<T>(object: T): T | Partial<T> {
  return filter((n: any) => n !== undefined, object)
}

export function convertCheckBox(result: string): boolean {
  return (result === "true")
}

export function convertDate(date: string | undefined): Date | undefined {
  return date ? new Date(date) : undefined
}

export function justDate(date: string): Date {
  const newDate = new Date(date)
  console.log("TESTING", date, newDate, newDate.toDateString())
  return new Date(newDate.toDateString())
}