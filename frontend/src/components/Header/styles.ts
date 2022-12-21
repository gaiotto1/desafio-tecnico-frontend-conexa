import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 57px;
  background-color: #fffffb;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.05);
`

export const Wrapper = styled.div`
  width: calc(100% - 40px);
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.grayDark};
    font-weight: 400;
    margin-right: 15px;

    @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
      display: none;
    }
  }

  button {
    width: 57px;
    height: 32px;
    font-size: 12px;
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
`
