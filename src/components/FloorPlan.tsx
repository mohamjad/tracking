import { useState, useEffect } from "react";
import { 
  Activity, 
  Zap, 
  Heart, 
  Droplet, 
  Syringe,
  Bed,
  Accessibility,
  Stethoscope
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Equipment {
  id: string;
  name: string;
  icon: any;
  position: { x: number; y: number };
  status: "available" | "in-use" | "maintenance";
  location: string;
}

const equipment: Equipment[] = [
  { id: "1", name: "Wheelchair A", icon: Accessibility, position: { x: 15, y: 20 }, status: "in-use", location: "Entrance" },
  { id: "2", name: "IV Pump", icon: Droplet, position: { x: 65, y: 25 }, status: "available", location: "Room 203" },
  { id: "3", name: "Defibrillator", icon: Zap, position: { x: 35, y: 45 }, status: "available", location: "Emergency" },
  { id: "4", name: "Vital Monitor", icon: Activity, position: { x: 75, y: 55 }, status: "in-use", location: "ICU" },
  { id: "5", name: "ECG Machine", icon: Heart, position: { x: 50, y: 70 }, status: "available", location: "Cardiology" },
  { id: "6", name: "Infusion Pump", icon: Syringe, position: { x: 20, y: 65 }, status: "in-use", location: "Ward B" },
  { id: "7", name: "Patient Bed", icon: Bed, position: { x: 80, y: 35 }, status: "available", location: "Room 105" },
  { id: "8", name: "Stethoscope Set", icon: Stethoscope, position: { x: 45, y: 30 }, status: "maintenance", location: "Supply Room" },
];

interface FloorPlanProps {
  searchQuery: string;
}

const FloorPlan = ({ searchQuery }: FloorPlanProps) => {
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setHighlightedId(null);
      return;
    }

    const found = equipment.find((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setHighlightedId(found ? found.id : null);
  }, [searchQuery]);

  const getStatusColor = (status: Equipment["status"]) => {
    switch (status) {
      case "available":
        return "bg-success";
      case "in-use":
        return "bg-warning";
      case "maintenance":
        return "bg-destructive";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="relative bg-muted/30 rounded-xl border-2 border-border p-8 min-h-[600px]">
      {/* Room Labels */}
      <div className="absolute top-4 left-8 bg-card border rounded-lg px-3 py-2 text-xs font-medium">
        Entrance
      </div>
      <div className="absolute top-4 right-8 bg-card border rounded-lg px-3 py-2 text-xs font-medium">
        Emergency
      </div>
      <div className="absolute bottom-4 left-8 bg-card border rounded-lg px-3 py-2 text-xs font-medium">
        Ward B
      </div>
      <div className="absolute bottom-4 right-8 bg-card border rounded-lg px-3 py-2 text-xs font-medium">
        ICU
      </div>

      {/* Hallway indicators */}
      <div className="absolute top-1/2 left-4 right-4 h-16 bg-secondary/40 rounded transform -translate-y-1/2 border-2 border-dashed border-border/50"></div>

      {/* Equipment Items */}
      {equipment.map((item) => {
        const Icon = item.icon;
        const isHighlighted = highlightedId === item.id;

        return (
          <div
            key={item.id}
            className={cn(
              "absolute group cursor-pointer transition-all duration-300",
              isHighlighted && "animate-pulse z-10"
            )}
            style={{
              left: `${item.position.x}%`,
              top: `${item.position.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className={cn(
                "relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg",
                isHighlighted
                  ? "bg-primary scale-125 ring-4 ring-primary/30"
                  : "bg-card border-2 border-border hover:scale-110 hover:shadow-xl"
              )}
            >
              <Icon
                className={cn(
                  "w-8 h-8 transition-colors",
                  isHighlighted ? "text-primary-foreground" : "text-foreground"
                )}
              />
              <div
                className={cn(
                  "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-card",
                  getStatusColor(item.status)
                )}
              ></div>
            </div>

            {/* Tooltip */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
              <div className="bg-card border shadow-lg rounded-lg px-4 py-2 min-w-[180px]">
                <p className="font-semibold text-sm text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.location}</p>
                <Badge
                  variant={item.status === "available" ? "default" : "secondary"}
                  className="mt-1 text-xs"
                >
                  {item.status}
                </Badge>
              </div>
            </div>
          </div>
        );
      })}

      {/* Legend */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-card border rounded-lg px-4 py-3 shadow-lg">
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-success"></div>
            <span className="text-muted-foreground">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-warning"></div>
            <span className="text-muted-foreground">In Use</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive"></div>
            <span className="text-muted-foreground">Maintenance</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
