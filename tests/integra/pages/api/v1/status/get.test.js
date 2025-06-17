test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const reponseBody = await response.json();
  expect(reponseBody.updated_at).toBeDefined();
  expect(reponseBody.database).toBeDefined();
  expect(reponseBody.database.database_version).toBeDefined();
  expect(reponseBody.database.conn_max).toBeDefined();
  expect(reponseBody.database.conn_in_use).toBeDefined();

  const responseDate = new Date(reponseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(responseDate)
});
