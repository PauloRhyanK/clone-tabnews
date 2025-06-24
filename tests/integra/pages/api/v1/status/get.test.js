test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
  
  const responseBody = await response.json();
  console.log(responseBody)
  expect(responseBody.updated_at).toBeDefined();
  expect(responseBody.database).toBeDefined();
  expect(responseBody.database.database_version).toBeDefined();
  expect(responseBody.database.conn_max).toEqual(100);
  expect(responseBody.database.conn_in_use).toEqual(1);
  expect(responseBody.database.conn_open).toBeDefined();

  const responseDate = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(responseDate)
});
