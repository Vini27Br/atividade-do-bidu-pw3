import  Styles  from './Filtros.module.scss'
import filtros from './filtros.json'

type Iopcao = typeof filtros[];

export default function Filtros(){

return(<div className={Styles.filtro}>
    {filtros.map((opcao) => (
        <button className={Styles.filtro__filtro} key={opcao.id}>
            {opcao.label}
        </button>
    ))}
</div>

)
}