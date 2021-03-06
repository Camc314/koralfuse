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
    ClientCapabilities,
    ClientCapabilitiesFromJSON,
    ClientCapabilitiesFromJSONTyped,
    ClientCapabilitiesToJSON,
} from './';

/**
 * 
 * @export
 * @interface DeviceInfo
 */
export interface DeviceInfo {
    /**
     * 
     * @type {string}
     * @memberof DeviceInfo
     */
    name?: string | null;
    /**
     * Gets or sets the identifier.
     * @type {string}
     * @memberof DeviceInfo
     */
    id?: string | null;
    /**
     * Gets or sets the last name of the user.
     * @type {string}
     * @memberof DeviceInfo
     */
    lastUserName?: string | null;
    /**
     * Gets or sets the name of the application.
     * @type {string}
     * @memberof DeviceInfo
     */
    appName?: string | null;
    /**
     * Gets or sets the application version.
     * @type {string}
     * @memberof DeviceInfo
     */
    appVersion?: string | null;
    /**
     * Gets or sets the last user identifier.
     * @type {string}
     * @memberof DeviceInfo
     */
    lastUserId?: string;
    /**
     * Gets or sets the date last modified.
     * @type {Date}
     * @memberof DeviceInfo
     */
    dateLastActivity?: Date;
    /**
     * 
     * @type {ClientCapabilities}
     * @memberof DeviceInfo
     */
    capabilities?: ClientCapabilities;
    /**
     * 
     * @type {string}
     * @memberof DeviceInfo
     */
    iconUrl?: string | null;
}

export function DeviceInfoFromJSON(json: any): DeviceInfo {
    return DeviceInfoFromJSONTyped(json, false);
}

export function DeviceInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'id': !exists(json, 'Id') ? undefined : json['Id'],
        'lastUserName': !exists(json, 'LastUserName') ? undefined : json['LastUserName'],
        'appName': !exists(json, 'AppName') ? undefined : json['AppName'],
        'appVersion': !exists(json, 'AppVersion') ? undefined : json['AppVersion'],
        'lastUserId': !exists(json, 'LastUserId') ? undefined : json['LastUserId'],
        'dateLastActivity': !exists(json, 'DateLastActivity') ? undefined : (new Date(json['DateLastActivity'])),
        'capabilities': !exists(json, 'Capabilities') ? undefined : ClientCapabilitiesFromJSON(json['Capabilities']),
        'iconUrl': !exists(json, 'IconUrl') ? undefined : json['IconUrl'],
    };
}

export function DeviceInfoToJSON(value?: DeviceInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': value.name,
        'Id': value.id,
        'LastUserName': value.lastUserName,
        'AppName': value.appName,
        'AppVersion': value.appVersion,
        'LastUserId': value.lastUserId,
        'DateLastActivity': value.dateLastActivity === undefined ? undefined : (value.dateLastActivity.toISOString()),
        'Capabilities': ClientCapabilitiesToJSON(value.capabilities),
        'IconUrl': value.iconUrl,
    };
}


