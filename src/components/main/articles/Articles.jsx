import { StyledArticles } from "@/components/main/articles/Articles.styled"
import ArticleCard from "@/components/main/articles/articleCard/ArticleCard"

import { articlesArr } from "@/app/data"

const Articles = () => {
    return (
        <StyledArticles>

            {articlesArr.map((article, index) => (
                <ArticleCard
                key={index}
                src={article.image.url} 
                alt={article.image.alt} 
                category={article.category.name} 
                categoryColor={article.category.color}
                title={article.title}
                date={article.date}
                author={article.author}
                 />
            ))}

        </StyledArticles>
    )
}

export default Articles