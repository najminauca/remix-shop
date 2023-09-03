import fs from 'fs/promises'

export async function getAllProducts() {
    const rawFileContent = await fs.readFile('products.json', {encoding: 'utf-8'});
    const data = JSON.parse(rawFileContent);
    return data.products ?? [];
}

export async function updateStock(updateStock, add: boolean) {
    const products = await getAllProducts();
    let updatedProducts = [];

    if(products.filter(product => product.id === updateStock.id).length != 0) {
        products.forEach(product => {
            if(product.id === updateStock.id) {
                if(add) product.stock = parseInt(product.stock) + 1;  //Always adds one back with minus
                else {
                    if(product.stock >= 1) product.stock = parseInt(product.stock) - parseInt(updateStock.count); //Sometimes remove by 1 with minus
                }
            }
        })
        updatedProducts = products;
    }
    return fs.writeFile('products.json', JSON.stringify({products: updatedProducts || []}));
}