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
 * Class FontFile.
 * @export
 * @interface FontFile
 */
export interface FontFile {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof FontFile
     */
    name?: string | null;
    /**
     * Gets or sets the size.
     * @type {number}
     * @memberof FontFile
     */
    size?: number;
    /**
     * Gets or sets the date created.
     * @type {Date}
     * @memberof FontFile
     */
    dateCreated?: Date;
    /**
     * Gets or sets the date modified.
     * @type {Date}
     * @memberof FontFile
     */
    dateModified?: Date;
}

export function FontFileFromJSON(json: any): FontFile {
    return FontFileFromJSONTyped(json, false);
}

export function FontFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): FontFile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'size': !exists(json, 'Size') ? undefined : json['Size'],
        'dateCreated': !exists(json, 'DateCreated') ? undefined : (new Date(json['DateCreated'])),
        'dateModified': !exists(json, 'DateModified') ? undefined : (new Date(json['DateModified'])),
    };
}

export function FontFileToJSON(value?: FontFile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': value.name,
        'Size': value.size,
        'DateCreated': value.dateCreated === undefined ? undefined : (value.dateCreated.toISOString()),
        'DateModified': value.dateModified === undefined ? undefined : (value.dateModified.toISOString()),
    };
}


