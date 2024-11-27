export default function Cadastro() {
    return (
      <>
        <section className="telaForm">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-6">Cadastro de Usuário</h1>
            <form action="/cadastro" className="w-full max-w-sm mx-auto">
              <div className="input-form">
                <label htmlFor="nome">Digite seu nome completo:</label>
                <input id="nome" type="text" name="nome" />
              </div>
  
              <div className="input-form">
                <label htmlFor="cpf">Digite seu CPF:</label>
                <input id="cpf" type="text" name="cpf" />
              </div>
  
              <div className="input-form">
                <label htmlFor="login">Digite seu login:</label>
                <input id="login" type="text" name="login" />
              </div>
  
              <div className="input-form">
                <label htmlFor="senha">Digite uma senha:</label>
                <input id="senha" type="password" name="senha" />
              </div>
  
              <div>
                <input type="submit" value="Cadastrar" />
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
  