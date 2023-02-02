import styled from 'styled-components'

export const BreadWrapper = styled.div`
  .default {
    transition: color 0.2s;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.colorText};
    }
  }
  .bre_active {
    color: ${(props) => props.theme.colorText};
  }
`
