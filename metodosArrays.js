const sites = [
  { 
    url: 'www.google.com'
  },
  {
    url:'www.facebook.com'
  },
  { 
    url: 'www.instagram.com'
  },
  {
    url:'www.twitter.com'
  },
]


function adicionarHttp(site) {
  site.url =  'http://' + site.url
}

function filtraUrlCurta(site) {
  const temMenosDeQuinzeCaracteres = site.url.length <= 15
  console.log('filtro', site, temMenosDeQuinzeCaracteres)
  return temMenosDeQuinzeCaracteres
}

function somaArray(acumulador, item) {
  return acumulador + item
}

function adicionaIdioma(site) {
  site.idioma = 'portugues'
}

console.log('antes', sites)

const novoArray = sites.filter(filtraUrlCurta)
novoArray.forEach(adicionaIdioma)

sites.forEach(adicionarHttp)
//const novoArray = sites.map(adicionarHttp)
//const resultado = numeros.reduce(somaArray)
//console.log('resultado', resultado)
console.log('depois', sites)