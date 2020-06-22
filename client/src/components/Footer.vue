
<template>
    <v-footer padless class="footer">
        <v-card 
         flat 
         tile
         class="white--text text-center black" 
         width="2000px">
            <v-card-text 
             class="white--text text-center text-subtitle-1 pt-10 font-weight-bold">
                Subscribe for hot updates
            </v-card-text>

            <v-row justify="center" class="pt-1">
                <v-col cols="12" sm="5" class="pa-0 ma-0 text-start small-text">
                    Enter your email here*
                </v-col>
            </v-row>

            <v-row justify="center">
                <v-col cols="12" sm="4" class="pa-0 ma-0">
                    <v-text-field 
                     :rules="rules" 
                     placeholder="Email" 
                     width="200px"
                     class="pa-0 ma-0"
                     v-model="email"
                     dark>
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="1" class="px-0">
                    <v-btn 
                     color="grey lighten-5"
                     tile
                     small
                     class="black--text"
                     @click="subscribe">
                        Submit
                    </v-btn>
                </v-col>
            </v-row>
            <br>
            <v-card-text 
             class="white--text pa-0 ma-0 small-text">
                Follow us:
            </v-card-text>

            <v-card-text class="pa-0 ma-0">
                <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                dark
                icon
                >
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text class="pt-3 grey--text text-center small-text">
                {{ new Date().getFullYear() }} by Bread. Proudly created with Wix.com
            </v-card-text>
        </v-card>
    </v-footer>
</template>


<script>
    import EmailService from '@/services/EmailService'
    
    export default {
        data: () => ({
            rules: [
                value => !!value || "Required.",
                value => (value || "").length <= 20 || "Max 20 characters",
                value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || "Invalid e-mail.";
                }
            ],
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
            email: ''
        }),
        methods:{
            async subscribe(){
                try{
                    const response = await EmailService.subscribe(this.email)
                    this.email = ''
                    alert(response.data.message)
                    this.$router.push({ path: '/' })  
              }catch(err){
                  console.log(err)
              }
              
            }
        }
    };
</script>

<style scoped>
    .footer {
    margin-top: auto;
    }
    .small-text{
        font-size: 10px;
    }
</style>