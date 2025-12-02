import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle: string;
  trend: string;
  color: "success" | "primary" | "accent";
}

const StatsCard = ({ icon: Icon, title, value, subtitle, trend, color }: StatsCardProps) => {
  const colorClasses = {
    success: "from-success/10 to-success/5 border-success/20",
    primary: "from-primary/10 to-primary/5 border-primary/20",
    accent: "from-accent/10 to-accent/5 border-accent/20",
  };

  const iconColorClasses = {
    success: "bg-success text-primary-foreground",
    primary: "bg-primary text-primary-foreground",
    accent: "bg-accent text-primary-foreground",
  };

  return (
    <Card className={cn("p-6 shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br border-2", colorClasses[color])}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-foreground">{value}</h3>
        </div>
        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", iconColorClasses[color])}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-2">{subtitle}</p>
      <p className={cn("text-xs font-semibold", color === "success" ? "text-success" : color === "primary" ? "text-primary" : "text-accent")}>
        {trend}
      </p>
    </Card>
  );
};

export default StatsCard;
