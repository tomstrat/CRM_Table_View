import { Connection, Repository, EntityTarget, DeepPartial } from "typeorm"
import { BadRequest } from "../../models/error"


export default class Client<Model> {
  protected repository: Repository<Model>
  protected create
  protected save
  protected findOne
  protected find

  constructor(protected clientName: string, protected database: Connection, protected model: EntityTarget<Model>) {
    this.repository = this.database.getRepository(this.model)
    this.create = this.repository.create.bind(this.repository)
    this.save = this.repository.save.bind(this.repository)
    this.findOne = this.repository.findOne.bind(this.repository)
    this.find = this.repository.find.bind(this.repository)
  }

  async addRecord(record: Model): Promise<Model | undefined> {
    try {
      const recordToAdd = this.repository.create(record)
      const savedRecord = await this.repository.save(recordToAdd)
      console.log(`${this.clientName} has been saved`)
      return savedRecord
    } catch (err) {
      if (err instanceof Error) throw new BadRequest(err.message)
    }
  }

  async getOne(id: number): Promise<Model | undefined> {
    return await this.repository.findOne(id)
  }

  async getAll(): Promise<Model[] | undefined> {
    return await this.repository.find()
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

  async deleteRecord(id: number): Promise<boolean | void> {
    try {
      const record = await this.repository.findOne(id)
      if (record) {
        await this.repository.remove(record)
        console.log(`Deleted ${this.clientName}: ${id}`)
        return true
      }
      return false
    } catch (err) {
      if (err instanceof Error) throw new BadRequest(err.message)
    }
  }
}