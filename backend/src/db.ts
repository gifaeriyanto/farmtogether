import { dirname, join } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  password: string;
  phone: string;
}

export interface RegisteredData {
  registered?: User[];
}

// Use JSON file for storage
const file = join(__dirname, "data/db.json");
const adapter = new JSONFile<RegisteredData>(file);
const db = new Low(adapter);

export const register = async (body: User) => {
  await db.read();

  if (!db.data) {
    return;
  }

  db.data.registered ||= [];

  const { registered } = db.data;
  registered.push(body);

  await db.write();
};
