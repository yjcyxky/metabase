import { Database } from "metabase-types/api";

export interface DatabaseEntity extends Database {
  fetchIdfields: () => void;
}
