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
 * @interface BaseItemPersonImageBlurHashesPrimary
 */
export interface BaseItemPersonImageBlurHashesPrimary {
    /**
     * 
     * @type {string}
     * @memberof BaseItemPersonImageBlurHashesPrimary
     */
    string?: string;
}

export function BaseItemPersonImageBlurHashesPrimaryFromJSON(json: any): BaseItemPersonImageBlurHashesPrimary {
    return BaseItemPersonImageBlurHashesPrimaryFromJSONTyped(json, false);
}

export function BaseItemPersonImageBlurHashesPrimaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseItemPersonImageBlurHashesPrimary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'string': !exists(json, 'string') ? undefined : json['string'],
    };
}

export function BaseItemPersonImageBlurHashesPrimaryToJSON(value?: BaseItemPersonImageBlurHashesPrimary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'string': value.string,
    };
}


