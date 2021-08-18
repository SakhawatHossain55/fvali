import requests from "services/httpService";
import { IStore } from "types";
class StoreService {
  getStores(): Promise<IStore> {
    return requests.get("/store");
  }

  getStoreByID(id: string): Promise<IStore> {
    return requests.get(`/store/${id}`);
  }

  addStore(body: {}): Promise<IStore> {
    return requests.post(`/store/`, body);
  }

  updateStore(id: string, body: {}): Promise<IStore> {
    return requests.post(`/store/${id}`, body);
  }

  deleteStore(id: string): Promise<IStore> {
    return requests.delete(`/store/${id}`);
  }
}

export default new StoreService();
