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
export enum DeviceProfileType {
    System = 'System',
    User = 'User'
}

export function DeviceProfileTypeFromJSON(json: any): DeviceProfileType {
    return DeviceProfileTypeFromJSONTyped(json, false);
}

export function DeviceProfileTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceProfileType {
    return json as DeviceProfileType;
}

export function DeviceProfileTypeToJSON(value?: DeviceProfileType | null): any {
    return value as any;
}

