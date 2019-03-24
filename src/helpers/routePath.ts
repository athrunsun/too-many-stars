import * as urlUtils from '@app/utils/url';

const routePathProvider = {
    ROOT: urlUtils.createUrlWithoutServerAddress('/'),
    APP: urlUtils.createUrlWithoutServerAddress('/app'),
    ERROR_BOUNDARY_TEST: urlUtils.createUrlWithoutServerAddress('/app/error'),
    DYNAMIC_LOAD_TEST: urlUtils.createUrlWithoutServerAddress('/app/dynamic'),
};

export { routePathProvider };
