const PollutionLegend = () => {
  return (
    <div className="bg-card rounded-lg p-4 mb-4">
      <h2 className="text-center text-lg font-bold text-foreground mb-3 border-b border-muted pb-2">
        Pollution Levels in Delhi
      </h2>
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2 border border-hazardous/30 rounded-lg px-4 py-2 bg-hazardous-bg">
          <span className="w-3 h-3 rounded-full bg-hazardous" />
          <span className="font-semibold text-hazardous text-sm">Hazardous</span>
        </div>
        <div className="flex items-center gap-2 border border-moderate/30 rounded-lg px-4 py-2 bg-moderate-bg">
          <span className="w-3 h-3 rounded-full bg-moderate" />
          <span className="font-semibold text-moderate text-sm">Moderate</span>
        </div>
        <div className="flex items-center gap-2 border border-safe/30 rounded-lg px-4 py-2 bg-safe-bg">
          <span className="w-3 h-3 rounded-full bg-safe" />
          <span className="font-semibold text-safe text-sm">Safe Areas</span>
        </div>
        <div className="flex items-center gap-3 ml-auto">
          <div className="text-center border border-border rounded-lg px-4 py-1">
            <span className="text-xs text-muted-foreground block">Avg. AQI Today</span>
            <span className="text-3xl font-extrabold text-foreground">185</span>
          </div>
          <div className="text-sm">
            <span className="font-semibold text-foreground">Most Polluted: </span>
            <span className="italic text-muted-foreground">Rohini Sector 16</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollutionLegend;
