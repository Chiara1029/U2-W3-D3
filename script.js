//Realizzare una pagina "libreria" contenente libri derivanti da una chiamata HTTP di tipo GET.
//endpoint: https://striveschool-api.herokuapp.com/books

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
          col.className = "col-sm-12 col-md-6 col-lg-2 mb-2 gx-4";

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
          bookPrice.innerText = book.price;

          const scartaBtn = document.createElement("button");
          scartaBtn.className = "btn btn-primary";
          scartaBtn.innerText = "Scarta";

          cardBody.appendChild(cardTitle);
          cardBody.appendChild(bookPrice);
          cardBody.appendChild(scartaBtn);
          card.appendChild(img);
          card.appendChild(cardBody);
          col.appendChild(card);
          row.appendChild(col);
        }
      });
    })
    .catch((error) => console.log(error));
};

//REQUISITI DELLA PAGINA
//3) Sempre nel "card-body" inserisci un pulsante "scarta", se premuto dovrà far scomparire la card dalla pagina

//EXTRA
//1) Crea una lista che rappresenti il carrello del negozio e inseriscila dove vuoi nella pagina.
//   Aggiungi un altro pulsante "compra ora" vicino a "scarta" nelle card per aggiungere il libro al carrello.
//   Il carrello dovrà persistere nello storage del browser
//2) Aggiungi vicino ad ogni libro del carrello un pulsante per rimuoverlo dal carrello.
