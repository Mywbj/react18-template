import styled from 'styled-components'

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 25px 0;
  &:nth-child(1) {
    margin: 16px 0;
  }
  .text {
    color: ${(props) => props.theme.colorText};
  }
`
