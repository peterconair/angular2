import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customspipe'
})
export class CustomspipePipe implements PipeTransform {

  transform(value: string, args: string): string {
    return args + value.toLowerCase();
  }
}
