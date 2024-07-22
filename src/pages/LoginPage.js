import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/');
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <>
            <h3>Log In</h3>
            {error && <div class="alert alert-danger" role="alert">{error}</div>}
            <div className="input-group mb-3" style={{ width: '300px', margin: 'auto' }}>
                <input placeholder="Email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <br />
            <div className="input-group mb-3" style={{ width: '300px', margin: 'auto' }}>
                <input placeholder="Password" className="form-control" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <br />
            <button className="btn btn-primary" onClick={logIn}>Log In</button>
            <br />
            <Link to="/create-account">Don't have an account? Create one here</Link>
        </>
    );
};

export default LoginPage;