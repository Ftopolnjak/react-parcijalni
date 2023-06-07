import { useState } from 'react';
import { SearchForm } from './components/SearchForm';
import UserInfo from './components/UserInfo';

import './App.css';

function App() {
	const [inputValue, setInputValue] = useState('');
	const [user, setUser] = useState();
	const [repo, setRepo] = useState();

	const fetchHandler = () => {
		fetch(`https://api.github.com/users/${inputValue}`)
			.then((response) => response.json())
			.then((data) => setUser(data))
			.catch((error) => console.log(error));
		fetch(`https://api.github.com/users/${inputValue}/repos`)
			.then((response) => response.json())
			.then((data) => setRepo(data))
			.catch((error) => console.log(error));
	};
	return (
		<div className='container'>
			{user ? (
				<UserInfo user={user} repo={repo} setUser={setUser} />
			) : (
				<SearchForm
					fetchHandler={fetchHandler}
					inputValue={inputValue}
					setInputValue={setInputValue}
				/>
			)}
		</div>
	);
}
export default App;
