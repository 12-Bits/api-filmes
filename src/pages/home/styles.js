import styled from "styled-components";

export const Container = styled.div
`
H1{
text-align: center;
margin:4rem 0px
}

ul{
list-style: none;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
column-gap: 3rem;
row-gap: 4rem;
}

li{
display: flex;
flex-direction: column;
aling-items: center;}
}
img{width: 180px;
border-radius: 1rem;
margin-bottom: 2rem;}

span{font-weight: bold;}
`