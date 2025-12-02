import { useState } from "react";
import { Search, Activity, DollarSign, Clock, TrendingDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FloorPlan from "@/components/FloorPlan";
import AIPredictions from "@/components/AIPredictions";
import StatsCard from "@/components/StatsCard";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Activity className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">MediTrack AI</h1>
                <p className="text-sm text-muted-foreground">Equipment Intelligence System</p>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <span className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse"></span>
              All Systems Operational
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            icon={DollarSign}
            title="Monthly Savings"
            value="$127,450"
            subtitle="From reduced search time"
            trend="+12% vs last month"
            color="success"
          />
          <StatsCard
            icon={Clock}
            title="Avg. Search Time"
            value="38 seconds"
            subtitle="Per equipment lookup"
            trend="-45% improvement"
            color="primary"
          />
          <StatsCard
            icon={TrendingDown}
            title="Equipment Idle Time"
            value="18 minutes"
            subtitle="Average per device"
            trend="-28% reduction"
            color="accent"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Floor Plan Section */}
          <div className="lg:col-span-2">
            <Card className="p-6 shadow-lg">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-foreground">Floor Plan - East Wing</h2>
                  <Badge variant="outline">8 Devices Active</Badge>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search equipment (e.g., Wheelchair, IV Pump, Defibrillator...)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 text-base"
                  />
                </div>
              </div>
              <FloorPlan searchQuery={searchQuery} />
            </Card>
          </div>

          {/* AI Predictions Sidebar */}
          <div className="lg:col-span-1">
            <AIPredictions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
