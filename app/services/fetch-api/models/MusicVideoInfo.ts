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
 * @interface MusicVideoInfo
 */
export interface MusicVideoInfo {
    /**
     * 
     * @type {Array<string>}
     * @memberof MusicVideoInfo
     */
    artists?: Array<string> | null;
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof MusicVideoInfo
     */
    name?: string | null;
    /**
     * Gets or sets the path.
     * @type {string}
     * @memberof MusicVideoInfo
     */
    path?: string | null;
    /**
     * Gets or sets the metadata language.
     * @type {string}
     * @memberof MusicVideoInfo
     */
    metadataLanguage?: string | null;
    /**
     * Gets or sets the metadata country code.
     * @type {string}
     * @memberof MusicVideoInfo
     */
    metadataCountryCode?: string | null;
    /**
     * Gets or sets the provider ids.
     * @type {{ [key: string]: string; }}
     * @memberof MusicVideoInfo
     */
    providerIds?: { [key: string]: string; } | null;
    /**
     * Gets or sets the year.
     * @type {number}
     * @memberof MusicVideoInfo
     */
    year?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MusicVideoInfo
     */
    indexNumber?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MusicVideoInfo
     */
    parentIndexNumber?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof MusicVideoInfo
     */
    premiereDate?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof MusicVideoInfo
     */
    isAutomated?: boolean;
}

export function MusicVideoInfoFromJSON(json: any): MusicVideoInfo {
    return MusicVideoInfoFromJSONTyped(json, false);
}

export function MusicVideoInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MusicVideoInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'artists': !exists(json, 'Artists') ? undefined : json['Artists'],
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'path': !exists(json, 'Path') ? undefined : json['Path'],
        'metadataLanguage': !exists(json, 'MetadataLanguage') ? undefined : json['MetadataLanguage'],
        'metadataCountryCode': !exists(json, 'MetadataCountryCode') ? undefined : json['MetadataCountryCode'],
        'providerIds': !exists(json, 'ProviderIds') ? undefined : json['ProviderIds'],
        'year': !exists(json, 'Year') ? undefined : json['Year'],
        'indexNumber': !exists(json, 'IndexNumber') ? undefined : json['IndexNumber'],
        'parentIndexNumber': !exists(json, 'ParentIndexNumber') ? undefined : json['ParentIndexNumber'],
        'premiereDate': !exists(json, 'PremiereDate') ? undefined : (json['PremiereDate'] === null ? null : new Date(json['PremiereDate'])),
        'isAutomated': !exists(json, 'IsAutomated') ? undefined : json['IsAutomated'],
    };
}

export function MusicVideoInfoToJSON(value?: MusicVideoInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Artists': value.artists,
        'Name': value.name,
        'Path': value.path,
        'MetadataLanguage': value.metadataLanguage,
        'MetadataCountryCode': value.metadataCountryCode,
        'ProviderIds': value.providerIds,
        'Year': value.year,
        'IndexNumber': value.indexNumber,
        'ParentIndexNumber': value.parentIndexNumber,
        'PremiereDate': value.premiereDate === undefined ? undefined : (value.premiereDate === null ? null : value.premiereDate.toISOString()),
        'IsAutomated': value.isAutomated,
    };
}

