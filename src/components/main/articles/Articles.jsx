import { StyledArticles } from "@/components/main/articles/Articles.styled"
import { ArticleEl } from "@/components/main/articles/articleEl/ArticleEl"

const articlesArr = [
    {
        image: {
            url: 'https://images.unsplash.com/photo-1722072977408-0865d9cc3904?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'pine tree',
        },
        category: {
            name: 'Nature',
            color: 'green',
        },
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        date: '11 september 2016',
        author: 'John Doe', 
    },
    {
        image: {
            url: 'https://images.unsplash.com/photo-1722072977408-0865d9cc3904?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'pine tree',
        },
        category: {
            name: 'Nature',
            color: 'green',
        },
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        date: '11 september 2016',
        author: 'John Doe',
    },
    {
        image: {
            url: 'https://images.unsplash.com/photo-1722072977408-0865d9cc3904?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'pine tree',
        },
        category: {
            name: 'Nature',
            color: 'green',
        },
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        date: '11 september 2016',
        author: 'John Doe',
    },
    {
        image: {
            url: 'https://images.unsplash.com/photo-1722072977408-0865d9cc3904?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'pine tree',
        },
        category: {
            name: 'Nature',
            color: 'green',
        },
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        date: '11 september 2016',
        author: 'John Doe',
    },
    {
        image: {
            url: 'https://images.unsplash.com/photo-1722072977408-0865d9cc3904?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'pine tree',
        },
        category: {
            name: 'Nature',
            color: 'green',
        },
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        date: '11 september 2016',
        author: 'John Doe',
    },
    {
        image: {
            url: 'https://images.unsplash.com/photo-1722072977408-0865d9cc3904?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'pine tree',
        },
        category: {
            name: 'Nature',
            color: 'green',
        },
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        date: '11 september 2016',
        author: 'John Doe',
    },
]

const Articles = () => {
    return (
        <StyledArticles>

            {articlesArr.map((article, index) => (
                <ArticleEl 
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