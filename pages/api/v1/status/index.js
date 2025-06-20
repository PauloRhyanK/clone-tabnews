import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date();
  const psVersionResult = await database.query("SELECT version();");
  const psConn = await database.query("SELECT Count(*) as conn_in_use FROM pg_stat_activity;");
  const psConnMax = await database.query("SELECT * FROM pg_settings WHERE name = 'max_connections';");
  const psVersion = psVersionResult.rows[0].version;
  const connMax = parseInt(psConnMax.rows[0].setting);
  const connInUse = parseInt(psConn.rows[0].conn_in_use);
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
