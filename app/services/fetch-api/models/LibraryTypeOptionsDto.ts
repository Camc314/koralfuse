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
    ImageOption,
    ImageOptionFromJSON,
    ImageOptionFromJSONTyped,
    ImageOptionToJSON,
    ImageType,
    ImageTypeFromJSON,
    ImageTypeFromJSONTyped,
    ImageTypeToJSON,
    LibraryOptionInfoDto,
    LibraryOptionInfoDtoFromJSON,
    LibraryOptionInfoDtoFromJSONTyped,
    LibraryOptionInfoDtoToJSON,
} from './';

/**
 * Library type options dto.
 * @export
 * @interface LibraryTypeOptionsDto
 */
export interface LibraryTypeOptionsDto {
    /**
     * Gets or sets the type.
     * @type {string}
     * @memberof LibraryTypeOptionsDto
     */
    type?: string | null;
    /**
     * Gets or sets the metadata fetchers.
     * @type {Array<LibraryOptionInfoDto>}
     * @memberof LibraryTypeOptionsDto
     */
    metadataFetchers?: Array<LibraryOptionInfoDto> | null;
    /**
     * Gets or sets the image fetchers.
     * @type {Array<LibraryOptionInfoDto>}
     * @memberof LibraryTypeOptionsDto
     */
    imageFetchers?: Array<LibraryOptionInfoDto> | null;
    /**
     * Gets or sets the supported image types.
     * @type {Array<ImageType>}
     * @memberof LibraryTypeOptionsDto
     */
    supportedImageTypes?: Array<ImageType> | null;
    /**
     * Gets or sets the default image options.
     * @type {Array<ImageOption>}
     * @memberof LibraryTypeOptionsDto
     */
    defaultImageOptions?: Array<ImageOption> | null;
}

export function LibraryTypeOptionsDtoFromJSON(json: any): LibraryTypeOptionsDto {
    return LibraryTypeOptionsDtoFromJSONTyped(json, false);
}

export function LibraryTypeOptionsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LibraryTypeOptionsDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'Type') ? undefined : json['Type'],
        'metadataFetchers': !exists(json, 'MetadataFetchers') ? undefined : (json['MetadataFetchers'] === null ? null : (json['MetadataFetchers'] as Array<any>).map(LibraryOptionInfoDtoFromJSON)),
        'imageFetchers': !exists(json, 'ImageFetchers') ? undefined : (json['ImageFetchers'] === null ? null : (json['ImageFetchers'] as Array<any>).map(LibraryOptionInfoDtoFromJSON)),
        'supportedImageTypes': !exists(json, 'SupportedImageTypes') ? undefined : (json['SupportedImageTypes'] === null ? null : (json['SupportedImageTypes'] as Array<any>).map(ImageTypeFromJSON)),
        'defaultImageOptions': !exists(json, 'DefaultImageOptions') ? undefined : (json['DefaultImageOptions'] === null ? null : (json['DefaultImageOptions'] as Array<any>).map(ImageOptionFromJSON)),
    };
}

export function LibraryTypeOptionsDtoToJSON(value?: LibraryTypeOptionsDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Type': value.type,
        'MetadataFetchers': value.metadataFetchers === undefined ? undefined : (value.metadataFetchers === null ? null : (value.metadataFetchers as Array<any>).map(LibraryOptionInfoDtoToJSON)),
        'ImageFetchers': value.imageFetchers === undefined ? undefined : (value.imageFetchers === null ? null : (value.imageFetchers as Array<any>).map(LibraryOptionInfoDtoToJSON)),
        'SupportedImageTypes': value.supportedImageTypes === undefined ? undefined : (value.supportedImageTypes === null ? null : (value.supportedImageTypes as Array<any>).map(ImageTypeToJSON)),
        'DefaultImageOptions': value.defaultImageOptions === undefined ? undefined : (value.defaultImageOptions === null ? null : (value.defaultImageOptions as Array<any>).map(ImageOptionToJSON)),
    };
}

