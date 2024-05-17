import { Sequelize } from "sequelize";
import { defineVideoMetadata, defineVideoMetadataRelationships } from "../Models/VideoMetadata";
import { defineAnnotationRelationships, defineAnnotations } from "../Models/Annotation";

export class SQL {
    private static _client: Sequelize

    private static async _initSql() {
        const sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: '' // Local storage
        })
        this._client = sequelize
        await this._client.authenticate()
    }

    private static async _defineModels(){
        await Promise.all([
            defineVideoMetadata(),
            defineAnnotations()
        ])

        defineVideoMetadataRelationships()
        defineAnnotationRelationships()
    }

    public static get client() {
        return this._client
    }

    public static async init(){
        await this._initSql()
        await this._defineModels()
    }
}