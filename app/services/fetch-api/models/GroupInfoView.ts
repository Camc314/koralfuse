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
 * Class GroupInfoView.
 * @export
 * @interface GroupInfoView
 */
export interface GroupInfoView {
    /**
     * Gets or sets the group identifier.
     * @type {string}
     * @memberof GroupInfoView
     */
    groupId?: string | null;
    /**
     * Gets or sets the playing item id.
     * @type {string}
     * @memberof GroupInfoView
     */
    playingItemId?: string | null;
    /**
     * Gets or sets the playing item name.
     * @type {string}
     * @memberof GroupInfoView
     */
    playingItemName?: string | null;
    /**
     * Gets or sets the position ticks.
     * @type {number}
     * @memberof GroupInfoView
     */
    positionTicks?: number;
    /**
     * Gets or sets the participants.
     * @type {Array<string>}
     * @memberof GroupInfoView
     */
    participants?: Array<string> | null;
}

export function GroupInfoViewFromJSON(json: any): GroupInfoView {
    return GroupInfoViewFromJSONTyped(json, false);
}

export function GroupInfoViewFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupInfoView {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'groupId': !exists(json, 'GroupId') ? undefined : json['GroupId'],
        'playingItemId': !exists(json, 'PlayingItemId') ? undefined : json['PlayingItemId'],
        'playingItemName': !exists(json, 'PlayingItemName') ? undefined : json['PlayingItemName'],
        'positionTicks': !exists(json, 'PositionTicks') ? undefined : json['PositionTicks'],
        'participants': !exists(json, 'Participants') ? undefined : json['Participants'],
    };
}

export function GroupInfoViewToJSON(value?: GroupInfoView | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'GroupId': value.groupId,
        'PlayingItemId': value.playingItemId,
        'PlayingItemName': value.playingItemName,
        'PositionTicks': value.positionTicks,
        'Participants': value.participants,
    };
}


