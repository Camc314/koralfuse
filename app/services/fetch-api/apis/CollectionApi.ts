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
    CollectionCreationResult,
    CollectionCreationResultFromJSON,
    CollectionCreationResultToJSON,
} from '../models';

export interface AddToCollectionRequest {
    collectionId: string;
    ids: string;
}

export interface CreateCollectionRequest {
    name?: string | null;
    ids?: string | null;
    parentId?: string | null;
    isLocked?: boolean;
}

export interface RemoveFromCollectionRequest {
    collectionId: string;
    ids: string;
}

/**
 * 
 */
export class CollectionApi extends runtime.BaseAPI {

    /**
     * Adds items to a collection.
     */
    async addToCollectionRaw(requestParameters: AddToCollectionRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling addToCollection.');
        }

        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling addToCollection.');
        }

        const queryParameters: any = {};

        if (requestParameters.ids !== undefined) {
            queryParameters['ids'] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Collections/{collectionId}/Items`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Adds items to a collection.
     */
    async addToCollection(requestParameters: AddToCollectionRequest): Promise<void> {
        await this.addToCollectionRaw(requestParameters);
    }

    /**
     * Creates a new collection.
     */
    async createCollectionRaw(requestParameters: CreateCollectionRequest): Promise<runtime.ApiResponse<CollectionCreationResult>> {
        const queryParameters: any = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.ids !== undefined) {
            queryParameters['ids'] = requestParameters.ids;
        }

        if (requestParameters.parentId !== undefined) {
            queryParameters['parentId'] = requestParameters.parentId;
        }

        if (requestParameters.isLocked !== undefined) {
            queryParameters['isLocked'] = requestParameters.isLocked;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Collections`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionCreationResultFromJSON(jsonValue));
    }

    /**
     * Creates a new collection.
     */
    async createCollection(requestParameters: CreateCollectionRequest): Promise<CollectionCreationResult> {
        const response = await this.createCollectionRaw(requestParameters);
        return await response.value();
    }

    /**
     * Removes items from a collection.
     */
    async removeFromCollectionRaw(requestParameters: RemoveFromCollectionRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.collectionId === null || requestParameters.collectionId === undefined) {
            throw new runtime.RequiredError('collectionId','Required parameter requestParameters.collectionId was null or undefined when calling removeFromCollection.');
        }

        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling removeFromCollection.');
        }

        const queryParameters: any = {};

        if (requestParameters.ids !== undefined) {
            queryParameters['ids'] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Collections/{collectionId}/Items`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters.collectionId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Removes items from a collection.
     */
    async removeFromCollection(requestParameters: RemoveFromCollectionRequest): Promise<void> {
        await this.removeFromCollectionRaw(requestParameters);
    }

}
