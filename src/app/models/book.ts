export class Book {
    Title?: string
    Author?: string
    Format?: string
    ISBN?: string
    Rating?: string
    Price?: number
    OldPrice?: number
    Image?: string
    CatID?: string
    BookID?: string
    Status?: string
    Position?: number
    Description?: string
    Year?: string

    makeBook(template: Book) {
        this.Title = template.Title
        this.Author = template.Author
        this.Format = template.Format
        this.ISBN = template.ISBN
        this.Rating = template.Rating
        this.Price = template.Price
        this.OldPrice = template.OldPrice
        this.Image = template.Image
        this.CatID = template.CatID
        this.BookID = template.BookID
        this.Position = template.Position
        this.Status = template.Status
        this.Description = template.Description
        this.Year = template.Year
        return this
    }
}
