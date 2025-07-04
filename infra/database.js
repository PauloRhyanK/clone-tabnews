import { Client } from "pg";

async function query(queryObject, parameters = []) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  try{
    await client.connect();
    const results = await client.query(queryObject, parameters);
    return results;
  }catch(e){
    console.error(e);
    throw e;
  }finally{
    await client.end();
  }
  
}

export default {
  query: query,
};
