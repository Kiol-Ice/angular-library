export class Book {
  author: string;
  country: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number

  constructor(author: string, country: string, language: string, link: string, pages: number, title: string, year: number){
    this.author = author;
    this.country = country;
    this.language = language;
    this.link = link;
    this.pages = pages;
    this.title = title;
    this.year = year;
  }
}
