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
    FontFile,
    FontFileFromJSON,
    FontFileToJSON,
    ProblemDetails,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
    RemoteSubtitleInfo,
    RemoteSubtitleInfoFromJSON,
    RemoteSubtitleInfoToJSON,
    UploadSubtitleDto,
    UploadSubtitleDtoFromJSON,
    UploadSubtitleDtoToJSON,
} from '../models';

export interface DeleteSubtitleRequest {
    itemId: string;
    index: number;
}

export interface DownloadRemoteSubtitlesRequest {
    itemId: string;
    subtitleId: string;
}

export interface GetFallbackFontRequest {
    name: string;
}

export interface GetRemoteSubtitlesRequest {
    id: string;
}

export interface GetSubtitleRequest {
    itemId: string;
    mediaSourceId: string;
    index: number;
    format: string;
    startPositionTicks: number;
    endPositionTicks?: number | null;
    copyTimestamps?: boolean;
    addVttTimeMap?: boolean;
}

export interface GetSubtitle2Request {
    itemId: string;
    mediaSourceId: string;
    index: number;
    format: string;
    startPositionTicks: number;
    endPositionTicks?: number | null;
    copyTimestamps?: boolean;
    addVttTimeMap?: boolean;
}

export interface GetSubtitlePlaylistRequest {
    itemId: string;
    index: number;
    mediaSourceId: string;
    segmentLength: number;
}

export interface SearchRemoteSubtitlesRequest {
    itemId: string;
    language: string;
    isPerfectMatch?: boolean | null;
}

export interface UploadSubtitleRequest {
    itemId: string;
    uploadSubtitleDto: UploadSubtitleDto;
}

/**
 * 
 */
export class SubtitleApi extends runtime.BaseAPI {

    /**
     * Deletes an external subtitle file.
     */
    async deleteSubtitleRaw(requestParameters: DeleteSubtitleRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.itemId === null || requestParameters.itemId === undefined) {
            throw new runtime.RequiredError('itemId','Required parameter requestParameters.itemId was null or undefined when calling deleteSubtitle.');
        }

        if (requestParameters.index === null || requestParameters.index === undefined) {
            throw new runtime.RequiredError('index','Required parameter requestParameters.index was null or undefined when calling deleteSubtitle.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Videos/{itemId}/Subtitles/{index}`.replace(`{${"itemId"}}`, encodeURIComponent(String(requestParameters.itemId))).replace(`{${"index"}}`, encodeURIComponent(String(requestParameters.index))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes an external subtitle file.
     */
    async deleteSubtitle(requestParameters: DeleteSubtitleRequest): Promise<void> {
        await this.deleteSubtitleRaw(requestParameters);
    }

    /**
     * Downloads a remote subtitle.
     */
    async downloadRemoteSubtitlesRaw(requestParameters: DownloadRemoteSubtitlesRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.itemId === null || requestParameters.itemId === undefined) {
            throw new runtime.RequiredError('itemId','Required parameter requestParameters.itemId was null or undefined when calling downloadRemoteSubtitles.');
        }

        if (requestParameters.subtitleId === null || requestParameters.subtitleId === undefined) {
            throw new runtime.RequiredError('subtitleId','Required parameter requestParameters.subtitleId was null or undefined when calling downloadRemoteSubtitles.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Items/{itemId}/RemoteSearch/Subtitles/{subtitleId}`.replace(`{${"itemId"}}`, encodeURIComponent(String(requestParameters.itemId))).replace(`{${"subtitleId"}}`, encodeURIComponent(String(requestParameters.subtitleId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Downloads a remote subtitle.
     */
    async downloadRemoteSubtitles(requestParameters: DownloadRemoteSubtitlesRequest): Promise<void> {
        await this.downloadRemoteSubtitlesRaw(requestParameters);
    }

    /**
     * Gets a fallback font file.
     */
    async getFallbackFontRaw(requestParameters: GetFallbackFontRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getFallbackFont.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/FallbackFont/Fonts/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Gets a fallback font file.
     */
    async getFallbackFont(requestParameters: GetFallbackFontRequest): Promise<void> {
        await this.getFallbackFontRaw(requestParameters);
    }

    /**
     * Gets a list of available fallback font files.
     */
    async getFallbackFontListRaw(): Promise<runtime.ApiResponse<Array<FontFile>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/FallbackFont/Fonts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(FontFileFromJSON));
    }

    /**
     * Gets a list of available fallback font files.
     */
    async getFallbackFontList(): Promise<Array<FontFile>> {
        const response = await this.getFallbackFontListRaw();
        return await response.value();
    }

    /**
     * Gets the remote subtitles.
     */
    async getRemoteSubtitlesRaw(requestParameters: GetRemoteSubtitlesRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getRemoteSubtitles.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Providers/Subtitles/Subtitles/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Gets the remote subtitles.
     */
    async getRemoteSubtitles(requestParameters: GetRemoteSubtitlesRequest): Promise<any> {
        const response = await this.getRemoteSubtitlesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Gets subtitles in a specified format.
     */
    async getSubtitleRaw(requestParameters: GetSubtitleRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.itemId === null || requestParameters.itemId === undefined) {
            throw new runtime.RequiredError('itemId','Required parameter requestParameters.itemId was null or undefined when calling getSubtitle.');
        }

        if (requestParameters.mediaSourceId === null || requestParameters.mediaSourceId === undefined) {
            throw new runtime.RequiredError('mediaSourceId','Required parameter requestParameters.mediaSourceId was null or undefined when calling getSubtitle.');
        }

        if (requestParameters.index === null || requestParameters.index === undefined) {
            throw new runtime.RequiredError('index','Required parameter requestParameters.index was null or undefined when calling getSubtitle.');
        }

        if (requestParameters.format === null || requestParameters.format === undefined) {
            throw new runtime.RequiredError('format','Required parameter requestParameters.format was null or undefined when calling getSubtitle.');
        }

        if (requestParameters.startPositionTicks === null || requestParameters.startPositionTicks === undefined) {
            throw new runtime.RequiredError('startPositionTicks','Required parameter requestParameters.startPositionTicks was null or undefined when calling getSubtitle.');
        }

        const queryParameters: any = {};

        if (requestParameters.endPositionTicks !== undefined) {
            queryParameters['endPositionTicks'] = requestParameters.endPositionTicks;
        }

        if (requestParameters.copyTimestamps !== undefined) {
            queryParameters['copyTimestamps'] = requestParameters.copyTimestamps;
        }

        if (requestParameters.addVttTimeMap !== undefined) {
            queryParameters['addVttTimeMap'] = requestParameters.addVttTimeMap;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Videos/{itemId}/{mediaSourceId}/Subtitles/{index}/Stream.{format}`.replace(`{${"itemId"}}`, encodeURIComponent(String(requestParameters.itemId))).replace(`{${"mediaSourceId"}}`, encodeURIComponent(String(requestParameters.mediaSourceId))).replace(`{${"index"}}`, encodeURIComponent(String(requestParameters.index))).replace(`{${"format"}}`, encodeURIComponent(String(requestParameters.format))).replace(`{${"startPositionTicks"}}`, encodeURIComponent(String(requestParameters.startPositionTicks))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Gets subtitles in a specified format.
     */
    async getSubtitle(requestParameters: GetSubtitleRequest): Promise<any> {
        const response = await this.getSubtitleRaw(requestParameters);
        return await response.value();
    }

    /**
     * Gets subtitles in a specified format.
     */
    async getSubtitle2Raw(requestParameters: GetSubtitle2Request): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.itemId === null || requestParameters.itemId === undefined) {
            throw new runtime.RequiredError('itemId','Required parameter requestParameters.itemId was null or undefined when calling getSubtitle2.');
        }

        if (requestParameters.mediaSourceId === null || requestParameters.mediaSourceId === undefined) {
            throw new runtime.RequiredError('mediaSourceId','Required parameter requestParameters.mediaSourceId was null or undefined when calling getSubtitle2.');
        }

        if (requestParameters.index === null || requestParameters.index === undefined) {
            throw new runtime.RequiredError('index','Required parameter requestParameters.index was null or undefined when calling getSubtitle2.');
        }

        if (requestParameters.format === null || requestParameters.format === undefined) {
            throw new runtime.RequiredError('format','Required parameter requestParameters.format was null or undefined when calling getSubtitle2.');
        }

        if (requestParameters.startPositionTicks === null || requestParameters.startPositionTicks === undefined) {
            throw new runtime.RequiredError('startPositionTicks','Required parameter requestParameters.startPositionTicks was null or undefined when calling getSubtitle2.');
        }

        const queryParameters: any = {};

        if (requestParameters.endPositionTicks !== undefined) {
            queryParameters['endPositionTicks'] = requestParameters.endPositionTicks;
        }

        if (requestParameters.copyTimestamps !== undefined) {
            queryParameters['copyTimestamps'] = requestParameters.copyTimestamps;
        }

        if (requestParameters.addVttTimeMap !== undefined) {
            queryParameters['addVttTimeMap'] = requestParameters.addVttTimeMap;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Videos/{itemId}/{mediaSourceId}/Subtitles/{index}/{startPositionTicks}/Stream.{format}`.replace(`{${"itemId"}}`, encodeURIComponent(String(requestParameters.itemId))).replace(`{${"mediaSourceId"}}`, encodeURIComponent(String(requestParameters.mediaSourceId))).replace(`{${"index"}}`, encodeURIComponent(String(requestParameters.index))).replace(`{${"format"}}`, encodeURIComponent(String(requestParameters.format))).replace(`{${"startPositionTicks"}}`, encodeURIComponent(String(requestParameters.startPositionTicks))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Gets subtitles in a specified format.
     */
    async getSubtitle2(requestParameters: GetSubtitle2Request): Promise<any> {
        const response = await this.getSubtitle2Raw(requestParameters);
        return await response.value();
    }

    /**
     * Gets an HLS subtitle playlist.
     */
    async getSubtitlePlaylistRaw(requestParameters: GetSubtitlePlaylistRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.itemId === null || requestParameters.itemId === undefined) {
            throw new runtime.RequiredError('itemId','Required parameter requestParameters.itemId was null or undefined when calling getSubtitlePlaylist.');
        }

        if (requestParameters.index === null || requestParameters.index === undefined) {
            throw new runtime.RequiredError('index','Required parameter requestParameters.index was null or undefined when calling getSubtitlePlaylist.');
        }

        if (requestParameters.mediaSourceId === null || requestParameters.mediaSourceId === undefined) {
            throw new runtime.RequiredError('mediaSourceId','Required parameter requestParameters.mediaSourceId was null or undefined when calling getSubtitlePlaylist.');
        }

        if (requestParameters.segmentLength === null || requestParameters.segmentLength === undefined) {
            throw new runtime.RequiredError('segmentLength','Required parameter requestParameters.segmentLength was null or undefined when calling getSubtitlePlaylist.');
        }

        const queryParameters: any = {};

        if (requestParameters.segmentLength !== undefined) {
            queryParameters['segmentLength'] = requestParameters.segmentLength;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Videos/{itemId}/{mediaSourceId}/Subtitles/{index}/subtitles.m3u8`.replace(`{${"itemId"}}`, encodeURIComponent(String(requestParameters.itemId))).replace(`{${"index"}}`, encodeURIComponent(String(requestParameters.index))).replace(`{${"mediaSourceId"}}`, encodeURIComponent(String(requestParameters.mediaSourceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Gets an HLS subtitle playlist.
     */
    async getSubtitlePlaylist(requestParameters: GetSubtitlePlaylistRequest): Promise<any> {
        const response = await this.getSubtitlePlaylistRaw(requestParameters);
        return await response.value();
    }

    /**
     * Search remote subtitles.
     */
    async searchRemoteSubtitlesRaw(requestParameters: SearchRemoteSubtitlesRequest): Promise<runtime.ApiResponse<Array<RemoteSubtitleInfo>>> {
        if (requestParameters.itemId === null || requestParameters.itemId === undefined) {
            throw new runtime.RequiredError('itemId','Required parameter requestParameters.itemId was null or undefined when calling searchRemoteSubtitles.');
        }

        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling searchRemoteSubtitles.');
        }

        const queryParameters: any = {};

        if (requestParameters.isPerfectMatch !== undefined) {
            queryParameters['isPerfectMatch'] = requestParameters.isPerfectMatch;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Items/{itemId}/RemoteSearch/Subtitles/{language}`.replace(`{${"itemId"}}`, encodeURIComponent(String(requestParameters.itemId))).replace(`{${"language"}}`, encodeURIComponent(String(requestParameters.language))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RemoteSubtitleInfoFromJSON));
    }

    /**
     * Search remote subtitles.
     */
    async searchRemoteSubtitles(requestParameters: SearchRemoteSubtitlesRequest): Promise<Array<RemoteSubtitleInfo>> {
        const response = await this.searchRemoteSubtitlesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Upload an external subtitle file.
     */
    async uploadSubtitleRaw(requestParameters: UploadSubtitleRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.itemId === null || requestParameters.itemId === undefined) {
            throw new runtime.RequiredError('itemId','Required parameter requestParameters.itemId was null or undefined when calling uploadSubtitle.');
        }

        if (requestParameters.uploadSubtitleDto === null || requestParameters.uploadSubtitleDto === undefined) {
            throw new runtime.RequiredError('uploadSubtitleDto','Required parameter requestParameters.uploadSubtitleDto was null or undefined when calling uploadSubtitle.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Videos/{itemId}/Subtitles`.replace(`{${"itemId"}}`, encodeURIComponent(String(requestParameters.itemId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UploadSubtitleDtoToJSON(requestParameters.uploadSubtitleDto),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Upload an external subtitle file.
     */
    async uploadSubtitle(requestParameters: UploadSubtitleRequest): Promise<void> {
        await this.uploadSubtitleRaw(requestParameters);
    }

}
