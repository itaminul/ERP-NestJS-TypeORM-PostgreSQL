import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Employee } from "./employee.entity";

@Entity()
export class EmployeeType {
  static employees(
    arg0: () => any,
    employees: any,
    arg2: { nullable: true }
  ): (target: Employee, propertyKey: "empType") => void {
    throw new Error("Method not implemented.");
  }
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  empTypeName: string;
  @Column({ nullable: true })
  empTypeDes: string;
  @Column({ nullable: true })
  orgId: number;
  @Column({ nullable: true })
  serialNo: number;
  @Column({ default: true })
  isActive: boolean;
  @Column({ nullable: true })
  createdBy: number;
  @CreateDateColumn({ type: "timestamptz", nullable: true })
  createdAt: Date;
  @UpdateDateColumn({ type: "timestamptz", nullable: true })
  updatedDate: string;
  @Column({ nullable: true })
  updatedTime: string;
  @UpdateDateColumn({ type: "timestamptz", nullable: true })
  updatedAt: Date;
  @Column({ nullable: true })
  updatedBy: number;
  @OneToMany(() => Employee, (employee) => employee.bloodGroupId)
  employees: Employee[];
  @OneToMany(() => Employee, (employee) => employee.empType)
  empType: Employee[];
}
