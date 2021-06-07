import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

/**
// Function whose responsibility is to find the employee for an order
const findemployee = (order, allEmployees) => {
    let orderEmployee = null

    for (const employee in allEmployees) {
        if (employee.id === order.employeeId) {
            orderEmployee = employee
        }
    }

    return orderEmployee
}
 */