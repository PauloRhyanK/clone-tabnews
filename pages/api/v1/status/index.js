import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date();
  const psVersionResult = await database.query("SHOW SERVER_VERSION;");
  let dataBaseQuery = request.query.database??"local_db"
  const psConn = await database.query('SELECT COUNT(*)::int as conn_active FROM pg_stat_activity WHERE datname = $1',[dataBaseQuery]);
  const psConnMax = await database.query("SELECT setting::int FROM pg_settings WHERE name = 'max_connections';");
  const psVersion = psVersionResult.rows[0].server_version;
  const connMax = psConnMax.rows[0].setting;
  const connInUse = psConn.rows[0].conn_active;
  const connOpen = connMax - connInUse;
  
  response.status(200).json({
   updated_at: updatedAt,  
   database: {
    database_version: psVersion,
    conn_max: connMax,
    conn_open: connOpen,
    conn_in_use: connInUse,
   },
  });
}

export default status;
