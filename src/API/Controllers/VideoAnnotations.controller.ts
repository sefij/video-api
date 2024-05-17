import { Body, Delete, Path, Post, Route, Tags } from 'tsoa'
import { AnnotationsService } from '../../Services/AnnotationsService'
import { Dictionary } from '../../Models/Index'
import {
    APIAnnotation,
    AnnotationCreationPayload
} from '../../Models/Annotation'

@Tags('Videos', 'Annotations')
@Route('/api/videos/{videoId}/annotations')
export class VideoAnnotationsController {
    @Post('/list')
    public async listVideoAnnotations(
        @Path('videoId') videoId: string,
        @Body() query?: Dictionary
    ) {
        const annotations = await AnnotationsService.listVideoAnnotations(
            videoId,
            query
        )
        return annotations.map((a) => new APIAnnotation(a))
    }

    @Post()
    public async createVideoAnnotation(
        @Path('videoId') videoId: string,
        @Body() input: AnnotationCreationPayload
    ) {
        const annotaiton = await AnnotationsService.create({
            videoId,
            ...input
        })
        return new APIAnnotation(annotaiton)
    }

    @Delete('/{videoId}')
    public async deleteVideoAnnotations(@Path('videoId') videoId: string) {
        return await AnnotationsService.removeVideoAnnotaions(videoId)
    }
}
