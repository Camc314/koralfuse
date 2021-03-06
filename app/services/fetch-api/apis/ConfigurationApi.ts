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


import * as runtime from '../runtime';
import {
    MediaEncoderPathDto,
    MediaEncoderPathDtoFromJSON,
    MediaEncoderPathDtoToJSON,
    MetadataOptions,
    MetadataOptionsFromJSON,
    MetadataOptionsToJSON,
    ServerConfiguration,
    ServerConfigurationFromJSON,
    ServerConfigurationToJSON,
} from '../models';

export interface GetNamedConfigurationRequest {
    key: string;
}

export interface UpdateConfigurationRequest {
    serverConfiguration: ServerConfiguration;
}

export interface UpdateMediaEncoderPathRequest {
    mediaEncoderPathDto: MediaEncoderPathDto;
}

export interface UpdateNamedConfigurationRequest {
    key: string;
}

/**
 * 
 */
export class ConfigurationApi extends runtime.BaseAPI {

    /**
     * Gets application configuration.
     */
    async getConfigurationRaw(): Promise<runtime.ApiResponse<ServerConfiguration>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/System/Configuration`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ServerConfigurationFromJSON(jsonValue));
    }

    /**
     * Gets application configuration.
     */
    async getConfiguration(): Promise<ServerConfiguration> {
        const response = await this.getConfigurationRaw();
        return await response.value();
    }

    /**
     * Gets a default MetadataOptions object.
     */
    async getDefaultMetadataOptionsRaw(): Promise<runtime.ApiResponse<MetadataOptions>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/System/Configuration/MetadataOptions/Default`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetadataOptionsFromJSON(jsonValue));
    }

    /**
     * Gets a default MetadataOptions object.
     */
    async getDefaultMetadataOptions(): Promise<MetadataOptions> {
        const response = await this.getDefaultMetadataOptionsRaw();
        return await response.value();
    }

    /**
     * Gets a named configuration.
     */
    async getNamedConfigurationRaw(requestParameters: GetNamedConfigurationRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.key === null || requestParameters.key === undefined) {
            throw new runtime.RequiredError('key','Required parameter requestParameters.key was null or undefined when calling getNamedConfiguration.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/System/Configuration/{key}`.replace(`{${"key"}}`, encodeURIComponent(String(requestParameters.key))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Gets a named configuration.
     */
    async getNamedConfiguration(requestParameters: GetNamedConfigurationRequest): Promise<any> {
        const response = await this.getNamedConfigurationRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates application configuration.
     */
    async updateConfigurationRaw(requestParameters: UpdateConfigurationRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.serverConfiguration === null || requestParameters.serverConfiguration === undefined) {
            throw new runtime.RequiredError('serverConfiguration','Required parameter requestParameters.serverConfiguration was null or undefined when calling updateConfiguration.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/System/Configuration`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ServerConfigurationToJSON(requestParameters.serverConfiguration),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates application configuration.
     */
    async updateConfiguration(requestParameters: UpdateConfigurationRequest): Promise<void> {
        await this.updateConfigurationRaw(requestParameters);
    }

    /**
     * Updates the path to the media encoder.
     */
    async updateMediaEncoderPathRaw(requestParameters: UpdateMediaEncoderPathRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.mediaEncoderPathDto === null || requestParameters.mediaEncoderPathDto === undefined) {
            throw new runtime.RequiredError('mediaEncoderPathDto','Required parameter requestParameters.mediaEncoderPathDto was null or undefined when calling updateMediaEncoderPath.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/System/MediaEncoder/Path`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MediaEncoderPathDtoToJSON(requestParameters.mediaEncoderPathDto),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates the path to the media encoder.
     */
    async updateMediaEncoderPath(requestParameters: UpdateMediaEncoderPathRequest): Promise<void> {
        await this.updateMediaEncoderPathRaw(requestParameters);
    }

    /**
     * Updates named configuration.
     */
    async updateNamedConfigurationRaw(requestParameters: UpdateNamedConfigurationRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.key === null || requestParameters.key === undefined) {
            throw new runtime.RequiredError('key','Required parameter requestParameters.key was null or undefined when calling updateNamedConfiguration.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/System/Configuration/{key}`.replace(`{${"key"}}`, encodeURIComponent(String(requestParameters.key))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates named configuration.
     */
    async updateNamedConfiguration(requestParameters: UpdateNamedConfigurationRequest): Promise<void> {
        await this.updateNamedConfigurationRaw(requestParameters);
    }

}
