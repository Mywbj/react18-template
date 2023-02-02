import styled from 'styled-components'

export const WebGlWrapper = styled.div`
  position: relative;
  width: 80vw;
  height: 40vw;
  .spin {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
