import { Get, Res, Param, HttpStatus, Post, Body, Put, Delete } from '@nestjs/common';
import { IBaseService } from '../services/iBase.service';

export class BaseController<T> {

  constructor(private readonly _IBaseService: IBaseService<T>) { }

  @Get('/')
  async getAll(@Res() res): Promise<T[]> {
    const results: T[] = await this._IBaseService.findAll();
    return res.status(HttpStatus.FOUND).json(results);
  }

  @Get('/:id')
  async getOne(@Res() res, @Param('id') id): Promise<T> {
    const result: T = await this._IBaseService.findOne(id);
    return res.status(HttpStatus.FOUND).json(result);
  }

  @Post('/')
  async post(@Res() res, @Body() entity: T): Promise<T>{
    const result: T = await this._IBaseService.save(entity);
    return res.status(HttpStatus.CREATED).json(result);
  }

  @Put('/:id')
  async put(@Res() res, @Body() entity:T, @Param('id') id): Promise<T>{
    const result: T = await this._IBaseService.update(id,entity);
    return res.status(HttpStatus.CREATED).json({
      message: 'Registro actualizado'
    });
  }

  @Delete('/:id')
  async delete(@Res() res, @Param('id') id){
    this._IBaseService.delete(id);
    return res.status(HttpStatus.OK).json({
      message: 'Registro eliminado'
    });
  }
}
