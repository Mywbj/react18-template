import styled from 'styled-components'

export const TabsWrapper = styled.div`
  white-space: nowrap;
  /* padding: 0 15px; */
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  height: 36px;
  background-color: ${(props) => props.theme.colorBgContainer};
  border-bottom: 1px solid ${(props) => props.theme.colorBorderSecondary};
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  .tag_item {
    &:nth-child(1) {
      margin-left: 15px;
    }
    &:last-child {
      margin-right: 15px;
    }
    transition: all 0.3s;
  }
  .active {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--bg1);
    margin-right: 3px;
  }
`
