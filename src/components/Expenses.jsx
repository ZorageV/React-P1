import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from './Card'

const Expenses = (props) => {
    return (
        <Card className="expenses">
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