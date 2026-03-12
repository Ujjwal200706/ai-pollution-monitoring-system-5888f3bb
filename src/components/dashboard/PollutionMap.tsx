const areas = [
  { name: "Rohini", x: "28%", y: "30%", color: "text-foreground" },
  { name: "Dwarka", x: "38%", y: "48%", color: "text-foreground" },
  { name: "Anand Vihar", x: "58%", y: "50%", color: "text-foreground" },
  { name: "Mucha", x: "22%", y: "65%", color: "text-foreground" },
];

const PollutionMap = () => {
  return (
    <div className="bg-card rounded-lg overflow-hidden relative" style={{ height: 380 }}>
      {/* Simulated heatmap overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-hazardous/40 via-moderate/30 to-safe/40 rounded-lg" />
      <div className="absolute inset-0 bg-gradient-to-tl from-safe/30 via-transparent to-hazardous/50 rounded-lg" />
      
      {/* Grid lines to simulate map */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={`${i * 5}%`} x2="100%" y2={`${i * 5}%`} stroke="currentColor" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`v${i}`} x1={`${i * 5}%`} y1="0" x2={`${i * 5}%`} y2="100%" stroke="currentColor" strokeWidth="0.5" />
        ))}
      </svg>

      {/* Area labels */}
      {areas.map((area) => (
        <div
          key={area.name}
          className={`absolute font-bold text-sm ${area.color} drop-shadow-md`}
          style={{ left: area.x, top: area.y }}
        >
          {area.name}
        </div>
      ))}

      {/* Color zones */}
      <div className="absolute w-32 h-32 bg-hazardous/40 rounded-full blur-3xl" style={{ left: "15%", top: "40%" }} />
      <div className="absolute w-28 h-28 bg-hazardous/35 rounded-full blur-3xl" style={{ left: "30%", top: "25%" }} />
      <div className="absolute w-24 h-24 bg-moderate/40 rounded-full blur-2xl" style={{ left: "40%", top: "40%" }} />
      <div className="absolute w-32 h-32 bg-safe/40 rounded-full blur-3xl" style={{ left: "65%", top: "30%" }} />
      <div className="absolute w-28 h-28 bg-safe/35 rounded-full blur-3xl" style={{ left: "70%", top: "55%" }} />
    </div>
  );
};

export default PollutionMap;
