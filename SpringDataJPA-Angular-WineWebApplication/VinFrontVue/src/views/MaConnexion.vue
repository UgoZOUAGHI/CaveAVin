<template>
<!DOCTYPE html>
<html lang="en">
    {{ user.login }}
    <form @submit.prevent="login">
        <h3>Connexion</h3>
        <!-- {{  user.login }} -->
        <h1><router-link to="/inscription">S'inscrire</router-link></h1>

        <label for="user_login">Email</label>
        <input type="text" placeholder="example@xyz.com" id="user_mail" v-model="user.email">

        <label for="user_password">Mot de passe</label>
        <input type="password" placeholder="********" id="user_password" v-model="user.password">

        <button class ="button" type ="submit">Se connecter</button>
    </form>

</html>

      
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            user:{
                email:'',
                password:''
            }
        }
    },
    methods:{
        login(){
            
    }
}}
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
    width: 350px;
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
    text-decoration: underline;
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