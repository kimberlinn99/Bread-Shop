<template>
    <v-container class="pt-0 mt-0">
        <v-row>
            <v-col col="12" sm="5" class="pt-7">
                <special-topic
                 title="contact"
                 subtitle="Our Bakery">
                </special-topic>
            </v-col>
            <v-col class="pa-0 ma-0">
                <img src="@/assets/Contact/owner.jpg">
            </v-col>
        </v-row>

        <v-row>
            <v-col col="12" sm="4" class="pb-0">
                <p class="text-caption">Email. info@mysite.com <br>
                Tel. 123-456-7890</p>
                <p class="text-caption pt-6">We want to hear from you</p>
            </v-col>
        </v-row>

        <v-row class="pt-0 mb-8 attach">
            <v-col col="12" sm="4" class="pt-0">
                <form action="" @submit="submitForm()">
                    <label for="name">Enter your name</label>
                    <input type="text" placeholder="Name" v-model="name">
                    <label for="email">Enter your Email *</label>
                    <input type="email" 
                     placeholder="Email" 
                     v-model="email"
                     required 
                     pattern="\S+">
                    <label for="name">Enter your message</label>
                    <textarea rows="4" cols="39" v-model="message" placeholder="Message">
                    </textarea>
                    <v-btn tile text dark depressed small 
                     class="px-7 text-capitalize font-weight-light text-in-button submit-button"
                     type="submit">
                        Submit
                    </v-btn>
                    <br>
                    <p 
                     class="text-in-button submit-message"
                     v-if="submitMessage != ''">
                        {{ submitMessage }}
                    </p>
                </form>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="pt-2">
                <img src="@/assets/Contact/google-map.png">
            </v-col>
            <v-col col="12" sm="4" class="pt-9">
                <special-topic
                 title="address"
                 subtitle="& Hour">
                </special-topic>
                <br>
                <div class="text-caption">
                    <p>500 Terry Francois Street San Francisco, CA 94158</p>
                    <p>
                        Monday - Thursday  7am - 7pm <br>
                        Friday - Saturday  7am - 4pm <br>
                        Sunday - Closed
                    </p>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import SpecialTopic from '../components/Special-Topic'
    import ContactService from '@/services/ContactService'

    export default {
        components: {
            SpecialTopic,
            ContactService
        },
        data () {
            return {
                name: '',
                email: '',
                message: '',
                submitMessage: ''
            }
        },
        methods: {
            async submitForm(){
                const response = await ContactService.sendFeedback(
                    this.name,
                    this.email, 
                    this.message)
                this.submitMessage = 'Thank you for submitting!'
                return false
            }
        }
    }
</script>

<style lang="scss" scoped>
    input {
        width: 100%;
        border: 1px solid black;
        padding: 2px 7px;
    }
    label, input, textarea {
        font-size: 0.8em;
    }
    .attach {
        margin-top: -12px;
    }
    textarea {
        resize: none;
        border: 1px solid black;
        border-radius: 0;
        padding: 2px 6px;
    }
    .submit-button{
        background-color: black;
    }
    .text-in-button {
        font-size: 0.7em;
        float: right;
    }
    .submit-message {
        margin-left: 150px;
        margin-top: 5px;
        position: absolute;
    }
    img {
        position: absolute;
    }
</style>