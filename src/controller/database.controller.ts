import mongoose, { Model, Document, FilterQuery } from 'mongoose';
import logger from '../functions/logger';
export class DB {
    private connection: boolean;
    constructor() {
        this.connection = false;
    }
    connect(url: string) {
        mongoose
            .connect(url)
            .then(() => {
                logger.success('Connected to MongoDB');
                this.connection = true;
            })
            .catch(err => {
                logger.error('Could not connect to MongoDB', err);
                this.connection = false;
            });
    }
    disconnect() {
        mongoose
            .disconnect()
            .then(() => {
                logger.success('Disconnected From MongoDB');
                this.connection = false;
            })
            .catch(err => {
                logger.error('Could not disconnect from MongoDB', err);
                this.connection = false;
            });
    }
    async createRecord<T extends Document>(schema: Model<T>, data: Partial<T>) {
        try {
            const result = new schema(data);
            const finalResult = await result.save();
            console.log('New Database Record!\n' + finalResult);
            return finalResult;
        } catch (error) {
            logger.error('there was an error while extracting createRecord Method!', error);
        }
    }
    async findRecord<T extends Document>(schema: Model<T>, query: FilterQuery<T>) {
        try {
            const result = await schema.findOne(query).exec();
            console.log(`Find A Database Record!\n` + result);
            return result;
        } catch (error) {
            logger.error('there was an error while extracting findRecord Method!', error);
        }
    }
    updateRecord<T extends Document>(schema: Model<T>, query: FilterQuery<T>, data: Partial<T>) {
        try {
            const result = schema
                .findOneAndUpdate(query, data, {
                    new: true,
                    runValidators: true,
                })
                .exec();
            return result;
        } catch (error) {
            logger.error('there was an error while extracting updateRecord method!', error);
        }
    }
    getConnecctionStatus() {
        return this.connection;
    }
    async getAllRecords<T extends Document>(schema: Model<T>) {
        try {
            const result = await schema.find().exec();
            return result;
        } catch (err) {
            logger.error('there was an error while extracting getAllRecords Method!', err);
        }
    }
}
