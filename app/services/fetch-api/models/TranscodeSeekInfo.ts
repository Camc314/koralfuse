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
export enum TranscodeSeekInfo {
    Auto = 'Auto',
    Bytes = 'Bytes'
}

export function TranscodeSeekInfoFromJSON(json: any): TranscodeSeekInfo {
    return TranscodeSeekInfoFromJSONTyped(json, false);
}

export function TranscodeSeekInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranscodeSeekInfo {
    return json as TranscodeSeekInfo;
}

export function TranscodeSeekInfoToJSON(value?: TranscodeSeekInfo | null): any {
    return value as any;
}

