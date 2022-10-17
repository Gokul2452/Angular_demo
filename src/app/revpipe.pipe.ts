import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revpipe'
})
export class RevpipePipe implements PipeTransform {
  nvalue: string = '';

  transform(value: any, args?: any): any 
  {
    // this.nvalue = value.toString().split('').reverse().join('');
    // return this.nvalue;
    if(!value)return null;
    if(!args)return null;
    args = args.toLowercase();
    debugger;
    return value.filter(function (item: any){
      return JSON.stringify(item).toLowerCase().includes(args);
    });
  }

}
