export interface IBaseService<T> {

  findAll():Promise<T[]>;
  findOne(id:string):Promise<T>;
  update(id:string, entity: T): Promise<T>;
  save(entity: T):Promise<T>;
  delete(id:string);

}
