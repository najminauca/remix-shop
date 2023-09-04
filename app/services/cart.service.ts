import fs from "fs/promises";
import {getAllProducts} from "~/services/product.service";

export async function getAllEntries() {
    const rawFileContent = await fs.readFile('cart.json', {encoding: 'utf-8'});
    const data = JSON.parse(rawFileContent);
    return data.entries ?? [];
}

export async function addToCart(addToCart) {
    const entries = await getAllEntries();
    const products = await getAllProducts();
    const product = products.find(product => product.id === addToCart.id)
    let updatedCart = [];

    if(entries.filter(entry => entry.id === addToCart.id).length != 0) {
        entries.forEach(entry => {
            if(entry.id === addToCart.id && parseInt(product.stock) >= parseInt(addToCart.count)) {
                entry.count = parseInt(entry.count) + parseInt(addToCart.count);
            }
        })
        updatedCart = entries;
    } else {
        if(parseInt(product.stock) >= parseInt(addToCart.count)) {
            updatedCart = entries.concat(addToCart);
        }
    }
    return fs.writeFile('cart.json', JSON.stringify({entries: updatedCart || []}));
}

export async function decreaseAmount(deleteEntry) {
    const entries = await getAllEntries();
    let updatedCart = [];

    if(entries.filter(entry => entry.id == deleteEntry.id).length != 0) {
        entries.forEach(entry => {
            if(entry.id === deleteEntry.id) {
                if(entry.count > 1) {
                    entry.count = parseInt(entry.count) - 1;
                }
            }
        });
        updatedCart = entries;
    }
    return fs.writeFile('cart.json', JSON.stringify({entries: updatedCart || []}));
}

export async function removeFromCart(deleteEntry) {
    const entries = await getAllEntries();
    let index = entries.findIndex(function(entry, i){
        return entry.id === deleteEntry.id
    });
    entries.splice(index, 1);
    return fs.writeFile('cart.json', JSON.stringify({entries: entries || []}));
}