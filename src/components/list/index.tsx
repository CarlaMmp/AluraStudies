import style from'./list.module.scss'
import Item from './item';
import { ITarefa } from '../../types/tarefas';

interface Props{
    tarefas: ITarefa[],
    selecionaTarefas: (tarefaSelecionada: ITarefa) => void
}

function Lista({tarefas, selecionaTarefas} : Props) {
return(
        <aside className = { style.listaTarefas }>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map ((item, index) => (
                    <Item 
                    selecionaTarefas = {selecionaTarefas}
                    key={item.id}
                       {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;
