import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Social from '../shared/Social';
import loginPhoto from '../../src/assets/Mobile login-bro.png'
import useAxiosPublic from '../hooks/useAxiosPublic';
import moment from 'moment/moment';


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('')
    const axiosPublic = useAxiosPublic()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const from = location.state?.from?.pathname || "/";
    // console.log(from)
    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // validate premium user or not
        const { data } = await axiosPublic.get(`/user/${email}`);
        

        const today = moment().utc(); 
        

        const expirationDate = moment(data.premiumTaken).utc(); 
       

        if (expirationDate.isAfter(today)) {
            // console.log("The premium is still valid.");
            signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(err=>{
                setError(err.message)
            })

        } else {
            // console.log("The premium has expired.");
            axiosPublic.patch(`/expired/${email}`)
            .then(res=>{
                console.log(res.data)
                if (res.data.modifiedCount > 0){
                    signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(err=>{
                setError(err.message)
            })
                }
            })
        }



        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(err=>{
                setError(err.message)
            })
    }

    const handleAdminLogin=()=>{
    setEmail('helly@gmail.com')
    setPassword('asdA12#')
    
    }


    return (
        <div className='lora'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 ">
                        <h1 className="text-4xl lg:text-6xl font-bold lora">Login now!</h1>
                        <img className='w-2/3 h-2/3 lg:w-1/2 lg:h-1/2  mx-auto' src={loginPhoto} alt="login img" />
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <button onClick={handleAdminLogin} className='btn bg-blue-400 text-white'> Demo Admin</button>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={email} placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" defaultValue={password} placeholder="password" className="input input-bordered" />

                            </div>

                            <div className="form-control mt-6">
                                <input className="btn bg-blue-400 text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <Social from={from}></Social>
                        {error && <p className='font-bold text-red-500'>{error}</p>}
                        <p className='ml-4 py-4'><small>New Here? <Link to="/signup"><span className='text-blue-600 font-bold'>Create an account</span></Link> </small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;