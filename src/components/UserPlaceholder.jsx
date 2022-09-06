import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'

import { deleteUser, updateUser } from '../features/users'

const UserPlaceholder = ({user}) => {

	const [newUsername, setNewUsername] = useState("")

	const dispatch = useDispatch()
	const themes = useSelector((state) => state.themes)

	const handleUsernameChange = (ev) => {
		ev.preventDefault()
		
		dispatch(updateUser({newUsername, userId: user.id}))
	}

	const handleDeleteUser = (userId) => {
		dispatch(deleteUser({userId}))
	}

	return (
		<Card style={themes}>
			<Card.Body>
				<Card.Title>{user.username}</Card.Title>
				<Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo saepe quae sunt harum deleniti molestias! </Card.Text>
				<Button variant="danger" type="button" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
				<Form onSubmit={handleUsernameChange} className="mt-3">
					<Stack direction="horizontal">
						<Form.Control placeholder='New Username' value={newUsername} onChange={(ev) => setNewUsername(ev.target.value)}/>
						<Button type="submit" variant="success">Update</Button>
					</Stack>
				</Form>
			</Card.Body>
		</Card>
	)
}

export default UserPlaceholder