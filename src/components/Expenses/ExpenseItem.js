import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"
import { useState } from "react"


// with destructuring
function ExpenseItem({ title, amount, date }) {

    // const expenseDate = new Date(2022, 8, 2)
    // const expenseTitle = "Car Insurance"
    // const expenseAmount = 2000

    // const [name, setName] = useState(title)

    // const handleClick = () => {
    //     setName("changed")
    // }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">₹ {amount}</div>
                </div>
            </Card>
        </li>

    )
}

export default ExpenseItem;