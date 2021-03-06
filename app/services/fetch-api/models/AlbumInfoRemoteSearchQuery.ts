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

import { exists, mapValues } from '../runtime';
import {
    AlbumInfo,
    AlbumInfoFromJSON,
    AlbumInfoFromJSONTyped,
    AlbumInfoToJSON,
} from './';

/**
 * 
 * @export
 * @interface AlbumInfoRemoteSearchQuery
 */
export interface AlbumInfoRemoteSearchQuery {
    /**
     * 
     * @type {AlbumInfo}
     * @memberof AlbumInfoRemoteSearchQuery
     */
    searchInfo?: AlbumInfo;
    /**
     * 
     * @type {string}
     * @memberof AlbumInfoRemoteSearchQuery
     */
    itemId?: string;
    /**
     * Will only search within the given provider when set.
     * @type {string}
     * @memberof AlbumInfoRemoteSearchQuery
     */
    searchProviderName?: string | null;
    /**
     * Gets or sets a value indicating whether disabled providers should be included.
     * @type {boolean}
     * @memberof AlbumInfoRemoteSearchQuery
     */
    includeDisabledProviders?: boolean;
}

export function AlbumInfoRemoteSearchQueryFromJSON(json: any): AlbumInfoRemoteSearchQuery {
    return AlbumInfoRemoteSearchQueryFromJSONTyped(json, false);
}

export function AlbumInfoRemoteSearchQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlbumInfoRemoteSearchQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'searchInfo': !exists(json, 'SearchInfo') ? undefined : AlbumInfoFromJSON(json['SearchInfo']),
        'itemId': !exists(json, 'ItemId') ? undefined : json['ItemId'],
        'searchProviderName': !exists(json, 'SearchProviderName') ? undefined : json['SearchProviderName'],
        'includeDisabledProviders': !exists(json, 'IncludeDisabledProviders') ? undefined : json['IncludeDisabledProviders'],
    };
}

export function AlbumInfoRemoteSearchQueryToJSON(value?: AlbumInfoRemoteSearchQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'SearchInfo': AlbumInfoToJSON(value.searchInfo),
        'ItemId': value.itemId,
        'SearchProviderName': value.searchProviderName,
        'IncludeDisabledProviders': value.includeDisabledProviders,
    };
}


