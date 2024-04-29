import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateWithEllipsis',
  standalone: true,
})
export class TruncateWithEllipsisPipe implements PipeTransform {
  transform(value: string, ...args: number[]): string {
    const maxString = args[0];

    if (value.length > maxString) {
      return value.substring(0, maxString) + '...';
    }
    return value;
  }
}
