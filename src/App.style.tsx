import styled, { keyframes } from 'styled-components'

export const Root = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`

export const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
`

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const AnimatedLogo = styled(Logo)`
  @media (prefers-reduced-motion: no-preference) {
    &:nth-of-type(2) {
      animation: ${logoSpin} infinite 20s linear;
    }
  }
`

export const Card = styled.div`
  padding: 2em;
`

export const ReadTheDocs = styled.p`
  color: #888;
`

export const Container = styled.div`
  padding: 0rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`

export const Title = styled.h1`
  color: #646cff;
  font-size: 3.2em;
  line-height: 1.1;
  margin-bottom: 2rem;
`

export const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  color: white;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }
`

export const Counter = styled.div`
  margin-top: 2rem;
  font-size: 1.5em;
  color: #888;
`
