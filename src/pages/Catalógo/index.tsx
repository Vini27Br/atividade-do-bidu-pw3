import styles from './Catalogo.module.scss'
import Logo from '../../assets/Logo2.png'
import Banner from '../../assets/Catalogo/banner.png'

export default function Catalogo(){

    return (

        <main>
            
            <nav className={styles.menu}>
            <img src={ Logo } alt='Logo' className='img'/>
            </nav>

       <header className={styles.header}>
            <img src={Banner} alt="" />

       </header>

       </main>


    )




}