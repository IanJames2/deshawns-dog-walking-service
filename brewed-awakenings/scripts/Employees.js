import { getEmployees, getOrders } from "./database.js"

document.addEventListener("click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")
            const emplIDint = parseInt(employeeId)
            const employees = getEmployees()
            let count=0
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    let count=0
                    count++
                }
                // <--- Go to YouTube and search "javascript array filter" 
                /*getOrders is not a function. */
                    const employeeOrders = getOrders.filter(  
                        (order) => {
                            if (order.employeeId === employee.id) {
                                return true
                            }
                        },
                        window.alert(` ${clickEvent.target.innerText} sold ${emplIDint.employeeOrders} products `)
                    )
                }
            }
        }
)

    const employees = getEmployees()
export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

