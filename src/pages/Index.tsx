import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Activity, BarChart3 } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Hospital Asset Tracking System</h1>
              <p className="text-sm text-muted-foreground">Parkwood Institute</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="overview">Project Overview</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab - Main Application UI */}
          <TabsContent value="dashboard" className="mt-6">
            <div className="space-y-6">
              {/* Search Bar */}
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search for equipment..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button>Search</Button>
                </div>
              </Card>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Assets</p>
                      <p className="text-3xl font-bold mt-2">(add count here)</p>
                    </div>
                    <Activity className="w-8 h-8 text-muted-foreground" />
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Active Tracking</p>
                      <p className="text-3xl font-bold mt-2">(add count here)</p>
                    </div>
                    <MapPin className="w-8 h-8 text-muted-foreground" />
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Analytics</p>
                      <p className="text-3xl font-bold mt-2">(add data here)</p>
                    </div>
                    <BarChart3 className="w-8 h-8 text-muted-foreground" />
                  </div>
                </Card>
              </div>

              {/* Main Content Area */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Asset List / Map View */}
                <Card className="lg:col-span-2 p-6">
                  <h2 className="text-xl font-semibold mb-4">Asset Locations</h2>
                  <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">(add map or asset list here)</p>
                  </div>
                </Card>

                {/* Sidebar */}
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                  <div className="space-y-4">
                    <Button className="w-full" variant="outline">
                      (add action button here)
                    </Button>
                    <Button className="w-full" variant="outline">
                      (add action button here)
                    </Button>
                    <Button className="w-full" variant="outline">
                      (add action button here)
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Asset Table */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                <div className="border rounded-lg">
                  <div className="p-4 border-b">
                    <p className="text-sm text-muted-foreground">(add table headers here)</p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">(add asset data table here)</p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Project Overview Tab */}
          <TabsContent value="overview" className="mt-6">
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    This project addresses the challenge of tracking mobile assets such as portable medical devices, 
                    maintenance equipment, and specialty carts that are frequently moved between units at Parkwood Institute.
                  </p>
                  <p>
                    The system aims to reduce delays, improve efficiency, and prevent equipment loss through reliable 
                    real-time tracking.
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Key Requirements</h3>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Tracking Methods: RFID, Bluetooth Low Energy (BLE), QR codes, or other solutions</li>
                  <li>Minimal staff training required</li>
                  <li>Smooth workflow integration</li>
                  <li>Privacy and infection prevention considerations</li>
                  <li>Power supply and maintenance strategies</li>
                  <li>Evaluation of commercial vs. custom-built solutions</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Project Structure</h3>
                <div className="space-y-2 text-sm text-muted-foreground font-mono">
                  <p>src/ - Frontend React application</p>
                  <p>software/backend/ - Backend API</p>
                  <p>hardware/ - Hardware designs</p>
                  <p>firmware/ - Firmware code</p>
                  <p>docs/ - Project documentation</p>
                  <p>testing/ - Test suites</p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Backend Responsibilities</h3>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Device data ingestion from tracking devices</li>
                  <li>Real-time location tracking</li>
                  <li>Asset management (CRUD operations)</li>
                  <li>User authentication and authorization</li>
                  <li>Analytics and reporting</li>
                  <li>Integration with hospital systems</li>
                </ul>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
