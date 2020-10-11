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
 * Interface IScheduledTaskWorker.
 * @export
 * @interface IScheduledTask
 */
export interface IScheduledTask {
    /**
     * Gets the name of the task.
     * @type {string}
     * @memberof IScheduledTask
     */
    readonly name?: string | null;
    /**
     * Gets the key of the task.
     * @type {string}
     * @memberof IScheduledTask
     */
    readonly key?: string | null;
    /**
     * Gets the description.
     * @type {string}
     * @memberof IScheduledTask
     */
    readonly description?: string | null;
    /**
     * Gets the category.
     * @type {string}
     * @memberof IScheduledTask
     */
    readonly category?: string | null;
}

export function IScheduledTaskFromJSON(json: any): IScheduledTask {
    return IScheduledTaskFromJSONTyped(json, false);
}

export function IScheduledTaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): IScheduledTask {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'key': !exists(json, 'Key') ? undefined : json['Key'],
        'description': !exists(json, 'Description') ? undefined : json['Description'],
        'category': !exists(json, 'Category') ? undefined : json['Category'],
    };
}

export function IScheduledTaskToJSON(value?: IScheduledTask | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

