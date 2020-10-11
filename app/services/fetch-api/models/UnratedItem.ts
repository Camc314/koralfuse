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
 * An enum representing an unrated item.
 * @export
 * @enum {string}
 */
export enum UnratedItem {
    Movie = 'Movie',
    Trailer = 'Trailer',
    Series = 'Series',
    Music = 'Music',
    Book = 'Book',
    LiveTvChannel = 'LiveTvChannel',
    LiveTvProgram = 'LiveTvProgram',
    ChannelContent = 'ChannelContent',
    Other = 'Other'
}

export function UnratedItemFromJSON(json: any): UnratedItem {
    return UnratedItemFromJSONTyped(json, false);
}

export function UnratedItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnratedItem {
    return json as UnratedItem;
}

export function UnratedItemToJSON(value?: UnratedItem | null): any {
    return value as any;
}
