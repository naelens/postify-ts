import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1498753427761-548428edfa67?q=80&w=500&80=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />
            
            <div className={styles.profile}>
                <Avatar src="https://i.pinimg.com/736x/66/98/e7/6698e71cf38dec084911892d46d31a8a.jpg" />

                <strong>Emily thomas</strong>
                <span>Front-end Developer 👩🏽‍💻🌻</span>

                <section className={styles.aboutMe}>
                    <span>About me:</span>
                    <p>Hey, there.  I have experience with HTML, CSS, Javascript, ReactJS, AngularJS, TypeScript, Tailwind as well as creating beautiful interfaces in Figma!!</p>
                </section>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}