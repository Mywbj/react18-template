import styled from 'styled-components'

export const InfoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  .user_info {
    padding: 0 15px;
    height: 100%;
    display: flex;
    align-items: center;
    .username {
      margin-left: 2px;
    }
  }
  .popover_item {
    padding: 5px 0;
  }
`
