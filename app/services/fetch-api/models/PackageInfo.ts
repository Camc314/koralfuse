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
    VersionInfo,
    VersionInfoFromJSON,
    VersionInfoFromJSONTyped,
    VersionInfoToJSON,
} from './';

/**
 * Class PackageInfo.
 * @export
 * @interface PackageInfo
 */
export interface PackageInfo {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof PackageInfo
     */
    name?: string | null;
    /**
     * Gets or sets a long description of the plugin containing features or helpful explanations.
     * @type {string}
     * @memberof PackageInfo
     */
    description?: string | null;
    /**
     * Gets or sets a short overview of what the plugin does.
     * @type {string}
     * @memberof PackageInfo
     */
    overview?: string | null;
    /**
     * Gets or sets the owner.
     * @type {string}
     * @memberof PackageInfo
     */
    owner?: string | null;
    /**
     * Gets or sets the category.
     * @type {string}
     * @memberof PackageInfo
     */
    category?: string | null;
    /**
     * The guid of the assembly associated with this plugin.
     * This is used to identify the proper item for automatic updates.
     * @type {string}
     * @memberof PackageInfo
     */
    guid?: string | null;
    /**
     * Gets or sets the versions.
     * @type {Array<VersionInfo>}
     * @memberof PackageInfo
     */
    versions?: Array<VersionInfo> | null;
    /**
     * Gets or sets the repository name.
     * @type {string}
     * @memberof PackageInfo
     */
    repositoryName?: string | null;
    /**
     * Gets or sets the repository url.
     * @type {string}
     * @memberof PackageInfo
     */
    repositoryUrl?: string | null;
}

export function PackageInfoFromJSON(json: any): PackageInfo {
    return PackageInfoFromJSONTyped(json, false);
}

export function PackageInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackageInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'overview': !exists(json, 'overview') ? undefined : json['overview'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'category': !exists(json, 'category') ? undefined : json['category'],
        'guid': !exists(json, 'guid') ? undefined : json['guid'],
        'versions': !exists(json, 'versions') ? undefined : (json['versions'] === null ? null : (json['versions'] as Array<any>).map(VersionInfoFromJSON)),
        'repositoryName': !exists(json, 'repositoryName') ? undefined : json['repositoryName'],
        'repositoryUrl': !exists(json, 'repositoryUrl') ? undefined : json['repositoryUrl'],
    };
}

export function PackageInfoToJSON(value?: PackageInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'overview': value.overview,
        'owner': value.owner,
        'category': value.category,
        'guid': value.guid,
        'versions': value.versions === undefined ? undefined : (value.versions === null ? null : (value.versions as Array<any>).map(VersionInfoToJSON)),
        'repositoryName': value.repositoryName,
        'repositoryUrl': value.repositoryUrl,
    };
}


