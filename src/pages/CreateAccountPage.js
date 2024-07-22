import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const CreateAccountPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const createAccount = async () => {
        try {
            if (password !== confirmPassword) {
                setError('Passwords don\'t match');
                return;
            }

            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/');
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <>
            <h3>Create Account</h3>
            {error && <div class="alert alert-danger" role="alert">{error}</div>}
            <div className="input-group mb-3" style={{ width: '300px', margin: 'auto' }}>
                <input placeholder="Email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <br />
            <div className="input-group mb-3" style={{ width: '300px', margin: 'auto' }}>
                <input placeholder="Password" className="form-control" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <br />
            <div className="input-group mb-3" style={{ width: '300px', margin: 'auto' }}>
                <input placeholder="Confirm Password" className="form-control" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            </div>
            <br />
            <button className="btn btn-primary" onClick={createAccount}>Creare account</button>
            <br />
            <Link to="/login">Already have an account? Log in here</Link>
        </>
    );
};

export default CreateAccountPage;