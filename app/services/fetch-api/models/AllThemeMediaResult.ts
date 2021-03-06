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
    ThemeMediaResult,
    ThemeMediaResultFromJSON,
    ThemeMediaResultFromJSONTyped,
    ThemeMediaResultToJSON,
} from './';

/**
 * 
 * @export
 * @interface AllThemeMediaResult
 */
export interface AllThemeMediaResult {
    /**
     * 
     * @type {ThemeMediaResult}
     * @memberof AllThemeMediaResult
     */
    themeVideosResult?: ThemeMediaResult;
    /**
     * 
     * @type {ThemeMediaResult}
     * @memberof AllThemeMediaResult
     */
    themeSongsResult?: ThemeMediaResult;
    /**
     * 
     * @type {ThemeMediaResult}
     * @memberof AllThemeMediaResult
     */
    soundtrackSongsResult?: ThemeMediaResult;
}

export function AllThemeMediaResultFromJSON(json: any): AllThemeMediaResult {
    return AllThemeMediaResultFromJSONTyped(json, false);
}

export function AllThemeMediaResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): AllThemeMediaResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'themeVideosResult': !exists(json, 'ThemeVideosResult') ? undefined : ThemeMediaResultFromJSON(json['ThemeVideosResult']),
        'themeSongsResult': !exists(json, 'ThemeSongsResult') ? undefined : ThemeMediaResultFromJSON(json['ThemeSongsResult']),
        'soundtrackSongsResult': !exists(json, 'SoundtrackSongsResult') ? undefined : ThemeMediaResultFromJSON(json['SoundtrackSongsResult']),
    };
}

export function AllThemeMediaResultToJSON(value?: AllThemeMediaResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ThemeVideosResult': ThemeMediaResultToJSON(value.themeVideosResult),
        'ThemeSongsResult': ThemeMediaResultToJSON(value.themeSongsResult),
        'SoundtrackSongsResult': ThemeMediaResultToJSON(value.soundtrackSongsResult),
    };
}


