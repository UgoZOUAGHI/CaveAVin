<template>
    <!DOCTYPE html>
    <html lang="en">

    <form class="inscription" @submit.prevent="handleSubmit">
        <div v-if="!successful">
            <h3 class="inscription">S'inscrire</h3>

            <label class="inscription" for="username">Email</label>
            <input class="inscription" v-model="email" type="text" placeholder="example@xyz.com" id="user_mail">
            <div>
                <span id="error" v-if="msg.email">{{ msg.email }}</span>
            </div>
            <label class="inscription" for="username">Username</label>
            <input class="inscription" v-model="username" type="text" placeholder="example" id="username">
            <div>
                <span id="error" v-if="msg.username">{{ msg.username }}</span>
            </div>
            <label class="inscription" for="password">Mot de passe</label>
            <input class="inscription" v-model="password" type="password" placeholder="********" id="password">
            <div>
                <span id="error" v-if="msg.password">{{ msg.password }}</span>
            </div>
            <!-- <label for="password">Répéter le mot de passe</label>
        <input v-model="password_confirm" type="password" placeholder="********" id="password"> -->

            <label class="inscription"> Type d'utilisateur : </label>
            <div class="radiobutton">
                <input class="increase" type="radio" name="roles" value="producteur" v-model="roles">
                <label class="textc" for="producteur">Producteur</label>
                <input class="increase" type="radio" name="roles" value="ROLE_USER" v-model="roles">
                <label class="textc" for="producteur">Client</label>
            </div>
            <div>
                <span id="error" v-if="msg.roles">{{ msg.roles }}</span>
            </div>
            <button class="inscription" :disabled="!disabled.every(i => i === false)">
                <span v-show="loading"></span>
                <label id="textInscrire">S'inscrire</label>
            </button>
        </div>
        <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
            {{ message }}
        </div>
    </form>


    </html>
</template>

<script>

export default {

    name: 'MonInscription',

    data: () => {
        return {
            username: "",
            email: "",
            password: "",
            password_confirm: "",
            roles: [],
            loading: false,
            successful: false,
            message: "",
            disabled: [true, true, true, true],
            msg: [],
        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
    },
    mounted() {
        if (this.loggedIn) {
            this.$router.push("/");
        }
    },
    methods: {

        handleSubmit() {
            const user = {
                username: this.username,
                password: this.password,
                email: this.email,
                role: this.roles
            };
            this.message = "";
            this.successful = false;
            this.loading = true;

            this.$store.dispatch("auth/register", user).then(
                (data) => {
                    this.message = data.message;
                    this.successful = true;
                    this.loading = false;
                },
                (error) => {
                    this.message =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    this.successful = false;
                    this.loading = false;
                }
            );
        },
        ValidatePassword(value) {
            if (value.length < 6) {
                this.msg['password'] = 'Il doit y avoir au moins 6 caractères';
                this.disabled = [true, this.disabled[1], this.disabled[2], this.disabled[3]];
            } else {
                this.msg['password'] = '';
                this.disabled = [false, this.disabled[1], this.disabled[2], this.disabled[3]];
            };

        },
        ValidateUsername(value) {
            if (value.length < 3) {
                this.msg['username'] = 'Il doit y avoir au moins 3 caractères.';
                this.disabled = [this.disabled[0], true, this.disabled[2], this.disabled[3]];
            }
            else if (value.length > 20) {
                this.msg['username'] = 'Il doit y avoir au maximum 20 caractères.';
                this.disabled = [this.disabled[0], true, this.disabled[2], this.disabled[3]];
            }
            else {
                this.msg['username'] = '';
                this.disabled = [this.disabled[0], false, this.disabled[2], this.disabled[3]];
            };
        },
        validateEmail(value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                this.msg['email'] = '';
                this.disabled = [this.disabled[0], this.disabled[1], false, this.disabled[3]];
            } else {
                this.msg['email'] = 'Email non valide.';
                this.disabled = [this.disabled[0], this.disabled[1], true, this.disabled[3]];
            }
        },
        validateRoles(value) {
            if (value != '') {
                this.msg['roles'] = '';
                this.disabled = [this.disabled[0], this.disabled[1], this.disabled[2], false];
            }
            else {
                this.msg['roles'] = 'Veuillez sélectionner un rôle.';
                this.disabled = [this.disabled[0], this.disabled[1], this.disabled[2], true];
            }
        }
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
        },
        email(value) {
            // binding this to the data value in the email input
            this.email = value;
            this.validateEmail(value);
        },
        roles(value) {
            this.roles = value;
            this.validateRoles(value);
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

form.inscription {
    width: 450px;
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

form.inscription * {
    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}

form.inscription h3.inscription {
    font-size: 32px;
    font-weight: 800;
    line-height: 42px;
    text-align: center;
}

form.inscription h1.inscription {
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    text-align: center;
}

.radiobutton {
    display: flex;
    align-items: center;

}

.increase {
    width: 20px;
    height: 20px;
    margin-right: 0px;
    margin-top: 30px;
}

.textc {
    margin-right: 50px;
}

label.inscription {
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 800;
}

input.inscription {
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

button.inscription {
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

#textInscrire {
    color: black;
}
</style>