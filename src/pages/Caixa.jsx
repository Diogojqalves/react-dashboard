import '../css/caixa.css'
import Edit from '../images/edit-button-svg.png'


export default function Inbox () {
    return(
      <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

        {/* Welcome banner */}
      
        {/* dashboard actions */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8">

          {/* Left: Avatars */}
         <h1><strong>Caixa de Entrada</strong></h1>

          {/* Right: Actions */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            {/* Filter button */}
            <button className="btn bg-slate-900 hover:bg-emerald-900 text-white">
                  <img src={Edit} className="w-4 h-4 opacity-50 shrink-0" viewBox="0 0 16 16" />
                  <span className="hidden xs:block ml-2">Novo</span>
              </button> 
          </div>
        </div>
        {/* Cards */}
        <div id='tabela-email'>
        <table>
          <tbody>
          <tr className='por-ler'>
            <th>Nome</th>
            <th>Assunto</th>
            <th>Data</th>
          </tr>
          <tr className='por-ler'>
            <td><strong>Olga Semklo</strong></td>
            <td><strong>#01 Newsletter 2023</strong></td>
            <td><strong>1 Jan</strong></td>
          </tr>
          <tr className='por-ler'>
          <td><strong>Burak Long</strong></td>
            <td><strong>Planeamento orçamento 2023</strong></td>
            <td><strong>1 Jan</strong></td>
          </tr>
          <tr className='lido'>
            <td>Alex Shatov</td>
            <td>Convite reunião - Sprint Review</td>
            <td>31 Dez</td>
          </tr>
          <tr className='lido'>
            <td>Philip Harbach</td>
            <td>Projeto UMAIA - Próximos passos</td>
            <td>29 Dez</td>
           </tr>
          <tr className='lido'>
            <td>Mirko Fisuk</td>
            <td>Documento partilhado consigo</td>
            <td>29 Dez</td>
          </tr>
          <tr className='lido'>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
            <td>N/a</td>
          </tr>
          <tr className='lido'>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
            <td>N/a</td>
          </tr>
          <tr className='lido'>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
            <td>N/a</td>
          </tr>
          <tr className='lido'>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
            <td>N/a</td>
          </tr>
          <tr className='lido'>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
            <td>N/a</td>
          </tr>
          <tr className='lido'>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
            <td>N/a</td>
          </tr>
        </tbody>
        </table> 
        <div className='btn-caixa'>
        <a className="previous round">&#8249;</a>
        <a className="next round">&#8250;</a>
        </div>
        </div>
        
      </div>
    </main>
    );
}