import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { BoardComponent } from './components/board/board.component';
import { ListComponent } from './components/list/list.component';
import { CategoryTasksPipe } from './pipes/category-tasks.pipe';
import { ParameterizePipe } from './pipes/parameterize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    BoardComponent,
    ListComponent,
    CategoryTasksPipe,
    ParameterizePipe
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
