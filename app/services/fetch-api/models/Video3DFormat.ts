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
export enum Video3DFormat {
    HalfSideBySide = 'HalfSideBySide',
    FullSideBySide = 'FullSideBySide',
    FullTopAndBottom = 'FullTopAndBottom',
    HalfTopAndBottom = 'HalfTopAndBottom',
    MVC = 'MVC'
}

export function Video3DFormatFromJSON(json: any): Video3DFormat {
    return Video3DFormatFromJSONTyped(json, false);
}

export function Video3DFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): Video3DFormat {
    return json as Video3DFormat;
}

export function Video3DFormatToJSON(value?: Video3DFormat | null): any {
    return value as any;
}

