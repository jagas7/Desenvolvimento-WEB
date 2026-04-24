export default function Article({ titulo, autor, data, conteudo, imagem }) {
  return (
    <article>
      <h2>{titulo}</h2>
      <p className="data-publicacao">
        Publicado em: <time>{data}</time> | Por: {autor}
      </p>
      
      {conteudo.map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
      ))}

      <figure>
        <img src={imagem.src} alt={imagem.alt} />
        <figcaption>{imagem.legenda}</figcaption>
      </figure>
    </article>
  );
}