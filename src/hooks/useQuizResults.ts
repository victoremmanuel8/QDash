import { useEffect, useState } from 'react'

interface QuizResult {
  quizId: number
  acertos: number
  totalQuestoes: number
  ultimaTentativa: string
  melhorAcerto: number
}

export function useQuizResults() {
  const [results, setResults] = useState<Record<number, QuizResult>>({})

  useEffect(() => {
    const savedResults = localStorage.getItem('quizResults')
    if (savedResults) {
      setResults(JSON.parse(savedResults))
    }
  }, [])

  const saveResult = (quizId: number, acertos: number, totalQuestoes: number) => {
    const prev = results[quizId]
    const melhorAcerto = prev ? Math.max(prev.melhorAcerto || 0, acertos) : acertos
    const newResults = {
      ...results,
      [quizId]: {
        quizId,
        acertos,
        totalQuestoes,
        ultimaTentativa: new Date().toISOString(),
        melhorAcerto,
      }
    }
    setResults(newResults)
    localStorage.setItem('quizResults', JSON.stringify(newResults))
  }

  const getResult = (quizId: number) => {
    return results[quizId]
  }

  return { results, saveResult, getResult }
} 