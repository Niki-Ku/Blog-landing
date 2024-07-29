import styled from "styled-components";

export const StyledArticleEl = styled.div`
    width: 150px;
`

export const ImageContainer = styled.div`
    height: 250px;
    width: 100%;
    position: relative;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Category = styled.div`
    background: ${(props) => (props.color)};
    position: absolute;
    bottom: 10%;
    left: 0;
    padding: 8px 10px;
    color: white;
`
export const TextContainer = styled.div`
    margin-top: 1rem;
    line-height: 1.5;
`

export const TextHeader = styled.h3`
    font-weight: 500;
`

export const TextDescription = styled.div`
    display: flex;
    gap: 10px;

    p{
        color: #b5b5b5;
    }
` 