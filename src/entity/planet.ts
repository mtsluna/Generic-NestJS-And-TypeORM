import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './base';

@Entity({name: "api_planet"})
export class Planet extends Base {

  @Column({name: "planet_name"})
  private _name:string;

  @Column({name: "planet_size"})
  private _size:number;

  constructor(){
    super();
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

}
