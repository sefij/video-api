import { isEmpty, omit } from 'lodash'
import {
    Annotation,
    AnnotationCreationPayload,
    AnnotationsDB
} from '../Models/Annotation'
import { BadInputError, NotFoundError } from '../Models/Errors'
import { Dictionary } from '../Models/Index'
import { VideoMetadataDB } from '../Models/VideoMetadata'

export class AnnotationsService {
    private static async _validateAnnotationPayload(
        payload: AnnotationCreationPayload
    ) {
        if (!payload || isEmpty(payload)) {
            throw new BadInputError('Invalid input, input cannot be empty')
        }
        if (!payload.videoId) {
            throw new BadInputError(
                'Invalid input, annotation must have a video id'
            )
        }
        const video = await VideoMetadataDB.findByPk(payload.videoId)
        if (!video) {
            throw new BadInputError(
                'Invalid input, annotation need an existing video to bew created'
            )
        }

        let validationIssueFound = false
        if (payload.startTime < 0 || payload.endTime < 0) {
            validationIssueFound = true
        } else if (payload.endTime <= payload.startTime) {
            validationIssueFound = true
        } else if (
            payload.startTime > video.durationMS ||
            payload.endTime > video.durationMS
        ) {
            validationIssueFound = true
        }
        if (validationIssueFound) {
            throw new BadInputError(
                `Invalid input, annotation start and end times must be valid:
                    * Start time must be before end time
                    * Both times need to be smaller or equal the the video duration
                    * Both need to be positive integers`
            )
        }
    }

    public static async create(payload: AnnotationCreationPayload) {
        await this._validateAnnotationPayload(payload)
        const createdAnnotaion = await AnnotationsDB.create(payload)
        return createdAnnotaion
    }

    public static async removeVideoAnnotaions(videoId: string) {
        return await AnnotationsDB.destroy({
            where: { videoId }
        })
    }

    public static async remove(id: string) {
        await this.get(id)
        return await AnnotationsDB.destroy({
            where: { id }
        })
    }

    public static async get(id: string) {
        const annotation = await AnnotationsDB.findByPk(id)
        if (!annotation) {
            throw new NotFoundError()
        }
        return annotation
    }

    public static async list(query?: Dictionary) {
        return await AnnotationsDB.findAll(
            query
                ? {
                      where: query
                  }
                : null
        )
    }

    public static async listVideoAnnotations(
        videoId: string,
        query: Dictionary
    ) {
        return this.list({
            videoId,
            ...omit(query, 'videoId')
        })
    }

    public static async update(id: string, payload: Partial<Annotation>) {} // Not needed currently
}
