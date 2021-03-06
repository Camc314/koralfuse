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
 * Default directory browser info.
 * @export
 * @interface DefaultDirectoryBrowserInfoDto
 */
export interface DefaultDirectoryBrowserInfoDto {
    /**
     * Gets or sets the path.
     * @type {string}
     * @memberof DefaultDirectoryBrowserInfoDto
     */
    path?: string | null;
}

export function DefaultDirectoryBrowserInfoDtoFromJSON(json: any): DefaultDirectoryBrowserInfoDto {
    return DefaultDirectoryBrowserInfoDtoFromJSONTyped(json, false);
}

export function DefaultDirectoryBrowserInfoDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DefaultDirectoryBrowserInfoDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'path': !exists(json, 'Path') ? undefined : json['Path'],
    };
}

export function DefaultDirectoryBrowserInfoDtoToJSON(value?: DefaultDirectoryBrowserInfoDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Path': value.path,
    };
}


