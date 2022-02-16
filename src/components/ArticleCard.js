import './ArticleCard.css'

const ArticleCard = ({ article }) => {


    return (
        <>

            <div className="card-container">

            <div>

                {article.urlToImage != null ?
                <img src={article.urlToImage} alt="pictur" /> : 
                <img src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="pic-not-found" />}
                 
                 
                <div className="card-container-text">
                <h1 className="card-header"> {article.title}</h1>
                <p className='article-source'> {article.source.name}</p>
            
                {/* {article.author != null ? <p> by {article.author}</p> : <p></p>} */}

                <p className="mt-3"> {article.description.slice(0, 170)}</p>
                <p className="date"> {article.publishedAt.slice(0, 10)}</p>
                <div>
                <a className="button" href={article.url}> Read the article </a>
                </div>
                </div>
            

                </div>
            </div>




        </>





    )
}

export default ArticleCard