import { isEmpty } from 'lodash'
import { BadInputError, NotFoundError } from '../Models/Errors'
import { Dictionary } from '../Models/Index'
import { VideoCreationPayload, VideoMetadataDB } from '../Models/VideoMetadata'

export class VideosService {
    private static _validateVideoPayload(payload: VideoCreationPayload) {
        if (!payload || isEmpty(payload)) {
            throw new BadInputError('Invalid input, input cannot be empty')
        }
        if (payload.durationMS <= 0) {
            throw new BadInputError(
                'Invalid input, duration must be be a positive integer'
            )
        }
    }

    public static async create(payload: VideoCreationPayload) {
        this._validateVideoPayload(payload)
        const createdMetadata = await VideoMetadataDB.create({
            source: payload.source,
            durationMS: payload.durationMS
        })
        return createdMetadata
    }

    public static async remove(id: string) {
        await this.get(id)
        await VideoMetadataDB.destroy({
            where: {
                id
            }
        })
    }

    public static async get(id: string) {
        const video = await VideoMetadataDB.findByPk(id, {
            include: 'annotations'
        })
        if (!video) {
            throw new NotFoundError()
        }
        return video
    }

    public static async list(query?: Dictionary) {
        return await VideoMetadataDB.findAll({
            where: query,
            include: 'annotations'
        })
    }

    // public static async update(id: string, payload: Partial<VideoMetadata>) {} // Not currently needed
}
