import React, { useState } from 'react'

export default function Form({handleSubmit}) {
    const [input, setInput] = useState("");

    const onSubmit = e => {
        e.preventDefault();
        handleSubmit(input);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="input-group mb-4 w-75 mx-auto">
                <input type="search" className="form-control" placeholder="Search City" aria-label="Search City" aria-describedby="basic-addon2"
                    name="search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required />
                <button type="submit" className="input-group-text" id="basic-addon2"><i className="fas fa-search"></i></button>
            </div>
        </form>
    )
}
