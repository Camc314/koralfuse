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
    HeaderMatchType,
    HeaderMatchTypeFromJSON,
    HeaderMatchTypeFromJSONTyped,
    HeaderMatchTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface HttpHeaderInfo
 */
export interface HttpHeaderInfo {
    /**
     * 
     * @type {string}
     * @memberof HttpHeaderInfo
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HttpHeaderInfo
     */
    value?: string | null;
    /**
     * 
     * @type {HeaderMatchType}
     * @memberof HttpHeaderInfo
     */
    match?: HeaderMatchType;
}

export function HttpHeaderInfoFromJSON(json: any): HttpHeaderInfo {
    return HttpHeaderInfoFromJSONTyped(json, false);
}

export function HttpHeaderInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): HttpHeaderInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'value': !exists(json, 'Value') ? undefined : json['Value'],
        'match': !exists(json, 'Match') ? undefined : HeaderMatchTypeFromJSON(json['Match']),
    };
}

export function HttpHeaderInfoToJSON(value?: HttpHeaderInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': value.name,
        'Value': value.value,
        'Match': HeaderMatchTypeToJSON(value.match),
    };
}


