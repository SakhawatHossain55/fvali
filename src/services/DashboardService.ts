import { IDashboardState } from "../types";
import requests from "services/httpService";
class DashboardService {
  getStats(): Promise<IDashboardState> {
    return requests.get("/dashboard/stats");
  }
}

export default new DashboardService();
