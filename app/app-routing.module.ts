import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { BooksListComponent } from './books-list/books-list.component';
import { UpdateBookComponent } from './update-book/update-book.component';
const routes: Routes = [
  {path: 'books', component: CreateBookComponent},
  {path: 'books-list', component: BooksListComponent},
  {path: 'update-book/:id', component:UpdateBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
