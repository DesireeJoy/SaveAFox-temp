class Book extends React.Component {

  constructor(bookData) {
      super();
    this._title = this.state.bookData.title;
    this._subtitle = bookData.subtitle;
    this._author = bookData.author;
    this._illust = bookData.illustrator;
    this._image = `./images/` + bookData.link;
    this._alt = bookData.alt;
    this._buy = bookData.buy;
  }
  _getTemplate() {
    const bookElement = document
      .querySelector("#bookTemplate")
      .content.querySelector(".grid__book");
    return bookElement;
  }
    render() {
    this._bookElement = this._getTemplate().cloneNode(true);
    this._bookTitle = this._bookElement.querySelector(".book_title");
    this._bookSubtitle = this._bookElement.querySelector(".book_subtitle");
    this._bookContrib = this._bookElement.querySelector(".book_contrib");
    this._bookImg = this._bookElement.querySelector(".book_image");
    this._bookBuy = this._bookElement.querySelector(".book_buy");

    this._contr = `Written by ${this._author} & Illustrated by ${this._illust}`;
    this._bookTitle.textContent = this._title;
    this._bookSubtitle.textContent = this._subtitle;
    this._bookBuy.href = this._buy;
    this._bookContrib.textContent = this._contr;
    this._bookImg.src = this._image;
    this._bookImg.alt = this._alt;

    return this._bookElement;

    }
}