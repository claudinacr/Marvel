fetch('http://gateway.marvel.com/v1/public/comics?apikey=fd35aba799605ca550a4c2f9666a6f50&ts=9&hash=62865700f7c07e460304b6c2ceb6bf1a')
  .then(function (response) {
    //Turns the the JSON into a JS object
    return response.json();
  })
  .then(function (data) {
    //  console.log(data.data.results);
    let array = [];
    for (let j = 0; j < marvel.length; j++) {
      array.push(marvel[j].title);
    }
    let imagen = document.querySelector('.imagen');
    for (let i = 0; i < data.data.results.length; i++) {
      let title = data.data.results[i].title;
      if (title === array[i]) {
        
        let box=document.createElement('div');
        box.className = 'box';
        box.setAttribute('data-toggle', 'modal');
        box.setAttribute('data-target', '#miModal');
        //CONTENIDO DEL MODAL
        // TITULO DEL COMICS
        // IMAGEN DEL COMICS

        let image = document.createElement('img');
        image.setAttribute('src', marvel[i].image);
        let boxImage = document.createElement('a');
        boxImage.appendChild(image);
        let boxText = document.createElement('div');
        let text = document.createTextNode(title);
        text.className = 'text';
        let p = document.createElement('p');
        p.appendChild(text);
        boxText.appendChild(p);
        box.appendChild(boxImage);
        box.appendChild(boxText);
        box.setAttribute('name', title);
        imagen.appendChild(box);
        box.addEventListener('click', function (event) {
          let objetivo = event.target.getAttribute('src');
          // console.log(objetivo);
          for (let k = 0; k < marvel.length; k++) {
            if (objetivo === marvel[k].image) {
              let textInfo = marvel.text;

              let myModalLabel = document.querySelector('#myModalLabel');
              myModalLabel.innerHTML = '';
              let titlee = data.data.results[k].title;
              myModalLabel.appendChild(document.createTextNode(titlee));
              let boxImagem = document.createElement('div');
              let Imagem = document.createElement('img');
              Imagem.setAttribute('src', marvel[k].image)
              boxImagem.appendChild(Imagem);
              let modalbody = document.querySelector('.modal-body');
              modalbody.innerHTML = '';
              modalbody.appendChild(boxImagem);
              //  let editor = data.data.results[k];
              //  console.log(editor);
            }
          }
        });



      }

    }

    let formcontrol = document.querySelector('.form-control');
    formcontrol.addEventListener('keyup', function () {
      let valor = formcontrol.value;
      let imagenee = document.querySelector('.imagen');
      let boxx = document.querySelectorAll('.box');
      for (let marvel = 0; marvel < boxx.length; marvel++) {
        let compare = boxx[marvel].getAttribute('name');
        var regex = new RegExp(valor, 'i');
        if (regex.test(compare) === true){
          boxx[marvel].style.display = 'inline';
        } else {
          boxx[marvel].style.display = 'none';
        }
      }
      if (valor === '') {
        location.reload();
      }
    });
  });