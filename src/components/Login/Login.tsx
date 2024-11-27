export default function Login() {

    return (
        <>
        <section className="telaForm">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-6">Login</h1>
            <form action="/login" className="w-full max-w-sm mx-auto">
              <div className="input-form">
                <label htmlFor="login">Digite seu login:</label>
                <input id="login" type="text" name="login" />
              </div>
  
              <div className="input-form">
                <label htmlFor="senha">Digite sua senha:</label>
                <input id="senha" type="password" name="senha" />
              </div>
  
              <div>
                <input type="submit" value="Logar" />
              </div>
            </form>
          </div>
        </section>
        </>
    )

}