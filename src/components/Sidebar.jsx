// Sidebar.jsx
export default function Sidebar({ posts }) {
  return (
    <aside>
      <h3>Posts Relacionados</h3>
      <ul>
        {posts.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noreferrer">{link.texto}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}