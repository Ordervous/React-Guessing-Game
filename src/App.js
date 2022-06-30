import React, { useState } from 'react'

function App() {
  
  
  
  
  
  
  
  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={message.name} onChange={handleChange} name="name" />
    </Form.Group>
    <Form.Group className="mb-3" >
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" value={message.message} onChange={handleChange} name="message" />
    </Form.Group>

    <Button type="submit">Send</Button>
</Form>
  )
}

export default App;
