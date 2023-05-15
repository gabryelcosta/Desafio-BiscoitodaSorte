const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const clickOnCookie = document.querySelector(".closedCookie")
const btnTry = document.querySelector ('.btnTry')

const phrases = [
  'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Não há que ser forte. Há que ser flexível.',
  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
  'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
  'A juventude não é uma época da vida, é um estado de espírito.',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
  'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
  'Siga os bons e aprenda com eles.',
  'Não importa o tamanho da montanha, ela não pode tapar o sol.',
  'O bom-senso vale mais do que muito conhecimento.',
  'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
  'O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.',
  'Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram o seu trabalho.',
  'O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência.',
  'Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.',
  'O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.',
  'Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.',
  'A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.',
  'Motivação não é sinónimo de transformação, mas um passo em sua direção.',
  'O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade.',
];

let randomPhrase = document.querySelector('.randomPhrase')
let generateRandomPhrase

clickOnCookie.addEventListener('click', generatePhrase)
document.addEventListener('keydown', pressEnterKey)

function generatePhrase(){
  toggleScreen()

  generateRandomPhrase = Math.floor(Math.random()*(phrases.length))
  randomPhrase.innerText = phrases[generateRandomPhrase]
}

function buttonTry(event){
  event.preventDefault()
  toggleScreen()
}

function toggleScreen() {
  screenOne.classList.toggle("hide")
  screenTwo.classList.toggle("hide")
}

function pressEnterKey(e){
  if(e.key == 'Enter' && screenOne.classList.contains('hide')){
    toggleScreen()
  }
}