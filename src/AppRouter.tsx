import { Routes, Route } from "react-router-dom";
import Dashboard from "./console/dashboard/DashboardView";
import App from "./App";
import WorkOrdersView from "./views/WorkOrdersView";
import AppliancesView from "./views/AppliancesView";
import LogsView from "./views/LogsView";
import ReactiveView from "./console/reactive/ReactiveView";
import ProactiveView from "./console/proactive/ProactiveView";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/work-orders" element={<WorkOrdersView />} />
        <Route path="/appliances" element={<AppliancesView />} />
        <Route path="/logs" element={<LogsView />} />
        <Route path="/service/reactive" element={<ReactiveView />} />
        <Route path="/service/proactive" element={<ProactiveView />} />
      </Route>
    </Routes>
  );
}
