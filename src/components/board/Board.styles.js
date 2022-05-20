import styled from "styled-components";
import { d_flex } from "./../../Mixins";

export const Wrapper = styled.div`
  .board {
    &__header {
      ${d_flex("row", "space-between", "center")}
      margin-bottom:50px;
    }
    &__turn {
      border-radius: 4px;
      background-color: var(--color-bg-light);
      padding: 8px 12px;
      ${d_flex("", "center", "center")};
      gap: 4px;
      box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2);
    }
    &__restart {
      svg {
        height: 20px;
        ${d_flex("", "center", "center")};
        transform-origin: center;
        transition: all 0.3s;
        &:active {
          transform: rotate(180deg);
        }
      }
    }
    &__body {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 25px 20px;
      .active.shadow-blue{
          background-color: var(--color-blue);
      }
      .active.shadow-yellow{
          background-color: var(--color-yellow);
      }
    }
    &__footer{
      margin-top:30px;
      display:grid;
      gap:15px;
      grid-template-columns: repeat(3, 1fr);
      .card{
          padding: 10px;
      }
    }
  }
`;

export const CardWrapper = styled.div`
    height: 120px;
    background-color: var(--color-bg-light);
    border-radius: 10px;
    padding-inline: 10px;
    ${d_flex("", "center", "center")};
`;
