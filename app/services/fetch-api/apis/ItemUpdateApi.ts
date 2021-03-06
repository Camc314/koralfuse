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
    BaseItemDto,
    BaseItemDtoFromJSON,
    BaseItemDtoToJSON,
    MetadataEditorInfo,
    MetadataEditorInfoFromJSON,
    MetadataEditorInfoToJSON,
    ProblemDetails,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
} from '../models';

export interface GetMetadataEditorInfoRequest {
    itemId: string;
}

export interface UpdateItemRequest {
    itemId: string;
    baseItemDto: BaseItemDto;
}

export interface UpdateItemContentTypeRequest {
    itemId: string;
    contentType?: string | null;
}

/**
 * 
 */
export class ItemUpdateApi extends runtime.BaseAPI {

    /**
     * Gets metadata editor info for an item.
     */
    async getMetadataEditorInfoRaw(requestParameters: GetMetadataEditorInfoRequest): Promise<runtime.ApiResponse<MetadataEditorInfo>> {
        if (requestParameters.itemId === null || requestParameters.itemId === undefined) {
            throw new runtime.RequiredError('itemId','Required parameter requestParameters.itemId was null or undefined when calling getMetadataEditorInfo.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Items/{itemId}/MetadataEditor`.replace(`{${"itemId"}}`, encodeURIComponent(String(requestParameters.itemId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetadataEditorInfoFromJSON(jsonValue));
    }

    /**
     * Gets metadata editor info for an item.
     */
    async getMetadataEditorInfo(requestParameters: GetMetadataEditorInfoRequest): Promise<MetadataEditorInfo> {
        const response = await this.getMetadataEditorInfoRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an item.
     */
    async updateItemRaw(requestParameters: UpdateItemRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.itemId === null || requestParameters.itemId === undefined) {
            throw new runtime.RequiredError('itemId','Required parameter requestParameters.itemId was null or undefined when calling updateItem.');
        }

        if (requestParameters.baseItemDto === null || requestParameters.baseItemDto === undefined) {
            throw new runtime.RequiredError('baseItemDto','Required parameter requestParameters.baseItemDto was null or undefined when calling updateItem.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Items/{itemId}`.replace(`{${"itemId"}}`, encodeURIComponent(String(requestParameters.itemId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BaseItemDtoToJSON(requestParameters.baseItemDto),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates an item.
     */
    async updateItem(requestParameters: UpdateItemRequest): Promise<void> {
        await this.updateItemRaw(requestParameters);
    }

    /**
     * Updates an item\'s content type.
     */
    async updateItemContentTypeRaw(requestParameters: UpdateItemContentTypeRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.itemId === null || requestParameters.itemId === undefined) {
            throw new runtime.RequiredError('itemId','Required parameter requestParameters.itemId was null or undefined when calling updateItemContentType.');
        }

        const queryParameters: any = {};

        if (requestParameters.contentType !== undefined) {
            queryParameters['contentType'] = requestParameters.contentType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Items/{itemId}/ContentType`.replace(`{${"itemId"}}`, encodeURIComponent(String(requestParameters.itemId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates an item\'s content type.
     */
    async updateItemContentType(requestParameters: UpdateItemContentTypeRequest): Promise<void> {
        await this.updateItemContentTypeRaw(requestParameters);
    }

}
