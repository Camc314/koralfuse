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
    AuthenticationInfo,
    AuthenticationInfoFromJSON,
    AuthenticationInfoFromJSONTyped,
    AuthenticationInfoToJSON,
} from './';

/**
 * 
 * @export
 * @interface AuthenticationInfoQueryResult
 */
export interface AuthenticationInfoQueryResult {
    /**
     * Gets or sets the items.
     * @type {Array<AuthenticationInfo>}
     * @memberof AuthenticationInfoQueryResult
     */
    items?: Array<AuthenticationInfo> | null;
    /**
     * The total number of records available.
     * @type {number}
     * @memberof AuthenticationInfoQueryResult
     */
    totalRecordCount?: number;
    /**
     * The index of the first record in Items.
     * @type {number}
     * @memberof AuthenticationInfoQueryResult
     */
    startIndex?: number;
}

export function AuthenticationInfoQueryResultFromJSON(json: any): AuthenticationInfoQueryResult {
    return AuthenticationInfoQueryResultFromJSONTyped(json, false);
}

export function AuthenticationInfoQueryResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticationInfoQueryResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'Items') ? undefined : (json['Items'] === null ? null : (json['Items'] as Array<any>).map(AuthenticationInfoFromJSON)),
        'totalRecordCount': !exists(json, 'TotalRecordCount') ? undefined : json['TotalRecordCount'],
        'startIndex': !exists(json, 'StartIndex') ? undefined : json['StartIndex'],
    };
}

export function AuthenticationInfoQueryResultToJSON(value?: AuthenticationInfoQueryResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(AuthenticationInfoToJSON)),
        'TotalRecordCount': value.totalRecordCount,
        'StartIndex': value.startIndex,
    };
}


