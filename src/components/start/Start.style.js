import styled from "styled-components";
import { d_flex } from "./../../Mixins";
export const Wrapper = styled.div`
  .start{
    ${d_flex("column")};
    gap: 25px;
    &__header {
      ${d_flex('row', "center", "center")}; 
    }
    &__players {
      background-color: var(--color-bg-dark);
      padding: 10px;
      border-radius: 15px;
      ${d_flex('', "center", '')};
      box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.2);
      span{
          width:50%;
          ${d_flex('row', "center", "center")};
          padding:15px 10px;
          border-radius: 10px;
          color:var(--color-bg-dark);
          cursor: pointer;
      }
      &--active{
          background-color:var(--color-gray);
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
      }
    }
    &__btns{
        ${d_flex('column', "", "")};
        gap:12px;
    }
  }
`;
