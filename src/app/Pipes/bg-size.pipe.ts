import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bgSize'
})
export class BgSizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const w =value.toUpperCase()
    return w;
  }

}
