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
 * Class ChapterInfo.
 * @export
 * @interface ChapterInfo
 */
export interface ChapterInfo {
    /**
     * Gets or sets the start position ticks.
     * @type {number}
     * @memberof ChapterInfo
     */
    startPositionTicks?: number;
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof ChapterInfo
     */
    name?: string | null;
    /**
     * Gets or sets the image path.
     * @type {string}
     * @memberof ChapterInfo
     */
    imagePath?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof ChapterInfo
     */
    imageDateModified?: Date;
    /**
     * 
     * @type {string}
     * @memberof ChapterInfo
     */
    imageTag?: string | null;
}

export function ChapterInfoFromJSON(json: any): ChapterInfo {
    return ChapterInfoFromJSONTyped(json, false);
}

export function ChapterInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChapterInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startPositionTicks': !exists(json, 'StartPositionTicks') ? undefined : json['StartPositionTicks'],
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'imagePath': !exists(json, 'ImagePath') ? undefined : json['ImagePath'],
        'imageDateModified': !exists(json, 'ImageDateModified') ? undefined : (new Date(json['ImageDateModified'])),
        'imageTag': !exists(json, 'ImageTag') ? undefined : json['ImageTag'],
    };
}

export function ChapterInfoToJSON(value?: ChapterInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'StartPositionTicks': value.startPositionTicks,
        'Name': value.name,
        'ImagePath': value.imagePath,
        'ImageDateModified': value.imageDateModified === undefined ? undefined : (value.imageDateModified.toISOString()),
        'ImageTag': value.imageTag,
    };
}


