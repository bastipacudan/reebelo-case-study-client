import { handleResponse, handleError } from "./apiUtils";
// import { request } from "./httpService";

export async function createProduct(productInfo) {

}

export async function updateProduct(productId, productInfo) {

}

export async function getAllProducts() {
    const url = "http://localhost:3000/api/product/"
    try {
        const response = await fetch(url)
        return await handleResponse(response);
    } catch(error) {
        console.log(error)
    }
}