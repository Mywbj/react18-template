import styled from 'styled-components'

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 11px 20px; */
  height: 64px;
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.colorBorderSecondary};
  img {
    width: 40px;
    height: 40px;
  }
  .title {
    font-weight: 700;
    font-size: 18px;
    color: ${(props) => props.theme.colorText};
    margin-left: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .title_css-enter {
    opacity: 0;
    transform: scale(0);
  }
  .title_css-enter-active {
    transition: all 200ms;
    opacity: 1;
    transform: scale(1);
  }
  .title_css-exit {
    opacity: 1;
    transform: scale(1);
  }
  .title_css-exit-active {
    transition: all 200ms;
    opacity: 0;
    transform: scale(0);
  }
`
