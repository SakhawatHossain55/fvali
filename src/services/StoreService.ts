import { IProduct } from "./../types.d";
import requests from "services/httpService";
class StoreService {
  getStores(): Promise<IProduct[]> {
    return requests.get("/store");
  }

  getStoreByID(id: string): Promise<IProduct> {
    return requests.get(`/store/${id}`);
  }

  addStore(body: {}): Promise<IProduct> {
    return requests.post(`/store/`, body);
  }

  updateStore(id: string, body: {}): Promise<IProduct> {
    return requests.post(`/store/${id}`, body);
  }

  deleteStore(id: string): Promise<IProduct> {
    return requests.delete(`/store/${id}`);
  }
}

export default new StoreService();
