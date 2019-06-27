import { Get, Res, Param, HttpStatus, Post, Body, Put, Delete } from '@nestjs/common';
import { IBaseService } from '../services/iBase.service';

export class BaseController<T> {

  constructor(private readonly _IBaseService: IBaseService<T>) { }

  @Get('/')
  async getAll(@Res() res): Promise<T[]> {    

    try {
      
      const results: T[] = await this._IBaseService.findAll();
      return res.status(HttpStatus.FOUND).json(results);

    } catch (error) {
     
      return res.status(HttpStatus.NOT_FOUND).json(
        {
          message: 'Error. Please try again later.'
        }
      );

    }
    
  }

  @Get('/:id')
  async getOne(@Res() res, @Param('id') id): Promise<T> {   
    
    try {
      
      const result: T = await this._IBaseService.findOne(id);
      return res.status(HttpStatus.FOUND).json(result);

    } catch (error) {
      
      return res.status(HttpStatus.NOT_FOUND).json(
        {
          message: 'Error. Please check the ID, and try again later.'
        }
      );

    }

  }

  @Post('/')
  async post(@Res() res, @Body() entity: T): Promise<T>{
    
    try {
      
      const result: T = await this._IBaseService.save(entity);
      return res.status(HttpStatus.CREATED).json(result);

    } catch (error) {
      
      return res.status(HttpStatus.BAD_REQUEST).json(
        {
          message: 'Error. Please check the BODY request, and try again later.'
        }
      );

    }

  }

  @Put('/:id')
  async put(@Res() res, @Body() entity:T, @Param('id') id): Promise<T>{
    
    try {
      
      const result: T = await this._IBaseService.update(id,entity);
      return res.status(HttpStatus.CREATED).json(result);

    } catch (error) {

      return res.status(HttpStatus.BAD_REQUEST).json(
        {
          message: 'Error. Please check the ID or BODY request, and try again later.'
        }
      );

    }

  }

  @Delete('/:id')
  async delete(@Res() res, @Param('id') id){
    
    try {
      
      this._IBaseService.delete(id);
      return res.status(HttpStatus.OK).json();

    } catch (error) {
      
      return res.status(HttpStatus.BAD_REQUEST).json(
        {
          message: 'Error. Please check the ID, and try again later.'
        }
      );

    }

  }
}
