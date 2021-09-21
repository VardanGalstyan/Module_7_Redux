import React, { useState } from 'react'
import { Form } from 'react-bootstrap'


function SearchBar() {

    const [inputValue, setInputValue] = useState('')

    return (
        <>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Normal text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={ }
                />
            </Form.Group>
        </>
    )
}

export default SearchBar
