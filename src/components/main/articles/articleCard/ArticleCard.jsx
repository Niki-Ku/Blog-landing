import { StyledArticleCard, ImageContainer, Category, TextContainer, TextHeader, TextDescription } from '@/components/main/articles/articleCard/StyledArticleCard.styled'
import Link from 'next/link'

const ArticleCard = (props) => {
    return (
        <StyledArticleCard>
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
        </StyledArticleCard>
    )
}

export default ArticleCard