import { Body, Delete, Get, Path, Post, Route, Tags } from 'tsoa'
import { VideosService } from '../../Services/VideosService'
import {
    APIVideoMetadata,
    VideoCreationPayload
} from '../../Models/VideoMetadata'

@Tags('Videos')
@Route('/api/videos')
export class VideoMetadataController {
    @Get('/{videoId}')
    public async getVideo(@Path('videoId') videoId: string) {
        const video = await VideosService.get(videoId)
        return new APIVideoMetadata(video)
    }

    @Get()
    public async listVideos() {
        const videos = await VideosService.list()
        return videos.map((v) => new APIVideoMetadata(v))
    }

    @Post()
    public async createVideo(@Body() payload: VideoCreationPayload) {
        const video = await VideosService.create(payload)
        return new APIVideoMetadata(video)
    }

    @Delete('/{videoId}')
    public async deleteVideo(@Path('videoId') videoId: string) {
        return await VideosService.remove(videoId)
    }
}
