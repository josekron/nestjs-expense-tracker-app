import { Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

const config: Options = {
  type: 'postgresql',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  dbName: 'postgres',
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
};

export default config;
