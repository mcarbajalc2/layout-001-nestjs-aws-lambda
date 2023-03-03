import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import glob from 'glob';
dotenv.config();

function getClassReferences(files: Array<string>) {
  return files.map((file) => {
    const path = '../../' + file;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const classReference = require(path);
    const key = Object.keys(classReference)[0];
    return classReference[key];
  });
}

const entities = getClassReferences(glob.sync('src/**/*entity.ts'));
console.log("ENTITIES", entities);
const migrations = getClassReferences(
  glob.sync('config/typeorm/migrations/*.ts'),
);

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: entities,
  migrations: migrations,
  migrationsTableName: 'migrations',
});

export default AppDataSource;
