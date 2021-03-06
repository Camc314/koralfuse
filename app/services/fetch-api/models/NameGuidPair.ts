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
 * @interface NameGuidPair
 */
export interface NameGuidPair {
    /**
     * 
     * @type {string}
     * @memberof NameGuidPair
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NameGuidPair
     */
    id?: string;
}

export function NameGuidPairFromJSON(json: any): NameGuidPair {
    return NameGuidPairFromJSONTyped(json, false);
}

export function NameGuidPairFromJSONTyped(json: any, ignoreDiscriminator: boolean): NameGuidPair {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'id': !exists(json, 'Id') ? undefined : json['Id'],
    };
}

export function NameGuidPairToJSON(value?: NameGuidPair | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': value.name,
        'Id': value.id,
    };
}


