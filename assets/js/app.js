fetch('http://gateway.marvel.com/v1/public/comics?apikey=fd35aba799605ca550a4c2f9666a6f50&ts=9&hash=62865700f7c07e460304b6c2ceb6bf1a')
  .then(function (response) {
    //Turns the the JSON into a JS object
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    for (let i = 0; i < data.data.results.length; i++) {
      //console.log(i);
      //console.log(data.data.results[i].comics);
      let path = data.data.results[0].thumbnail.path;
      //console.log(data.data.results[0].thumbnail.path);
      let extension = data.data.results[0].thumbnail.extension;
      console.log(path + '.' + extension);
      let image = document.createElement('img');
      image.className = 'imagen';
      let imagen = path + '.' + extension;
      image.setAttribute('src', imagen);
      let imagenes = document.querySelector('.imagen');
      imagenes.appendChild(image);
      let title = data.data.results[i].title;
      
      console.log(title);

    }

  });