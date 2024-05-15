import { ITarefa } from '../../../types/tarefas'
import style from '../item/item.module.scss'

interface Props extends ITarefa {
    selecionaTarefas: (tarefaSelecionada: ITarefa) => void
}

export default function Item (
    { 
        tarefa, 
        tempo, 
        selecionado, 
        completado, 
        id, 
        selecionaTarefas 
    } : Props) {
    return (
        <li 
            className = {`${style.item} 
                ${selecionado  ? style.itemSelecionado : ''} 
                ${completado ? style.itemCompletado : ''} `} 
            onClick={() => !completado && selecionaTarefas(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id
                }
            )} 
        >
            <h3> { tarefa } </h3>
            <span> { tempo } </span>
            {completado && <span className={style.concluido} aria-label='tarefa completada'></span>}
         </li>
    )
}
