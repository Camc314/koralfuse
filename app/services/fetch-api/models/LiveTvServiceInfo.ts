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
    LiveTvServiceStatus,
    LiveTvServiceStatusFromJSON,
    LiveTvServiceStatusFromJSONTyped,
    LiveTvServiceStatusToJSON,
} from './';

/**
 * Class ServiceInfo.
 * @export
 * @interface LiveTvServiceInfo
 */
export interface LiveTvServiceInfo {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof LiveTvServiceInfo
     */
    name?: string | null;
    /**
     * Gets or sets the home page URL.
     * @type {string}
     * @memberof LiveTvServiceInfo
     */
    homePageUrl?: string | null;
    /**
     * 
     * @type {LiveTvServiceStatus}
     * @memberof LiveTvServiceInfo
     */
    status?: LiveTvServiceStatus;
    /**
     * Gets or sets the status message.
     * @type {string}
     * @memberof LiveTvServiceInfo
     */
    statusMessage?: string | null;
    /**
     * Gets or sets the version.
     * @type {string}
     * @memberof LiveTvServiceInfo
     */
    version?: string | null;
    /**
     * Gets or sets a value indicating whether this instance has update available.
     * @type {boolean}
     * @memberof LiveTvServiceInfo
     */
    hasUpdateAvailable?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is visible.
     * @type {boolean}
     * @memberof LiveTvServiceInfo
     */
    isVisible?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof LiveTvServiceInfo
     */
    tuners?: Array<string> | null;
}

export function LiveTvServiceInfoFromJSON(json: any): LiveTvServiceInfo {
    return LiveTvServiceInfoFromJSONTyped(json, false);
}

export function LiveTvServiceInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LiveTvServiceInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'homePageUrl': !exists(json, 'HomePageUrl') ? undefined : json['HomePageUrl'],
        'status': !exists(json, 'Status') ? undefined : LiveTvServiceStatusFromJSON(json['Status']),
        'statusMessage': !exists(json, 'StatusMessage') ? undefined : json['StatusMessage'],
        'version': !exists(json, 'Version') ? undefined : json['Version'],
        'hasUpdateAvailable': !exists(json, 'HasUpdateAvailable') ? undefined : json['HasUpdateAvailable'],
        'isVisible': !exists(json, 'IsVisible') ? undefined : json['IsVisible'],
        'tuners': !exists(json, 'Tuners') ? undefined : json['Tuners'],
    };
}

export function LiveTvServiceInfoToJSON(value?: LiveTvServiceInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': value.name,
        'HomePageUrl': value.homePageUrl,
        'Status': LiveTvServiceStatusToJSON(value.status),
        'StatusMessage': value.statusMessage,
        'Version': value.version,
        'HasUpdateAvailable': value.hasUpdateAvailable,
        'IsVisible': value.isVisible,
        'Tuners': value.tuners,
    };
}


