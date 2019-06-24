import { Column, Entity, JoinColumn, OneToOne, ManyToOne } from 'typeorm';
import { Base } from './base';
import { Star } from './star';

//Se determina que la clase es una entidad
// {name: 'xxx'} -> Parametros
//  ^ Nombre de la clase
@Entity({name: "api_planet"})
//Cabecera de la clase
export class Planet extends Base {

  //Anotación que determina a la columna (Opcional)
  // {name: 'xxx'} -> parametros
  //  ^ Nombre del atributo en la tabla
  @Column({name: "planet_name"})
  private name:string;

  @Column({name: "planet_size"})
  private size:number;

  //Anotacion que determina que un objeto de A contiene una relacion con uno de B
  //type => Star determina el objeto asociado
  @ManyToOne(type => Star, {cascade: true, eager: true})
  //Anotación que determina la columna que actua de clave foranea
  // {name: 'xxx'} -> parametros
  //  ^ Nombre de la columna
  @JoinColumn({name: "planet_fk_star"})
  private star:Star;

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

  getStar(): Star {
    return this.star;
  }

  setStar(value: Star) {
    this.star = value;
  }

}
