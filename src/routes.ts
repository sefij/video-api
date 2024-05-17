/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TsoaRoute, fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { VideoMetadataController } from './API/Controllers/Videos.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { VideoAnnotationsController } from './API/Controllers/VideoAnnotations.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AnnotationsController } from './API/Controllers/Annotations.controller';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "APIAnnotation": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "videoId": {"dataType":"string","required":true},
            "type": {"dataType":"string","required":true},
            "startTime": {"dataType":"double","required":true},
            "endTime": {"dataType":"double","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "updatedAt": {"dataType":"datetime"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "APIVideoMetadata": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "source": {"dataType":"string","required":true},
            "durationMS": {"dataType":"double","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "updatedAt": {"dataType":"datetime"},
            "annotations": {"dataType":"array","array":{"dataType":"refObject","ref":"APIAnnotation"}},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "VideoCreationPayload": {
        "dataType": "refObject",
        "properties": {
            "source": {"dataType":"string","required":true},
            "durationMS": {"dataType":"double","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Dictionary": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"dataType":"any"},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AnnotationCreationPayload": {
        "dataType": "refObject",
        "properties": {
            "startTime": {"dataType":"double","required":true},
            "endTime": {"dataType":"double","required":true},
            "videoId": {"dataType":"string"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"ignore","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.get('/api/videos/:videoId',
            ...(fetchMiddlewares<RequestHandler>(VideoMetadataController)),
            ...(fetchMiddlewares<RequestHandler>(VideoMetadataController.prototype.getVideo)),

            async function VideoMetadataController_getVideo(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    videoId: {"in":"path","name":"videoId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new VideoMetadataController();

              await templateService.apiHandler({
                methodName: 'getVideo',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/api/videos',
            ...(fetchMiddlewares<RequestHandler>(VideoMetadataController)),
            ...(fetchMiddlewares<RequestHandler>(VideoMetadataController.prototype.listVideos)),

            async function VideoMetadataController_listVideos(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new VideoMetadataController();

              await templateService.apiHandler({
                methodName: 'listVideos',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/api/videos',
            ...(fetchMiddlewares<RequestHandler>(VideoMetadataController)),
            ...(fetchMiddlewares<RequestHandler>(VideoMetadataController.prototype.createVideo)),

            async function VideoMetadataController_createVideo(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    payload: {"in":"body","name":"payload","required":true,"ref":"VideoCreationPayload"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new VideoMetadataController();

              await templateService.apiHandler({
                methodName: 'createVideo',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/api/videos/:videoId',
            ...(fetchMiddlewares<RequestHandler>(VideoMetadataController)),
            ...(fetchMiddlewares<RequestHandler>(VideoMetadataController.prototype.deleteVideo)),

            async function VideoMetadataController_deleteVideo(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    videoId: {"in":"path","name":"videoId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new VideoMetadataController();

              await templateService.apiHandler({
                methodName: 'deleteVideo',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/api/videos/:videoId/annotations/list',
            ...(fetchMiddlewares<RequestHandler>(VideoAnnotationsController)),
            ...(fetchMiddlewares<RequestHandler>(VideoAnnotationsController.prototype.listVideoAnnotations)),

            async function VideoAnnotationsController_listVideoAnnotations(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    videoId: {"in":"path","name":"videoId","required":true,"dataType":"string"},
                    query: {"in":"body","name":"query","ref":"Dictionary"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new VideoAnnotationsController();

              await templateService.apiHandler({
                methodName: 'listVideoAnnotations',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/api/videos/:videoId/annotations',
            ...(fetchMiddlewares<RequestHandler>(VideoAnnotationsController)),
            ...(fetchMiddlewares<RequestHandler>(VideoAnnotationsController.prototype.createVideoAnnotation)),

            async function VideoAnnotationsController_createVideoAnnotation(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    videoId: {"in":"path","name":"videoId","required":true,"dataType":"string"},
                    input: {"in":"body","name":"input","required":true,"ref":"AnnotationCreationPayload"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new VideoAnnotationsController();

              await templateService.apiHandler({
                methodName: 'createVideoAnnotation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/api/videos/:videoId/annotations/:videoId',
            ...(fetchMiddlewares<RequestHandler>(VideoAnnotationsController)),
            ...(fetchMiddlewares<RequestHandler>(VideoAnnotationsController.prototype.deleteVideoAnnotations)),

            async function VideoAnnotationsController_deleteVideoAnnotations(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    videoId: {"in":"path","name":"videoId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new VideoAnnotationsController();

              await templateService.apiHandler({
                methodName: 'deleteVideoAnnotations',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/api/annotations/:annotationId',
            ...(fetchMiddlewares<RequestHandler>(AnnotationsController)),
            ...(fetchMiddlewares<RequestHandler>(AnnotationsController.prototype.getAnnotation)),

            async function AnnotationsController_getAnnotation(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    annotationId: {"in":"path","name":"annotationId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new AnnotationsController();

              await templateService.apiHandler({
                methodName: 'getAnnotation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/api/annotations/:annotationId',
            ...(fetchMiddlewares<RequestHandler>(AnnotationsController)),
            ...(fetchMiddlewares<RequestHandler>(AnnotationsController.prototype.deleteAnnotaion)),

            async function AnnotationsController_deleteAnnotaion(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    annotationId: {"in":"path","name":"annotationId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new AnnotationsController();

              await templateService.apiHandler({
                methodName: 'deleteAnnotaion',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
