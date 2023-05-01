"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../../models/error");
class Client {
    constructor(clientName, database, model) {
        this.clientName = clientName;
        this.database = database;
        this.model = model;
        this.repository = this.database.getRepository(this.model);
        this.create = this.repository.create.bind(this.repository);
        this.save = this.repository.save.bind(this.repository);
        this.findOne = this.repository.findOne.bind(this.repository);
        this.find = this.repository.find.bind(this.repository);
    }
    async addRecord(record) {
        try {
            const recordToAdd = this.repository.create(record);
            const savedRecord = await this.repository.save(recordToAdd);
            console.log(`${this.clientName} has been saved`);
            return savedRecord;
        }
        catch (err) {
            if (err instanceof Error)
                throw new error_1.BadRequest(err.message);
        }
    }
    async getOne(id) {
        return await this.repository.findOne(id);
    }
    async getAll() {
        return await this.repository.find();
    }
    async updateRecord(id, fieldsToUpdate) {
        try {
            const record = await this.repository.findOne(id);
            if (record) {
                const updated = await this.repository.create({ ...record, ...fieldsToUpdate });
                await this.repository.save(updated);
                console.log(`Updated ${this.clientName}: ${id}`);
                return updated;
            }
        }
        catch (err) {
            if (err instanceof Error)
                throw new error_1.BadRequest(err.message);
        }
    }
    async deleteRecord(id) {
        try {
            const record = await this.repository.findOne(id);
            if (record) {
                await this.repository.remove(record);
                console.log(`Deleted ${this.clientName}: ${id}`);
                return true;
            }
            return false;
        }
        catch (err) {
            if (err instanceof Error)
                throw new error_1.BadRequest(err.message);
        }
    }
}
exports.default = Client;
