import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {            
        --green-opacity: rgba(18, 164, 84, 0.1);
        --bg-input: #EDEDED;
        --dark: #616161;        
        --gray-200: #929292;
        --gray-100: #D9D9D9;
        --gray-50: #F0F2F5;
        --green-500: #12A454;
        --white: #fff;
        --purple-600: #431b7d;

        --border-radius-button: 4px;      
        --border-radius-input: 5px;  

        --size-button: 13px;                    

        --font: "Poppins";        
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    html {      
        @media screen and (max-width: 1080px) {
           font-size: 93% !important; //=15px
           width: 100%;
       }

       @media screen (max-width: 720px) {
           font-size: 87% !important; //=14px
           width: 100%;           
       }

       scroll-behavior: smooth;            
    }

    body {
        button {
            border: none;     
            cursor: pointer;   
        }  

/*         
        .react-modal-overlay {
            background: rgba(0, 0, 0, 0.85);
            position: fixed;
            z-index: 3 !important;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;            
            display: flex;
            align-items: center;
            justify-content: center;  
                      
        }

        .react-modal {            
            width: 500px;
        }
    
        .react-modal-content {
            width: 100%;               
            border-radius: var(--border-radius-default);     
            background: var(--white);            
            -webkit-animation: scale-in 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940);
            animation: scale-in 0.3s cubic-bezier(0.2150, 0.460, 0.450, 0.940);  
        
        }
    
        @keyframes scale-in {
            0% {
                -webkit-transform: scale(0);    
            }
            100% {
                -webkit-transform: scale(1);
                transform: scale(1);
            }
        }
    
        .react-modal-close {
            position: absolute;
            right: 1.5rem;
            top: 1.5rem;
            border: 0;
            background: transparent;
            transition: filter 0.2s;
            
    
            :hover {
                filter: brightness(0.9);
            }
        }
    
        @media (max-width: 767px) {
            .react-modal-content  {
                width: 100vw;            
                height: 100vh;
                overflow-Y: auto;
                border-radius: 0;
            }                        
        } */

    }
`
