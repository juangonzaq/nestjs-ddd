import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Lead extends Model<Lead> {
  @Column latitud: string;
  @Column longitud: string;
  @Column code: string;
}