import Link from "next/link";

export default function Cabecalho() {
    /* adicionar status tarefa no banco de dados para alternar exibicoes */

    return (
        <>
            <header>
                <div className="bg-ciano-claro">
                    <div className="cabecalho-aplicacao">
                        <h1 className="text-branco text-xl tracking-wider">Lista de tarefas</h1>
                        <ul className="cabecalho-menu">
                            <li><Link href="/" className="item-menu">Cadastrar Tarefas</Link></li> 
                            <li><Link href="/" className="item-menu">Exibir tarefas pendentes</Link></li>
                            <li><Link href="/" className="item-menu">Exibir tarefas concluidas</Link></li>
                        </ul>
                    </div>
                </div>

            </header>
        </>
    )
}