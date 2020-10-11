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
 * @interface TrailerInfo
 */
export interface TrailerInfo {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof TrailerInfo
     */
    name?: string | null;
    /**
     * Gets or sets the path.
     * @type {string}
     * @memberof TrailerInfo
     */
    path?: string | null;
    /**
     * Gets or sets the metadata language.
     * @type {string}
     * @memberof TrailerInfo
     */
    metadataLanguage?: string | null;
    /**
     * Gets or sets the metadata country code.
     * @type {string}
     * @memberof TrailerInfo
     */
    metadataCountryCode?: string | null;
    /**
     * Gets or sets the provider ids.
     * @type {{ [key: string]: string; }}
     * @memberof TrailerInfo
     */
    providerIds?: { [key: string]: string; } | null;
    /**
     * Gets or sets the year.
     * @type {number}
     * @memberof TrailerInfo
     */
    year?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TrailerInfo
     */
    indexNumber?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TrailerInfo
     */
    parentIndexNumber?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof TrailerInfo
     */
    premiereDate?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof TrailerInfo
     */
    isAutomated?: boolean;
}

export function TrailerInfoFromJSON(json: any): TrailerInfo {
    return TrailerInfoFromJSONTyped(json, false);
}

export function TrailerInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrailerInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
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

export function TrailerInfoToJSON(value?: TrailerInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
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

