import requests from "./httpService";

class ProductService {
  getProducts(): any {
    requests.get("/product");
  }

  getProductsById(id: string): any {
    requests.get(`/product/${id}`);
  }

  addProduct(body: {}): any {
    requests.post(`/product/`, body);
  }

  updateProduct(id: string, body: {}): any {
    requests.post(`/product/${id}`, body);
  }

  deleteProduct(id: string): any {
    requests.delete(`/product/${id}`);
  }
}

export default new ProductService();
