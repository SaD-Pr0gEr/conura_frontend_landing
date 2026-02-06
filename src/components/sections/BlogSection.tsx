import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    image: 'https://www.figma.com/api/mcp/asset/b02979be-d82e-4949-9b4d-4aad7df8eae3',
    title: 'Как технологии и маркетинг работают вместе',
    description: 'О том, почему сегодня нельзя разделять IT-решения и продвижение, и как синергия помогает бизнесу расти',
  },
  {
    id: 2,
    image: 'https://www.figma.com/api/mcp/asset/31a8c9fe-48b8-4b0b-a27c-c023a11393f9',
    title: '5 ошибок при запуске digital-проектов',
    description: 'Разбираем типичные промахи компаний на старте и даём рекомендации, как их избежать',
  },
  {
    id: 3,
    image: 'https://www.figma.com/api/mcp/asset/5f1b05f9-cc97-4095-9c9a-24643023f334',
    title: 'Автоматизация бизнеса простыми словами',
    description: 'Объясняем, какие задачи реально передать системам и почему это экономит время и ресурсы',
  },
  {
    id: 4,
    image: 'https://www.figma.com/api/mcp/asset/ab1c21d7-f82a-409d-bbc6-b11b0fbd8d0f',
    title: 'Почему аналитика важнее, чем кажется',
    description: 'Как данные помогают принимать решения: от настройки рекламы до разработки новых продуктов',
    desktopOnly: true,
  },
];

export function BlogSection() {
  return (
    <section className="blog-section" id="blog">
      <h2 className="blog-title">Блог</h2>
      
      <div className="blog-cards">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href="#"
            className={`blog-card ${post.desktopOnly ? 'blog-card-desktop-only' : ''}`}
          >
            <div className="blog-card-image">
              <img src={post.image} alt={post.title} loading="lazy" />
            </div>
            <div className="blog-card-text">
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-description">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
      
      <Link href="/blog" className="btn btn-primary blog-btn">Перейти в блог</Link>
    </section>
  );
}
