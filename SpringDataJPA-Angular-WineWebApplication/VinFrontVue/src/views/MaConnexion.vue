<template>
    <!DOCTYPE html>
    <html lang="en">

    <form class="connexion" @submit.prevent="handleSubmit">
        <h3 class="connexion">Connexion</h3>
        <h1 class="connexion"><router-link to="/inscription">S'inscrire</router-link></h1>

        <label class="connexion" for="username">Username</label>
        <input class="connexion" v-model="username" type="text" placeholder="example" id="username">
        <div>
            <span id="error" v-if="msg.username">{{ msg.username }}</span>
        </div>
        <label class="connexion" for="password">Mot de passe</label>
        <input class="connexion" v-model="password" type="password" placeholder="********" id="password">
        <div>
            <span id="error" v-if="msg.password">{{ msg.password }}</span>
        </div>
        <button class="connexion" :disabled="!disabled.every(i => i === false)">
            <span v-show="loading"></span>
            Connecter
        </button>
    </form>

    </html>
</template>

<script>
export default {
    name: 'MaConnexion',
    data: () => {
        return {
            username: "",
            password: "",
            msg: [],
            loading: false,
            disabled: [true,true]
        }
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
    },
    created() {
        if (this.loggedIn) {
            this.$router.push("/profile");
        }
    },
    methods: {
        handleSubmit() {
            this.loading = true;
            const user = {
                username: this.username,
                password: this.password,
            };
            this.$store.dispatch("auth/login", user)
                .then(
                    () => {
                        this.$router.push("/");
                    },
                    (error) => {
                        console.log(error);
                        this.loading = false;
                        this.message =
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                            error.message ||
                            error.toString();
                    }
                );
        },
        ValidatePassword(value) {
            if (value.length < 6) {
                this.msg['password'] = 'Il doit y avoir au moins 6 caractères';
                this.disabled = [true, this.disabled[1]];
            } else {
                this.msg['password'] = '';
                this.disabled = [false, this.disabled[1]];
            };

        },
        ValidateUsername(value){
            if (value.length < 3) {
                this.msg['username'] = 'Il doit y avoir au moins 3 caractères';
                this.disabled = [this.disabled[0],true];
            } 
            else if (value.length > 20) {
                this.msg['username'] = 'Il doit y avoir au maximum 20 caractères';
                this.disabled = [this.disabled[0],true];
            }
            else {
                this.msg['username'] = '';
                this.disabled = [this.disabled[0],false];
            };
        },
    },
    watch: {
        username(value) {
            // binding this to the data value in the email input
            // this.email = value;
            this.username = value
            this.ValidateUsername(value);
        },
        password(value) {
            // this.password = value;
            this.password = value
            this.ValidatePassword(value);
        }
    },
}

</script>  


<style media="screen">
*,
*:before,
*:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}




form.connexion {
    width: 350px;
    height: 450x;
    background-color: darkred;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
    margin-top: 5%;
}

form.connexion * {
    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}

form.connexion h3.connexion {
    font-size: 32px;
    font-weight: 800;
    line-height: 42px;
    text-align: center;
}

form.connexion h1.connexion {
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    text-align: center;
    text-decoration: underline;
}

label.connexion {
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 800;
}

input.connexion {
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 600;
}

::placeholder {
    color: #e5e5e5;
}

button.connexion {
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

.social div {
    background: red;
    width: 150px;
    border-radius: 3px;
    padding: 5px 10px 10px 5px;
    background-color: rgba(255, 255, 255, 0.27);
    color: #eaf0fb;
    text-align: center;
}

#error {
    font-size: smaller;
    font-weight: bold;
}
</style>