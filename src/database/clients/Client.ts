import { Connection, Repository, EntityTarget } from "typeorm"

export default class Client<Model> {
  protected repository: Repository<Model>
  constructor(protected clientName: string, protected database: Connection, protected model: EntityTarget<Model>) {
    this.repository = this.database.getRepository(this.model)
  }

  async addRecord(record: Model) {
    try {
      const recordToAdd = this.repository.create(record)
      await this.repository.save(recordToAdd)
      console.log(`${this.clientName} has been saved`)
    } catch (err) {
      console.log(err)
    }
  }

  async getOne(id: number) {
    try {
      const record = await this.repository.findOne(id)
      console.log(`Found ${this.clientName}: ${record}`)
      return record
    } catch (err) {
      console.log(err)
    }
  }

  async getAll() {
    try {
      const records = await this.repository.find()
      console.log(`Found all ${this.clientName}`)
      return records
    } catch (err) {
      console.log(err)
    }
  }

  async updateRecord(id: number, fieldsToUpdate: Partial<Model>) {
    try {
      const record = await this.repository.findOne(id)
      if (record) {
        const updated = await this.repository.create({ ...record, ...fieldsToUpdate })
        await this.repository.save(updated)
      }
      console.log(`Updated ${this.clientName}: ${id}`)
    } catch (err) {
      console.log(err)
    }
  }

  async deleteRecord(id: number) {
    try {
      const record = await this.repository.findOne(id)
      if (record) await this.repository.remove(record)
      console.log(`Deleted ${this.clientName}: ${id}`)
    } catch (err) {
      console.log(err)
    }
  }
}