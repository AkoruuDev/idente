import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { api_SignUp } from '../../db/db.js';

function SignUp () {
    const [user, setUser] = useState({});
    const [pass, setPass] = useState();
    const [send, setSend] = useState(false);
    const [passType, setPassType] = useState('password')
    const [passTypeConfirm, setPassTypeConfirm] = useState('password')

    const navigate = useNavigate();

    function getUser(name, value) {
        setUser({
            ...user,
            [name]: value
        })
    }

    function confirmPass(name, value) {
        setPass({
            ...pass,
            [name]: value
        });
    }

    function save(event) {
        event.preventDefault();
        if (user?.email && user?.password) {
            console.log('Agora foi')
            if(user.password.length < 6) {
                toast('A senha deve conter, pelo menos, 6 caracteres')
            } 
            setSend(true);
        } else {
            toast("e-mail e/ou senha não preenchido")
        }
    }
    
    useEffect(() => {
        if (send) {
            api_SignUp(user)
                .then(res => {
                    navigate('/sign-in');
                })
                .catch(err => {
                    console.log('catch');
                    console.log(err);
                    alert('Não foi possível realizar seu cadastro. Tente novamente');
                    document.location.reload();
                })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [send]);

    function togglePassword() {
        if (passType === 'password') {
            setPassType('text');
        } else {
            setPassType('password')
        }
    }

    function togglePasswordConfirm() {
        if (passTypeConfirm === 'password') {
            setPassTypeConfirm('text');
        } else {
            setPassTypeConfirm('password')
        }
    }
    
    return (
        <section className="container">
            <div className="box-log">
                <h1 className='title'>Register</h1>
                <form className="form" onSubmit={save}>
                    <div className="input">
                        <input type='text' alt="name" name="name" id="name" placeholder="" required onChange={e => {
                            getUser(
                                e.target.name,
                                e.target.value
                            )}}/>
                        <label htmlFor="name">Nome</label>
                    </div>
                    <div className="input">
                        <input type='text' alt="login" name="email" id="email" placeholder="" required onChange={e => {
                            getUser(
                                e.target.name,
                                e.target.value
                            )}}/>
                        <label htmlFor="email">E-mail</label>
                    </div>
                    <div className="input">
                        <input type={passType} alt="password" name="password" id="password" placeholder="" required onChange={e => {
                            getUser(
                                e.target.name,
                                e.target.value
                            )}}/>
                        <label htmlFor="password">Senha</label>
                        {/* <img onClick={togglePassword} src={passType === 'password' ? off : on} alt='eye' /> */}
                    </div>
                    <div className="input">
                        <input type={passTypeConfirm} alt="passwordConfirm" name="passwordConfirm" id="passwordConfirm" placeholder="" required onChange={e => {
                            confirmPass(
                                e.target.name,
                                e.target.value
                            )}}/>
                        <label htmlFor="passwordConfirm">Confirme sua senha</label>
                        {/* <img onClick={togglePasswordConfirm} src={passTypeConfirm === 'password' ? 'off' : 'on'} alt='eye' /> */}
                    </div>
                    <span onClick={() => navigate('/')} className="span-log">Já tem uma conta? Entre</span>
                    <button type={"submit"} className="button">Entrar</button>
                </form>
            </div>
        </section>
    )
};

export default SignUp;


/* import off from "../../assets/eye-off.svg";
import on from "../../assets/eye-on.svg";

export default function SignUp() {



    function togglePassword() {
        if (passType === 'password') {
            setPassType('text');
        } else {
            setPassType('password')
        }
    }

    function togglePasswordConfirm() {
        if (passTypeConfirm === 'password') {
            setPassTypeConfirm('text');
        } else {
            setPassTypeConfirm('password')
        }
    }

    return(<></>)
} */

