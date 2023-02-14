import styled from 'styled-components'

export const FormWrapper = styled.div`
  padding: 15px;
  width: 60%;
  @media (max-width: 1700px) {
    width: 70%;
  }
  @media (max-width: 800px) {
    width: 80%;
  }
  @media (max-width: 666px) {
    width: 90%;
  }
  .title {
    font-weight: 550;
  }
  .checked_box {
    display: flex;
    justify-content: space-between;
    user-select: none;
  }
  .third_party_logos {
    display: flex;
    justify-content: center;
    span {
      margin: 0 15px;
      cursor: pointer;
    }
  }
  .login-form-button {
    width: 100%;
    height: 38px;
  }
`
