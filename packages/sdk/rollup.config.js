import { generateSDKConfig } from '@vue-storefront/rollup-config';
import package_ from './package.json' assert { type: 'json' };

export default [generateSDKConfig(package_)];
