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
    BaseItem,
    BaseItemFromJSON,
    BaseItemFromJSONTyped,
    BaseItemToJSON,
    BaseItemDto,
    BaseItemDtoFromJSON,
    BaseItemDtoFromJSONTyped,
    BaseItemDtoToJSON,
    ClientCapabilities,
    ClientCapabilitiesFromJSON,
    ClientCapabilitiesFromJSONTyped,
    ClientCapabilitiesToJSON,
    GeneralCommandType,
    GeneralCommandTypeFromJSON,
    GeneralCommandTypeFromJSONTyped,
    GeneralCommandTypeToJSON,
    PlayerStateInfo,
    PlayerStateInfoFromJSON,
    PlayerStateInfoFromJSONTyped,
    PlayerStateInfoToJSON,
    QueueItem,
    QueueItemFromJSON,
    QueueItemFromJSONTyped,
    QueueItemToJSON,
    SessionUserInfo,
    SessionUserInfoFromJSON,
    SessionUserInfoFromJSONTyped,
    SessionUserInfoToJSON,
    TranscodingInfo,
    TranscodingInfoFromJSON,
    TranscodingInfoFromJSONTyped,
    TranscodingInfoToJSON,
} from './';

/**
 * Class SessionInfo.
 * @export
 * @interface SessionInfo
 */
export interface SessionInfo {
    /**
     * 
     * @type {PlayerStateInfo}
     * @memberof SessionInfo
     */
    playState?: PlayerStateInfo;
    /**
     * 
     * @type {Array<SessionUserInfo>}
     * @memberof SessionInfo
     */
    additionalUsers?: Array<SessionUserInfo> | null;
    /**
     * 
     * @type {ClientCapabilities}
     * @memberof SessionInfo
     */
    capabilities?: ClientCapabilities;
    /**
     * Gets or sets the remote end point.
     * @type {string}
     * @memberof SessionInfo
     */
    remoteEndPoint?: string | null;
    /**
     * Gets or sets the playable media types.
     * @type {Array<string>}
     * @memberof SessionInfo
     */
    readonly playableMediaTypes?: Array<string> | null;
    /**
     * Gets or sets the id.
     * @type {string}
     * @memberof SessionInfo
     */
    id?: string | null;
    /**
     * Gets or sets the user id.
     * @type {string}
     * @memberof SessionInfo
     */
    userId?: string;
    /**
     * Gets or sets the username.
     * @type {string}
     * @memberof SessionInfo
     */
    userName?: string | null;
    /**
     * Gets or sets the type of the client.
     * @type {string}
     * @memberof SessionInfo
     */
    client?: string | null;
    /**
     * Gets or sets the last activity date.
     * @type {Date}
     * @memberof SessionInfo
     */
    lastActivityDate?: Date;
    /**
     * Gets or sets the last playback check in.
     * @type {Date}
     * @memberof SessionInfo
     */
    lastPlaybackCheckIn?: Date;
    /**
     * Gets or sets the name of the device.
     * @type {string}
     * @memberof SessionInfo
     */
    deviceName?: string | null;
    /**
     * Gets or sets the type of the device.
     * @type {string}
     * @memberof SessionInfo
     */
    deviceType?: string | null;
    /**
     * 
     * @type {BaseItemDto}
     * @memberof SessionInfo
     */
    nowPlayingItem?: BaseItemDto;
    /**
     * 
     * @type {BaseItem}
     * @memberof SessionInfo
     */
    fullNowPlayingItem?: BaseItem;
    /**
     * 
     * @type {BaseItemDto}
     * @memberof SessionInfo
     */
    nowViewingItem?: BaseItemDto;
    /**
     * Gets or sets the device id.
     * @type {string}
     * @memberof SessionInfo
     */
    deviceId?: string | null;
    /**
     * Gets or sets the application version.
     * @type {string}
     * @memberof SessionInfo
     */
    applicationVersion?: string | null;
    /**
     * 
     * @type {TranscodingInfo}
     * @memberof SessionInfo
     */
    transcodingInfo?: TranscodingInfo;
    /**
     * Gets a value indicating whether this instance is active.
     * @type {boolean}
     * @memberof SessionInfo
     */
    readonly isActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SessionInfo
     */
    readonly supportsMediaControl?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SessionInfo
     */
    readonly supportsRemoteControl?: boolean;
    /**
     * 
     * @type {Array<QueueItem>}
     * @memberof SessionInfo
     */
    nowPlayingQueue?: Array<QueueItem> | null;
    /**
     * 
     * @type {boolean}
     * @memberof SessionInfo
     */
    hasCustomDeviceName?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SessionInfo
     */
    playlistItemId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SessionInfo
     */
    serverId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SessionInfo
     */
    userPrimaryImageTag?: string | null;
    /**
     * Gets or sets the supported commands.
     * @type {Array<GeneralCommandType>}
     * @memberof SessionInfo
     */
    readonly supportedCommands?: Array<GeneralCommandType> | null;
}

export function SessionInfoFromJSON(json: any): SessionInfo {
    return SessionInfoFromJSONTyped(json, false);
}

export function SessionInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'playState': !exists(json, 'PlayState') ? undefined : PlayerStateInfoFromJSON(json['PlayState']),
        'additionalUsers': !exists(json, 'AdditionalUsers') ? undefined : (json['AdditionalUsers'] === null ? null : (json['AdditionalUsers'] as Array<any>).map(SessionUserInfoFromJSON)),
        'capabilities': !exists(json, 'Capabilities') ? undefined : ClientCapabilitiesFromJSON(json['Capabilities']),
        'remoteEndPoint': !exists(json, 'RemoteEndPoint') ? undefined : json['RemoteEndPoint'],
        'playableMediaTypes': !exists(json, 'PlayableMediaTypes') ? undefined : json['PlayableMediaTypes'],
        'id': !exists(json, 'Id') ? undefined : json['Id'],
        'userId': !exists(json, 'UserId') ? undefined : json['UserId'],
        'userName': !exists(json, 'UserName') ? undefined : json['UserName'],
        'client': !exists(json, 'Client') ? undefined : json['Client'],
        'lastActivityDate': !exists(json, 'LastActivityDate') ? undefined : (new Date(json['LastActivityDate'])),
        'lastPlaybackCheckIn': !exists(json, 'LastPlaybackCheckIn') ? undefined : (new Date(json['LastPlaybackCheckIn'])),
        'deviceName': !exists(json, 'DeviceName') ? undefined : json['DeviceName'],
        'deviceType': !exists(json, 'DeviceType') ? undefined : json['DeviceType'],
        'nowPlayingItem': !exists(json, 'NowPlayingItem') ? undefined : BaseItemDtoFromJSON(json['NowPlayingItem']),
        'fullNowPlayingItem': !exists(json, 'FullNowPlayingItem') ? undefined : BaseItemFromJSON(json['FullNowPlayingItem']),
        'nowViewingItem': !exists(json, 'NowViewingItem') ? undefined : BaseItemDtoFromJSON(json['NowViewingItem']),
        'deviceId': !exists(json, 'DeviceId') ? undefined : json['DeviceId'],
        'applicationVersion': !exists(json, 'ApplicationVersion') ? undefined : json['ApplicationVersion'],
        'transcodingInfo': !exists(json, 'TranscodingInfo') ? undefined : TranscodingInfoFromJSON(json['TranscodingInfo']),
        'isActive': !exists(json, 'IsActive') ? undefined : json['IsActive'],
        'supportsMediaControl': !exists(json, 'SupportsMediaControl') ? undefined : json['SupportsMediaControl'],
        'supportsRemoteControl': !exists(json, 'SupportsRemoteControl') ? undefined : json['SupportsRemoteControl'],
        'nowPlayingQueue': !exists(json, 'NowPlayingQueue') ? undefined : (json['NowPlayingQueue'] === null ? null : (json['NowPlayingQueue'] as Array<any>).map(QueueItemFromJSON)),
        'hasCustomDeviceName': !exists(json, 'HasCustomDeviceName') ? undefined : json['HasCustomDeviceName'],
        'playlistItemId': !exists(json, 'PlaylistItemId') ? undefined : json['PlaylistItemId'],
        'serverId': !exists(json, 'ServerId') ? undefined : json['ServerId'],
        'userPrimaryImageTag': !exists(json, 'UserPrimaryImageTag') ? undefined : json['UserPrimaryImageTag'],
        'supportedCommands': !exists(json, 'SupportedCommands') ? undefined : (json['SupportedCommands'] === null ? null : (json['SupportedCommands'] as Array<any>).map(GeneralCommandTypeFromJSON)),
    };
}

export function SessionInfoToJSON(value?: SessionInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'PlayState': PlayerStateInfoToJSON(value.playState),
        'AdditionalUsers': value.additionalUsers === undefined ? undefined : (value.additionalUsers === null ? null : (value.additionalUsers as Array<any>).map(SessionUserInfoToJSON)),
        'Capabilities': ClientCapabilitiesToJSON(value.capabilities),
        'RemoteEndPoint': value.remoteEndPoint,
        'Id': value.id,
        'UserId': value.userId,
        'UserName': value.userName,
        'Client': value.client,
        'LastActivityDate': value.lastActivityDate === undefined ? undefined : (value.lastActivityDate.toISOString()),
        'LastPlaybackCheckIn': value.lastPlaybackCheckIn === undefined ? undefined : (value.lastPlaybackCheckIn.toISOString()),
        'DeviceName': value.deviceName,
        'DeviceType': value.deviceType,
        'NowPlayingItem': BaseItemDtoToJSON(value.nowPlayingItem),
        'FullNowPlayingItem': BaseItemToJSON(value.fullNowPlayingItem),
        'NowViewingItem': BaseItemDtoToJSON(value.nowViewingItem),
        'DeviceId': value.deviceId,
        'ApplicationVersion': value.applicationVersion,
        'TranscodingInfo': TranscodingInfoToJSON(value.transcodingInfo),
        'NowPlayingQueue': value.nowPlayingQueue === undefined ? undefined : (value.nowPlayingQueue === null ? null : (value.nowPlayingQueue as Array<any>).map(QueueItemToJSON)),
        'HasCustomDeviceName': value.hasCustomDeviceName,
        'PlaylistItemId': value.playlistItemId,
        'ServerId': value.serverId,
        'UserPrimaryImageTag': value.userPrimaryImageTag,
    };
}


