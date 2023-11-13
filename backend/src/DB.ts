
const mysql = require('mysql2/promise');
let pool: any; // 声明连接池变量
async function createPool() {
  const connectionPool = await mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'cx@58545652',
    database: 'occard',
    connectionLimit: 10
  });
  return connectionPool;
}

async function initialize() {
    pool = await createPool();
    console.log('Connection pool created');
}

module.exports = {
    initialize,
    getPool: () => pool
};
