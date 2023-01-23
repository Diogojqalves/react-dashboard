import '../css/messages.css';
import User from '../images/user-36-03.jpg';
import User2 from '../images/user-36-01.jpg';


export default function Mensagens () {
    return(
      <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <h1><strong>Conversa com Matilde Ferreira</strong></h1>
        <div id='msg'>
          <div className="container">
            <img src={User2} alt="Avatar" />
            <p>Olá. Como estás?</p>
            <span className="time-right">11:00</span>
          </div>

          <div className="container darker">
            <img src={User} alt="Avatar" className="right" />
            <p>OI! Estou bem. Obrigado por perguntares!</p>
            <span className="time-left">11:01</span>
          </div>

          <div className="container">
            <img src={User2}alt="Avatar"/>
            <p>Boa! Tens disponibilidade para reunir hoje?</p>
            <span className="time-right">11:02</span>
            </div>

          <div className="container">
            <img src={User2}alt="Avatar"/>
            <p>Encontramos uma nova lead e gostaria de discutir contigo os próximos passos.</p>
            <span className="time-right">11:02</span>
          </div>

<         div className="container">
            <img src={User2}alt="Avatar"/>
            <p>É uma fábrica que atua na indústria química.</p>
            <span className="time-right">11:02</span>
            </div>
          
          <div className="container">
            <img src={User2}alt="Avatar"/>
            <p>E precisam dum plano de negócios ASAP, para apresentar uma candidatura a um fundo comunitário.</p>
            <span className="time-right">11:02</span>
          </div>

          <div className="container darker">
            <form className="">
            <input  type="text" placeholder='Escreva algo...'/>
            <button className="btn bg-emerald-900 hover:bg-emerald-900 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Enviar</span>
              </button> 
            </form>
          </div>
        </div>
      </div>
    </main>
    );
}