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

/**
 * 
 * @export
 * @enum {string}
 */
export enum PlayAccess {
    Full = 'Full',
    None = 'None'
}

export function PlayAccessFromJSON(json: any): PlayAccess {
    return PlayAccessFromJSONTyped(json, false);
}

export function PlayAccessFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlayAccess {
    return json as PlayAccess;
}

export function PlayAccessToJSON(value?: PlayAccess | null): any {
    return value as any;
}
