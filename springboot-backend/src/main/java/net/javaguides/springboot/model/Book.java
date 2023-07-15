package net.javaguides.springboot.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Library")
public class Book {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "bookname")
	private String bookname;

	@Column(name = "description")
	private String description;
	
	@Column(name = "stock")
	private String stock;
	
	public Book() {
		
	}
	
	public Book(String bookname, String description, String stock) {
		super();
		this.bookname = bookname;
		this.description = description;
		this.stock = stock;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getbookname() {
		return bookname;
	}
	public void setbookname(String bookname) {
		this.bookname = bookname;
	}
	public String getdescription() {
		return description;
	}
	public void setdescription(String description) {
		this.description = description;
	}
	public String getstock() {
		return stock;
	}
	public void setstock(String stock) {
		this.stock = stock;
	}
}
