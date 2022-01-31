import { dirname, join } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";
import { hashPassword } from "./utils.js";
import * as uuid from "uuid";
import _ from "lodash";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export interface User {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  password: string;
  phone: string;
  agree: boolean;
}

export interface RegisteredData {
  registered?: User[];
}

const file = join(__dirname, "data/db.json");
const adapter = new JSONFile<RegisteredData>(file);
const db = new Low(adapter);

const registeredData = (db: Low<RegisteredData>) => {
  if (!db.data) {
    return;
  }

  db.data.registered ||= [];
  return db.data.registered;
};

export const register = async (body: User) => {
  await db.read();
  const registered = registeredData(db);

  body.id = uuid.v4();
  body.password = hashPassword(body.password);
  registered.push(body);

  await db.write();
};

export const checkUserIfExist = async (params: {
  email?: string;
  phone?: string;
}) => {
  await db.read();
  const registered = registeredData(db);

  const isExist = !!_.find(registered, params);
  return isExist;
};
