import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'

import { addUser } from '../features/users'

const InputForm = () => {

	const dispatch = useDispatch()

	const [user, setUser] = useState({
		id: Date.now(), username: ""
	})

	const handleSubmit = (ev) => {
		ev.preventDefault()

		dispatch(addUser({user}))
		setUser((prevState) => ({id: Date.now(), username: ""}))
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Control type="text" 
			placeholder="Username" 
			className="mb-3"
			value={user.username}
			onChange={(ev) => setUser((prevUser) => ({...prevUser, username: ev.target.value}))}
			/>
			<Button type="submit" variant="primary">Submit</Button>
		</Form>
	)
}

export default InputForm