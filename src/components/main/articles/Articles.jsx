import { StyledArticles } from "@/components/main/articles/Articles.styled"
import ArticleCard from "@/components/main/articles/articleCard/ArticleCard"

import { useEffect, useState } from "react"
import { createClient } from "@prismicio/client"
import { sliceZone } from "@prismicio/client/dist/helpers/isFilled"
import { ArtCard } from "@/slices/ArticleCard/index"

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