import { Component } from '@angular/core';
import { Book } from '../book';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {
  book: Book = new Book();
  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.bookService.createBook(this.book).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  
  onSubmit(){
    console.log(this.book);
    this.saveEmployee();
  }
}


