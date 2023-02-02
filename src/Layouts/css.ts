import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  height: 100vh;
  .left_aside_sider {
    border-right: 1px solid ${(props) => props.theme.colorBorderSecondary};
    .left_sidebar_menu {
      border-right: 0;
    }
  }
  .header {
    .ant-layout-header {
      padding-inline: 0;
      background-color: ${(props) => props.theme.colorBorderBg};
      border-bottom: 1px solid ${(props) => props.theme.colorBorderSecondary};
    }
  }
  .footer {
    .ant-layout-footer {
      padding: 15px 50px;
      background-color: ${(props) => props.theme.colorBorderBg};
      border-top: 1px solid ${(props) => props.theme.colorBorderSecondary};
    }
  }
  .main {
    padding: 10px 12px;
    flex: auto;
    .ant-layout-content {
      height: 100%;
      .content_card {
        height: 100%;
      }
    }
  }
`
