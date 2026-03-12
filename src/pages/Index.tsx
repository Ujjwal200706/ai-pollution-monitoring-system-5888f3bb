import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import PollutionLegend from "@/components/dashboard/PollutionLegend";
import PollutionMap from "@/components/dashboard/PollutionMap";
import Recommendations from "@/components/dashboard/Recommendations";
import Charts from "@/components/dashboard/Charts";

const Index = () => {
  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-4 overflow-y-auto">
          <PollutionLegend />
          <div className="grid grid-cols-[1fr_350px] gap-4">
            <div>
              <PollutionMap />
              <Charts />
            </div>
            <div>
              <Recommendations />
              <div className="bg-card rounded-lg p-3 mt-4 text-center text-sm text-muted-foreground">
                Last Updated: <span className="font-bold text-foreground">10:45 AM</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
