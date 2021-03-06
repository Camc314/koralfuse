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
    ImageType,
    ImageTypeFromJSON,
    ImageTypeFromJSONTyped,
    ImageTypeToJSON,
    RatingType,
    RatingTypeFromJSON,
    RatingTypeFromJSONTyped,
    RatingTypeToJSON,
} from './';

/**
 * Class RemoteImageInfo.
 * @export
 * @interface RemoteImageInfo
 */
export interface RemoteImageInfo {
    /**
     * Gets or sets the name of the provider.
     * @type {string}
     * @memberof RemoteImageInfo
     */
    providerName?: string | null;
    /**
     * Gets or sets the URL.
     * @type {string}
     * @memberof RemoteImageInfo
     */
    url?: string | null;
    /**
     * Gets a url used for previewing a smaller version.
     * @type {string}
     * @memberof RemoteImageInfo
     */
    thumbnailUrl?: string | null;
    /**
     * Gets or sets the height.
     * @type {number}
     * @memberof RemoteImageInfo
     */
    height?: number | null;
    /**
     * Gets or sets the width.
     * @type {number}
     * @memberof RemoteImageInfo
     */
    width?: number | null;
    /**
     * Gets or sets the community rating.
     * @type {number}
     * @memberof RemoteImageInfo
     */
    communityRating?: number | null;
    /**
     * Gets or sets the vote count.
     * @type {number}
     * @memberof RemoteImageInfo
     */
    voteCount?: number | null;
    /**
     * Gets or sets the language.
     * @type {string}
     * @memberof RemoteImageInfo
     */
    language?: string | null;
    /**
     * 
     * @type {ImageType}
     * @memberof RemoteImageInfo
     */
    type?: ImageType;
    /**
     * 
     * @type {RatingType}
     * @memberof RemoteImageInfo
     */
    ratingType?: RatingType;
}

export function RemoteImageInfoFromJSON(json: any): RemoteImageInfo {
    return RemoteImageInfoFromJSONTyped(json, false);
}

export function RemoteImageInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemoteImageInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'providerName': !exists(json, 'ProviderName') ? undefined : json['ProviderName'],
        'url': !exists(json, 'Url') ? undefined : json['Url'],
        'thumbnailUrl': !exists(json, 'ThumbnailUrl') ? undefined : json['ThumbnailUrl'],
        'height': !exists(json, 'Height') ? undefined : json['Height'],
        'width': !exists(json, 'Width') ? undefined : json['Width'],
        'communityRating': !exists(json, 'CommunityRating') ? undefined : json['CommunityRating'],
        'voteCount': !exists(json, 'VoteCount') ? undefined : json['VoteCount'],
        'language': !exists(json, 'Language') ? undefined : json['Language'],
        'type': !exists(json, 'Type') ? undefined : ImageTypeFromJSON(json['Type']),
        'ratingType': !exists(json, 'RatingType') ? undefined : RatingTypeFromJSON(json['RatingType']),
    };
}

export function RemoteImageInfoToJSON(value?: RemoteImageInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ProviderName': value.providerName,
        'Url': value.url,
        'ThumbnailUrl': value.thumbnailUrl,
        'Height': value.height,
        'Width': value.width,
        'CommunityRating': value.communityRating,
        'VoteCount': value.voteCount,
        'Language': value.language,
        'Type': ImageTypeToJSON(value.type),
        'RatingType': RatingTypeToJSON(value.ratingType),
    };
}


