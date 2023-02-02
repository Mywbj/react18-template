import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  .layout_icon {
    margin-right: 10px;
  }
  .split_line {
    &::after,
    ::before {
      transform: none !important;
      border-top: 1px solid #dcdfe6 !important;
    }
  }
  .menu_style {
    .style_active {
      border: 2px solid #69b1ff;
    }
    .style_item {
      display: inline-block;
      margin-right: 25px;
      border-radius: 6px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      font-size: 0;
      overflow: hidden;
      svg {
        cursor: pointer;
      }
    }
  }
`
