import React from 'react';
import style from './registration.module.css';

function Registration(){
	return(
		<div className={style.regBlock}>
			<p>
				Вы загрузили файлы на сервер. Для доступа к файлам, 
				Вам необходимо зарегистрироваться.
			</p>
			<form>
				<label htmlFor='emailReg'>Эл. почта</label>
				<input id='emailReg' type='text' name='email'/>
				<label htmlFor='usernameReg'>Имя пользователя</label>
				<input id='usernameReg' type='text' name='username'/>
				<label htmlFor='passwdReg'>Пароль</label>
				<input id='passwdReg' type='password' name='password'/>
				<label htmlFor='passwdRepeatReg'>Повторите пароль</label>
				<input id='passwdRepeatReg' type='password' name='password_repeat'/>
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