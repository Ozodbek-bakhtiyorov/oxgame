import { createGlobalStyle } from "styled-components";
import { d_flex } from "./Mixins";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --color-bg-dark:#FF0266;
        --color-bg-light:#1f3640;
        --color-gray:#a8bec9;
        --color-gray-dark:#7a8991;
        --color-yellow:#f2b238;
        --color-yellow-dark:#cd8d16;
        --color-blue:#30c4be;
        --color-blue-dark:#128c89;
        --shadow-y:6px;
    }
    .card {
        padding: 25px;
        ${d_flex("column")};
        gap: 25px;
        border-radius: 15px;
        background-color: var(--color-bg-light);
        text-align: center;
      }

    html{
        font-family:Verdana,Geneva, Tahoma,sans-serif;
        text-transform:uppercase;
        font-size:16px;
    }
    body{
        background-color:var(--color-bg-dark);
        color:var(--color-gray);
    }
    .container{
        max-width:450px;
        width:100%;
        margin-inline:auto;
        padding:1rem 2rem;
    }
    .text-light{
        color:var(--color-gray-dark);
    }
    .text-blue{
        color:var(--color-blue);
    }
    .text-yellow{
        color:var(--color-yellow);  
    }
    .text-lg{
        font-size:1.5rem;
    }
    .text-xl{
        font-size:1.725rem;
    }
    .text-2xl{
        font-size:3.5rem;
    }
    .btn{
        background-color:var(--color-gray);
        border:none;
        font-size:1.125rem;
        font-weight:bold;
        padding:12px 25px; 
        text-transform:uppercase;
        cursor:pointer;
        border-radius:10px;
        color:var(--color-bg-light);
        display:inline-block;
        box-shadow: 0 var(--shadow-y) 0 var(--color-gray-dark);
        margin-bottom: var(--shadow-y);
        transition:all .2s ease-in-out;
        &:hover{
            transform:translateY(-2px);
            box-shadow: 0 8px 0 var(--color-gray-dark);
        }
        &:active{
            transform:translateY(2px);
            box-shadow: 0 4px 0 var(--color-gray-dark);
        }
    }
    .btn-yellow{
        background-color:var(--color-yellow);
        box-shadow: 0 var(--shadow-y) 0 var(--color-yellow-dark);
    }
    .btn-blue{
        background-color:var(--color-blue);
        box-shadow: 0 var(--shadow-y) 0 var(--color-blue-dark);
    }
    .btn-sm{
        --shadow-y:4px;
        &:hover{
            --shadow-y:6px;
        }
        &:active{
            --shadow-y:3px;
        }
    }
    .icon {
        display:inline-block;    
    }
    .icon svg{
            fill:var(--color-bg-gray);
            height:40px;
            width:40px;
            vertical-align:middle;
    }
    .icon-sm  svg {
            height:20px;
            width:20px; 
    }
    .icon-lg svg{
        height:65px;
        width:65px;
    }
    .icon-yellow svg{
        fill:var(--color-yellow);
    }
    .icon-blue svg{
        fill:var(--color-blue);
    }
    .icon-dark svg{
        fill:var(--color-bg-dark);
    }

    .bg-light{
        background-color:var(--color-gray);
        color:var(--color-gray-dark);
    }
    .bg-yellow{
        background-color:var(--color-yellow);
        color:var(--color-yellow-dark);
    }
    .bg-blue{
        background-color:var(--color-blue);
        color:var(--color-blue-dark);
    }

    .shadow-gray{
        box-shadow: 0 8px 0 var(--color-gray-dark);
    }
    .shadow-yellow{
        box-shadow: 0 8px 0 var(--color-yellow-dark);
    }
    .shadow-blue{
        box-shadow: 0 8px 0 var(--color-blue-dark);
    }
    
    .bg-blue.text-light, .bg-yellow.text-light, .bg-light.text-blue, .bg-light.text-yellow{
        color:var(--color-bg-light);
    }
   
`;
