'use client'

import { useParams, useRouter } from 'next/navigation'
import styled from 'styled-components'
import { users } from '../../../src/data/users'

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`

const BackButton = styled.button`
  background: #646cff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 2rem;

  &:hover {
    background: #535bf2;
  }
`

const UserCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`

const UserName = styled.h1`
  color: #646cff;
  margin-bottom: 1.5rem;
`

const UserInfo = styled.div`
  margin-bottom: 1rem;
`

const Label = styled.span`
  font-weight: bold;
  color: #333;
`

const Value = styled.span`
  color: #666;
  margin-left: 0.5rem;
`

const PreferencesSection = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`

const PreferencesTitle = styled.h2`
  color: #333;
  margin-bottom: 1rem;
`

export default function UserPage() {
  const params = useParams()
  const router = useRouter()
  const userId = params?.id ? Number(params.id) : null
  
  if (!userId) {
    return (
      <Container>
        <BackButton onClick={() => router.back()}>Voltar</BackButton>
        <h1>ID de usuário inválido</h1>
      </Container>
    )
  }

  const user = users.find(u => u.id === userId)

  if (!user) {
    return (
      <Container>
        <BackButton onClick={() => router.back()}>Voltar</BackButton>
        <h1>Usuário não encontrado</h1>
      </Container>
    )
  }

  return (
    <Container>
      <BackButton onClick={() => router.back()}>Voltar</BackButton>
      <UserCard>
        <UserName>{user.nome}</UserName>
        
        <UserInfo>
          <Label>Idade:</Label>
          <Value>{user.idade} anos</Value>
        </UserInfo>

        <PreferencesSection>
          <PreferencesTitle>Preferências</PreferencesTitle>
          
          <UserInfo>
            <Label>Cor favorita:</Label>
            <Value>{user.preferencias.cor}</Value>
          </UserInfo>

          <UserInfo>
            <Label>Comida favorita:</Label>
            <Value>{user.preferencias.comida}</Value>
          </UserInfo>

          <UserInfo>
            <Label>Hobby:</Label>
            <Value>{user.preferencias.hobby}</Value>
          </UserInfo>
        </PreferencesSection>
      </UserCard>
    </Container>
  )
} 