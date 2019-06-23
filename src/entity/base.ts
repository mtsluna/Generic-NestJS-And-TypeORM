import { PrimaryGeneratedColumn } from 'typeorm';

//Declaro la clase como entidad a persistir
export class Base{

  //Id autogenerado que sera extendido
  // @ts-ignore
  @PrimaryGeneratedColumn({name: "id"})
  private _id:number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
