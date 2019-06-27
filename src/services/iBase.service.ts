export interface IBaseService<T> {

  findAll():Promise<T[]>;
  findOne(id:number):Promise<T>;
  update(id:number, entity: T): Promise<T>;
  save(entity: T):Promise<T>;
  delete(id:number);

}
