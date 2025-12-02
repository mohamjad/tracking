import { Brain, Clock, MapPin, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Prediction {
  id: string;
  equipment: string;
  prediction: string;
  timeEstimate: string;
  confidence: number;
  location?: string;
  type: "availability" | "demand";
}

const predictions: Prediction[] = [
  {
    id: "1",
    equipment: "Wheelchair A",
    prediction: "Will be available",
    timeEstimate: "8 minutes",
    confidence: 94,
    type: "availability",
  },
  {
    id: "2",
    equipment: "IV Pump",
    prediction: "Predicted to be needed in Surgery",
    timeEstimate: "15 minutes",
    confidence: 87,
    location: "Room 203",
    type: "demand",
  },
  {
    id: "3",
    equipment: "Defibrillator",
    prediction: "High availability period starting",
    timeEstimate: "now",
    confidence: 91,
    type: "availability",
  },
  {
    id: "4",
    equipment: "ECG Machine",
    prediction: "Demand surge expected",
    timeEstimate: "22 minutes",
    confidence: 78,
    location: "Cardiology",
    type: "demand",
  },
];

const AIPredictions = () => {
  return (
    <Card className="p-6 shadow-lg h-fit sticky top-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
          <Brain className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">AI Predictions</h2>
          <p className="text-sm text-muted-foreground">Real-time intelligence</p>
        </div>
      </div>

      <div className="space-y-4">
        {predictions.map((pred, index) => (
          <div
            key={pred.id}
            className={cn(
              "p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-md",
              pred.type === "availability" 
                ? "bg-success/5 border-success/20 hover:border-success/40" 
                : "bg-accent/5 border-accent/20 hover:border-accent/40"
            )}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h3 className="font-semibold text-sm text-foreground mb-1">
                  {pred.equipment}
                </h3>
                {pred.location && (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <MapPin className="w-3 h-3" />
                    <span>{pred.location}</span>
                  </div>
                )}
              </div>
              <Badge 
                variant="secondary" 
                className="text-xs"
              >
                {pred.confidence}% confidence
              </Badge>
            </div>

            <p className="text-sm text-foreground mb-3">
              {pred.prediction}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="font-medium text-foreground">{pred.timeEstimate}</span>
              </div>
              {pred.type === "demand" && (
                <TrendingUp className="w-4 h-4 text-accent" />
              )}
            </div>

            {/* Confidence bar */}
            <div className="mt-3 h-1.5 bg-secondary rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-1000",
                  pred.type === "availability" ? "bg-success" : "bg-accent"
                )}
                style={{
                  width: `${pred.confidence}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t">
        <p className="text-xs text-muted-foreground text-center">
          Predictions updated every 30 seconds using ML models
        </p>
      </div>
    </Card>
  );
};

export default AIPredictions;
