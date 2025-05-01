export interface Quiz {
  id: number
  titulo: string
  nivel: 'basico' | 'intermediario' | 'avancado'
  tema: 'matematica' | 'historia' | 'geografia' | 'fisica'
  questoes: Questao[]
}

export interface Questao {
  id: number
  pergunta: string
  opcoes: string[]
  respostaCorreta: number
}

export const quizzes: Quiz[] = [
  // Matemática
  {
    id: 1,
    titulo: 'Matemática Básica',
    nivel: 'basico',
    tema: 'matematica',
    questoes: [
      { id: 1, pergunta: 'Quanto é 2 + 2?', opcoes: ['3', '4', '5', '6'], respostaCorreta: 1 },
      { id: 2, pergunta: 'Qual é o resultado de 5 x 5?', opcoes: ['20', '25', '30', '35'], respostaCorreta: 1 },
      { id: 3, pergunta: 'Quanto é 10 - 7?', opcoes: ['2', '3', '4', '5'], respostaCorreta: 1 },
      { id: 4, pergunta: 'Qual é o dobro de 6?', opcoes: ['10', '12', '14', '16'], respostaCorreta: 1 },
      { id: 5, pergunta: 'Quanto é 9 + 1?', opcoes: ['8', '9', '10', '11'], respostaCorreta: 2 },
    ],
  },
  {
    id: 2,
    titulo: 'Matemática Intermediária',
    nivel: 'intermediario',
    tema: 'matematica',
    questoes: [
      { id: 1, pergunta: 'Qual é o valor de 12 ÷ 3?', opcoes: ['2', '3', '4', '5'], respostaCorreta: 2 },
      { id: 2, pergunta: 'Quanto é 7 x 8?', opcoes: ['54', '56', '58', '60'], respostaCorreta: 1 },
      { id: 3, pergunta: 'Qual é o resultado de 15 + 27?', opcoes: ['32', '42', '52', '62'], respostaCorreta: 1 },
      { id: 4, pergunta: 'Quanto é 100 ÷ 4?', opcoes: ['20', '25', '30', '40'], respostaCorreta: 1 },
      { id: 5, pergunta: 'Qual é o triplo de 9?', opcoes: ['18', '21', '27', '36'], respostaCorreta: 1 },
    ],
  },
  {
    id: 3,
    titulo: 'Matemática Avançada',
    nivel: 'avancado',
    tema: 'matematica',
    questoes: [
      { id: 1, pergunta: 'Qual é a raiz quadrada de 81?', opcoes: ['7', '8', '9', '10'], respostaCorreta: 2 },
      { id: 2, pergunta: 'O valor de π (pi) é aproximadamente:', opcoes: ['2,14', '3,14', '4,14', '5,14'], respostaCorreta: 1 },
      { id: 3, pergunta: 'Quanto é 2³?', opcoes: ['6', '8', '9', '12'], respostaCorreta: 1 },
      { id: 4, pergunta: 'Qual é o logaritmo de 100 na base 10?', opcoes: ['1', '2', '10', '100'], respostaCorreta: 1 },
      { id: 5, pergunta: 'Qual é o valor de sen(90°)?', opcoes: ['0', '0,5', '1', '2'], respostaCorreta: 2 },
    ],
  },
  // História
  {
    id: 4,
    titulo: 'História Básica',
    nivel: 'basico',
    tema: 'historia',
    questoes: [
      { id: 1, pergunta: 'Quem descobriu o Brasil?', opcoes: ['Pedro Álvares Cabral', 'Cristóvão Colombo', 'Vasco da Gama', 'Dom Pedro II'], respostaCorreta: 0 },
      { id: 2, pergunta: 'Em que ano o Brasil foi descoberto?', opcoes: ['1492', '1500', '1502', '1504'], respostaCorreta: 1 },
      { id: 3, pergunta: 'Qual era o nome da capital do Brasil em 1808?', opcoes: ['Brasília', 'Rio de Janeiro', 'Salvador', 'São Paulo'], respostaCorreta: 2 },
      { id: 4, pergunta: 'Quem foi o primeiro imperador do Brasil?', opcoes: ['Dom Pedro I', 'Dom Pedro II', 'Deodoro da Fonseca', 'Getúlio Vargas'], respostaCorreta: 0 },
      { id: 5, pergunta: 'O que foi o descobrimento do Brasil?', opcoes: ['Chegada dos portugueses', 'Independência', 'Proclamação da República', 'Abolição da escravatura'], respostaCorreta: 0 },
    ],
  },
  {
    id: 5,
    titulo: 'História Intermediária',
    nivel: 'intermediario',
    tema: 'historia',
    questoes: [
      { id: 1, pergunta: 'Quem foi o primeiro presidente do Brasil?', opcoes: ['Dom Pedro I', 'Deodoro da Fonseca', 'Prudente de Morais', 'Floriano Peixoto'], respostaCorreta: 1 },
      { id: 2, pergunta: 'A independência do Brasil foi proclamada em:', opcoes: ['1820', '1822', '1824', '1826'], respostaCorreta: 1 },
      { id: 3, pergunta: 'Quem assinou a Lei Áurea?', opcoes: ['Princesa Isabel', 'Dom Pedro II', 'Getúlio Vargas', 'Juscelino Kubitschek'], respostaCorreta: 0 },
      { id: 4, pergunta: 'O que foi a Inconfidência Mineira?', opcoes: ['Movimento abolicionista', 'Movimento separatista', 'Guerra civil', 'Revolução industrial'], respostaCorreta: 1 },
      { id: 5, pergunta: 'Quem foi Tiradentes?', opcoes: ['Imperador', 'Revolucionário', 'Presidente', 'Governador'], respostaCorreta: 1 },
    ],
  },
  {
    id: 6,
    titulo: 'História Avançada',
    nivel: 'avancado',
    tema: 'historia',
    questoes: [
      { id: 1, pergunta: 'O que foi a Revolução Farroupilha?', opcoes: ['Movimento abolicionista', 'Guerra civil no RS', 'Descobrimento do Brasil', 'Proclamação da República'], respostaCorreta: 1 },
      { id: 2, pergunta: 'Quem foi Getúlio Vargas?', opcoes: ['Imperador', 'Presidente', 'Rei', 'Governador'], respostaCorreta: 1 },
      { id: 3, pergunta: 'O que foi o Estado Novo?', opcoes: ['Período democrático', 'Ditadura de Vargas', 'Guerra civil', 'Movimento abolicionista'], respostaCorreta: 1 },
      { id: 4, pergunta: 'Quando ocorreu a Proclamação da República?', opcoes: ['1888', '1889', '1890', '1891'], respostaCorreta: 1 },
      { id: 5, pergunta: 'Quem foi Zumbi dos Palmares?', opcoes: ['Imperador', 'Líder quilombola', 'Presidente', 'Bandeirante'], respostaCorreta: 1 },
    ],
  },
  // Geografia
  {
    id: 7,
    titulo: 'Geografia Básica',
    nivel: 'basico',
    tema: 'geografia',
    questoes: [
      { id: 1, pergunta: 'Qual é o maior continente?', opcoes: ['África', 'Ásia', 'Europa', 'América'], respostaCorreta: 1 },
      { id: 2, pergunta: 'Qual é o maior oceano?', opcoes: ['Atlântico', 'Índico', 'Pacífico', 'Ártico'], respostaCorreta: 2 },
      { id: 3, pergunta: 'Qual é o menor continente?', opcoes: ['Europa', 'Oceania', 'África', 'América'], respostaCorreta: 1 },
      { id: 4, pergunta: 'Qual é o maior país do mundo?', opcoes: ['China', 'Estados Unidos', 'Rússia', 'Canadá'], respostaCorreta: 2 },
      { id: 5, pergunta: 'Qual é o rio mais extenso do mundo?', opcoes: ['Nilo', 'Amazonas', 'Yangtzé', 'Mississipi'], respostaCorreta: 1 },
    ],
  },
  {
    id: 8,
    titulo: 'Geografia Intermediária',
    nivel: 'intermediario',
    tema: 'geografia',
    questoes: [
      { id: 1, pergunta: 'Qual é o país mais populoso do mundo?', opcoes: ['Índia', 'China', 'Estados Unidos', 'Indonésia'], respostaCorreta: 1 },
      { id: 2, pergunta: 'O deserto do Saara está localizado em qual continente?', opcoes: ['África', 'Ásia', 'América', 'Europa'], respostaCorreta: 0 },
      { id: 3, pergunta: 'Qual é a capital da Argentina?', opcoes: ['Buenos Aires', 'Santiago', 'Lima', 'Montevidéu'], respostaCorreta: 0 },
      { id: 4, pergunta: 'Qual é o maior arquipélago do mundo?', opcoes: ['Filipinas', 'Indonésia', 'Japão', 'Maldivas'], respostaCorreta: 1 },
      { id: 5, pergunta: 'Qual é o maior deserto do mundo?', opcoes: ['Saara', 'Gobi', 'Kalahari', 'Atacama'], respostaCorreta: 0 },
    ],
  },
  {
    id: 9,
    titulo: 'Geografia Avançada',
    nivel: 'avancado',
    tema: 'geografia',
    questoes: [
      { id: 1, pergunta: 'Qual é a capital da Austrália?', opcoes: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'], respostaCorreta: 2 },
      { id: 2, pergunta: 'O rio Nilo deságua em qual mar?', opcoes: ['Mar Vermelho', 'Mar Mediterrâneo', 'Mar Negro', 'Mar Cáspio'], respostaCorreta: 1 },
      { id: 3, pergunta: 'Qual é o maior lago de água doce do mundo?', opcoes: ['Lago Vitória', 'Lago Superior', 'Lago Baikal', 'Lago Tanganica'], respostaCorreta: 1 },
      { id: 4, pergunta: 'Qual é o ponto mais alto do mundo?', opcoes: ['Everest', 'Aconcágua', 'K2', 'Makalu'], respostaCorreta: 0 },
      { id: 5, pergunta: 'Qual país tem a maior quantidade de ilhas?', opcoes: ['Noruega', 'Canadá', 'Suécia', 'Indonésia'], respostaCorreta: 2 },
    ],
  },
  // Física
  {
    id: 10,
    titulo: 'Física Básica',
    nivel: 'basico',
    tema: 'fisica',
    questoes: [
      { id: 1, pergunta: 'Qual é a unidade de medida da força?', opcoes: ['Joule', 'Watt', 'Newton', 'Pascal'], respostaCorreta: 2 },
      { id: 2, pergunta: 'Quem formulou as leis do movimento?', opcoes: ['Einstein', 'Newton', 'Galileu', 'Tesla'], respostaCorreta: 1 },
      { id: 3, pergunta: 'O que é energia?', opcoes: ['Capacidade de realizar trabalho', 'Força', 'Velocidade', 'Potência'], respostaCorreta: 0 },
      { id: 4, pergunta: 'Qual é a unidade de medida da massa?', opcoes: ['Metro', 'Quilograma', 'Segundo', 'Newton'], respostaCorreta: 1 },
      { id: 5, pergunta: 'O que é gravidade?', opcoes: ['Força que atrai corpos', 'Energia', 'Pressão', 'Temperatura'], respostaCorreta: 0 },
    ],
  },
  {
    id: 11,
    titulo: 'Física Intermediária',
    nivel: 'intermediario',
    tema: 'fisica',
    questoes: [
      { id: 1, pergunta: 'O que é velocidade?', opcoes: ['Distância/Tempo', 'Força x Massa', 'Energia/Potência', 'Trabalho/Tempo'], respostaCorreta: 0 },
      { id: 2, pergunta: 'Qual dessas é uma unidade de energia?', opcoes: ['Newton', 'Joule', 'Watt', 'Pascal'], respostaCorreta: 1 },
      { id: 3, pergunta: 'O que é aceleração?', opcoes: ['Variação da velocidade', 'Força', 'Trabalho', 'Potência'], respostaCorreta: 0 },
      { id: 4, pergunta: 'Qual é a unidade de medida da potência?', opcoes: ['Joule', 'Watt', 'Newton', 'Pascal'], respostaCorreta: 1 },
      { id: 5, pergunta: 'Quem desenvolveu a teoria da gravidade universal?', opcoes: ['Einstein', 'Newton', 'Galileu', 'Tesla'], respostaCorreta: 1 },
    ],
  },
  {
    id: 12,
    titulo: 'Física Avançada',
    nivel: 'avancado',
    tema: 'fisica',
    questoes: [
      { id: 1, pergunta: 'Quem propôs a teoria da relatividade?', opcoes: ['Isaac Newton', 'Albert Einstein', 'Niels Bohr', 'Max Planck'], respostaCorreta: 1 },
      { id: 2, pergunta: 'O que representa a constante ħ (h cortado)?', opcoes: ['Gravidade', 'Constante de Planck reduzida', 'Velocidade da luz', 'Carga do elétron'], respostaCorreta: 1 },
      { id: 3, pergunta: 'O que é um fóton?', opcoes: ['Partícula de luz', 'Partícula de som', 'Partícula de calor', 'Partícula de massa'], respostaCorreta: 0 },
      { id: 4, pergunta: 'Qual é a unidade de medida da frequência?', opcoes: ['Hertz', 'Joule', 'Watt', 'Newton'], respostaCorreta: 0 },
      { id: 5, pergunta: 'O que é efeito fotoelétrico?', opcoes: ['Emissão de elétrons por luz', 'Refração da luz', 'Reflexão da luz', 'Absorção de calor'], respostaCorreta: 0 },
    ],
  },
] 