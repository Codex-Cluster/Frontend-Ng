import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeDate'
})
export class MakeDatePipe implements PipeTransform {

  transform(datetime: string): unknown {
    
    let date:any
    try{
       date = datetime.split(' ')[0].split('-')
    }
    catch{
      date = datetime.split('-')
    }
    
    let day:number = Number(date[0])
    let month:number = Number(date[1])
    let year:number = Number(date[2])

    let months:string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let suffixes = ['th', 'st', 'th', 'rd', 'th', 'th', 'th', 'th', 'th', 'th']
    return day.toString() + suffixes[day%10] + ' ' + months[month] + ', ' + year ;
  }

}
