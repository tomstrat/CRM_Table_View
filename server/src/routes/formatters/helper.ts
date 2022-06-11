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

export function removeTime(date: string): Date {
  return new Date(date.split("T")[0])
}