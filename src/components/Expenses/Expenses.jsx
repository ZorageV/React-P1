import { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from "./ExpensesFilter"

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = (year) => {
        setFilteredYear(year)
        console.log("changed year!")
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            <ExpenseItem
                expense={props.expenseDetails[0]}
            ></ExpenseItem>
            <ExpenseItem
                expense={props.expenseDetails[1]}
            ></ExpenseItem>
            <ExpenseItem
                expense={props.expenseDetails[2]}
            ></ExpenseItem>
            <ExpenseItem
                expense={props.expenseDetails[3]}
            ></ExpenseItem>
        </Card>
    )
}


export default Expenses