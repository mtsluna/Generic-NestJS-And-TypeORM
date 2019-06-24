import { PrimaryGeneratedColumn, Column } from 'typeorm';

//Declaro la clase como entidad a persistir
export class Base{

  //Id autogenerado que sera extendido
  // @ts-ignore
  @PrimaryGeneratedColumn({name: "id"})
  private id:number;

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
  }
}
