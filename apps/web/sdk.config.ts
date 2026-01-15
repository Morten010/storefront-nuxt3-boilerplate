import type { MagentoModuleType } from '@vue-storefront/magento-sdk';

export default defineSdkConfig(({ buildModule, middlewareModule, middlewareUrl, getRequestHeaders }) => ({
  unified: buildModule(middlewareModule<MagentoModuleType>, {
    apiUrl: middlewareUrl + '/commerce',
    defaultRequestConfig: {
      headers: getRequestHeaders(),
    },
  }),
}));
a;
