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
    TaskCompletionStatus,
    TaskCompletionStatusFromJSON,
    TaskCompletionStatusFromJSONTyped,
    TaskCompletionStatusToJSON,
} from './';

/**
 * Class TaskExecutionInfo.
 * @export
 * @interface TaskResult
 */
export interface TaskResult {
    /**
     * Gets or sets the start time UTC.
     * @type {Date}
     * @memberof TaskResult
     */
    startTimeUtc?: Date;
    /**
     * Gets or sets the end time UTC.
     * @type {Date}
     * @memberof TaskResult
     */
    endTimeUtc?: Date;
    /**
     * 
     * @type {TaskCompletionStatus}
     * @memberof TaskResult
     */
    status?: TaskCompletionStatus;
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof TaskResult
     */
    name?: string | null;
    /**
     * Gets or sets the key.
     * @type {string}
     * @memberof TaskResult
     */
    key?: string | null;
    /**
     * Gets or sets the id.
     * @type {string}
     * @memberof TaskResult
     */
    id?: string | null;
    /**
     * Gets or sets the error message.
     * @type {string}
     * @memberof TaskResult
     */
    errorMessage?: string | null;
    /**
     * Gets or sets the long error message.
     * @type {string}
     * @memberof TaskResult
     */
    longErrorMessage?: string | null;
}

export function TaskResultFromJSON(json: any): TaskResult {
    return TaskResultFromJSONTyped(json, false);
}

export function TaskResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startTimeUtc': !exists(json, 'StartTimeUtc') ? undefined : (new Date(json['StartTimeUtc'])),
        'endTimeUtc': !exists(json, 'EndTimeUtc') ? undefined : (new Date(json['EndTimeUtc'])),
        'status': !exists(json, 'Status') ? undefined : TaskCompletionStatusFromJSON(json['Status']),
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'key': !exists(json, 'Key') ? undefined : json['Key'],
        'id': !exists(json, 'Id') ? undefined : json['Id'],
        'errorMessage': !exists(json, 'ErrorMessage') ? undefined : json['ErrorMessage'],
        'longErrorMessage': !exists(json, 'LongErrorMessage') ? undefined : json['LongErrorMessage'],
    };
}

export function TaskResultToJSON(value?: TaskResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'StartTimeUtc': value.startTimeUtc === undefined ? undefined : (value.startTimeUtc.toISOString()),
        'EndTimeUtc': value.endTimeUtc === undefined ? undefined : (value.endTimeUtc.toISOString()),
        'Status': TaskCompletionStatusToJSON(value.status),
        'Name': value.name,
        'Key': value.key,
        'Id': value.id,
        'ErrorMessage': value.errorMessage,
        'LongErrorMessage': value.longErrorMessage,
    };
}

