import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
import { useState } from "react"

const NewExpense = ({ onAddExpense }) => {

    const [showForm, setShowForm] = useState(false)


    const showFormHandler = () => {
        setShowForm((prev) => prev ? false : true)
        // console.log(showForm)
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        // console.log(expenseData)

        onAddExpense(expenseData)

    }

    const addButton = <div className="new-expense__actions__show">
        <button type="submit" onClick={showFormHandler}>Add Expense</button>
    </div>

    return (
        <div className="new-expense">
            {!showForm && addButton}
            {showForm && <ExpenseForm handleShowForm={showFormHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    )
}

export default NewExpense