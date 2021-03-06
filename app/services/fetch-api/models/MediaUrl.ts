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
 * @interface MediaUrl
 */
export interface MediaUrl {
    /**
     * 
     * @type {string}
     * @memberof MediaUrl
     */
    url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MediaUrl
     */
    name?: string | null;
}

export function MediaUrlFromJSON(json: any): MediaUrl {
    return MediaUrlFromJSONTyped(json, false);
}

export function MediaUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaUrl {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': !exists(json, 'Url') ? undefined : json['Url'],
        'name': !exists(json, 'Name') ? undefined : json['Name'],
    };
}

export function MediaUrlToJSON(value?: MediaUrl | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Url': value.url,
        'Name': value.name,
    };
}


