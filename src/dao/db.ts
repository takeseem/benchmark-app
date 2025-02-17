import 'server-only';
import * as pg from 'pg';

const connectionString = process.env.DATABASE_URL!;
console.log(`Connecting to ${connectionString}`);

const url = URL.parse(process.env.DATABASE_URL!)!;
const ssl = {
  ca: url.searchParams.get('sslrootcert')!,
  key: url.searchParams.get('sslkey')!,
  cert: url.searchParams.get('sslcert')!,
};
console.log(`SSL: ${JSON.stringify(ssl)}`);
export const pool = new pg.Pool({
  connectionString,
  ssl: ssl,
});