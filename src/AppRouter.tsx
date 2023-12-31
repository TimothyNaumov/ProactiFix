import { Routes, Route } from "react-router-dom";
import Dashboard from "./console/dashboard/DashboardView";
import App from "./App";
import AppliancesView from "./console/appliance/AppliancesView";
import ReactiveView from "./console/reactive/ReactiveView";
import ProactiveView from "./console/proactive/ProactiveView";
import ApplianceView from "./console/appliance/ApplianceView";
import WorkOrdersView from "./console/work-orders/WorkOrdersView";
import LogsView from "./console/maintenance_logs/LogsView";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/work-orders" element={<WorkOrdersView />} />
        <Route path="/appliances" element={<AppliancesView />} />
        <Route path="/appliances/:id" element={<ApplianceView />} />
        <Route path="/logs" element={<LogsView />} />
        <Route path="/service/reactive" element={<ReactiveView />} />
        <Route path="/service/proactive" element={<ProactiveView />} />
      </Route>
    </Routes>
  );
}
