import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  password: 'admin',
  host: 'localhost',
  database: 'firstapi',
  port: 5432,
});
