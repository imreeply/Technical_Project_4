const BlogComponents = ({ judul, imgUrl, tag, desc }) => {
  return (
    <>
      <article className="article-card">
        <figure className="article-image">
          <img src={imgUrl} />
        </figure>
        <div className="article-content">
          <a href className="card-category">
            {tag}
          </a>
          <h3>{judul}</h3>
          <p>{desc}</p>
        </div>
      </article>
    </>
  );
};

export default BlogComponents;
