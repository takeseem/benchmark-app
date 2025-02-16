import 'server-only';
import { pool } from './db';

type Test1 = {
  id: number;
  ct: Date;
  ut: Date;
  name: string;
}

export async function getById(id: number): Promise<Test1 | null> {
  const rs = await pool.query('select * from bm_test1 where id = $1', [id]);
  return rs.rows[0] ?? null;
}