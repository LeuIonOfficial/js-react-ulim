import React, {useState} from "react";

function ListGroup() {

    const [todoList, setTodoList] = useState<{title: string, content: string}[]>([])
    const [inputValue, setInputValue] = useState({
        title: '',
        content: ''
    })

    const handleTitleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(prev => ({...prev, title: event.target.value}))
    }

    const handleValueInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(prev => ({...prev, content: event.target.value}))
    }

    const handleAddTodo = (): void => {
        if (inputValue.title && inputValue.content) {
        const newTodo: {title: string, content: string} = {
            title: inputValue.title,
            content: inputValue.content
        }
            setTodoList((prevList) => [...prevList, newTodo])
            setInputValue({title: '', content: ''})
        }
    }


    return (
        <div className='container'>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Task title</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                       placeholder="To do" onChange={handleTitleInput} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Task content</label>
                <input className="form-control" onChange={handleValueInput} />
            </div>
            <div>
                <button className='btn btn-primary' onClick={handleAddTodo}>Submit</button>
            </div>
            <br/>
            {todoList.length === 0 && <p>no item found</p>}
            <ul className="list-group">
                {todoList.map((obj, index: number) => {
                  return (
                    <>
                        <li key={index} className="list-group-item">
                            <strong>{obj.title}</strong> <br/>
                            {obj.content}
                        </li>
                    </>
                  )
                })}
            </ul>
        </div>
    )
}

export default ListGroup;