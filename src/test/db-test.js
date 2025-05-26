
import mysql from 'mysql2/promise';

const getDBConnection = async () => {
    return await mysql.createConnection({
        host: '115.187.18.73',
        user: 'nazrulra_novena',
        password: 'm1m2m3m412345',
        database: 'nazrulra_novena',
    });
};

async function testConnection() {
    try {
        const conn = await getDBConnection();
        const [rows] = await conn.execute('SELECT 1');
        console.log('✅ DB Connected Successfully');
        console.log(rows);
        await conn.end();
    } catch (error) {
        console.error('❌ DB Connection Failed');
        console.error(error.message);
    }
}

testConnection();
