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
    NameIdPair,
    NameIdPairFromJSON,
    NameIdPairToJSON,
    NotificationLevel,
    NotificationLevelFromJSON,
    NotificationLevelToJSON,
    NotificationResultDto,
    NotificationResultDtoFromJSON,
    NotificationResultDtoToJSON,
    NotificationTypeInfo,
    NotificationTypeInfoFromJSON,
    NotificationTypeInfoToJSON,
    NotificationsSummaryDto,
    NotificationsSummaryDtoFromJSON,
    NotificationsSummaryDtoToJSON,
} from '../models';

export interface CreateAdminNotificationRequest {
    url?: string | null;
    level?: NotificationLevel;
    name?: string | null;
    description?: string | null;
}

export interface GetNotificationsRequest {
    userId: string;
}

export interface GetNotificationsSummaryRequest {
    userId: string;
}

export interface SetReadRequest {
    userId: string;
}

export interface SetUnreadRequest {
    userId: string;
}

/**
 * 
 */
export class NotificationsApi extends runtime.BaseAPI {

    /**
     * Sends a notification to all admins.
     */
    async createAdminNotificationRaw(requestParameters: CreateAdminNotificationRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.url !== undefined) {
            queryParameters['url'] = requestParameters.url;
        }

        if (requestParameters.level !== undefined) {
            queryParameters['level'] = requestParameters.level;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.description !== undefined) {
            queryParameters['description'] = requestParameters.description;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Notifications/Admin`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Sends a notification to all admins.
     */
    async createAdminNotification(requestParameters: CreateAdminNotificationRequest): Promise<void> {
        await this.createAdminNotificationRaw(requestParameters);
    }

    /**
     * Gets notification services.
     */
    async getNotificationServicesRaw(): Promise<runtime.ApiResponse<Array<NameIdPair>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Notifications/Services`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(NameIdPairFromJSON));
    }

    /**
     * Gets notification services.
     */
    async getNotificationServices(): Promise<Array<NameIdPair>> {
        const response = await this.getNotificationServicesRaw();
        return await response.value();
    }

    /**
     * Gets notification types.
     */
    async getNotificationTypesRaw(): Promise<runtime.ApiResponse<Array<NotificationTypeInfo>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Notifications/Types`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(NotificationTypeInfoFromJSON));
    }

    /**
     * Gets notification types.
     */
    async getNotificationTypes(): Promise<Array<NotificationTypeInfo>> {
        const response = await this.getNotificationTypesRaw();
        return await response.value();
    }

    /**
     * Gets a user\'s notifications.
     */
    async getNotificationsRaw(requestParameters: GetNotificationsRequest): Promise<runtime.ApiResponse<NotificationResultDto>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getNotifications.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Notifications/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => NotificationResultDtoFromJSON(jsonValue));
    }

    /**
     * Gets a user\'s notifications.
     */
    async getNotifications(requestParameters: GetNotificationsRequest): Promise<NotificationResultDto> {
        const response = await this.getNotificationsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Gets a user\'s notification summary.
     */
    async getNotificationsSummaryRaw(requestParameters: GetNotificationsSummaryRequest): Promise<runtime.ApiResponse<NotificationsSummaryDto>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getNotificationsSummary.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Notifications/{userId}/Summary`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => NotificationsSummaryDtoFromJSON(jsonValue));
    }

    /**
     * Gets a user\'s notification summary.
     */
    async getNotificationsSummary(requestParameters: GetNotificationsSummaryRequest): Promise<NotificationsSummaryDto> {
        const response = await this.getNotificationsSummaryRaw(requestParameters);
        return await response.value();
    }

    /**
     * Sets notifications as read.
     */
    async setReadRaw(requestParameters: SetReadRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling setRead.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Notifications/{userId}/Read`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Sets notifications as read.
     */
    async setRead(requestParameters: SetReadRequest): Promise<void> {
        await this.setReadRaw(requestParameters);
    }

    /**
     * Sets notifications as unread.
     */
    async setUnreadRaw(requestParameters: SetUnreadRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling setUnread.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Notifications/{userId}/Unread`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Sets notifications as unread.
     */
    async setUnread(requestParameters: SetUnreadRequest): Promise<void> {
        await this.setUnreadRaw(requestParameters);
    }

}
