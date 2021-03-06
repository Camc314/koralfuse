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
 * @interface NameValuePair
 */
export interface NameValuePair {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof NameValuePair
     */
    name?: string | null;
    /**
     * Gets or sets the value.
     * @type {string}
     * @memberof NameValuePair
     */
    value?: string | null;
}

export function NameValuePairFromJSON(json: any): NameValuePair {
    return NameValuePairFromJSONTyped(json, false);
}

export function NameValuePairFromJSONTyped(json: any, ignoreDiscriminator: boolean): NameValuePair {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'value': !exists(json, 'Value') ? undefined : json['Value'],
    };
}

export function NameValuePairToJSON(value?: NameValuePair | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': value.name,
        'Value': value.value,
    };
}


