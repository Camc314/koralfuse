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
 * Enum ImageOutputFormat.
 * @export
 * @enum {string}
 */
export enum ImageFormat {
    Bmp = 'Bmp',
    Gif = 'Gif',
    Jpg = 'Jpg',
    Png = 'Png',
    Webp = 'Webp'
}

export function ImageFormatFromJSON(json: any): ImageFormat {
    return ImageFormatFromJSONTyped(json, false);
}

export function ImageFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageFormat {
    return json as ImageFormat;
}

export function ImageFormatToJSON(value?: ImageFormat | null): any {
    return value as any;
}

