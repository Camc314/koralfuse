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
/**
 * 
 * @export
 * @interface RemoteSubtitleInfo
 */
export interface RemoteSubtitleInfo {
    /**
     * 
     * @type {string}
     * @memberof RemoteSubtitleInfo
     */
    threeLetterISOLanguageName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RemoteSubtitleInfo
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RemoteSubtitleInfo
     */
    providerName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RemoteSubtitleInfo
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RemoteSubtitleInfo
     */
    format?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RemoteSubtitleInfo
     */
    author?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RemoteSubtitleInfo
     */
    comment?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof RemoteSubtitleInfo
     */
    dateCreated?: Date | null;
    /**
     * 
     * @type {number}
     * @memberof RemoteSubtitleInfo
     */
    communityRating?: number | null;
    /**
     * 
     * @type {number}
     * @memberof RemoteSubtitleInfo
     */
    downloadCount?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof RemoteSubtitleInfo
     */
    isHashMatch?: boolean | null;
}

export function RemoteSubtitleInfoFromJSON(json: any): RemoteSubtitleInfo {
    return RemoteSubtitleInfoFromJSONTyped(json, false);
}

export function RemoteSubtitleInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemoteSubtitleInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'threeLetterISOLanguageName': !exists(json, 'ThreeLetterISOLanguageName') ? undefined : json['ThreeLetterISOLanguageName'],
        'id': !exists(json, 'Id') ? undefined : json['Id'],
        'providerName': !exists(json, 'ProviderName') ? undefined : json['ProviderName'],
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'format': !exists(json, 'Format') ? undefined : json['Format'],
        'author': !exists(json, 'Author') ? undefined : json['Author'],
        'comment': !exists(json, 'Comment') ? undefined : json['Comment'],
        'dateCreated': !exists(json, 'DateCreated') ? undefined : (json['DateCreated'] === null ? null : new Date(json['DateCreated'])),
        'communityRating': !exists(json, 'CommunityRating') ? undefined : json['CommunityRating'],
        'downloadCount': !exists(json, 'DownloadCount') ? undefined : json['DownloadCount'],
        'isHashMatch': !exists(json, 'IsHashMatch') ? undefined : json['IsHashMatch'],
    };
}

export function RemoteSubtitleInfoToJSON(value?: RemoteSubtitleInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ThreeLetterISOLanguageName': value.threeLetterISOLanguageName,
        'Id': value.id,
        'ProviderName': value.providerName,
        'Name': value.name,
        'Format': value.format,
        'Author': value.author,
        'Comment': value.comment,
        'DateCreated': value.dateCreated === undefined ? undefined : (value.dateCreated === null ? null : value.dateCreated.toISOString()),
        'CommunityRating': value.communityRating,
        'DownloadCount': value.downloadCount,
        'IsHashMatch': value.isHashMatch,
    };
}


