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
    CountryInfo,
    CountryInfoFromJSON,
    CountryInfoToJSON,
    CultureDto,
    CultureDtoFromJSON,
    CultureDtoToJSON,
    LocalizationOption,
    LocalizationOptionFromJSON,
    LocalizationOptionToJSON,
    ParentalRating,
    ParentalRatingFromJSON,
    ParentalRatingToJSON,
} from '../models';

/**
 * 
 */
export class LocalizationApi extends runtime.BaseAPI {

    /**
     * Gets known countries.
     */
    async getCountriesRaw(): Promise<runtime.ApiResponse<Array<CountryInfo>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Localization/Countries`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CountryInfoFromJSON));
    }

    /**
     * Gets known countries.
     */
    async getCountries(): Promise<Array<CountryInfo>> {
        const response = await this.getCountriesRaw();
        return await response.value();
    }

    /**
     * Gets known cultures.
     */
    async getCulturesRaw(): Promise<runtime.ApiResponse<Array<CultureDto>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Localization/Cultures`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CultureDtoFromJSON));
    }

    /**
     * Gets known cultures.
     */
    async getCultures(): Promise<Array<CultureDto>> {
        const response = await this.getCulturesRaw();
        return await response.value();
    }

    /**
     * Gets localization options.
     */
    async getLocalizationOptionsRaw(): Promise<runtime.ApiResponse<Array<LocalizationOption>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Localization/Options`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LocalizationOptionFromJSON));
    }

    /**
     * Gets localization options.
     */
    async getLocalizationOptions(): Promise<Array<LocalizationOption>> {
        const response = await this.getLocalizationOptionsRaw();
        return await response.value();
    }

    /**
     * Gets known parental ratings.
     */
    async getParentalRatingsRaw(): Promise<runtime.ApiResponse<Array<ParentalRating>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Localization/ParentalRatings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ParentalRatingFromJSON));
    }

    /**
     * Gets known parental ratings.
     */
    async getParentalRatings(): Promise<Array<ParentalRating>> {
        const response = await this.getParentalRatingsRaw();
        return await response.value();
    }

}
