import DashboardCard1001 from "../partials/dashboard/DashboardCard1001";
import DashboardCard1002 from "../partials/dashboard/DashboardCard1002";
import DashboardCard1003 from "../partials/dashboard/DashboardCard1003";
import DashboardCard1004 from "../partials/dashboard/DashboardCard1004";
import DashboardAvatars from "../partials/dashboard/DashboardAvatars";
import Edit from '../images/edit-button-svg.png'
import '../css/equipa.css'

export default function Equipa () {
    return(
        <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          {/* Welcome banner */}

          {/* dashboard actions */}
          <div className="sm:flex sm:justify-between sm:items-center mb-8">

            {/* Left: Avatars */}
            <DashboardAvatars />

            {/* Right: Actions */}
            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2" id="equipa">
              {/* Filter button */}
              <button className="btn bg-slate-900 hover:bg-slate-900 text-white">
                  <img src={Edit} className="w-4 h-4 opacity-50 shrink-0" viewBox="0 0 16 16" />
                  <span className="hidden xs:block ml-2">Editar</span>
              </button> 
              <button id="btn-criar" className="btn bg-emerald-900 hover:bg-emerald-900 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Criar</span>
              </button> 
             
            </div>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-12 gap-6">
            {/* Line chart (Acme Plus) */}
            {/* Line chart (Acme Advanced) */}
            <DashboardCard1001 />
            <DashboardCard1002 />
            <DashboardCard1003 />
            <DashboardCard1004 />
            
          </div>
        </div>
      </main>
    );
}