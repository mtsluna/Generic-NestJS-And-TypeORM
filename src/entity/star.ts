import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './base';

@Entity({name: "api_star"})
export class Star extends Base {

  @Column({name: "star_name"})
  private name:string;

  @Column({name: "star_size"})
  private size:number;

  constructor(){
    super();
  }

  getName(): string {
    return this.name;
  }

  setName(value: string) {
    this.name = value;
  }

  getSize(): number {
    return this.size;
  }

  setSize(value: number) {
    this.size = value;
  }

}
