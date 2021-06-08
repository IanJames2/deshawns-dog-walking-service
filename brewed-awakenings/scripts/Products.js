import { getProducts } from "./database.js"

document.addEventListener("click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("product")) {
            const [, productId] = itemClicked.id.split("--")

            const prodIDint = parseInt(productId)

            const products = getProducts()

            let count = 0
            for (const product of products) {
                if (product.id === prodIDint) {
                    count++
                }
            }
            window.alert(` ${clickEvent.target.innerText} costs ${prodIDint.price} `)
        }
    }
)

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}
