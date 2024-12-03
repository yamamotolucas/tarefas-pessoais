import Link from "next/link";

export default function Cabecalho() {
    /* adicionar status tarefa no banco de dados para alternar exibicoes */

    return (
        <>
            <header>
                <div className="bg-ciano-claro">
                    <div className="cabecalho-aplicacao">
                        <h1 className="text-branco text-2xl tracking-wider"><Link href="/">Lista tarefas</Link></h1>
                        <ul className="cabecalho-menu">
                            <li><Link href="/cadastrar" className="item-menu">Cadastrar Tarefas</Link></li> 
                            <li><Link href="/pendentes" className="item-menu">Exibir tarefas pendentes</Link></li>
                            <li><Link href="/concluidas" className="item-menu">Exibir tarefas concluidas</Link></li>
                        </ul>
                    </div>
                </div>

            </header>
        </>
    )
}