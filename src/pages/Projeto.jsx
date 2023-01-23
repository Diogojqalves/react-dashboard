import '../css/projeto.css'


export default function Projeto () {
    return(
      <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        {/* dashboard actions */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8">

          {/* Left*/}
          <h1><strong>Criar Projeto</strong></h1>

          {/* Right */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            {/* Filter button */}
          
          </div>
        </div>
        {/* Cards */}
       
        <div id="projeto">
        <form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Nome da Empresa
      </label>
      <input className="appearance-none block w-full bg-slate-900  text-slate-200 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-900 focus:border-slate-900" id="grid-first-name" type="text" placeholder="UMAIA"/>
      <p className="text-red-500 text-xs italic">Por favor preencha este campo.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Nome do CEO
      </label>
      <input className="appearance-none block w-full bg-slate-900 text-slate-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-slate-900 focus:border-slate-900" id="grid-last-name" type="text" placeholder="João Alves"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Indústria/Setor
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-slate-900 text-slate-200 border border-slate-800 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-slate-900 focus:border-slate-900" id="grid-state">
                <option value="Selecione">Selecione a Indústria</option>
                <option value="Arts &amp; Entertainment">Arts &amp; Entertainment</option>
                <option value="Automotive">Automotive</option>
                <option value="Bar &amp;  Nightclub">Bar &amp;  Nightclub</option>
                <option value="Beauty/Hair Salon &amp; Day Spa">Beauty/Hair Salon &amp; Day Spa</option>
                <option value="Business Services">Business Services</option>
                <option value="Construction &amp; Engineering">Construction &amp; Engineering</option>
                <option value="Consulting">Consulting</option>
                <option value="Consumer Services">Consumer Services</option>
                <option value="Day Care Services &amp; Children's Products">Day Care Services &amp; Children's Products</option>
                <option value="Education &amp; Training">Education &amp; Training</option>
                <option value="Farm &amp; Food Production">Farm &amp; Food Production</option>
                <option value="Fashion/Décor">Fashion/Décor</option>
                <option value="Finance/Insurance">Finance/Insurance</option>
                <option value="Fitness &amp; Sports">Fitness &amp; Sports</option>
                <option value="Hotel &amp; Bed and Breakfast">Hotel &amp; Bed and Breakfast</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Medical and Health Care">Medical and Health Care</option>
                <option value="Non Profit">Non Profit</option>
                <option value="Pet Services &amp; Pet Supplies">Pet Services &amp; Pet Supplies</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Retail or Online Store">Retail or Online Store</option>
                <option value="Restaurant, Cafe &amp; Bakery">Restaurant, Cafe &amp; Bakery</option>
                <option value="Transportation">Transportation</option>
                <option value="Wedding &amp; Event Planning">Wedding &amp; Event Planning</option>
                <option value="Wholesale and Distributor">Wholesale and Distributor</option>
                <option value="Other">Other</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Número de Colaboradores
      </label>
      <input className="appearance-none block w-full bg-slate-900 text-slate-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-slate-900 focus:border-slate-900" id="grid-zip" type="text" placeholder="90210" />
    </div>
    </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        website
      </label>
      <input className="appearance-none block w-full bg-slate-900 text-slate-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-900 focus:border-slate-900" id="grid-password" type="text" placeholder="https://www.ismai.pt/pt"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Sumário Executivo
      </label>
      <textarea className="appearance-none block w-full bg-slate-900 text-slate-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-900 focus:border-slate-900" id="grid-password" rows={6} placeholder="Um bom sumário executivo deve incluir uma curta descrição sobre a empresa mencionando os seus clientes, os produtos e serviços que oferece, bem como as necessidades que supre, dentro do mercado em que atua."/>
      <p className="text-gray-600 text-xs italic">Tente escrever entre dois a três parágrafos.</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Cidade
      </label>
      <input className="appearance-none block w-full bg-slate-900 text-slate-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-slate-900 focus:border-slate-900" id="grid-city" type="text" placeholder="Maia" />
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        País
      </label>
      <input className="appearance-none block w-full bg-slate-900 text-slate-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-slate-900 focus:border-slate-900" id="grid-city" type="text" placeholder="Portugal" />
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Código Postal
      </label>
      <input className="appearance-none block w-full bg-slate-900 text-slate-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-slate-900 focus:border-slate-900" id="grid-zip" type="text" placeholder="4475-690" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0" id='projeto-btn'>
    <button id="btn-criar" className="btn bg-emerald-900 hover:bg-emerald-900 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Criar</span>
    </button> 
  </div>
  </div>
</form>
         
        </div>
      </div>
    </main>
    );
}