const cinema = 'Cine House'

const catalogo = require('./database/catalogo.json')

function adicionarFilme(titulo, duracao, atores, anoLancamento, emCartaz) {
  const novoFilme = {
    codigo: catalogo.length, 
    titulo, 
    duracao, 
    atores, 
    anoLancamento, 
    emCartaz
  }
  const novoTamanhoDoCatalogo = catalogo.push(novoFilme)
  console.log('Filme adicionado com sucesso, catálogo agora tem ' + novoTamanhoDoCatalogo + ' filme(s)')
}

function buscarFilme(codigo) {
  for (const i = 0; i < catalogo.length; i++) {
    const filme = catalogo[i]
    if(filme.codigo == codigo) {
      console.log(filme.titulo + ", " + filme.duracao + " horas, ano " + filme.anoLancamento)
      return filme
    }
  }
  console.log('Filme não encontrado')
}

function alterarStatusEmCartaz(codigo) {
  const filmeAlterar = buscarFilme(codigo)
  filmeAlterar.emCartaz = filmeBuscado.emCartaz ? false : true
  console.log('Status em cartaz alterado, novo status: ' + filmeAlterar.emCartaz)
}


function listarTodosOsFilmes() {
  console.log('Lista de todos os filmes:')
  for (const i = 0; i < catalogo.length; i++) {
    const filme = catalogo[i]
    console.log(filme.titulo + ", " + filme.duracao + " horas, ano " + filme.anoLancamento)
  }
}

function listarTodosOsFilmesEmCartaz() {
  console.log('Lista de todos os filmes em cartaz:')
  for (const i = 0; i < catalogo.length; i++) {
    const filme = catalogo[i]
    if(!filme.emCartaz) {
      continue
    }
    console.log(filme.titulo + ", " + filme.duracao + " horas, ano " + filme.anoLancamento)
  }
}

function verificaSeFilmeEdeLongaDuracao(filme) {
  return filme.duracao >= 2
} 

function listarFilmesDeLongaDuracao() {
  const filmesLongaDuracao = catalogo.filter(verificaSeFilmeEdeLongaDuracao)
  console.log(filmesLongaDuracao)

}