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
import {
    LibraryOptionInfoDto,
    LibraryOptionInfoDtoFromJSON,
    LibraryOptionInfoDtoFromJSONTyped,
    LibraryOptionInfoDtoToJSON,
    LibraryTypeOptionsDto,
    LibraryTypeOptionsDtoFromJSON,
    LibraryTypeOptionsDtoFromJSONTyped,
    LibraryTypeOptionsDtoToJSON,
} from './';

/**
 * Library options result dto.
 * @export
 * @interface LibraryOptionsResultDto
 */
export interface LibraryOptionsResultDto {
    /**
     * Gets or sets the metadata savers.
     * @type {Array<LibraryOptionInfoDto>}
     * @memberof LibraryOptionsResultDto
     */
    metadataSavers?: Array<LibraryOptionInfoDto> | null;
    /**
     * Gets or sets the metadata readers.
     * @type {Array<LibraryOptionInfoDto>}
     * @memberof LibraryOptionsResultDto
     */
    metadataReaders?: Array<LibraryOptionInfoDto> | null;
    /**
     * Gets or sets the subtitle fetchers.
     * @type {Array<LibraryOptionInfoDto>}
     * @memberof LibraryOptionsResultDto
     */
    subtitleFetchers?: Array<LibraryOptionInfoDto> | null;
    /**
     * Gets or sets the type options.
     * @type {Array<LibraryTypeOptionsDto>}
     * @memberof LibraryOptionsResultDto
     */
    typeOptions?: Array<LibraryTypeOptionsDto> | null;
}

export function LibraryOptionsResultDtoFromJSON(json: any): LibraryOptionsResultDto {
    return LibraryOptionsResultDtoFromJSONTyped(json, false);
}

export function LibraryOptionsResultDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LibraryOptionsResultDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metadataSavers': !exists(json, 'MetadataSavers') ? undefined : (json['MetadataSavers'] === null ? null : (json['MetadataSavers'] as Array<any>).map(LibraryOptionInfoDtoFromJSON)),
        'metadataReaders': !exists(json, 'MetadataReaders') ? undefined : (json['MetadataReaders'] === null ? null : (json['MetadataReaders'] as Array<any>).map(LibraryOptionInfoDtoFromJSON)),
        'subtitleFetchers': !exists(json, 'SubtitleFetchers') ? undefined : (json['SubtitleFetchers'] === null ? null : (json['SubtitleFetchers'] as Array<any>).map(LibraryOptionInfoDtoFromJSON)),
        'typeOptions': !exists(json, 'TypeOptions') ? undefined : (json['TypeOptions'] === null ? null : (json['TypeOptions'] as Array<any>).map(LibraryTypeOptionsDtoFromJSON)),
    };
}

export function LibraryOptionsResultDtoToJSON(value?: LibraryOptionsResultDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'MetadataSavers': value.metadataSavers === undefined ? undefined : (value.metadataSavers === null ? null : (value.metadataSavers as Array<any>).map(LibraryOptionInfoDtoToJSON)),
        'MetadataReaders': value.metadataReaders === undefined ? undefined : (value.metadataReaders === null ? null : (value.metadataReaders as Array<any>).map(LibraryOptionInfoDtoToJSON)),
        'SubtitleFetchers': value.subtitleFetchers === undefined ? undefined : (value.subtitleFetchers === null ? null : (value.subtitleFetchers as Array<any>).map(LibraryOptionInfoDtoToJSON)),
        'TypeOptions': value.typeOptions === undefined ? undefined : (value.typeOptions === null ? null : (value.typeOptions as Array<any>).map(LibraryTypeOptionsDtoToJSON)),
    };
}


