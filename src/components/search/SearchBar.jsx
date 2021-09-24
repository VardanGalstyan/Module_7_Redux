import React, { useState } from 'react'
import {  Form, Row } from 'react-bootstrap'


function SearchBar() {

    const [inputValue, setInputValue] = useState('')

    return (
        <Row>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Normal text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                // onKeyDown={ }
                />
            </Form.Group>
        </Row>
    )
}

export default SearchBar
