import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'

const ExpenseList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }
    else {
        return (
            <ul className="expenses-list">
                {props.items.map((expenseItem) => (
                    <ExpenseItem
                        key={expenseItem.id}
                        expense={expenseItem}>
                    </ExpenseItem>
                ))}
            </ul>
        )
    }
}

export default ExpenseList