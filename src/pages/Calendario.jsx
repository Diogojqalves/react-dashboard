import Datepicker from '../partials/actions/Datepicker';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';


export default function Calendario() {
    return(
      <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        {/* dashboard actions */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8">

          {/* Left: Avatars */}
         <h1><strong>Calendário</strong></h1>

          {/* Right: Actions */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            <Datepicker />
          </div>
        </div>
        {/* Cards */}
        
        <div className="grid grid-cols-12 gap-6">
          <DashboardCard12 />
        </div>

      </div>
    </main>
    );
}