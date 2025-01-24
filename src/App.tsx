import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostType } from './components/Post';
import styles from './App.module.css';
import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://i.pinimg.com/736x/1e/b4/18/1eb418393750bff749feaa7f99e04559.jpg',
      name: 'Mavie Becker',
      role: 'Front-end Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 🥳'},
      {type: 'paragraph', content: 'Mais um projeto concluído!! É um site para publicação de Posts. O nome do projeto é Postify 👩🏽‍💻'},
      {type: 'link', content: 'mavie.becker/postify'},  
    ],
    publishedAt: new Date('2024-12-05 16:01'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://i.pinimg.com/736x/24/43/88/24438868e61acbb4bc9e8d4cd4f18621.jpg',
      name: 'Josh Schneider',
      role: 'Software Engineer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},  
    ],
    publishedAt: new Date('2024-12-03 16:01'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

