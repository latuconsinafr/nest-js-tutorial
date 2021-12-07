import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  findAll(): Cat[] {
    return this.cats;
  }

  findById(id: number): Cat {
    return this.cats[id];
  }

  create(cat: Cat) {
    this.cats.push(cat);
  }
}
