<template>
    <div>
        <v-card tile flat class="mt-5">
            <h2 class="font-weight-bold text-uppercase">
                {{ typeName }}
            </h2>
            <p class="text-caption mx-5 px-3">
                Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Animi, ipsam!
            </p>
        </v-card>

        <v-card tile flat class="mt-2">
            <v-layout row wrap class="ma-0">
                <v-flex xs12 md5 
                 class="ma-4" 
                 v-for="(menu, index) in listType"
                 :key="index">
                    <v-dialog
                     v-model="dialog[menu.name]"
                     persistent
                     width="350"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-card tile 
                             min-height="200px" 
                             class="card-overlay-container"
                             v-bind="attrs"
                             v-on="on">

                                <!-- Normal card -->
                                <img :src="getMenuImage(menu)" class="pt-2 pr-0"/> 
                                <p class="text-body-2 pt-4 px-4 ma-0 text-left text-uppercase">
                                    {{ menu.name }}
                                </p>
                                <p class="text-caption pt-1 pb-3 px-4 ma-0 text-left">
                                    ${{ menu.price }}
                                    <span class="add-order-symbol">+</span>
                                </p>

                                <!-- Card overlay when hover -->
                                <div class="card-overlay">
                                    <v-card tile flat outlined>
                                        <p class="text-body-2 pt-4 px-4 ma-0 text-left text-uppercase">
                                            {{ menu.name }}
                                        </p>
                                        <p class="text-caption pt-1 pb-3 px-4 ma-0 text-left">
                                            ${{ menu.price }}
                                        </p>
                                        <p class="text-caption text-left px-4 pr-2">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            <span class="add-order-symbol my-0 pr-2">+</span>
                                        </p>
                                    </v-card>
                                </div>
                            </v-card>
                        </template>

                        <!-- Dialog -->
                        <v-card tile class="card-dialog">
                            <div>
                                <v-spacer></v-spacer>
                                <v-icon color="black" class="close-icon"
                                 @click.stop="$set(dialog, menu.name, false)"
                                 @click="resetOrder()">
                                    mdi-close-circle
                                </v-icon>
                            </div>
                            <img :src="getMenuImage(menu)" class="dialog-image"/> 

                            <v-card-title class="text-uppercase text-body-1">
                                {{ menu.name }}
                            </v-card-title>
                            <v-card-text class="text-caption black--text">
                                <span class="text-body-2">${{ menu.price }}</span> <br>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, asperiores.
                            </v-card-text>
                            <v-card-text class="text-body-2 black--text pb-1">
                                Special request?    
                            </v-card-text>

                            <v-divider class="mx-5"></v-divider> 

                            <!-- Special Request -->
                            <v-card-text class="detail-special-request pt-2 pb-5">
                                <div 
                                 v-if="!showSpecialRequestBox" 
                                 @click="showSpecialRequestBox = true"
                                 class="special-request-description">
                                    <span>+</span>
                                    Add them here. We’ll do our best to make it happen
                                </div>
                                <textarea 
                                 name="specialRequest" 
                                 id="specialRequest"
                                 cols="50" rows="2" 
                                 v-if="showSpecialRequestBox"
                                 v-model="specialRequest"
                                 placeholder="What's your request?">
                                </textarea>

                                <!-- White Space below textarea -->
                                <v-card-text 
                                 v-if="showSpecialRequestBox"
                                 @click="showSpecialRequestBox = !showSpecialRequestBox"
                                 class="pa-0 below-special-request">
                                 There is an extra fee *
                                </v-card-text>
                            </v-card-text>

                            <v-card-text class="text-body-2 black--text pb-1">
                                Quantity
                                <div style="float: right;" >
                                    <v-icon small 
                                     color="black" 
                                     class="pr-1 pb-1"
                                     @click="quantity--; checkMinQuantity();"
                                     >
                                        mdi-minus-circle-outline
                                    </v-icon>
                                    {{ quantity }} 
                                    <v-icon small 
                                     color="black"
                                     class="pl-1 pb-1"
                                     @click="quantity++">
                                        mdi-plus-circle-outline
                                    </v-icon>
                                </div>
                            </v-card-text>
                               
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn depressed tile text block height="35"
                                 class="text-caption text-uppercase white--text order-show-menu__submit-order" 
                                 @click.stop="$set(dialog, menu.name, false)"
                                 @click="orderMenu(menu.name, menu.price); showSpecialRequestBox = false;"
                                >
                                    <v-icon small class="pr-2">mdi-plus</v-icon>
                                    Add to my order
                                </v-btn>
                            </v-card-actions>
                        </v-card> 

                    </v-dialog>     
                </v-flex>
            </v-layout>
        </v-card>
    </div>
</template>

<script>
    export default {
        props: ['listType', 'typeName'],
        data() {
            return {
                dialog: {},
                showSpecialRequestBox: false,
                quantity: 1,
                specialRequest: '',
                order: {}
            }
        },
        methods: {
            getMenuImage(menu){
                return "http://localhost:8081/" + menu.menuImage.replace(`\\`,'/')
            },
            resetOrder(){
                this.showSpecialRequestBox = true
                this.quantity = 1
                this.specialRequest = ''
            },
            checkMinQuantity(){
                if(this.quantity < 1)
                    this.quantity = 1
            },
            orderMenu(name, price){
                let totalPrice = this.getTotalMenuPrice(price, this.quantity)
                this.order = {
                    name: name,
                    price: totalPrice,
                    quantity: this.quantity,
                    specialRequest: this.specialRequest
                }
                this.$emit('my-order', this.order)
                this.resetOrder()
            },
            getTotalMenuPrice(price, quantity){
                return price * quantity
            }
        }
    }
</script>

<style lang="scss" scoped>
    img{
        width: 70%;
        height: 50%;
        display: block; 
        margin-left: 12%;   
    }
    .add-order-symbol{
        float: right;
    }
    .card-overlay-container{
        position: relative;
        width: 100%;
    }
    .card-overlay-container:hover .card-overlay{
        height: 62%;
    }
    .card-overlay{
        width: 100%;
        height: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        transition: 0.5s ease;
    }
    .dialog-image{
        width: 60%;
        height: 60%;
        margin-left: 20%;
    }
    .card-dialog{
        border-radius: none !important;
    }
    .detail-special-request{
        font-size: 0.7em;
        color: grey;
    }
    .special-request-description:hover{
        color: rgb(85, 85, 85);
        cursor: pointer;
    }
    .detail-special-request span{
        font-size: 1.2em;
        padding-right: 8px;
        color: black;
        font-weight: 500;
    }
    .hide-detail{
        display: none;
    }
    textarea{
        resize: none;
        padding: 5px 5px;
        border: 1px solid grey;
        outline: none;
    }
    .below-special-request{
        cursor: context-menu;
        font-size: 8px;
        color: grey;
    }
    input:focus{
        outline: none;
        width: 0;
    }
    .close-icon{
        margin-left: 320px;
        margin-top: 3px;
    }
    .order-show-menu__submit-order{
        background-color: black;
    }
</style>