import styles from './Catalogo.module.scss'
import Logo from '../../assets/Logo2.png'
import Banner from '../../assets/Catalogo/banner.png'
import Filtros from './filtros'
import Buscador from './buscador'
import { useState } from 'react'


export default function Catalogo(){

    const [busca, setBusca] = useState("")
    return (

        <main>
            
            <nav className={styles.menu}>
            <img src={ Logo } alt='Logo' className='img'/>
            </nav>
       <header className={styles.header}>
            <img src={Banner} alt="" />
       </header>

       <section  className={styles.cardapio}>

        <h3 className={styles.cardapio__titulo}> Cardápio </h3>

        <Buscador busca={ busca } setBusca={setBusca}/>
     
    <div className={styles.cardapio__filtros}>

    <Filtros/> 

    </div>

    </section>
       </main>


    )




}