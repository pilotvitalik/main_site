import React, { useState } from 'react';
import axios from 'axios';
import style from './registration.module.css';

function Registration(){
	const [email, setEmail] = useState('');
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPasswd, setRepeatPasswd] = useState('');


	function sendReg(){
		const obj = [
			{name: 'email', value: email},
			{name: 'user',value: userName},
			{name: 'password',value: password},
			{name: 'repeatPasswd',value: repeatPasswd},
		];
		let formData = new FormData();
		obj.forEach(item => {
			formData.append(item.name, item.value);
		});
		axios.post('/registration', formData)
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return(
		<div className={style.regBlock}>
			<p>
				Файлы успешно загружены на сервер.
			</p>
			<p>
				Для доступа к файлам,
				Вам необходимо зарегистрироваться.
			</p>
			<form>
				<div>
					<label htmlFor='emailReg'>Эл. почта:</label>
					<label htmlFor='usernameReg'>Имя пользователя:</label>
					<label htmlFor='passwdReg'>Пароль:</label>
					<label htmlFor='passwdRepeatReg'>Повторите пароль:</label>
				</div>
				<div>
					<input id='emailReg' type='text' name='email' value={email} 
						onChange={(event) => setEmail(event.currentTarget.value)}/>

					<input id='usernameReg' type='text' name='username' value={userName} 
						onChange={(event) => setUserName(event.currentTarget.value)}/>

					<input id='passwdReg' type='password' name='password' value={password} 
						onChange={(event) => setPassword(event.currentTarget.value)}/>

					<input id='passwdRepeatReg' type='password' name='password_repeat' value={repeatPasswd} 
						onChange={(event) => setRepeatPasswd(event.currentTarget.value)}/>
				</div>
			</form>
			<button type='button' onClick={sendReg}>
				Зарегистрироваться
			</button>
			<span className={style.regBtn}>
				Уже есть аккаунт?
			</span>
		</div>
	);
}

export default Registration;