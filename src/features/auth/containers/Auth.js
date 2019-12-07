import React, {useState} from 'react';
import './Auth.scss';
import { connect, useDispatch } from 'react-redux';
//Material
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import { AlertMsg, Loader } from '../../../ui';

import logo from '../../../assets/imgs/semlogo.png'
// import * as actions from '../../../state/auth/actions';

import Panel from '../components/panel/Panel';

const Auth: React.FC = () => {
  const dispatch = useDispatch();
  const page = 'signin';
  return (
    <div>
      {/* { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )} */}
      {
        page === 'signin' ? (
          <Panel>
            <div className="div-form">
              <TextField
                floatingLabelText="Endereço de email"
                name="email"
                onChange={() => {}}
                style={{width: '100%', fontSize: 19}}
              /><br />
              <TextField
                floatingLabelText="Senha"
                style={{width: '100%', fontSize: 19}}
                type='password'
                name="password"
                onChange={() => {}}
              /><br />
            </div>
            <div className="div-remember">
              <div Style="width: 100%;float: left;">
                <Checkbox
                  label="Lembrar-me"
                  checked
                  labelStyle={{marginLeft: -10, fontSize: 14}}
                />
              </div>
              <div Style="width: 100%; text-align:right ;font-family: Roboto; font-size: 13px; color:blue">
                <p className="link" Style="margin: 5px">Esqueci minha senha</p>
              </div>
            </div>
            <div className="div-remember" Style="margin-top: 50px">
              <div  Style="width: 80%;">
                <RaisedButton onClick={() => {}} label="Acessar" primary={true} style={{width: '90%'}}/>
              </div>
              <div Style="width: 80%; text-align:right ;font-family: Roboto; font-size: 13px;">
                <RaisedButton onClick={() => {}} label="Criar conta" style={{width: '90%'}}/>
              </div>
            </div>
          </Panel>
        ) : (
          <Panel>
            <div className="div-form">
              <TextField
                floatingLabelText="Endereço de email *"
                style={{width: '100%', fontSize: 19}}
                name="email"
                onChange={() => {}}
              /><br />
              <TextField
                floatingLabelText="Senha *"
                style={{width: '100%', fontSize: 19}}
                type='password'
                name="password"
                onChange={() => {}}
              /><br />
              <TextField
                floatingLabelText="Confirme sua senha *"
                style={{width: '100%', fontSize: 19}}
                type='password'
                name="repassword"
                onChange={() => {}}
              /><br />
            </div>
            <div className="div-create-account" Style="margin-top: 20px;">
              <div  Style="width: 100%;">
                <RaisedButton onClick={() => {}} label="Criar conta" primary={true} style={{width: '100%'}}/>
              </div>
            </div>
            <div className="div-signin">
              <p>Já tem uma conta? <a href="#" className="link" onClick={() => {}}>Clique para entrar</a></p>
            </div>
          </Panel>
        )
      }
    </div>
  )
}

export default Auth;