import { AlertTriangle } from "lucide-react";

const Recommendations = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="bg-foreground text-card text-center py-2 rounded-t-lg font-bold text-lg">
        Recommendations
      </h3>

      {/* Hazardous Alert */}
      <div className="bg-hazardous-bg border border-hazardous/20 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-5 h-5 text-hazardous" />
          <span className="font-bold text-hazardous text-lg">Hazardous Zone Alert</span>
        </div>
        <p className="text-sm text-foreground">Area: Rohini Sector 16</p>
        <p className="text-sm text-foreground mb-3">AQI: 325</p>
        <hr className="border-hazardous/20 mb-3" />
        <ul className="space-y-1">
          <li className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-hazardous" /> Wear N95 mask
          </li>
          <li className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-hazardous" /> Avoid outdoor exercise
          </li>
          <li className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-hazardous" /> Use air purifier indoors
          </li>
        </ul>
      </div>

      {/* Moderate Alert */}
      <div className="bg-moderate-bg border border-moderate/20 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-5 h-5 text-moderate" />
          <span className="font-bold text-moderate text-lg">Moderate Pollution</span>
        </div>
        <p className="text-sm text-foreground mb-3">Area: Dwarka</p>
        <hr className="border-moderate/20 mb-3" />
        <ul className="space-y-1">
          <li className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-moderate" /> Limit outdoor activity
          </li>
          <li className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-moderate" /> Carpool or use public transport
          </li>
          <li className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-moderate" /> Monitor AQI levels
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Recommendations;
