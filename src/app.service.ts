import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

getBye(): string {
  return 'nos vemos mostro'
}



  getHello(): string {
    return 'wasaaa!';
  }
}
