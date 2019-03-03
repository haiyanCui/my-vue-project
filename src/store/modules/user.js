import { loginByUserName} from '@/api/login'
import {getToken} from '@/utils/auth'

const user = {
    state:{
        // user:'',
        // name:'',
        // code:'',
        // status:'',
        token: getToken()

    },
    mutations:{
        SET_TOKEN:(state, token) =>{
            state.token = token;
        },
        

        
    },
    action:{
        //用户名登录
        LoginByUserName({ commit },userInfo){
            const username = userInfo.username.trim();
            return new Promise((resolve, rejects) =>{
                loginByUserName(username,userInfo.password).then(res =>{
                    const data  = res.data;
                    commit('SET_TOKEN',data.token);
                    resolve();
                }).catch(error =>{
                    rejects(error)
                })
            })
        }
    }
}
export default user