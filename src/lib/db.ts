import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'render',
  password: process.env.DB_PASSWORD || 'renderlike123-',
  database: process.env.DB_NAME || 'renderlike_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function query(sql: string, params?: any[]) {
  const [rows] = await pool.execute(sql, params);
  return rows;
}
