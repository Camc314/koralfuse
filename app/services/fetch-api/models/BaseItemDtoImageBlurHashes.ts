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
    BaseItemPersonImageBlurHashesPrimary,
    BaseItemPersonImageBlurHashesPrimaryFromJSON,
    BaseItemPersonImageBlurHashesPrimaryFromJSONTyped,
    BaseItemPersonImageBlurHashesPrimaryToJSON,
} from './';

/**
 * Gets or sets the blurhashes for the image tags.
 * Maps image type to dictionary mapping image tag to blurhash value.
 * @export
 * @interface BaseItemDtoImageBlurHashes
 */
export interface BaseItemDtoImageBlurHashes {
    /**
     * 
     * @type {BaseItemPersonImageBlurHashesPrimary}
     * @memberof BaseItemDtoImageBlurHashes
     */
    primary?: BaseItemPersonImageBlurHashesPrimary;
    /**
     * 
     * @type {BaseItemPersonImageBlurHashesPrimary}
     * @memberof BaseItemDtoImageBlurHashes
     */
    art?: BaseItemPersonImageBlurHashesPrimary;
    /**
     * 
     * @type {BaseItemPersonImageBlurHashesPrimary}
     * @memberof BaseItemDtoImageBlurHashes
     */
    backdrop?: BaseItemPersonImageBlurHashesPrimary;
    /**
     * 
     * @type {BaseItemPersonImageBlurHashesPrimary}
     * @memberof BaseItemDtoImageBlurHashes
     */
    banner?: BaseItemPersonImageBlurHashesPrimary;
    /**
     * 
     * @type {BaseItemPersonImageBlurHashesPrimary}
     * @memberof BaseItemDtoImageBlurHashes
     */
    logo?: BaseItemPersonImageBlurHashesPrimary;
    /**
     * 
     * @type {BaseItemPersonImageBlurHashesPrimary}
     * @memberof BaseItemDtoImageBlurHashes
     */
    thumb?: BaseItemPersonImageBlurHashesPrimary;
    /**
     * 
     * @type {BaseItemPersonImageBlurHashesPrimary}
     * @memberof BaseItemDtoImageBlurHashes
     */
    disc?: BaseItemPersonImageBlurHashesPrimary;
    /**
     * 
     * @type {BaseItemPersonImageBlurHashesPrimary}
     * @memberof BaseItemDtoImageBlurHashes
     */
    box?: BaseItemPersonImageBlurHashesPrimary;
    /**
     * 
     * @type {BaseItemPersonImageBlurHashesPrimary}
     * @memberof BaseItemDtoImageBlurHashes
     */
    screenshot?: BaseItemPersonImageBlurHashesPrimary;
    /**
     * 
     * @type {BaseItemPersonImageBlurHashesPrimary}
     * @memberof BaseItemDtoImageBlurHashes
     */
    menu?: BaseItemPersonImageBlurHashesPrimary;
    /**
     * 
     * @type {BaseItemPersonImageBlurHashesPrimary}
     * @memberof BaseItemDtoImageBlurHashes
     */
    chapter?: BaseItemPersonImageBlurHashesPrimary;
    /**
     * 
     * @type {BaseItemPersonImageBlurHashesPrimary}
     * @memberof BaseItemDtoImageBlurHashes
     */
    boxRear?: BaseItemPersonImageBlurHashesPrimary;
    /**
     * 
     * @type {BaseItemPersonImageBlurHashesPrimary}
     * @memberof BaseItemDtoImageBlurHashes
     */
    profile?: BaseItemPersonImageBlurHashesPrimary;
}

export function BaseItemDtoImageBlurHashesFromJSON(json: any): BaseItemDtoImageBlurHashes {
    return BaseItemDtoImageBlurHashesFromJSONTyped(json, false);
}

export function BaseItemDtoImageBlurHashesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseItemDtoImageBlurHashes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'primary': !exists(json, 'Primary') ? undefined : BaseItemPersonImageBlurHashesPrimaryFromJSON(json['Primary']),
        'art': !exists(json, 'Art') ? undefined : BaseItemPersonImageBlurHashesPrimaryFromJSON(json['Art']),
        'backdrop': !exists(json, 'Backdrop') ? undefined : BaseItemPersonImageBlurHashesPrimaryFromJSON(json['Backdrop']),
        'banner': !exists(json, 'Banner') ? undefined : BaseItemPersonImageBlurHashesPrimaryFromJSON(json['Banner']),
        'logo': !exists(json, 'Logo') ? undefined : BaseItemPersonImageBlurHashesPrimaryFromJSON(json['Logo']),
        'thumb': !exists(json, 'Thumb') ? undefined : BaseItemPersonImageBlurHashesPrimaryFromJSON(json['Thumb']),
        'disc': !exists(json, 'Disc') ? undefined : BaseItemPersonImageBlurHashesPrimaryFromJSON(json['Disc']),
        'box': !exists(json, 'Box') ? undefined : BaseItemPersonImageBlurHashesPrimaryFromJSON(json['Box']),
        'screenshot': !exists(json, 'Screenshot') ? undefined : BaseItemPersonImageBlurHashesPrimaryFromJSON(json['Screenshot']),
        'menu': !exists(json, 'Menu') ? undefined : BaseItemPersonImageBlurHashesPrimaryFromJSON(json['Menu']),
        'chapter': !exists(json, 'Chapter') ? undefined : BaseItemPersonImageBlurHashesPrimaryFromJSON(json['Chapter']),
        'boxRear': !exists(json, 'BoxRear') ? undefined : BaseItemPersonImageBlurHashesPrimaryFromJSON(json['BoxRear']),
        'profile': !exists(json, 'Profile') ? undefined : BaseItemPersonImageBlurHashesPrimaryFromJSON(json['Profile']),
    };
}

export function BaseItemDtoImageBlurHashesToJSON(value?: BaseItemDtoImageBlurHashes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Primary': BaseItemPersonImageBlurHashesPrimaryToJSON(value.primary),
        'Art': BaseItemPersonImageBlurHashesPrimaryToJSON(value.art),
        'Backdrop': BaseItemPersonImageBlurHashesPrimaryToJSON(value.backdrop),
        'Banner': BaseItemPersonImageBlurHashesPrimaryToJSON(value.banner),
        'Logo': BaseItemPersonImageBlurHashesPrimaryToJSON(value.logo),
        'Thumb': BaseItemPersonImageBlurHashesPrimaryToJSON(value.thumb),
        'Disc': BaseItemPersonImageBlurHashesPrimaryToJSON(value.disc),
        'Box': BaseItemPersonImageBlurHashesPrimaryToJSON(value.box),
        'Screenshot': BaseItemPersonImageBlurHashesPrimaryToJSON(value.screenshot),
        'Menu': BaseItemPersonImageBlurHashesPrimaryToJSON(value.menu),
        'Chapter': BaseItemPersonImageBlurHashesPrimaryToJSON(value.chapter),
        'BoxRear': BaseItemPersonImageBlurHashesPrimaryToJSON(value.boxRear),
        'Profile': BaseItemPersonImageBlurHashesPrimaryToJSON(value.profile),
    };
}


