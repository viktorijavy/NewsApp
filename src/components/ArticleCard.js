const ArticleCard = ({article}) => {
    
    
return (
    <>

<div className="bg-white py-10 px-10 rounded-lg">

{ article.urlToImage != null ?
 <img src={article.urlToImage} alt="pictur"/> : <img src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="pic-not-found"/>}    

<h1 className="font-bold text-2xl mb-2"> {article.title}</h1>
<p> {article.source.name}</p>

{ article.author != null ? <p> by {article.author}</p> : <p></p>}

<p className="mt-3"> {article.description}</p>
<p> {article.publishedAt.slice(0, 10)}</p>


<a href={article.url}> Read the article </a>
</div>
</>
    )
}

export default ArticleCard