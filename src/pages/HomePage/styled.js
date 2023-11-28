import styled from "styled-components";

export const StyledContainerHome = styled.div`
    background-color: #121214;
    width: 100%;
    height: 100%;
    color: white;

    ul{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        margin-top: 30px;
        padding: 10px;
        

        li{

            border: 1px solid white;
            width: 100%;
            max-width: 500px;
            height: auto;
            background-color: #D2EEF9;
            color: #121214;
            border-radius: 10px;
            padding: 10px;
            

            img{
                width: 100%;
                
            }
        
            .buttons_update-delete{
                display: flex;
                justify-content: space-between;
                height: 40px;

                button{
                    width: 100px;
                    height: 40px;
                    border-radius: 5px;
                    background-color:#121214 ;
                    color: #D2EEF9;
                }
            }
            
        }
    }

`

export const StyledHeader = styled.header`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100px;
gap: 7px;
background-color: #121214;
border: 4px solid #D2EEF9;

@media (max-width: 565px){
    h1{
        font-size: 20px;
        width: 250px;
    }

    p{
        font-size: 16px;
        width: 250px;
        height: 20px;
    }
}

a{
    background-color: #D2EEF9;
    color: #000;
    width: 200px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
}

`

export const StyledName = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .name{

        @media (max-width: 565px){
            width: 24px;

             h1{
                font-size: 20px;
                width: 250px;
        }

            h2{
                font-size: 20px;
                 width: 250px;
    }
}
    }

    .logout{
        button{
            background-color: #D2EEF9;
            width: 126px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: black;
            border-radius: 5px;
        }
    }
    
`

export const StyledContainerButton = styled.div`

width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;

a{
    background-color: #D2EEF9;
    width: 126px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    border-radius: 5px;
}

`