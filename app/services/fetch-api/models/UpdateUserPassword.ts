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
 * The update user password request body.
 * @export
 * @interface UpdateUserPassword
 */
export interface UpdateUserPassword {
    /**
     * Gets or sets the current sha1-hashed password.
     * @type {string}
     * @memberof UpdateUserPassword
     */
    currentPassword?: string | null;
    /**
     * Gets or sets the current plain text password.
     * @type {string}
     * @memberof UpdateUserPassword
     */
    currentPw?: string | null;
    /**
     * Gets or sets the new plain text password.
     * @type {string}
     * @memberof UpdateUserPassword
     */
    newPw?: string | null;
    /**
     * Gets or sets a value indicating whether to reset the password.
     * @type {boolean}
     * @memberof UpdateUserPassword
     */
    resetPassword?: boolean;
}

export function UpdateUserPasswordFromJSON(json: any): UpdateUserPassword {
    return UpdateUserPasswordFromJSONTyped(json, false);
}

export function UpdateUserPasswordFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateUserPassword {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currentPassword': !exists(json, 'CurrentPassword') ? undefined : json['CurrentPassword'],
        'currentPw': !exists(json, 'CurrentPw') ? undefined : json['CurrentPw'],
        'newPw': !exists(json, 'NewPw') ? undefined : json['NewPw'],
        'resetPassword': !exists(json, 'ResetPassword') ? undefined : json['ResetPassword'],
    };
}

export function UpdateUserPasswordToJSON(value?: UpdateUserPassword | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'CurrentPassword': value.currentPassword,
        'CurrentPw': value.currentPw,
        'NewPw': value.newPw,
        'ResetPassword': value.resetPassword,
    };
}

