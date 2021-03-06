/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ProblemDetails,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
} from '../models';

export interface GetAttachmentRequest {
    videoId: string;
    mediaSourceId: string;
    index: number;
}

/**
 * 
 */
export class VideoAttachmentsApi extends runtime.BaseAPI {

    /**
     * Get video attachment.
     */
    async getAttachmentRaw(requestParameters: GetAttachmentRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.videoId === null || requestParameters.videoId === undefined) {
            throw new runtime.RequiredError('videoId','Required parameter requestParameters.videoId was null or undefined when calling getAttachment.');
        }

        if (requestParameters.mediaSourceId === null || requestParameters.mediaSourceId === undefined) {
            throw new runtime.RequiredError('mediaSourceId','Required parameter requestParameters.mediaSourceId was null or undefined when calling getAttachment.');
        }

        if (requestParameters.index === null || requestParameters.index === undefined) {
            throw new runtime.RequiredError('index','Required parameter requestParameters.index was null or undefined when calling getAttachment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Videos/{videoId}/{mediaSourceId}/Attachments/{index}`.replace(`{${"videoId"}}`, encodeURIComponent(String(requestParameters.videoId))).replace(`{${"mediaSourceId"}}`, encodeURIComponent(String(requestParameters.mediaSourceId))).replace(`{${"index"}}`, encodeURIComponent(String(requestParameters.index))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get video attachment.
     */
    async getAttachment(requestParameters: GetAttachmentRequest): Promise<void> {
        await this.getAttachmentRaw(requestParameters);
    }

}
