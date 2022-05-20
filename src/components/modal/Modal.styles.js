import styled from 'styled-components';
import { d_flex } from './../../Mixins';
export const Wrapper = styled.div`

    .Modal{
        position: fixed;
        top:0;
        left:0;
        width: 100vw;
        height: 100vh;
        z-index: 999;
        background-color: rgba(0,0,0,0.5);
        ${d_flex('', 'center','center')};
        &__content{
            width:100%;
            background-color: var(--color-bg-light);
        }
    }

`
export const WinStyles = styled.div`

   .score{
       text-align: center;
       &__title{
           font-size: 2rem;
           ${d_flex('', 'center','center')};
           gap:6px;
           margin:30px 0;
       }
       &__btns{
           ${d_flex('', 'center','center')};
           gap:15px;
       }
   }

`
export const RestartStyles = styled.div`

.restart{
       text-align: center;
       &__title{
           font-size: 2rem;
           ${d_flex('', 'center','center')};
           gap:6px;
           margin-bottom:30px ;
       }
       &__btns{
           ${d_flex('row', 'center','center')};
            gap:15px;
       }
   }

`