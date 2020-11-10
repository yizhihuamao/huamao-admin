import React, { useEffect } from 'react';

const Login: React.FC<any> = props => {
    console.log('props: ', props);
    const {
        location: { query }
    } = props;

    useEffect(() => {
        // 不安全的操作方式，不建议使用，受限于后端api未提供专门、一次性登录链接
        // http://172.16.55.16:8000/user/login/directLogin?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50SWQiOiIzNDk3OTk4MTciLCJhdWQiOiIiLCJzdWIiOiIiLCJvcmdhbml6ZVR5cGUiOiIxMCIsImxvZ2luTmFtZSI6Inplbmdkb25nMSIsImlzcyI6InZ2VVVDUyIsImV4cCI6MTYwNzUwMjg5MywiaWF0IjoxNjA0OTEwODkzLCJ1c2VyQ29kZSI6Ijk5ODI4NzYxMzU1NzUzZjlkYzU3MzY0NjUzZjY3YzdiIn0.8YBbi_-rO9cXM58q_GtGltdXymnTWG0VLnaGI1k1dIE&username=zengdong1
        localStorage.setItem('vv-authority', '["user"]');
        localStorage.setItem('token', query.token);
        localStorage.setItem('username', query.username);
        window.location.href = '/';
    }, []);
    console.log('props: ', query);
    return (
        <div
            style={{
                textAlign: 'center'
            }}
        >
            自动登录中……
        </div>
    );
};

export default Login;
