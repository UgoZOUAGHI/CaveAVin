<template>
<!DOCTYPE html>
<html lang="en">

    <form @submit.prevent="login">
        <div v-if="!successful">
        <h3>S'inscrire</h3>

        <label for="email_id">Email</label>
        <input v-model ="email_id" type="text" placeholder="example@xyz.com" id="email_id">
        <label for="user_name">Username</label>
        <input v-model ="user_name" type="text" placeholder="username" id="user_name">

        <label for="password">Mot de passe</label>
        <input v-model ="password" type="password" placeholder="********" id="password">

        <label for="password">Répéter le mot de passe</label>
        <input v-model="password_repeat" type="password" placeholder="********" id="password_repeat">

        <button> S'inscrire </button>
        </div>
    </form>


</html>

      
</template>

<script>
import AuthService from '@/services/AuthService.js';
export default {
    data:() => {
        return{
            email_id: "",
            password: "",
            user_name: "",
            msg: ""
        };
    },

    methods:{
        async signUp(){
            try{
                const user_info = {
                    email_id : this.email_id,
                    password : this.password,
                    user_name : this.user_name,

                };
                const response = await AuthService.SignUp(user_info);
                this.msg = response.msg;
                this.$router.push('/');
            
            }catch(error){
                this.msg = error.response.data.msg;
            }
        }
    }
};
</script>  


<style media="screen">
      *,
*:before,
*:after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}




form{
    width: 450px;
    height: 450x;
    background-color: darkred;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
    margin-top: 5%;
}
form *{
    font-family: 'Poppins',sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}
form h3{
    font-size: 32px;
    font-weight: 800;
    line-height: 42px;
    text-align: center;
}
form h1{
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    text-align: center;
}

label{
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 800;
}
input{
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255,255,255,0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight : 600;
}
::placeholder{
    color: #e5e5e5;
}
button{
    margin-top: 30px;
    width: 100%;
    background-color: #ffffff;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 800;
    border-radius: 5px;
    cursor: pointer;
}

.social div{
  background: red;
  width: 150px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255,255,255,0.27);
  color: #eaf0fb;
  text-align: center;
}


    </style>