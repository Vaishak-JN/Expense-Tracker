import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses({ expenses }) {

    const [filteredYear, setFilteredYear] = useState("All")

    const filterChangeHandler = (selectedDate) => {
        setFilteredYear(selectedDate)

        console.log(selectedDate)
    }

    const filteredExpensesByYear = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear)

    // let expensesContent = <p>No Expenses for this period</p>

    // if (filteredExpensesByYear.length > 0) {
    //     expensesContent = filteredExpensesByYear.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
    // }

    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />

            {/* {filteredExpensesByYear.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)} */}

            {/* {(filteredYear == "All") ? expenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />) : filteredExpensesByYear.length === 0 ? (<p>No Expenses for this period</p>) : (filteredExpensesByYear.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))} */}

            {/* ********** OR *********** */}

            {/* {((filteredYear == "All") && expenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))}

            {filteredExpensesByYear.length === 0 && <p>No Expenses for this period</p>}

            {filteredExpensesByYear.length > 0 && filteredExpensesByYear.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)} */}

            {/* ********** OR *********** */}

            {/* {((filteredYear == "All") && expenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)) || <ExpensesList filteredExpenses={filteredExpensesByYear} />} */}

            {((filteredYear == "All") && <ExpensesList filteredExpenses={expenses} />) || <ExpensesList filteredExpenses={filteredExpensesByYear} />}

        </Card>

    )
}

export default Expenses