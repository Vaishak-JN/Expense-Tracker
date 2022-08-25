import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem"

const ExpensesList = ({ filteredExpenses }) => {

    // let expensesContent = <p>No Expenses for this period</p>

    if (filteredExpenses.length === 0) return <h2 className="expenses-list__fallback">No expenses found.</h2>

    return (
        <ul className="expenses-list">
            {filteredExpenses.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />))}
        </ul>
    )
}

export default ExpensesList