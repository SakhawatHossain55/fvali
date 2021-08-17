import requests from "./httpService";

class StoreService {
  getProducts(): any {
    requests.get("/store");
  }

  getProductsById(id: string): any {
    requests.get(`/store/${id}`);
  }

  addProduct(body: {}): any {
    requests.post(`/store/`, body);
  }

  updateProduct(id: string, body: {}): any {
    requests.post(`/store/${id}`, body);
  }

  deleteProduct(id: string): any {
    requests.delete(`/store/${id}`);
  }
}

export default new StoreService();
