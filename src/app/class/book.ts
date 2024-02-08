export class Book {
  id: number;
  author: string;
  country: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number

  constructor(id: number, author: string, country: string, language: string, link: string, pages: number, title: string, year: number){
    this.id = id;
    this.author = author;
    this.country = country;
    this.language = language;
    this.link = link;
    this.pages = pages;
    this.title = title;
    this.year = year;
  }
}
