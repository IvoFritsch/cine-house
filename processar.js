// Sua tarefa agora é criar duas funções.

// A primeira função deverá se chamar adicionarHttp, 
// a mesma, receberá por parâmetro uma URL que será 
// concatenada com a String "http://" no começo da URL e 
// em seguida retornará esse valor. A segunda função se 
// chamará processar  e receberá uma lista de sites web e 
// uma função. A função processar  retornará um array contendo 
// todos os resultados aplicando a função que foi passada.

function adicionarHttp(url) {
  const retorno = 'http://' + url
  return retorno
}

function processar(sites, callback) {
  const retorno = []
  for( let contador = 0; contador < sites.length; contador = contador + 1) {
    const siteAtual = sites[contador]
    const retornoCallback = callback(siteAtual)
    retorno.push(retornoCallback)
  }
  return retorno
}

//console.log(adicionarHttp('www.google.com'))
const sites = [
  'www.google.com',
  'www.facebook.com',
  'www.instagram.com',
  'www.twitter.com',
]

console.log(processar(sites, url => url.toUpperCase()))
console.log(processar(sites, url => url.split('.')))
