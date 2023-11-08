window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      return response.json();
    })
    .then((booksObj) => {
      console.log(booksObj);
      booksObj.forEach((book) => {
        if (book.title) {
          const row = document.getElementById("bookshelf");
          const col = document.createElement("div");
          col.className = "col-sm-12 col-md-6 col-lg-2 g-4";

          const card = document.createElement("div");
          card.className = "card";
          const img = document.createElement("img");
          img.className = "card-img-top w-100 object-fit-cover rounded shadow-sm";
          img.style.height = "300px";
          img.src = book.img;

          const cardBody = document.createElement("div");
          cardBody.className = "card-body";

          const cardTitle = document.createElement("h5");
          cardTitle.className = "card-title";
          cardTitle.innerText = book.title;

          const bookPrice = document.createElement("p");
          bookPrice.innerText = book.price + " $";

          const discardBtn = document.createElement("button");
          discardBtn.className = "btn btn-primary";
          discardBtn.innerText = "Scarta";

          const buyNow = document.createElement("button");
          buyNow.className = "btn btn-success m-1";
          buyNow.innerText = "Compra Ora";

          cardBody.appendChild(cardTitle);
          cardBody.appendChild(bookPrice);
          cardBody.appendChild(discardBtn);
          cardBody.appendChild(buyNow);
          card.appendChild(img);
          card.appendChild(cardBody);
          col.appendChild(card);
          row.appendChild(col);

          discardBtn.addEventListener("click", function () {
            card.remove();
          });
          buyNow.addEventListener("click", function () {
            const cart = document.getElementById("cartList");
            const cartElement = document.createElement("li");
            cartElement.innerText = book.title + " " + book.price;

            const removeBook = document.createElement("button");
            removeBook.className = "btn btn-danger m-1";
            removeBook.innerText = "Remove";

            cartElement.appendChild(removeBook);
            cart.appendChild(cartElement);

            localStorage.setItem(book.title, book.price);

            removeBook.addEventListener("click", function () {
              cartElement.remove();
              localStorage.removeItem(book.title, book.price);
            });
          });
        }
      });
    })
    .catch((error) => console.log(error));
};
