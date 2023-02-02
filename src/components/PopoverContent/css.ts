import styled from 'styled-components'

export const PopoverContentWrapper = styled.div`
  .content {
    padding: 4px 4px 2px 4px;
    div:nth-child(1) {
      margin-top: 2px;
    }
    div {
      margin-bottom: 3px;
      padding: 5px 20px;
      border-radius: ${(props) => props.theme.borderRadius}px;
      cursor: pointer;
      &:hover {
        background-color: ${(props) => props.theme.colorBgContainerDisabled};
      }
    }
    .active {
      background-color: ${(props) => props.theme.colorBgContainerDisabled};
    }
  }
  .line {
    border-top: 1px solid ${(props) => props.theme.colorInfoBorder};
  }
`
