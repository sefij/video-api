import { DataTypes, Model, ModelStatic, Optional } from 'sequelize'
import { SQL } from '../IO/Sql'
import { v4 } from 'uuid'
import { Config } from '../config'
import { VideoMetadataDB } from './VideoMetadata'
import * as moment from 'moment'

// enum AnnotationType {}

export interface AnnotationCreationPayload {
    startTime: number
    endTime: number
    type: string // Can use AnnotationType in the future
    videoId?: string
}

type AnnotationAttributes = BaseEntityAttributes & {
    videoId: string
    type: string
    startTime: number
    endTime: number
}

type AnnotationCreationAttributes = Optional<AnnotationAttributes, 'id'>

export class Annotation extends Model<
    AnnotationAttributes,
    AnnotationCreationAttributes
> {
    declare id: string
    declare createdAt: number
    declare updatedAt?: number
    declare videoId: string
    declare type: string
    declare startTime: number
    declare endTime: number
}

export class APIAnnotation {
    public id: string
    public videoId: string
    public type: string
    public startTime: string
    public endTime: string
    public createdAt: Date
    public updatedAt?: Date

    constructor(annotation: Annotation) {
        this.id = annotation.id
        this.videoId = annotation.videoId
        this.type = annotation.type
        this.startTime = moment
            .utc(moment.duration(annotation.startTime).asMilliseconds())
            .format('HH:mm:ss.SS')
        this.endTime = moment
            .utc(moment.duration(annotation.endTime).asMilliseconds())
            .format('HH:mm:ss.SS')
        this.createdAt = new Date(annotation.createdAt)
        if (annotation.updatedAt) {
            this.updatedAt = new Date(annotation.updatedAt)
        }
    }
}

export let AnnotationsDB: ModelStatic<Annotation>

export const defineAnnotations = async () => {
    const AnnotationsSQL = SQL.client.define<Annotation>(
        'annotation',
        {
            id: {
                type: DataTypes.STRING,
                defaultValue: v4,
                primaryKey: true
            },
            createdAt: {
                type: DataTypes.BIGINT({ length: 20 }),
                defaultValue: Date.now
            },
            updatedAt: DataTypes.BIGINT({ length: 20 }),
            videoId: DataTypes.STRING,
            type: DataTypes.STRING,
            startTime: DataTypes.BIGINT({ length: 20 }),
            endTime: DataTypes.BIGINT({ length: 20 })
        },
        {
            timestamps: false
        }
    )

    AnnotationsDB = AnnotationsSQL

    await AnnotationsDB.sync({
        alter: Config.SQL_POLICY === 'alter'
    })
}

export const defineAnnotationRelationships = () => {
    AnnotationsDB.hasOne(VideoMetadataDB, {
        foreignKey: 'id',
        as: 'videoMetadata',
        sourceKey: 'videoId'
    })
}
