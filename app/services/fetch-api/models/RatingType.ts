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
export enum RatingType {
    Score = 'Score',
    Likes = 'Likes'
}

export function RatingTypeFromJSON(json: any): RatingType {
    return RatingTypeFromJSONTyped(json, false);
}

export function RatingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatingType {
    return json as RatingType;
}

export function RatingTypeToJSON(value?: RatingType | null): any {
    return value as any;
}

