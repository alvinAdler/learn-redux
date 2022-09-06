import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'

import { toggleTheme } from '../features/themes'

const ToggleTheme = () => {

    const dispatch = useDispatch()

    const handleThemeChange = () => {
        dispatch(toggleTheme())
    }

    return (
    <Button variant="primary" onClick={handleThemeChange} className="mb-4">Toggle theme</Button>
    )
}

export default ToggleTheme