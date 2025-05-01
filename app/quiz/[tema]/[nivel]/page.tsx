'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import styled from 'styled-components'
import { quizzes } from '../../../../src/data/quizzes'
import { useQuizResults } from '../../../../src/hooks/useQuizResults'

const Bg = styled.div`
  min-height: 100vh;
  background: #18181b;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuizCard = styled.div`
  background: #232228;
  border-radius: 18px;
  padding: 2.5rem 2rem 2rem 2rem;
  box-shadow: 0 4px 32px 0 #0005;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuizTitle = styled.h1`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`

const QuestionCard = styled.div`
  width: 100%;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionText = styled.h2`
  color: #fff;
  font-size: 1.25rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
`

const OptionsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
`

const OptionButton = styled.button<{ selected?: boolean }>`
  width: 100%;
  max-width: 420px;
  padding: 1.2rem 1rem;
  border: none;
  border-radius: 12px;
  background: ${({ selected }) => (selected ? '#3b82f6' : '#232228')};
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  box-shadow: 0 2px 8px #0002;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s, color 0.2s, transform 0.1s;
  outline: none;
  display: flex;
  align-items: center;
  position: relative;
  &:hover {
    background: #3b82f6;
    color: #fff;
    transform: scale(1.02);
  }
`

const ResultCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: #232228;
  border-radius: 18px;
  margin-top: 2rem;
  color: #fff;
  box-shadow: 0 4px 32px 0 #0005;
`

const ResultText = styled.h2`
  color: #fff;
  margin-bottom: 1rem;
`

const Score = styled.p`
  font-size: 1.5rem;
  color: #3b82f6;
  font-weight: bold;
`

const BackButton = styled.button`
  background: #3b82f6;
  color: #fff;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 500;
  transition: background 0.2s;
  &:hover {
    background: #2563eb;
  }
`

const Progress = styled.div`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
  letter-spacing: 0.05em;
`

export default function QuizPage() {
  const params = useParams() as { tema?: string; nivel?: string }
  const router = useRouter()
  const { saveResult } = useQuizResults()

  const quiz = quizzes.find(q => q.tema === params.tema && q.nivel === params.nivel)

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)

  if (!quiz) {
    return (
      <Bg>
        <Container>
          <BackButton onClick={() => router.back()}>Voltar</BackButton>
          <h1 style={{ color: '#fff' }}>Quiz não encontrado</h1>
        </Container>
      </Bg>
    )
  }

  const handleAnswer = (answerIndex: number) => {
    if (showResults) return
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
    setTimeout(() => {
      if (currentQuestion < quiz.questoes.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        const score = calculateScore()
        saveResult(quiz.id, score, quiz.questoes.length)
        setShowResults(true)
      }
    }, 250)
  }

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === quiz.questoes[index].respostaCorreta ? 1 : 0)
    }, 0)
  }

  const currentQuestionData = quiz.questoes[currentQuestion]

  return (
    <Bg>
      <Container>
        <QuizCard>
          <QuizTitle>{quiz.titulo}</QuizTitle>
          {!showResults ? (
            <>
              <Progress>
                Questão {currentQuestion + 1} de {quiz.questoes.length}
              </Progress>
              <QuestionCard>
                <QuestionText>{currentQuestionData.pergunta}</QuestionText>
                <OptionsList>
                  {currentQuestionData.opcoes.map((opcao, index) => (
                    <OptionButton
                      key={index}
                      selected={selectedAnswers[currentQuestion] === index}
                      onClick={() => handleAnswer(index)}
                      disabled={selectedAnswers[currentQuestion] !== undefined}
                    >
                      {String.fromCharCode(65 + index)}. {opcao}
                    </OptionButton>
                  ))}
                </OptionsList>
              </QuestionCard>
            </>
          ) : (
            <ResultCard>
              <ResultText>Quiz Concluído!</ResultText>
              <Score>
                Pontuação: {calculateScore()} de {quiz.questoes.length}
              </Score>
              <BackButton onClick={() => router.back()}>
                Voltar para Quizes
              </BackButton>
            </ResultCard>
          )}
        </QuizCard>
      </Container>
    </Bg>
  )
} 