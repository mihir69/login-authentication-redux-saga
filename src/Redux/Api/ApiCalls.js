import customeAxios from './Axios';

export const getLoginAuth = (action) => {
    const res = customeAxios
        .post('auth/login', action)
        .then((res) => {
            console.log(res.data);
            return (res.data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
    return res;
};
