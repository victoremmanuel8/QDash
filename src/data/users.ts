export interface User {
  id: number
  nome: string
  idade: number
  preferencias: {
    cor: string
    comida: string
    hobby: string
  }
}

export const users: User[] = [
  {
    id: 1,
    nome: "João Silva",
    idade: 28,
    preferencias: {
      cor: "Azul",
      comida: "Pizza",
      hobby: "Futebol"
    }
  },
  {
    id: 2,
    nome: "Maria Santos",
    idade: 32,
    preferencias: {
      cor: "Rosa",
      comida: "Sushi",
      hobby: "Dança"
    }
  },
  {
    id: 3,
    nome: "Pedro Oliveira",
    idade: 25,
    preferencias: {
      cor: "Verde",
      comida: "Hambúrguer",
      hobby: "Música"
    }
  }
] 