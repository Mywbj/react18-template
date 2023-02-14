import styled from 'styled-components'
import login_bg from '@/assets/images/login_bg.svg'
export const LoginWrapper = styled.div`
  min-width: 500px;
  min-height: 550px;
  height: 100vh;
  background-color: #eee;
  background-image: url(${login_bg});
  background-position: 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_content {
    width: 92%;
    height: 92%;
    background-color: #fffc;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    overflow: hidden;
    .left {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .right {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media (max-width: 1200px) {
      .left {
        flex: 0;
      }
    }
  }
`
