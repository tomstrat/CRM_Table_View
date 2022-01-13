
export interface InternalRecord {
  sfObject?: string
  recordUrl?: string
  name: string
  paidHours: number
  revenue: number
  totalCost: number
  waste: number
  AJS: number
  totalServices: number
  RPH: number
}

export interface InternalDataFormat {
  records: InternalRecord[]
}