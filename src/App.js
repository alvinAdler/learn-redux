import Stack from 'react-bootstrap/Stack'
import ReCAPTCHA from 'react-google-recaptcha';
import { useSelector } from 'react-redux';

import './App.css';
import InputForm from './components/InputForm';
import UserPlaceholder from './components/UserPlaceholder';
import ToggleTheme from './components/ToggleTheme';

function App() {

	const users = useSelector((state) => state.users)
	const themes = useSelector((state) => state.themes)

	const handleOnChange = () => {
		console.log("I am changed")
	}

	return (
		<div className="App" style={themes}>
			<h1 className="main-header">User Management Application</h1>
			<ToggleTheme/>

			<InputForm/>

			<Stack gap={3} className="mt-5">
				{users.map((user, index) => (
					<UserPlaceholder key={user.id + index} user={user}/>
				))}
			</Stack>

			<ReCAPTCHA
			sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
			onChange={handleOnChange}
			/>

		</div>
	);
}

export default App;
