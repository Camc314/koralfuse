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
    ImageSavingConvention,
    ImageSavingConventionFromJSON,
    ImageSavingConventionFromJSONTyped,
    ImageSavingConventionToJSON,
    MetadataOptions,
    MetadataOptionsFromJSON,
    MetadataOptionsFromJSONTyped,
    MetadataOptionsToJSON,
    NameValuePair,
    NameValuePairFromJSON,
    NameValuePairFromJSONTyped,
    NameValuePairToJSON,
    PathSubstitution,
    PathSubstitutionFromJSON,
    PathSubstitutionFromJSONTyped,
    PathSubstitutionToJSON,
    RepositoryInfo,
    RepositoryInfoFromJSON,
    RepositoryInfoFromJSONTyped,
    RepositoryInfoToJSON,
    Version,
    VersionFromJSON,
    VersionFromJSONTyped,
    VersionToJSON,
} from './';

/**
 * Represents the server configuration.
 * @export
 * @interface ServerConfiguration
 */
export interface ServerConfiguration {
    /**
     * Gets or sets the number of days we should retain log files.
     * @type {number}
     * @memberof ServerConfiguration
     */
    logFileRetentionDays?: number;
    /**
     * Gets or sets a value indicating whether this instance is first run.
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    isStartupWizardCompleted?: boolean;
    /**
     * Gets or sets the cache path.
     * @type {string}
     * @memberof ServerConfiguration
     */
    cachePath?: string | null;
    /**
     * 
     * @type {Version}
     * @memberof ServerConfiguration
     */
    previousVersion?: Version;
    /**
     * Gets or sets the stringified PreviousVersion to be stored/loaded,
     * because System.Version itself isn't xml-serializable.
     * @type {string}
     * @memberof ServerConfiguration
     */
    previousVersionStr?: string | null;
    /**
     * Gets or sets a value indicating whether to enable automatic port forwarding.
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    enableUPnP?: boolean;
    /**
     * Gets or sets a value indicating whether to enable prometheus metrics exporting.
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    enableMetrics?: boolean;
    /**
     * Gets or sets the public mapped port.
     * @type {number}
     * @memberof ServerConfiguration
     */
    publicPort?: number;
    /**
     * Gets or sets the public HTTPS port.
     * @type {number}
     * @memberof ServerConfiguration
     */
    publicHttpsPort?: number;
    /**
     * Gets or sets the HTTP server port number.
     * @type {number}
     * @memberof ServerConfiguration
     */
    httpServerPortNumber?: number;
    /**
     * Gets or sets the HTTPS server port number.
     * @type {number}
     * @memberof ServerConfiguration
     */
    httpsPortNumber?: number;
    /**
     * Gets or sets a value indicating whether to use HTTPS.
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    enableHttps?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    enableNormalizedItemByNameIds?: boolean;
    /**
     * Gets or sets the filesystem path of an X.509 certificate to use for SSL.
     * @type {string}
     * @memberof ServerConfiguration
     */
    certificatePath?: string | null;
    /**
     * Gets or sets the password required to access the X.509 certificate data in the file specified by MediaBrowser.Model.Configuration.ServerConfiguration.CertificatePath.
     * @type {string}
     * @memberof ServerConfiguration
     */
    certificatePassword?: string | null;
    /**
     * Gets or sets a value indicating whether this instance is port authorized.
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    isPortAuthorized?: boolean;
    /**
     * Gets or sets if quick connect is available for use on this server.
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    quickConnectAvailable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    enableRemoteAccess?: boolean;
    /**
     * Gets or sets a value indicating whether [enable case sensitive item ids].
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    enableCaseSensitiveItemIds?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    disableLiveTvChannelUserDataName?: boolean;
    /**
     * Gets or sets the metadata path.
     * @type {string}
     * @memberof ServerConfiguration
     */
    metadataPath?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ServerConfiguration
     */
    metadataNetworkPath?: string | null;
    /**
     * Gets or sets the preferred metadata language.
     * @type {string}
     * @memberof ServerConfiguration
     */
    preferredMetadataLanguage?: string | null;
    /**
     * Gets or sets the metadata country code.
     * @type {string}
     * @memberof ServerConfiguration
     */
    metadataCountryCode?: string | null;
    /**
     * Characters to be replaced with a ' ' in strings to create a sort name.
     * @type {Array<string>}
     * @memberof ServerConfiguration
     */
    sortReplaceCharacters?: Array<string> | null;
    /**
     * Characters to be removed from strings to create a sort name.
     * @type {Array<string>}
     * @memberof ServerConfiguration
     */
    sortRemoveCharacters?: Array<string> | null;
    /**
     * Words to be removed from strings to create a sort name.
     * @type {Array<string>}
     * @memberof ServerConfiguration
     */
    sortRemoveWords?: Array<string> | null;
    /**
     * Gets or sets the minimum percentage of an item that must be played in order for playstate to be updated.
     * @type {number}
     * @memberof ServerConfiguration
     */
    minResumePct?: number;
    /**
     * Gets or sets the maximum percentage of an item that can be played while still saving playstate. If this percentage is crossed playstate will be reset to the beginning and the item will be marked watched.
     * @type {number}
     * @memberof ServerConfiguration
     */
    maxResumePct?: number;
    /**
     * Gets or sets the minimum duration that an item must have in order to be eligible for playstate updates..
     * @type {number}
     * @memberof ServerConfiguration
     */
    minResumeDurationSeconds?: number;
    /**
     * The delay in seconds that we will wait after a file system change to try and discover what has been added/removed
     * Some delay is necessary with some items because their creation is not atomic.  It involves the creation of several
     * different directories and files.
     * @type {number}
     * @memberof ServerConfiguration
     */
    libraryMonitorDelay?: number;
    /**
     * Gets or sets a value indicating whether [enable dashboard response caching].
     * Allows potential contributors without visual studio to modify production dashboard code and test changes.
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    enableDashboardResponseCaching?: boolean;
    /**
     * 
     * @type {ImageSavingConvention}
     * @memberof ServerConfiguration
     */
    imageSavingConvention?: ImageSavingConvention;
    /**
     * 
     * @type {Array<MetadataOptions>}
     * @memberof ServerConfiguration
     */
    metadataOptions?: Array<MetadataOptions> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    skipDeserializationForBasicTypes?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ServerConfiguration
     */
    serverName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ServerConfiguration
     */
    baseUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ServerConfiguration
     */
    uICulture?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    saveMetadataHidden?: boolean;
    /**
     * 
     * @type {Array<NameValuePair>}
     * @memberof ServerConfiguration
     */
    contentTypes?: Array<NameValuePair> | null;
    /**
     * 
     * @type {number}
     * @memberof ServerConfiguration
     */
    remoteClientBitrateLimit?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    enableFolderView?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    enableGroupingIntoCollections?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    displaySpecialsWithinSeasons?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ServerConfiguration
     */
    localNetworkSubnets?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ServerConfiguration
     */
    localNetworkAddresses?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ServerConfiguration
     */
    codecsUsed?: Array<string> | null;
    /**
     * 
     * @type {Array<RepositoryInfo>}
     * @memberof ServerConfiguration
     */
    pluginRepositories?: Array<RepositoryInfo> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    ignoreVirtualInterfaces?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    enableExternalContentInSuggestions?: boolean;
    /**
     * Gets or sets a value indicating whether the server should force connections over HTTPS.
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    requireHttps?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    enableNewOmdbSupport?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ServerConfiguration
     */
    remoteIPFilter?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    isRemoteIPFilterBlacklist?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ServerConfiguration
     */
    imageExtractionTimeoutMs?: number;
    /**
     * 
     * @type {Array<PathSubstitution>}
     * @memberof ServerConfiguration
     */
    pathSubstitutions?: Array<PathSubstitution> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    enableSimpleArtistDetection?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ServerConfiguration
     */
    uninstalledPlugins?: Array<string> | null;
    /**
     * Gets or sets a value indicating whether slow server responses should be logged as a warning.
     * @type {boolean}
     * @memberof ServerConfiguration
     */
    enableSlowResponseWarning?: boolean;
    /**
     * Gets or sets the threshold for the slow response time warning in ms.
     * @type {number}
     * @memberof ServerConfiguration
     */
    slowResponseThresholdMs?: number;
    /**
     * Gets or sets the cors hosts.
     * @type {Array<string>}
     * @memberof ServerConfiguration
     */
    corsHosts?: Array<string> | null;
    /**
     * Gets or sets the known proxies.
     * @type {Array<string>}
     * @memberof ServerConfiguration
     */
    knownProxies?: Array<string> | null;
    /**
     * Gets or sets the number of days we should retain activity logs.
     * @type {number}
     * @memberof ServerConfiguration
     */
    activityLogRetentionDays?: number | null;
}

export function ServerConfigurationFromJSON(json: any): ServerConfiguration {
    return ServerConfigurationFromJSONTyped(json, false);
}

export function ServerConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServerConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'logFileRetentionDays': !exists(json, 'LogFileRetentionDays') ? undefined : json['LogFileRetentionDays'],
        'isStartupWizardCompleted': !exists(json, 'IsStartupWizardCompleted') ? undefined : json['IsStartupWizardCompleted'],
        'cachePath': !exists(json, 'CachePath') ? undefined : json['CachePath'],
        'previousVersion': !exists(json, 'PreviousVersion') ? undefined : VersionFromJSON(json['PreviousVersion']),
        'previousVersionStr': !exists(json, 'PreviousVersionStr') ? undefined : json['PreviousVersionStr'],
        'enableUPnP': !exists(json, 'EnableUPnP') ? undefined : json['EnableUPnP'],
        'enableMetrics': !exists(json, 'EnableMetrics') ? undefined : json['EnableMetrics'],
        'publicPort': !exists(json, 'PublicPort') ? undefined : json['PublicPort'],
        'publicHttpsPort': !exists(json, 'PublicHttpsPort') ? undefined : json['PublicHttpsPort'],
        'httpServerPortNumber': !exists(json, 'HttpServerPortNumber') ? undefined : json['HttpServerPortNumber'],
        'httpsPortNumber': !exists(json, 'HttpsPortNumber') ? undefined : json['HttpsPortNumber'],
        'enableHttps': !exists(json, 'EnableHttps') ? undefined : json['EnableHttps'],
        'enableNormalizedItemByNameIds': !exists(json, 'EnableNormalizedItemByNameIds') ? undefined : json['EnableNormalizedItemByNameIds'],
        'certificatePath': !exists(json, 'CertificatePath') ? undefined : json['CertificatePath'],
        'certificatePassword': !exists(json, 'CertificatePassword') ? undefined : json['CertificatePassword'],
        'isPortAuthorized': !exists(json, 'IsPortAuthorized') ? undefined : json['IsPortAuthorized'],
        'quickConnectAvailable': !exists(json, 'QuickConnectAvailable') ? undefined : json['QuickConnectAvailable'],
        'enableRemoteAccess': !exists(json, 'EnableRemoteAccess') ? undefined : json['EnableRemoteAccess'],
        'enableCaseSensitiveItemIds': !exists(json, 'EnableCaseSensitiveItemIds') ? undefined : json['EnableCaseSensitiveItemIds'],
        'disableLiveTvChannelUserDataName': !exists(json, 'DisableLiveTvChannelUserDataName') ? undefined : json['DisableLiveTvChannelUserDataName'],
        'metadataPath': !exists(json, 'MetadataPath') ? undefined : json['MetadataPath'],
        'metadataNetworkPath': !exists(json, 'MetadataNetworkPath') ? undefined : json['MetadataNetworkPath'],
        'preferredMetadataLanguage': !exists(json, 'PreferredMetadataLanguage') ? undefined : json['PreferredMetadataLanguage'],
        'metadataCountryCode': !exists(json, 'MetadataCountryCode') ? undefined : json['MetadataCountryCode'],
        'sortReplaceCharacters': !exists(json, 'SortReplaceCharacters') ? undefined : json['SortReplaceCharacters'],
        'sortRemoveCharacters': !exists(json, 'SortRemoveCharacters') ? undefined : json['SortRemoveCharacters'],
        'sortRemoveWords': !exists(json, 'SortRemoveWords') ? undefined : json['SortRemoveWords'],
        'minResumePct': !exists(json, 'MinResumePct') ? undefined : json['MinResumePct'],
        'maxResumePct': !exists(json, 'MaxResumePct') ? undefined : json['MaxResumePct'],
        'minResumeDurationSeconds': !exists(json, 'MinResumeDurationSeconds') ? undefined : json['MinResumeDurationSeconds'],
        'libraryMonitorDelay': !exists(json, 'LibraryMonitorDelay') ? undefined : json['LibraryMonitorDelay'],
        'enableDashboardResponseCaching': !exists(json, 'EnableDashboardResponseCaching') ? undefined : json['EnableDashboardResponseCaching'],
        'imageSavingConvention': !exists(json, 'ImageSavingConvention') ? undefined : ImageSavingConventionFromJSON(json['ImageSavingConvention']),
        'metadataOptions': !exists(json, 'MetadataOptions') ? undefined : (json['MetadataOptions'] === null ? null : (json['MetadataOptions'] as Array<any>).map(MetadataOptionsFromJSON)),
        'skipDeserializationForBasicTypes': !exists(json, 'SkipDeserializationForBasicTypes') ? undefined : json['SkipDeserializationForBasicTypes'],
        'serverName': !exists(json, 'ServerName') ? undefined : json['ServerName'],
        'baseUrl': !exists(json, 'BaseUrl') ? undefined : json['BaseUrl'],
        'uICulture': !exists(json, 'UICulture') ? undefined : json['UICulture'],
        'saveMetadataHidden': !exists(json, 'SaveMetadataHidden') ? undefined : json['SaveMetadataHidden'],
        'contentTypes': !exists(json, 'ContentTypes') ? undefined : (json['ContentTypes'] === null ? null : (json['ContentTypes'] as Array<any>).map(NameValuePairFromJSON)),
        'remoteClientBitrateLimit': !exists(json, 'RemoteClientBitrateLimit') ? undefined : json['RemoteClientBitrateLimit'],
        'enableFolderView': !exists(json, 'EnableFolderView') ? undefined : json['EnableFolderView'],
        'enableGroupingIntoCollections': !exists(json, 'EnableGroupingIntoCollections') ? undefined : json['EnableGroupingIntoCollections'],
        'displaySpecialsWithinSeasons': !exists(json, 'DisplaySpecialsWithinSeasons') ? undefined : json['DisplaySpecialsWithinSeasons'],
        'localNetworkSubnets': !exists(json, 'LocalNetworkSubnets') ? undefined : json['LocalNetworkSubnets'],
        'localNetworkAddresses': !exists(json, 'LocalNetworkAddresses') ? undefined : json['LocalNetworkAddresses'],
        'codecsUsed': !exists(json, 'CodecsUsed') ? undefined : json['CodecsUsed'],
        'pluginRepositories': !exists(json, 'PluginRepositories') ? undefined : (json['PluginRepositories'] === null ? null : (json['PluginRepositories'] as Array<any>).map(RepositoryInfoFromJSON)),
        'ignoreVirtualInterfaces': !exists(json, 'IgnoreVirtualInterfaces') ? undefined : json['IgnoreVirtualInterfaces'],
        'enableExternalContentInSuggestions': !exists(json, 'EnableExternalContentInSuggestions') ? undefined : json['EnableExternalContentInSuggestions'],
        'requireHttps': !exists(json, 'RequireHttps') ? undefined : json['RequireHttps'],
        'enableNewOmdbSupport': !exists(json, 'EnableNewOmdbSupport') ? undefined : json['EnableNewOmdbSupport'],
        'remoteIPFilter': !exists(json, 'RemoteIPFilter') ? undefined : json['RemoteIPFilter'],
        'isRemoteIPFilterBlacklist': !exists(json, 'IsRemoteIPFilterBlacklist') ? undefined : json['IsRemoteIPFilterBlacklist'],
        'imageExtractionTimeoutMs': !exists(json, 'ImageExtractionTimeoutMs') ? undefined : json['ImageExtractionTimeoutMs'],
        'pathSubstitutions': !exists(json, 'PathSubstitutions') ? undefined : (json['PathSubstitutions'] === null ? null : (json['PathSubstitutions'] as Array<any>).map(PathSubstitutionFromJSON)),
        'enableSimpleArtistDetection': !exists(json, 'EnableSimpleArtistDetection') ? undefined : json['EnableSimpleArtistDetection'],
        'uninstalledPlugins': !exists(json, 'UninstalledPlugins') ? undefined : json['UninstalledPlugins'],
        'enableSlowResponseWarning': !exists(json, 'EnableSlowResponseWarning') ? undefined : json['EnableSlowResponseWarning'],
        'slowResponseThresholdMs': !exists(json, 'SlowResponseThresholdMs') ? undefined : json['SlowResponseThresholdMs'],
        'corsHosts': !exists(json, 'CorsHosts') ? undefined : json['CorsHosts'],
        'knownProxies': !exists(json, 'KnownProxies') ? undefined : json['KnownProxies'],
        'activityLogRetentionDays': !exists(json, 'ActivityLogRetentionDays') ? undefined : json['ActivityLogRetentionDays'],
    };
}

export function ServerConfigurationToJSON(value?: ServerConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'LogFileRetentionDays': value.logFileRetentionDays,
        'IsStartupWizardCompleted': value.isStartupWizardCompleted,
        'CachePath': value.cachePath,
        'PreviousVersion': VersionToJSON(value.previousVersion),
        'PreviousVersionStr': value.previousVersionStr,
        'EnableUPnP': value.enableUPnP,
        'EnableMetrics': value.enableMetrics,
        'PublicPort': value.publicPort,
        'PublicHttpsPort': value.publicHttpsPort,
        'HttpServerPortNumber': value.httpServerPortNumber,
        'HttpsPortNumber': value.httpsPortNumber,
        'EnableHttps': value.enableHttps,
        'EnableNormalizedItemByNameIds': value.enableNormalizedItemByNameIds,
        'CertificatePath': value.certificatePath,
        'CertificatePassword': value.certificatePassword,
        'IsPortAuthorized': value.isPortAuthorized,
        'QuickConnectAvailable': value.quickConnectAvailable,
        'EnableRemoteAccess': value.enableRemoteAccess,
        'EnableCaseSensitiveItemIds': value.enableCaseSensitiveItemIds,
        'DisableLiveTvChannelUserDataName': value.disableLiveTvChannelUserDataName,
        'MetadataPath': value.metadataPath,
        'MetadataNetworkPath': value.metadataNetworkPath,
        'PreferredMetadataLanguage': value.preferredMetadataLanguage,
        'MetadataCountryCode': value.metadataCountryCode,
        'SortReplaceCharacters': value.sortReplaceCharacters,
        'SortRemoveCharacters': value.sortRemoveCharacters,
        'SortRemoveWords': value.sortRemoveWords,
        'MinResumePct': value.minResumePct,
        'MaxResumePct': value.maxResumePct,
        'MinResumeDurationSeconds': value.minResumeDurationSeconds,
        'LibraryMonitorDelay': value.libraryMonitorDelay,
        'EnableDashboardResponseCaching': value.enableDashboardResponseCaching,
        'ImageSavingConvention': ImageSavingConventionToJSON(value.imageSavingConvention),
        'MetadataOptions': value.metadataOptions === undefined ? undefined : (value.metadataOptions === null ? null : (value.metadataOptions as Array<any>).map(MetadataOptionsToJSON)),
        'SkipDeserializationForBasicTypes': value.skipDeserializationForBasicTypes,
        'ServerName': value.serverName,
        'BaseUrl': value.baseUrl,
        'UICulture': value.uICulture,
        'SaveMetadataHidden': value.saveMetadataHidden,
        'ContentTypes': value.contentTypes === undefined ? undefined : (value.contentTypes === null ? null : (value.contentTypes as Array<any>).map(NameValuePairToJSON)),
        'RemoteClientBitrateLimit': value.remoteClientBitrateLimit,
        'EnableFolderView': value.enableFolderView,
        'EnableGroupingIntoCollections': value.enableGroupingIntoCollections,
        'DisplaySpecialsWithinSeasons': value.displaySpecialsWithinSeasons,
        'LocalNetworkSubnets': value.localNetworkSubnets,
        'LocalNetworkAddresses': value.localNetworkAddresses,
        'CodecsUsed': value.codecsUsed,
        'PluginRepositories': value.pluginRepositories === undefined ? undefined : (value.pluginRepositories === null ? null : (value.pluginRepositories as Array<any>).map(RepositoryInfoToJSON)),
        'IgnoreVirtualInterfaces': value.ignoreVirtualInterfaces,
        'EnableExternalContentInSuggestions': value.enableExternalContentInSuggestions,
        'RequireHttps': value.requireHttps,
        'EnableNewOmdbSupport': value.enableNewOmdbSupport,
        'RemoteIPFilter': value.remoteIPFilter,
        'IsRemoteIPFilterBlacklist': value.isRemoteIPFilterBlacklist,
        'ImageExtractionTimeoutMs': value.imageExtractionTimeoutMs,
        'PathSubstitutions': value.pathSubstitutions === undefined ? undefined : (value.pathSubstitutions === null ? null : (value.pathSubstitutions as Array<any>).map(PathSubstitutionToJSON)),
        'EnableSimpleArtistDetection': value.enableSimpleArtistDetection,
        'UninstalledPlugins': value.uninstalledPlugins,
        'EnableSlowResponseWarning': value.enableSlowResponseWarning,
        'SlowResponseThresholdMs': value.slowResponseThresholdMs,
        'CorsHosts': value.corsHosts,
        'KnownProxies': value.knownProxies,
        'ActivityLogRetentionDays': value.activityLogRetentionDays,
    };
}


