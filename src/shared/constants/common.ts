import { ValidationError } from '@nestjs/common';
import { I18nValidationException } from 'nestjs-i18n';
import * as dotenv from 'dotenv';

dotenv.config();
export const SEQUELIZE = 'SEQUELIZE';
export const DEVELOPMENT = 'development';
export const TEST = 'test';
export const PRODUCTION = 'production';
export const REQUEST_ID_TOKEN_HEADER = 'x-request-id';
export const FORWARDED_FOR_TOKEN_HEADER = 'x-forwarded-for';
export const DEMO_PACKAGE_ID = +process.env.DEMO_PACKAGE_ID || 1; // id of the demo package
export const DEFAULT_TOKEN_WALLET = +process.env.DEFAULT_TOKEN_WALLET || 1; // id default token
export const IS_DEV = +process.env.IS_DEV === 1;
export const EXPIRED_TIME = +process.env.EXPRIED_TIME || 3;

export const WALLET_ENCRYPTION_KEY = process.env.WALLET_ENCRYPTION_KEY;
export const API_SERVICE_HOST = process.env.API_SERVICE_HOST;
export const WALLET_CAMPAIGN_ENCRYPTION_KEY = process.env.WALLET_CAMPAIGN_ENCRYPTION_KEY;
export const EXECUTING_WALLET_ENCRYPTION_KEY = process.env.EXECUTING_WALLET_ENCRYPTION_KEY;
export const NATIVE_TOKEN_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
export const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';
export const NATIVE_TOKEN_DECIMALS = 18;
export const LIMIT_TRANSACTION = 50;
export const MAX_RETRIES_TIMES = 5;
export const MIN_GAS_PRICE_WALLET = 0.0005;
export const EMAIL_CONFIG = {
    host: process.env.DB_HOST,
    port: +(process.env.EMAIL_PORT || 465),
    secure: +process.env.EMAIL_SECURE === 1,
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASSWORD,
};

export const WHITE_LIST_IPS = ['::1', '118.70.128.111', '18.140.98.47'];

export const AWS_CONFIG = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_DEFAULT_REGION,
};
export const VALIDATION_PIPE_OPTIONS = {
    transform: true,
    whitelist: true,
    exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new I18nValidationException(validationErrors);
    },
};
