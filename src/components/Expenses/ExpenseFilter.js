import { useState } from "react";
import "./ExpenseFilter.css"

const ExpensesFilter = ({ onChangeFilter, selectedYear }) => {

    // const [dateValue, setDateValue] = useState("")

    const dropdownChangeHandler = (event) => {
        // setDateValue(event.target.value)

        // onChangeFilter(dateValue)

        onChangeFilter(event.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={selectedYear} onChange={dropdownChangeHandler}>
                    <option value='All'>All</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;