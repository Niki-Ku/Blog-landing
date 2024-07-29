import { StyledArticleEl, ImageContainer, Category, TextContainer, TextHeader, TextDescription } from './StyledArticleEl.styled'
import Link from 'next/link'

export const ArticleEl = (props) => {
    return (
        <StyledArticleEl>
            <ImageContainer>
                <img src={props.src} alt={props.alt} />
                <Category color={props.categoryColor}><p>{props.category}</p></Category>
            </ImageContainer>
            <TextContainer>
                <TextHeader>{props.title}</TextHeader>
                <TextDescription>
                    <p>{props.date} |</p>
                    <Link href='#'>{props.author}</Link>
                </TextDescription>
            </TextContainer>
        </StyledArticleEl>
    )
}

// export ArticleEl