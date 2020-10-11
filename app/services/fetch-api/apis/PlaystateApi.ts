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
    PlayMethod,
    PlayMethodFromJSON,
    PlayMethodToJSON,
    PlaybackProgressInfo,
    PlaybackProgressInfoFromJSON,
    PlaybackProgressInfoToJSON,
    PlaybackStartInfo,
    PlaybackStartInfoFromJSON,
    PlaybackStartInfoToJSON,
    PlaybackStopInfo,
    PlaybackStopInfoFromJSON,
    PlaybackStopInfoToJSON,
    RepeatMode,
    RepeatModeFromJSON,
    RepeatModeToJSON,
    UserItemDataDto,
    UserItemDataDtoFromJSON,
    UserItemDataDtoToJSON,
} from '../models';

export interface MarkPlayedItemRequest {
    userId: string;
    itemId: string;
    datePlayed?: Date | null;
}

export interface MarkUnplayedItemRequest {
    userId: string;
    itemId: string;
}

export interface OnPlaybackProgressRequest {
    userId: string;
    itemId: string;
    mediaSourceId?: string | null;
    positionTicks?: number | null;
    audioStreamIndex?: number | null;
    subtitleStreamIndex?: number | null;
    volumeLevel?: number | null;
    playMethod?: PlayMethod;
    liveStreamId?: string | null;
    playSessionId?: string | null;
    repeatMode?: RepeatMode;
    isPaused?: boolean;
    isMuted?: boolean;
}

export interface OnPlaybackStartRequest {
    userId: string;
    itemId: string;
    mediaSourceId?: string | null;
    audioStreamIndex?: number | null;
    subtitleStreamIndex?: number | null;
    playMethod?: PlayMethod;
    liveStreamId?: string | null;
    playSessionId?: string | null;
    canSeek?: boolean;
}

export interface OnPlaybackStoppedRequest {
    userId: string;
    itemId: string;
    mediaSourceId?: string | null;
    nextMediaType?: string | null;
    positionTicks?: number | null;
    liveStreamId?: string | null;
    playSessionId?: string | null;
}

export interface PingPlaybackSessionRequest {
    playSessionId?: string | null;
}

export interface ReportPlaybackProgressRequest {
    playbackProgressInfo?: PlaybackProgressInfo;
}

export interface ReportPlaybackStartRequest {
    playbackStartInfo?: PlaybackStartInfo;
}

export interface ReportPlaybackStoppedRequest {
    playbackStopInfo?: PlaybackStopInfo;
}

/**
 * 
 */
export class PlaystateApi extends runtime.BaseAPI {

    /**
     * Marks an item as played for user.
     */
    async markPlayedItemRaw(requestParameters: MarkPlayedItemRequest): Promise<runtime.ApiResponse<UserItemDataDto>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling markPlayedItem.');
        }

        if (requestParameters.itemId === null || requestParameters.itemId === undefined) {
            throw new runtime.RequiredError('itemId','Required parameter requestParameters.itemId was null or undefined when calling markPlayedItem.');
        }

        const queryParameters: any = {};

        if (requestParameters.datePlayed !== undefined) {
            queryParameters['datePlayed'] = (requestParameters.datePlayed as any).toISOString();
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Users/{userId}/PlayedItems/{itemId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))).replace(`{${"itemId"}}`, encodeURIComponent(String(requestParameters.itemId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserItemDataDtoFromJSON(jsonValue));
    }

    /**
     * Marks an item as played for user.
     */
    async markPlayedItem(requestParameters: MarkPlayedItemRequest): Promise<UserItemDataDto> {
        const response = await this.markPlayedItemRaw(requestParameters);
        return await response.value();
    }

    /**
     * Marks an item as unplayed for user.
     */
    async markUnplayedItemRaw(requestParameters: MarkUnplayedItemRequest): Promise<runtime.ApiResponse<UserItemDataDto>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling markUnplayedItem.');
        }

        if (requestParameters.itemId === null || requestParameters.itemId === undefined) {
            throw new runtime.RequiredError('itemId','Required parameter requestParameters.itemId was null or undefined when calling markUnplayedItem.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Users/{userId}/PlayedItems/{itemId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))).replace(`{${"itemId"}}`, encodeURIComponent(String(requestParameters.itemId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserItemDataDtoFromJSON(jsonValue));
    }

    /**
     * Marks an item as unplayed for user.
     */
    async markUnplayedItem(requestParameters: MarkUnplayedItemRequest): Promise<UserItemDataDto> {
        const response = await this.markUnplayedItemRaw(requestParameters);
        return await response.value();
    }

    /**
     * Reports a user\'s playback progress.
     */
    async onPlaybackProgressRaw(requestParameters: OnPlaybackProgressRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling onPlaybackProgress.');
        }

        if (requestParameters.itemId === null || requestParameters.itemId === undefined) {
            throw new runtime.RequiredError('itemId','Required parameter requestParameters.itemId was null or undefined when calling onPlaybackProgress.');
        }

        const queryParameters: any = {};

        if (requestParameters.mediaSourceId !== undefined) {
            queryParameters['mediaSourceId'] = requestParameters.mediaSourceId;
        }

        if (requestParameters.positionTicks !== undefined) {
            queryParameters['positionTicks'] = requestParameters.positionTicks;
        }

        if (requestParameters.audioStreamIndex !== undefined) {
            queryParameters['audioStreamIndex'] = requestParameters.audioStreamIndex;
        }

        if (requestParameters.subtitleStreamIndex !== undefined) {
            queryParameters['subtitleStreamIndex'] = requestParameters.subtitleStreamIndex;
        }

        if (requestParameters.volumeLevel !== undefined) {
            queryParameters['volumeLevel'] = requestParameters.volumeLevel;
        }

        if (requestParameters.playMethod !== undefined) {
            queryParameters['playMethod'] = requestParameters.playMethod;
        }

        if (requestParameters.liveStreamId !== undefined) {
            queryParameters['liveStreamId'] = requestParameters.liveStreamId;
        }

        if (requestParameters.playSessionId !== undefined) {
            queryParameters['playSessionId'] = requestParameters.playSessionId;
        }

        if (requestParameters.repeatMode !== undefined) {
            queryParameters['repeatMode'] = requestParameters.repeatMode;
        }

        if (requestParameters.isPaused !== undefined) {
            queryParameters['isPaused'] = requestParameters.isPaused;
        }

        if (requestParameters.isMuted !== undefined) {
            queryParameters['isMuted'] = requestParameters.isMuted;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Users/{userId}/PlayingItems/{itemId}/Progress`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))).replace(`{${"itemId"}}`, encodeURIComponent(String(requestParameters.itemId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Reports a user\'s playback progress.
     */
    async onPlaybackProgress(requestParameters: OnPlaybackProgressRequest): Promise<void> {
        await this.onPlaybackProgressRaw(requestParameters);
    }

    /**
     * Reports that a user has begun playing an item.
     */
    async onPlaybackStartRaw(requestParameters: OnPlaybackStartRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling onPlaybackStart.');
        }

        if (requestParameters.itemId === null || requestParameters.itemId === undefined) {
            throw new runtime.RequiredError('itemId','Required parameter requestParameters.itemId was null or undefined when calling onPlaybackStart.');
        }

        const queryParameters: any = {};

        if (requestParameters.mediaSourceId !== undefined) {
            queryParameters['mediaSourceId'] = requestParameters.mediaSourceId;
        }

        if (requestParameters.audioStreamIndex !== undefined) {
            queryParameters['audioStreamIndex'] = requestParameters.audioStreamIndex;
        }

        if (requestParameters.subtitleStreamIndex !== undefined) {
            queryParameters['subtitleStreamIndex'] = requestParameters.subtitleStreamIndex;
        }

        if (requestParameters.playMethod !== undefined) {
            queryParameters['playMethod'] = requestParameters.playMethod;
        }

        if (requestParameters.liveStreamId !== undefined) {
            queryParameters['liveStreamId'] = requestParameters.liveStreamId;
        }

        if (requestParameters.playSessionId !== undefined) {
            queryParameters['playSessionId'] = requestParameters.playSessionId;
        }

        if (requestParameters.canSeek !== undefined) {
            queryParameters['canSeek'] = requestParameters.canSeek;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Users/{userId}/PlayingItems/{itemId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))).replace(`{${"itemId"}}`, encodeURIComponent(String(requestParameters.itemId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Reports that a user has begun playing an item.
     */
    async onPlaybackStart(requestParameters: OnPlaybackStartRequest): Promise<void> {
        await this.onPlaybackStartRaw(requestParameters);
    }

    /**
     * Reports that a user has stopped playing an item.
     */
    async onPlaybackStoppedRaw(requestParameters: OnPlaybackStoppedRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling onPlaybackStopped.');
        }

        if (requestParameters.itemId === null || requestParameters.itemId === undefined) {
            throw new runtime.RequiredError('itemId','Required parameter requestParameters.itemId was null or undefined when calling onPlaybackStopped.');
        }

        const queryParameters: any = {};

        if (requestParameters.mediaSourceId !== undefined) {
            queryParameters['mediaSourceId'] = requestParameters.mediaSourceId;
        }

        if (requestParameters.nextMediaType !== undefined) {
            queryParameters['nextMediaType'] = requestParameters.nextMediaType;
        }

        if (requestParameters.positionTicks !== undefined) {
            queryParameters['positionTicks'] = requestParameters.positionTicks;
        }

        if (requestParameters.liveStreamId !== undefined) {
            queryParameters['liveStreamId'] = requestParameters.liveStreamId;
        }

        if (requestParameters.playSessionId !== undefined) {
            queryParameters['playSessionId'] = requestParameters.playSessionId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Users/{userId}/PlayingItems/{itemId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))).replace(`{${"itemId"}}`, encodeURIComponent(String(requestParameters.itemId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Reports that a user has stopped playing an item.
     */
    async onPlaybackStopped(requestParameters: OnPlaybackStoppedRequest): Promise<void> {
        await this.onPlaybackStoppedRaw(requestParameters);
    }

    /**
     * Pings a playback session.
     */
    async pingPlaybackSessionRaw(requestParameters: PingPlaybackSessionRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.playSessionId !== undefined) {
            queryParameters['playSessionId'] = requestParameters.playSessionId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Sessions/Playing/Ping`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Pings a playback session.
     */
    async pingPlaybackSession(requestParameters: PingPlaybackSessionRequest): Promise<void> {
        await this.pingPlaybackSessionRaw(requestParameters);
    }

    /**
     * Reports playback progress within a session.
     */
    async reportPlaybackProgressRaw(requestParameters: ReportPlaybackProgressRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Sessions/Playing/Progress`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PlaybackProgressInfoToJSON(requestParameters.playbackProgressInfo),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Reports playback progress within a session.
     */
    async reportPlaybackProgress(requestParameters: ReportPlaybackProgressRequest): Promise<void> {
        await this.reportPlaybackProgressRaw(requestParameters);
    }

    /**
     * Reports playback has started within a session.
     */
    async reportPlaybackStartRaw(requestParameters: ReportPlaybackStartRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Sessions/Playing`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PlaybackStartInfoToJSON(requestParameters.playbackStartInfo),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Reports playback has started within a session.
     */
    async reportPlaybackStart(requestParameters: ReportPlaybackStartRequest): Promise<void> {
        await this.reportPlaybackStartRaw(requestParameters);
    }

    /**
     * Reports playback has stopped within a session.
     */
    async reportPlaybackStoppedRaw(requestParameters: ReportPlaybackStoppedRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Sessions/Playing/Stopped`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PlaybackStopInfoToJSON(requestParameters.playbackStopInfo),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Reports playback has stopped within a session.
     */
    async reportPlaybackStopped(requestParameters: ReportPlaybackStoppedRequest): Promise<void> {
        await this.reportPlaybackStoppedRaw(requestParameters);
    }

}