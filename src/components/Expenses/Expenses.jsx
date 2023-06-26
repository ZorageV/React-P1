import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState(2021);
    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    }
    const filterHandler = (items) => {
        return (items.date.getFullYear() == filteredYear)
    }
    const filteredExpenses = props.expenseDetails.filter(filterHandler)
    return (
        <Card className="expenses">
            <ExpenseChart expenses= {filteredExpenses}></ExpenseChart>
            <ExpensesFilter
                selectedYear={filteredYear}
                onChangeFilter={filterChangeHandler}
            ></ExpensesFilter>
            <ExpenseList items={filteredExpenses}></ExpenseList>
        </Card>
    );
};

export default Expenses;
