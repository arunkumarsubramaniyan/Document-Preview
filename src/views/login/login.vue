<template>
    <div class="h-full loginBG">
        <div class="w-full h-full  flex justify-center items-center ">
            <form action="" @submit.prevent="loginVerify()" class="card text-center space-y-12">
                <div>
                    <div class="text-xl text-black">Login</div>
                    <div class="mt-4">
                        <img src="../../assets/lightscape.jpg" alt="" class="rounded-full h-[90px] w-[90px] mx-auto">
                    </div>
                </div>
                <div class="relative">
                    <label for="user"
                        class="absolute -top-2 left-2 inline-block bg-white px-1 rounded-sm text-[11px] text-black bg-green-500 text-white">Email
                        ID *</label>
                    <input type="text" name="user" id="user" maxlength="50" v-model="mailId"
                        class="block inputHeight w-full rounded-md border border-[#98A1B3] px-4 focus:outline-none"
                        autofocus autocomplete="off" />
                </div>
                <div class="relative">
                    <label for="user"
                        class="absolute -top-2 left-2 inline-block bg-white px-1 rounded-sm text-[11px] text-black bg-green-500 text-white">Password *</label>
                    <input type="text" name="user" id="password" maxlength="50" v-model="password"
                        class="block inputHeight w-full rounded-md border border-[#98A1B3] px-4 focus:outline-none"
                        autofocus autocomplete="off" />
                </div>
                <button type="submit" class="bg-[#f44436] w-full h-10 text-white rounded-md">
                    <p>Continue</p>
                </button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">

export default{
    data(){
        return{
            mailId:'',
            password:''
        }
    },
    methods:{
        loginVerify(){
            if(this.password && this.mailId){
                this.$router.push('/home')
            }
        }
    }
}

</script>