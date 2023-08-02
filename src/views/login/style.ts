import { styled } from 'styled-components'

export const LoginWrapper = styled.div`
  .login {
    padding-top: 46px;
    &-head {
      padding: 30px 30px 50px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      line-height: 1;
      h3 {
        font-weight: normal;
        font-size: 24px;
      }
      a {
        font-size: 15px;
      }
    }
    .form {
      padding: 0 20px;
    }
    .adm-form-footer {
      padding: 0 15px;
    }
    .adm-list-default .adm-list-body {
      border-top: none;
      border-bottom: none;
    }
    .extraPart {
      border-left: solid 1px #eeeeee;
      padding-left: 12px;
      font-size: 14px;
      line-height: 22px;
    }
    .eye {
      padding: 4px;
      cursor: pointer;
      svg {
        display: block;
        font-size: var(--adm-font-size-7);
      }
    }
    .adm-checkbox {
      --icon-size: 16px;
      --font-size: 16px;
    }
  }
  .cp-cell {
    height: 52px;
    padding: 14px 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    a {
      color: #000;
      padding: 0 5px;
    }
  }
`
