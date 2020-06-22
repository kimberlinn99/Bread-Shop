<template>
    <v-layout>
        <v-container class="mb-5">
            <h2 class="text-center font-weight-black ma-5">
                Order Online
            </h2>
            <div class="wrapper">
                <!-- First Section -->
                <v-layout row wrap>
                    <v-flex xs2 md2 class="order-box">
                        <v-card tile flat class="card-border-bottom">
                            <v-btn depressed text block tile class="text-body-2 text-capitalize">
                                <v-icon left>mdi-account</v-icon>
                                Hi guest!
                            </v-btn>
                        </v-card>
                        <v-card tile flat>
                            <v-expansion-panels focusable flat accordion>
                                <v-expansion-panel>
                                    <v-expansion-panel-header class="text-center text-caption px-3 py-0">
                                        Menu
                                    </v-expansion-panel-header>
                                        <v-expansion-panel-content class="text-body-2">
                                            <v-card tile flat hover 
                                            class="pa-3 menu-hover"
                                            @click="changeMenu('bagel')"
                                            >
                                                Bagel
                                            </v-card>
                                            <v-card tile flat hover 
                                            class="pa-3 menu-hover"
                                            @click="changeMenu('bread')">
                                                Bread
                                            </v-card>
                                        </v-expansion-panel-content>
                                </v-expansion-panel>    
                            </v-expansion-panels>
                        </v-card>
                    </v-flex>


                    <!-- Middile Section -->
                    <v-flex xs6 md7 class="text-center order-box middle-section">
                        <v-card tile flat class="pb-3">
                            <v-card  flat>
                                <h4 class="mt-4 pb-2">Menu</h4>
                                <v-divider class="head-divider"></v-divider>
                            </v-card>
                            <order-show-menu 
                            v-if="isBagel && menus"
                            :listType="menus.bagels"
                            typeName="bagels"
                            @my-order="updateOrder" />
                            
                            <order-show-menu 
                            v-if="isBread && menus"
                            :listType="menus.breads"
                            typeName="breads"
                            @my-order="updateOrder" />
                        </v-card>
                    </v-flex>

                    <!-- Last Section -->
                    <v-flex xs4 md3 class="order-box">
                        <v-card tile flat>
                            <v-card-text class="last-section">
                                My Order
                                <span style="float: right;">({{ order.length || 0 }} items)</span>
                            </v-card-text> 
                        </v-card>
                        <v-card tile flat class="cart">
                            <v-card-text
                            v-if="!order.length">
                                <v-icon size="50" color="grey ligthen-5" class="icon-shopping-outline mt-5">
                                    mdi-shopping-outline
                                </v-icon>
                                <p class="message-empty-list">
                                    Explore our menu and add the menu you want here!
                                </p>
                            </v-card-text>
                            
                            <v-card 
                            v-else-if="order"
                            tile flat height="158" 
                            class="list-scrollable mb-2"> 
                                <v-card-text
                                v-for="(menu, index) in order"
                                :key="index"
                                class="last-section py-5 text-uppercase"
                                >
                                    <div class="menu-overflow"> 
                                        {{ menu.quantity }} 
                                        <v-icon x-small>mdi-close</v-icon>
                                        {{ menu.name }}
                                    </div>
                                    <span style="float: right; z-index: 4;">${{ menu.price }}</span>
                                    <p 
                                    v-if="menu.specialRequest != ''"
                                    class="list-specail-request menu-overflow text-capitalize">
                                        {{ menu.specialRequest }}
                                    </p>
                                </v-card-text>
                            </v-card>

                            <v-divider class="mx-3" color="black"></v-divider>

                            <v-card-text class="last-section my-1">
                                Total
                                <span style="float: right;">${{ getTotalPrice() || 0 }}</span>
                            </v-card-text>
                        </v-card>
                        <v-card tile flat>
                            <v-card-text class="special-request">
                                <div 
                                    v-if="!showSpecialRequestBox" 
                                    @click="showSpecialRequestBox = true"
                                    class="special-request">
                                    <v-icon small color="black">mdi-plus</v-icon>
                                    Special Request
                                </div>
                                <textarea 
                                    name="specialRequest" 
                                    id="specialRequest"
                                    cols="25" rows="2" 
                                    v-if="showSpecialRequestBox"
                                    v-model="anotherSpecialRequest"
                                    placeholder="Special Request">
                                </textarea>

                                <!-- White Space below textarea -->
                                <v-card-text 
                                    @click="showSpecialRequestBox = !showSpecialRequestBox"
                                    class="pa-0 white--text white-space">
                                    this is white space for toggle
                                </v-card-text>
                            </v-card-text>

                            <v-divider class="mx-5"></v-divider>

                            <v-btn depressed tile text height="35"
                            class="text-caption text-uppercase white--text order-now-btn"
                            @click="orderMenu">
                                Order Now
                                <v-icon x-small class="pl-2">mdi-chevron-right</v-icon>
                            </v-btn>
                        </v-card>
                    </v-flex>
                </v-layout>
            </div>

        </v-container>
    </v-layout>
</template>

<script>
    import MenuService from '../services/MenuService'
    import OrderShowMenu from '@/components/OrderShowMenu.vue'

    export default {
        data () {
            return {
                menus: null,
                isBagel: true,
                isBread: false,
                order: [],
                totalPrice: 0,
                anotherSpecialRequest: '',
                showSpecialRequestBox: false,
            }
        },
        components: {
            OrderShowMenu,
            MenuService
        },
        async created() {
            try{
                const response = await MenuService.getAllMenu()
                this.menus = response.data
            } catch (err){
                console.log(err)
            }
        },
        methods: {
            changeMenu(menu){
                if(menu == 'bread'){
                    this.isBread = true
                    this.isBagel = false
                }
                else if(menu == 'bagel'){
                    this.isBagel = true
                    this.isBread = false
                }
            },
            updateOrder(order){
                this.order.push(order)
            },
            getTotalPrice(){
                this.totalPrice = this.order.reduce((sum, menu) => {
                    return sum + menu.price
                }, 0)
                return this.totalPrice
            },
            async orderMenu(){
                try{
                    await MenuService.orderMenu({
                        order: this.order,
                        totalPrice: this.totalPrice,
                        specialRequest: this.anotherSpecialRequest
                    })
                    alert('The order has been sent succesfully. Please kindly wait..')
                    this.$router.push({ path: '/' })
                }
                catch(err){
                    console.log(err)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        display: block;
        width: 80%;
        margin: 0 auto;
    }
    .order-box{
        border:1px solid grey;
    }
    .card-border-bottom, .cart{
        border-bottom: 1px solid grey;
    }
    .cart{
        border-top: 1px solid grey;
    }
    .middle-section{
        border-left: none;
        border-right: none;
    }
    .menu-hover:hover{
        background-color: rgb(238, 238, 238);
        border-left: 4px solid grey;
    }
    ::v-deep {
        .v-expansion-panel-content__wrap {
            padding: 0 !important;
        }
        .v-expansion-panel-header{
            min-height: 35px !important;
        }
    }
    .head-divider{
        width: 50%;
        border-top: 1px grey solid !important;
        position: relative;
        left: 25%;
    }
    .last-section{
        font-size: 0.7em;
        padding: 12px 12px;
        color: black !important;
    }
    .icon-shopping-outline{
        margin-left: 30%;
    }
    .message-empty-list{
        font-size: 0.7em;
        padding: 15px 15px;
        color: grey;
        margin-bottom: 10px;
    }
    .special-request{
        font-size: 0.85em;
        color: black;
        padding: 0 5px;
        margin-top: 12px;
        margin-bottom: 3px;
    }
    textarea{
        resize: none;
        padding: 5px 5px;
        margin-left: 6px;
        border: 1px solid grey;
        outline: none;
        font-size: 0.85em;
    }
    .white-space{
        font-size: 5px;
    }
    .white-space::selection{
        cursor: context-menu;
        background: white;
    }
    .order-now-btn{
        margin: 20px;
        left: 5%;
        background-color: black;
    }
    .list-specail-request{
        font-size: 0.9em;
        color: grey;
        padding-top: 15px;
        margin: 0;
    }
    .list-scrollable{
        overflow-y: scroll;
    }
    .list-scrollable .v-card__text:hover{
        cursor: pointer;
    }
    .menu-overflow{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; 
        width: 120px;
        z-index: 1;
        position: absolute;
    }
</style>