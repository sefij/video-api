import { Delete, Get, Path, Route, Tags } from 'tsoa'
import { AnnotationsService } from '../../Services/AnnotationsService'
import { APIAnnotation } from '../../Models/Annotation'

@Tags('Annotations')
@Route('/api/annotations')
export class AnnotationsController {
    @Get('/{annotationId}')
    public async getAnnotation(@Path('annotationId') annotationId: string) {
        const annotation = await AnnotationsService.get(annotationId)
        return new APIAnnotation(annotation)
    }

    @Delete('/{annotationId}')
    public async deleteAnnotaion(@Path('annotationId') annotationId: string) {
        return await AnnotationsService.remove(annotationId)
    }
}
