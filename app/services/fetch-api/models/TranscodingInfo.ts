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
    TranscodeReason,
    TranscodeReasonFromJSON,
    TranscodeReasonFromJSONTyped,
    TranscodeReasonToJSON,
} from './';

/**
 * 
 * @export
 * @interface TranscodingInfo
 */
export interface TranscodingInfo {
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    audioCodec?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    videoCodec?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    container?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TranscodingInfo
     */
    isVideoDirect?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TranscodingInfo
     */
    isAudioDirect?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    bitrate?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    framerate?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    completionPercentage?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    width?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    height?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    audioChannels?: number | null;
    /**
     * 
     * @type {Array<TranscodeReason>}
     * @memberof TranscodingInfo
     */
    transcodeReasons?: Array<TranscodeReason> | null;
}

export function TranscodingInfoFromJSON(json: any): TranscodingInfo {
    return TranscodingInfoFromJSONTyped(json, false);
}

export function TranscodingInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranscodingInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'audioCodec': !exists(json, 'AudioCodec') ? undefined : json['AudioCodec'],
        'videoCodec': !exists(json, 'VideoCodec') ? undefined : json['VideoCodec'],
        'container': !exists(json, 'Container') ? undefined : json['Container'],
        'isVideoDirect': !exists(json, 'IsVideoDirect') ? undefined : json['IsVideoDirect'],
        'isAudioDirect': !exists(json, 'IsAudioDirect') ? undefined : json['IsAudioDirect'],
        'bitrate': !exists(json, 'Bitrate') ? undefined : json['Bitrate'],
        'framerate': !exists(json, 'Framerate') ? undefined : json['Framerate'],
        'completionPercentage': !exists(json, 'CompletionPercentage') ? undefined : json['CompletionPercentage'],
        'width': !exists(json, 'Width') ? undefined : json['Width'],
        'height': !exists(json, 'Height') ? undefined : json['Height'],
        'audioChannels': !exists(json, 'AudioChannels') ? undefined : json['AudioChannels'],
        'transcodeReasons': !exists(json, 'TranscodeReasons') ? undefined : (json['TranscodeReasons'] === null ? null : (json['TranscodeReasons'] as Array<any>).map(TranscodeReasonFromJSON)),
    };
}

export function TranscodingInfoToJSON(value?: TranscodingInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'AudioCodec': value.audioCodec,
        'VideoCodec': value.videoCodec,
        'Container': value.container,
        'IsVideoDirect': value.isVideoDirect,
        'IsAudioDirect': value.isAudioDirect,
        'Bitrate': value.bitrate,
        'Framerate': value.framerate,
        'CompletionPercentage': value.completionPercentage,
        'Width': value.width,
        'Height': value.height,
        'AudioChannels': value.audioChannels,
        'TranscodeReasons': value.transcodeReasons === undefined ? undefined : (value.transcodeReasons === null ? null : (value.transcodeReasons as Array<any>).map(TranscodeReasonToJSON)),
    };
}

