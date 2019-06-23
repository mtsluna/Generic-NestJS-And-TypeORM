import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './base';
import { Star } from './star';

@Entity({name: "api_planet"})
export class Planet extends Base {

  @Column({name: "planet_name"})
  private _name:string;

  @Column({name: "planet_size"})
  private _size:number;

  @OneToOne(type => Star)
  @JoinColumn({name: "planet_fk_star"})
  private star:Star;

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
