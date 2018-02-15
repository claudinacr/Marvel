fetch('http://gateway.marvel.com/v1/public/characters?apikey=fd35aba799605ca550a4c2f9666a6f50&ts=9&hash=62865700f7c07e460304b6c2ceb6bf1a')
  .then(function (response) {
    //Turns the the JSON into a JS object
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    //Sección donde aparecerán los resultados
  });