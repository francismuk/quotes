import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    const today: any = new Date(); // get current date and time
    const dateDifference = Math.abs(value - today ); // returns value in milliseconds
    const secondsInAnHour = 3600; // 60 seconds*60 minutes in an hour

    const dateDifferenceSeconds = dateDifference * 0.001; // converts to seconds

    const dateCounter = Math.round(dateDifferenceSeconds / secondsInAnHour);

    if (dateCounter >= 1) {
      return dateCounter;
    } else {
      return 0;
    }
  }

}
