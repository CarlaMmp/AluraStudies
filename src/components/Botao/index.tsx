import react from 'react';
import style from './Botao.module.scss'

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void;
    children?: React.ReactNode;
    texto?: string;


}

function Botao({ onClick, type, children, texto} : Props) {
    return(
        <button onClick={onClick} 
            type={type} 
            className={style.Botao}>
                
                {texto || children}
            </button>
    )
}

export default Botao;
