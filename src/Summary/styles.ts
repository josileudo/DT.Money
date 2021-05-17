import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div{
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--title);

    header { 
      display: flex;
      justify-content:space-between;
      align-items: center;  
    }
    strong {
      display: block; //por padrão o strong vem como padrão inline, aí não respeita o margin-top
      margin-top:1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highligh-background {
      background: var(--green);
      color: #fff;
    }
  }
`