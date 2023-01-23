import '../css/meusprojetos.css';
import ISMAI from '../images/ismai.jpg'
import IPMAIA from '../images/ipmaia.png'
import UMAIA from '../images/umaia.png'
import Edit from '../images/edit-button-svg.png'
import { Link } from 'react-router-dom';



export default function MeusProjetos () {
    return(
        <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          {/* Welcome banner */}
        
          {/* dashboard actions */}
          <div className="sm:flex sm:justify-between sm:items-center mb-8">

            {/* Left */}
           <h1><strong>Meus Projetos</strong></h1>

            {/* Right: Actions */}
            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              {/* Filter button */}
            
            </div>
          </div>
          {/* Cards */}
          
          <div id='meus'>
          <div className="card">
            <img src={ISMAI} className="bp-logo" alt="ismai logo" />
          <div className="container">
            <h4><b>ISMAI</b></h4> 
            <p>Plano de Negócios</p> 
            <div className='btn-container'>
            <button className="btn bg-slate-900 hover:bg-slate-900 text-white">
                  <img src={Edit} className="w-4 h-4 opacity-50 shrink-0" viewBox="0 0 16 16" />
                  <span className="hidden xs:block ml-2">Editar</span>
              </button> 
            <Link download target="_blank" to="/bp/BP_Ismai.pdf" >
            <button id="btn-criar" className="btn bg-emerald-900 hover:bg-emerald-900 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Transferir</span>
              </button> </Link>
              </div>
          </div>
          </div>
          <div className="card">
            <img src={IPMAIA} className="bp-logo" alt="ismai logo" id='ipmaia' />
          <div className="container">
            <h4><b>IPMAIA</b></h4> 
            <p>Plano de Negócios</p> 
            <div className='btn-container'>
            <button className="btn bg-slate-900 hover:bg-slate-900 text-white">
                  <img src={Edit} className="w-4 h-4 opacity-50 shrink-0" viewBox="0 0 16 16" />
                  <span className="hidden xs:block ml-2">Editar</span>
              </button> 
              <Link download target="_blank" to="/bp/BP_Ipmaia.pdf" >
            <button id="btn-criar" className="btn bg-emerald-900 hover:bg-emerald-900 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Transferir</span>
              </button> </Link>
              </div>
          </div>
          </div>
          <div className="card">
            <img src={UMAIA} className="bp-logo" alt="ismai logo" id='umaia' />
          <div className="container">
            <h4><b>UMAIA</b></h4> 
            <p>Plano de Negócios</p> 
            <div className='btn-container'>
            <button className="btn bg-slate-900 hover:bg-slate-900 text-white">
                  <img src={Edit} className="w-4 h-4 opacity-50 shrink-0" viewBox="0 0 16 16" />
                  <span className="hidden xs:block ml-2">Editar</span>
              </button> 
              <Link download="BP_UMAIA" target="_blank" to="/bp/BP_Ismai.pdf" >
            <button id="btn-criar" className="btn bg-emerald-900 hover:bg-emerald-900 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Transferir</span>
              </button> </Link>
              </div>
          </div>
          </div>
          </div>
        </div>
      </main>
    );
}