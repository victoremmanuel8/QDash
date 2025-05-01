'use client'

import Link from 'next/link'
import styled, { css } from 'styled-components'
import { quizzes } from '../src/data/quizzes'
import { useQuizResults } from '../src/hooks/useQuizResults'
import { FaUserCircle } from 'react-icons/fa'
import { useState } from 'react'

const temas: Record<string, string> = {
  matematica: 'Matemática',
  historia: 'História',
  geografia: 'Geografia',
  fisica: 'Física',
}

const simbolos: Record<string, Record<string, string>> = {
  matematica: {
    basico: '− +',
    intermediario: '÷ ×',
    avancado: '√ π',
  },
  historia: {
    basico: 'ac.',
    intermediario: '火',
    avancado: 'Ω',
  },
  geografia: {
    basico: '🌍',
    intermediario: '🧭',
    avancado: '🗺️',
  },
  fisica: {
    basico: 'F = ma',
    intermediario: 'λ',
    avancado: 'ħ',
  },
}

const niveis: Record<string, string> = {
  basico: 'Básico',
  intermediario: 'Intermediário',
  avancado: 'Avançado',
}

const nivelBg = {
  basico: '#fff',
  intermediario: '#e5e5e5',
  avancado: '#232228',
}

const nivelColor = {
  basico: '#232228',
  intermediario: '#232228',
  avancado: '#fff',
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const TemaTitle = styled.h2`
  color: #232228;
  font-size: 2rem;
  margin: 2.5rem 0 1rem 0;
  font-weight: 700;
`

const CardsRow = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  flex: 1;
`

const QuizCard = styled.div<{ nivel: string }>`
  border-radius: 18px;
  box-shadow: 0 4px 16px 0 #0001;
  padding: 2rem 1.5rem 2.5rem 1.5rem;
  background: ${({ nivel }) => nivelBg[nivel as keyof typeof nivelBg]};
  color: ${({ nivel }) => nivelColor[nivel as keyof typeof nivelColor]};
  min-width: 180px;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  transition: transform 0.15s;
  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 8px 32px 0 #0002;
  }
`

const Nivel = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background: #e0e0e0;
  border-radius: 3px;
  margin-bottom: 1.2rem;
  overflow: hidden;
`

const Progress = styled.div<{ progress: number; nivel: string }>`
  width: ${props => props.progress}%;
  height: 100%;
  background: ${({ nivel }) =>
    nivel === 'basico' ? '#232228' : nivel === 'intermediario' ? '#232228' : '#fff'};
  transition: width 0.3s ease;
`

const Simbolo = styled.div<{ nivel: string }>`
  font-size: 3.5rem;
  font-weight: 900;
  margin: 1.5rem 0 0.5rem 0;
  color: ${({ nivel }) => nivelColor[nivel as keyof typeof nivelColor]};
  text-shadow: 0 2px 8px #0002;
  letter-spacing: 0.1em;
  flex: 1;
  display: flex;
  align-items: center;
`

const ProgressText = styled.div<{ nivel: string }>`
  font-size: 0.95rem;
  color: ${({ nivel }) => (nivel === 'avancado' ? '#fff' : '#232228')};
  margin-top: 0.5rem;
  text-align: right;
  width: 100%;
`

const Header = styled.header`
  width: 100%;
  padding: 1.2rem 0 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
`

const Logo = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  margin-left: 2rem;
  color: #18181b;
  font-family: 'Arial Black', Arial, sans-serif;
  letter-spacing: -2px;
`

const BannerText = styled.h1`
  font-size: 2.5rem;
  color: #18181b;
  font-weight: 900;
  margin: 2.5rem auto 2.5rem auto;
  max-width: 400px;
  line-height: 1.1;
  text-align: center;
`

const FiltroWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`

const SearchLabel = styled.label`
  font-size: 1.1rem;
  color: #18181b;
  font-weight: 600;
  margin-right: 0.7rem;
`

const SearchSelect = styled.select`
  font-size: 1.1rem;
  padding: 0.4rem 1.2rem;
  border-radius: 6px;
  border: none;
  background: #ededed;
  color: #232228;
  font-weight: 500;
  outline: none;
`

export default function Home() {
  const { results } = useQuizResults()
  const [temaFiltro, setTemaFiltro] = useState('')

  // Agrupar por tema e ordenar por nível
  const quizzesByTema: Record<string, typeof quizzes> = {}
  quizzes.forEach(q => {
    if (!quizzesByTema[q.tema]) quizzesByTema[q.tema] = []
    quizzesByTema[q.tema].push(q)
  })

  // Ordem dos níveis
  const ordemNiveis = ['basico', 'intermediario', 'avancado']

  const handleFiltro = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTemaFiltro(e.target.value)
  }

  // Se temaFiltro for vazio, mostra todos
  const temasParaExibir = temaFiltro ? [temaFiltro] : Object.keys(temas)

  return (
    <>
      <Header>
        <Logo>Q.</Logo>
      </Header>
      <BannerText>
        + de 7<br />quizzes de<br />diferentes<br />temas
      </BannerText>
      <FiltroWrapper>
        <SearchLabel htmlFor="search-select">O que está procurando?</SearchLabel>
        <SearchSelect id="search-select" value={temaFiltro} onChange={handleFiltro}>
          <option value="">Selecione...</option>
          <option value="matematica">Matemática</option>
          <option value="historia">História</option>
          <option value="geografia">Geografia</option>
          <option value="fisica">Física</option>
        </SearchSelect>
      </FiltroWrapper>
      <Container>
        {temasParaExibir.map(temaKey => (
          <div key={temaKey}>
            <TemaTitle>{temas[temaKey]}</TemaTitle>
            <CardsRow>
              {ordemNiveis.map(nivelKey => {
                const quiz = (quizzesByTema[temaKey] || []).find(q => q.nivel === nivelKey)
                if (!quiz) return <div style={{ flex: 1 }} key={nivelKey}></div>
                const result = results[quiz.id]
                const melhor = result?.melhorAcerto || 0
                const progress = melhor ? (melhor / quiz.questoes.length) * 100 : 0
                return (
                  <StyledLink href={`/quiz/${quiz.tema}/${quiz.nivel}`} key={quiz.id}>
                    <QuizCard nivel={nivelKey}>
                      <Nivel>{niveis[nivelKey]}</Nivel>
                      <ProgressBar>
                        <Progress progress={progress} nivel={nivelKey} />
                      </ProgressBar>
                      <Simbolo nivel={nivelKey}>{simbolos[temaKey][nivelKey]}</Simbolo>
                      <ProgressText nivel={nivelKey}>
                        {melhor > 0 ? `Melhor: ${melhor}/${quiz.questoes.length} acertos` : 'Nenhuma tentativa'}
                      </ProgressText>
                    </QuizCard>
                  </StyledLink>
                )
              })}
            </CardsRow>
          </div>
        ))}
      </Container>
    </>
  )
} 