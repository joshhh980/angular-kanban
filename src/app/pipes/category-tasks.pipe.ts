import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from '../models/task';

@Pipe({
  name: 'categoryTasks'
})
export class CategoryTasksPipe implements PipeTransform {

  transform(value: ITask[], ...args: string[]): ITask[] {
    return value.filter(task => task.category == args[0]);
  }

}
