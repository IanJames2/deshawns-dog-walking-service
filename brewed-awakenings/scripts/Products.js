import { getProducts } from "./database.js"

document.addEventListener("click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("product")) {
            console.log("I clicked!", clickEvent)
            const [, productId] = itemClicked.id.split("--") // ["product " , "2"]            
            const prodIDint = parseInt(productId)
            let prod = ""
            for (const product of products) {
                if (product.id === prodIDint) {
                    prod = product
                    // return prod
                }
            }
            window.alert(` ${clickEvent.target.innerText} costs $${prod.price} `)
        }
    }
)


const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    return html
}
