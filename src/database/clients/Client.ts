import { Connection, Repository, EntityTarget, DeepPartial } from "typeorm"
import { NotFound, BadRequest } from "../../models/error"
import * as R from "ramda"


export default class Client<Model> {
  protected repository: Repository<Model>
  constructor(protected clientName: string, protected database: Connection, protected model: EntityTarget<Model>) {
    this.repository = this.database.getRepository(this.model)
  }

  async addRecord(record: Model): Promise<Model | void> {
    try {
      const recordToAdd = this.repository.create(record)
      const savedRecord = await this.repository.save(recordToAdd)
      console.log(`${this.clientName} has been saved`)
      return savedRecord
    } catch (err) {
      if (err instanceof Error) throw new BadRequest(err.message)
    }
  }

  async getOne(id: number): Promise<Model | void> {
    const record = await this.repository.findOne(id)
    if (!record) throw new NotFound(`${this.clientName} could not be found`)
    console.log(`Found ${this.clientName}: ${record}`)
    return record
  }

  async getAll(): Promise<Model[] | void> {
    const records = await this.repository.find()
    if (!records) throw new NotFound(`${this.clientName}s could not be found`)
    console.log(`Found all ${this.clientName}`)
    return records
  }

  async updateRecord(id: number, fieldsToUpdate: Partial<Model>): Promise<Model | void> {
    try {
      const record = await this.repository.findOne(id)
      if (record) {
        const updated = await this.repository.create({ ...record, ...fieldsToUpdate })
        await this.repository.save(updated)
        console.log(`Updated ${this.clientName}: ${id}`)
        return updated
      }
    } catch (err) {
      if (err instanceof Error) throw new BadRequest(err.message)
    }
  }

  async deleteRecord(id: number): Promise<void> {
    try {
      const record = await this.repository.findOne(id)
      if (record) await this.repository.remove(record)
      console.log(`Deleted ${this.clientName}: ${id}`)
    } catch (err) {
      if (err instanceof Error) throw new BadRequest(err.message)
    }
  }
}