import { DataTypes, Model, ModelStatic, Optional } from 'sequelize'
import { SQL } from '../IO/Sql'
import { Config } from '../config'
import { v4 } from 'uuid'
import { APIAnnotation, Annotation, AnnotationsDB } from './Annotation'

export interface VideoCreationPayload {
    source: string
    durationMS: number
}

type VideoMetadataAttributes = BaseEntityAttributes & {
    source: string
    durationMS: number
}

type VideoMetadataCreationAttributes = Optional<VideoMetadataAttributes, 'id'>

export class VideoMetadata extends Model<
    VideoMetadataAttributes,
    VideoMetadataCreationAttributes
> {
    declare id: string
    declare source: string
    declare createdAt: number
    declare durationMS: number
    declare updatedAt?: number
    declare annotations?: Annotation[]
}

export class APIVideoMetadata {
    public id: string
    public source: string
    public durationMS: number
    public createdAt: Date
    public updatedAt?: Date
    public annotations?: APIAnnotation[]

    constructor(video: VideoMetadata) {
        this.id = video.id
        this.source = video.source
        this.durationMS = video.durationMS
        this.createdAt = new Date(video.createdAt)
        if (video.updatedAt) {
            this.updatedAt = new Date(video.updatedAt)
        }
        if(video.annotations){
            this.annotations = video.annotations.map(a=> new APIAnnotation(a))
        }
    }
}

export let VideoMetadataDB: ModelStatic<VideoMetadata>

export const defineVideoMetadata = async () => {
    const VideoMetadataSQL = SQL.client.define<VideoMetadata>('videoMetadata', {
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
        source: DataTypes.STRING,
        durationMS: DataTypes.NUMBER
    })

    VideoMetadataDB = VideoMetadataSQL

    await VideoMetadataDB.sync({
        alter: Config.SQL_POLICY === 'alter'
    })
}

export const defineVideoMetadataRelationships = () => {
    VideoMetadataDB.hasMany(AnnotationsDB, {
        foreignKey: 'videoId',
        as: 'annotations'
    })
}
