import styled from "styled-components";

export const ContainerDetail = styled.div`
    width: 100vw;
    height: 90vh;
    border: 1px solid black;
    background-color: #4A83A2;
    font-family: 'Koulen', cursive;

    h1{
        text-transform: capitalize;
        text-align: center;
        color: #1C3144;
        font-size: 50px ;
        margin-top: 0 ;
        margin-bottom: 0 ;
    }    
`

export const CardPhoto = styled.div`
    display: flex;
    background-color:  #1C3144;
    border-radius: 20px;
    box-shadow: 4px 5px #DFDB74;
    position: relative;
    left: 25vh;
    top: 5vw;
    margin-bottom: 12vh;
    height: 20%;
    width: 10%;

    img{
        position: relative;
        left: 2vh;
        width: 85%;
    }
`

export const CardPoderes = styled.div`
    position: relative;
    border: 1px solid black;
    background-color: #1C3144;
    border-radius: 20px;
    box-shadow: 4px 5px #DFDB74;
    padding-left: 1vw;
    width: 40vh;
    height: 50vh;
    top: -56vh;
    left: 30vw;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    h2{
        display: flex;
        justify-content: center;
        color: #DFDB74;
    }
    
    h4{
        display: inline;
        font-size: 20px ;
    }

    div{
        margin-top: 7vh;
        color: #DFDB74;
    }

    span{
        color:#4A83A2;
        font-size:20px ;
    }
    `

export const ContainerTipo = styled.div`
    background-color: #1C3144;
    text-transform: capitalize;
    color: #DFDB74;
    display: flex;
    text-align: center;
    justify-content: center;
    border: 1px solid black;
    box-shadow: 4px 5px #DFDB74;
    position: relative;
    border-radius: 10px;
    padding-left: 5px;
    width: 40vh;
    top: -94.5vh;
    left: 54vw;
`

export const TitleStatus = styled.div`
    display: flex;
    justify-content: center;
    width: 40vh;
    border: 1px solid black;
    border-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: 4px 0px #DFDB74;
    position: relative;
    top: -55vh;
    left: 30vw;
    background-color: #1C3144;
    color: #DFDB74;
`

export const ContainerCarcter = styled.div`
    background-color: #1C3144;
    position: relative;
    left: 54vw;
    top: -54vw;
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: 4px 5px #DFDB74;
    width: 40vh;
    height: 38vh;

    div{
        margin: 9vh 1vw;
    }

    h2{
        text-align: center;
        color: #DFDB74;
    }

    h4{
        display: inline;
        color:  #DFDB74;
        font-size: 20px ;
    }
    span{
        color:  #4A83A2;
        font-size:20px ;
    }
`

export default {ContainerDetail, CardPhoto, CardPoderes, ContainerTipo, TitleStatus, ContainerCarcter};