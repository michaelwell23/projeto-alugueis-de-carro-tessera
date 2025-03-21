import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

export async function create() {
  const connection = await createConnection("localhost");

  const id = uuidV4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO users (id, name, email, password, "isAdmin", driver_license, created_at) VALUES ('${id}', 'admin', 'admin@tessera.email.com', '${password}', true, 'XDSEDFV34', 'now()')`
  );

  await connection.close;
}

create().then(() => console.log("Admin user created"));
