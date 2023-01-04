import { useDispatch, useSelector } from 'react-redux';
import InputText from '../components/form/inputText';
import { selectEmail, selectPassword } from '../redux/loginSlice';
import { setEmail, setPassword } from '../redux/loginSlice';
import LargeButton from '../components/buttons/largeButton';
import { useNavigate } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch();
    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if(email && password) {
            navigate('/pipeline');
        } else {
            alert('Please enter your email and password')
        }
    }

    return (
        <div className='bg-dark w-screen min-h-screen flex justify-center py-8'>
            <div className="flex justify-center text-center flex-wrap w-3/5" style={{ maxWidth: '600px' }}>
                <h2 className='text-white w-full text-2xl font-semibold'>Fast Pest Sales</h2>
                <div className='w-full mb-72'>
                    <h1 className='text-5xl text-white font-bold mb-16'>Login</h1>
                    <InputText
                        name="email"
                        label="Email"
                        type="email"
                        state={email}
                        setState={(e) => dispatch(setEmail(e))}
                        helpText="Enter your email address"
                        required={true}
                        size="large"
                    />
                    <InputText
                        name="password"
                        label="Password"
                        type="password"
                        state={password}
                        setState={(e) => dispatch(setPassword(e))}
                        helpText="Enter your password"
                        required={true}
                        size="large"
                    />
                    <LargeButton
                        text="Submit"
                        handleClick={handleSubmit}
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Login;