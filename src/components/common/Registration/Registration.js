import React from 'react';
import style from './registration.module.css';

function Registration(){
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
					<input id='emailReg' type='text' name='email'/>
					<input id='usernameReg' type='text' name='username'/>
					<input id='passwdReg' type='password' name='password'/>
					<input id='passwdRepeatReg' type='password' name='password_repeat'/>
				</div>
			</form>
			<button type='button'>
				Зарегистрироваться
			</button>
			<a href='#'>
				Уже есть аккаунт?
			</a>
		</div>
	);
}

export default Registration;