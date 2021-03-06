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
 * Media Update Info Dto.
 * @export
 * @interface MediaUpdateInfoDto
 */
export interface MediaUpdateInfoDto {
    /**
     * Gets or sets media path.
     * @type {string}
     * @memberof MediaUpdateInfoDto
     */
    path?: string | null;
    /**
     * Gets or sets media update type.
     * Created, Modified, Deleted.
     * @type {string}
     * @memberof MediaUpdateInfoDto
     */
    updateType?: string | null;
}

export function MediaUpdateInfoDtoFromJSON(json: any): MediaUpdateInfoDto {
    return MediaUpdateInfoDtoFromJSONTyped(json, false);
}

export function MediaUpdateInfoDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaUpdateInfoDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'path': !exists(json, 'Path') ? undefined : json['Path'],
        'updateType': !exists(json, 'UpdateType') ? undefined : json['UpdateType'],
    };
}

export function MediaUpdateInfoDtoToJSON(value?: MediaUpdateInfoDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Path': value.path,
        'UpdateType': value.updateType,
    };
}


