// native tools
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// created tools
import { api_SignIn } from '../../db/db.js';
import { AuthContext } from '../../provider/auth.js';

function SignIn () {
    const [login, setLogin] = useState({});
    const [send, setSend] = useState(false);
    const keepUserLogged = useContext(AuthContext)

    const navigate = useNavigate();

    function getUser(name, value) {
        setLogin({
            ...login,
            [name]: value
        })
    }

    function save(event) {
        event.preventDefault();
        if (login?.email && login?.password) {
            setSend(true);
        } else {
            toast("e-mail e/ou senha não preenchido")
        }
    }

    useEffect(() => {
        if (send) {
            api_SignIn(login)
              .then((res) => {
                keepUserLogged(
                  JSON.stringify({
                    name: res.data.name,
                    email: res.data.email,
                    token: res.data.token,
                  })
                );
                console.log(res);
                navigate('/home');
              })
              .catch((err) => {
                console.log('catch');
                console.log(err);
                alert(err.response.data);
                document.location.reload();
              });
          }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [send])

    return(
        <section className='container'>
            <div className='sign-box'>
                <div>
                    <h1 className='title'>Sign In</h1>
                </div>
                <form onSubmit={save} className='form'>
                    <div className='input'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email"
                            onChange={e => {
                                getUser(e.target.name, e.target.value)
                            }}
                        />
                    </div>

                    <div className='input'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password"
                            onChange={e => {
                                getUser(e.target.name, e.target.value)
                            }}
                        />
                    </div>

                    <div>
                        <button type="submit" className='button'>Sign In</button>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default SignIn;