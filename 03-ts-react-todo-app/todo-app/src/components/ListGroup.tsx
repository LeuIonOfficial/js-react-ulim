import React, {useState} from "react";

function ListGroup() {

    const [todoList, setTodoList] = useState<{title: string, content: string}[]>([])
    const [inputValue, setInputValue] = useState({
        title: '',
        content: ''
    })
    const [filterValue, setFilterValue] = useState({
        title: '',
        content: ''
    })

    const handleTitleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(prev => ({...prev, title: event.target.value}))
    }

    const handleValueInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(prev => ({...prev, content: event.target.value}))
    }

    const handleAddTodo = (): void => {
        if (inputValue.title && inputValue.content) {
        const newTodo: {title: string, content: string} = {
            title: inputValue.title,
            content: inputValue.content
        }
            setTodoList((prevList) => [...prevList, newTodo])
            setInputValue({content: '', title: ''})
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            handleAddTodo()
        }
    }

    const handleFilterInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFilterValue({title: event.target.value, content: event.target.value})
    }

    const handleDeleteItem = (index: number) => {
        const filteredList = todoList.filter((_, i) => i !== index)
        setTodoList(filteredList)
    }


    return (
        <div className='container'>
            <div className="mb-3">
                <label className="form-label">Task title</label>
                <input type="text" className="form-control"
                       placeholder="To do" onChange={handleTitleInput} value={inputValue.title} onKeyUp={handleKeyDown} />
            </div>
            <div className="mb-3">
                <label className="form-label">Task content</label>
                <input className="form-control" type='text' value={inputValue.content} onChange={handleValueInput} onKeyUp={handleKeyDown} />
            </div>
            <div>
                <button className='btn btn-primary' onClick={handleAddTodo}>Submit</button>
            </div>
            <br/>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Filter tasks</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                       placeholder="Filter" onChange={handleFilterInput}/>
            </div>
            <br/>
            <h3>Task list</h3>
            {todoList.length === 0 && <p>no item found</p>}
            <ul className="list-group">
                {todoList.filter((item) => {
                    return (
                        item.content.toLowerCase().includes(filterValue.content.toLowerCase())
                        ||
                        item.title.toLowerCase().includes(filterValue.title.toLowerCase())
                    )
                }).map((obj, index) => {
                  return (
                    <>
                        <li key={index} className="list-group-item d-flex justify-content-between">
                            <div>
                                <strong>{obj.title}</strong> <br/>
                                {obj.content}
                            </div>
                            <div>
                                <button className='btn btn-primary m-2'>Edit</button>
                                <button className='btn btn-danger' onClick={() => handleDeleteItem(index)}>Delete</button>
                            </div>
                        </li>
                    </>
                  )
                })}
                <div>
                    <button className='btn btn-danger mt-3' onClick={() => {setTodoList([])}}>Delete all</button>
                </div>
            </ul>
        </div>
    )
}

export default ListGroup;