import fs from 'fs/promises';

export class ProductManager {
    constructor(filePath) {
        this.filePath = filePath;
    }

    async getProducts() {
        try {
            const data = await fs.readFile(this.filePath, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }

    async getProductById(id) {
        const products = await this.getProducts();
        return products.find(prod => prod.id == id);
    }

    async addProduct(product) {
        const products = await this.getProducts();
        const newProduct = { id: Date.now().toString(), ...product };
        products.push(newProduct);
        await fs.writeFile(this.filePath, JSON.stringify(products, null, 2));
        return newProduct;
    }

    async updateProduct(id, updatedFields) {
        const products = await this.getProducts();
        const index = products.findIndex(prod => prod.id == id);
        if (index === -1) return null;
        
        products[index] = { ...products[index], ...updatedFields };
        await fs.writeFile(this.filePath, JSON.stringify(products, null, 2));
        return products[index];
    }

    async deleteProduct(id) {
        let products = await this.getProducts();
        const newProducts = products.filter(prod => prod.id != id);
        if (products.length === newProducts.length) return null;
        
        await fs.writeFile(this.filePath, JSON.stringify(newProducts, null, 2));
        return true;
    }
}
