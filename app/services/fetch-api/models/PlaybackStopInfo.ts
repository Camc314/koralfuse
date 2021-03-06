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
    BaseItemDto,
    BaseItemDtoFromJSON,
    BaseItemDtoFromJSONTyped,
    BaseItemDtoToJSON,
    QueueItem,
    QueueItemFromJSON,
    QueueItemFromJSONTyped,
    QueueItemToJSON,
} from './';

/**
 * Class PlaybackStopInfo.
 * @export
 * @interface PlaybackStopInfo
 */
export interface PlaybackStopInfo {
    /**
     * 
     * @type {BaseItemDto}
     * @memberof PlaybackStopInfo
     */
    item?: BaseItemDto;
    /**
     * Gets or sets the item identifier.
     * @type {string}
     * @memberof PlaybackStopInfo
     */
    itemId?: string;
    /**
     * Gets or sets the session id.
     * @type {string}
     * @memberof PlaybackStopInfo
     */
    sessionId?: string | null;
    /**
     * Gets or sets the media version identifier.
     * @type {string}
     * @memberof PlaybackStopInfo
     */
    mediaSourceId?: string | null;
    /**
     * Gets or sets the position ticks.
     * @type {number}
     * @memberof PlaybackStopInfo
     */
    positionTicks?: number | null;
    /**
     * Gets or sets the live stream identifier.
     * @type {string}
     * @memberof PlaybackStopInfo
     */
    liveStreamId?: string | null;
    /**
     * Gets or sets the play session identifier.
     * @type {string}
     * @memberof PlaybackStopInfo
     */
    playSessionId?: string | null;
    /**
     * Gets or sets a value indicating whether this MediaBrowser.Model.Session.PlaybackStopInfo is failed.
     * @type {boolean}
     * @memberof PlaybackStopInfo
     */
    failed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PlaybackStopInfo
     */
    nextMediaType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PlaybackStopInfo
     */
    playlistItemId?: string | null;
    /**
     * 
     * @type {Array<QueueItem>}
     * @memberof PlaybackStopInfo
     */
    nowPlayingQueue?: Array<QueueItem> | null;
}

export function PlaybackStopInfoFromJSON(json: any): PlaybackStopInfo {
    return PlaybackStopInfoFromJSONTyped(json, false);
}

export function PlaybackStopInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlaybackStopInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'item': !exists(json, 'Item') ? undefined : BaseItemDtoFromJSON(json['Item']),
        'itemId': !exists(json, 'ItemId') ? undefined : json['ItemId'],
        'sessionId': !exists(json, 'SessionId') ? undefined : json['SessionId'],
        'mediaSourceId': !exists(json, 'MediaSourceId') ? undefined : json['MediaSourceId'],
        'positionTicks': !exists(json, 'PositionTicks') ? undefined : json['PositionTicks'],
        'liveStreamId': !exists(json, 'LiveStreamId') ? undefined : json['LiveStreamId'],
        'playSessionId': !exists(json, 'PlaySessionId') ? undefined : json['PlaySessionId'],
        'failed': !exists(json, 'Failed') ? undefined : json['Failed'],
        'nextMediaType': !exists(json, 'NextMediaType') ? undefined : json['NextMediaType'],
        'playlistItemId': !exists(json, 'PlaylistItemId') ? undefined : json['PlaylistItemId'],
        'nowPlayingQueue': !exists(json, 'NowPlayingQueue') ? undefined : (json['NowPlayingQueue'] === null ? null : (json['NowPlayingQueue'] as Array<any>).map(QueueItemFromJSON)),
    };
}

export function PlaybackStopInfoToJSON(value?: PlaybackStopInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Item': BaseItemDtoToJSON(value.item),
        'ItemId': value.itemId,
        'SessionId': value.sessionId,
        'MediaSourceId': value.mediaSourceId,
        'PositionTicks': value.positionTicks,
        'LiveStreamId': value.liveStreamId,
        'PlaySessionId': value.playSessionId,
        'Failed': value.failed,
        'NextMediaType': value.nextMediaType,
        'PlaylistItemId': value.playlistItemId,
        'NowPlayingQueue': value.nowPlayingQueue === undefined ? undefined : (value.nowPlayingQueue === null ? null : (value.nowPlayingQueue as Array<any>).map(QueueItemToJSON)),
    };
}


