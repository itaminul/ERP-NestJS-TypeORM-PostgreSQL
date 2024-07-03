import { DataSource, DataSourceOptions } from "typeorm";
import { Department } from "./entities/department.entity";
import { Employee } from "./entities/employee.entity";
import { Designation } from "./entities/designation.entity";
import { Religion } from "./entities/religion.entity";
import { BloodGroup } from "./entities/bloodgroup.entity";
export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "erpdb",
  password: "123456",
  database: "erp_db1",
  entities: [Department, Employee, Designation, Religion, BloodGroup],
  migrations: ["dist/migrations/*.js"],
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
//    "migration:generate": "npm run build && npm run typeorm -- migration:generate -d ./dist/data-source.js src/migrations/AutoGeneratedMigration",
// npm run typeorm -- migration:generate -d ./dist/data-source.js ./src/migrations/CreateEmployeeAndDepartmentTables
//npm run typeorm -- migration:generate -d ./dist/data-source.js ./src/migrations/CreateEmployeeAndDepartmentTables
// npm run typeorm -- migration:run -d ./data-source.ts
//npm run migration:generate
//npm run migration:run
