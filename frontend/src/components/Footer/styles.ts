import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 57px;
  background-color: #fffffb;
`

export const Wrapper = styled.div`
  width: calc(100% - 40px);
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button:first-child {
    width: 75px;
    height: 40px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.blue};
    border: 2px solid ${({ theme }) => theme.colors.blue};
    border-radius: 6px;
    background-color: transparent;
    transition: all 0.2s;
    :hover {
      background-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  button:last-child {
    width: 154px;
    height: 40px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.blue};
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.blue};
    transition: all 0.2s;
    :hover {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`
