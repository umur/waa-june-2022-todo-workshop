function Login() {
    return (
        <div className="col-4 offset-4 login-form">
            <form>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="email">Email address</label>

                    <input type="email" id="email" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="password">Password</label>

                    <input type="password" id="password" className="form-control" />
                </div>
                <button type="button" className="btn btn-primary btn-block mb-4 pull-right">Sign in</button>
            </form>
        </div>
    );
}

export default Login;