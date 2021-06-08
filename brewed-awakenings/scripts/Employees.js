import { getEmployees, getOrders } from "./database.js"

document.addEventListener("click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            console.log("I clicked!", clickEvent)
            const [, employeeId] = itemClicked.id.split("--")
            const orders = getOrders()

            for (const employee of employees) {
                    const employeeOrders = orders.filter(order => {
                            if (order.employeeId === employee.id) {
                                return true
                            }
                        }
                    )
                }
            window.alert(` ${clickEvent.target.innerText} sold ${employees.employeeOrders} products `)
            }
        }
    )

    const employees = getEmployees()
export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

