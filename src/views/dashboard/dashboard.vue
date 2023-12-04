<style scoped>
.inputLabel {
    @apply flex flex-row justify-center items-center px-2 w-64 py-2 bg-white rounded-[0.4rem] tracking-wide border
}
</style>


<template>
    <div class="h-full">
        <div class="grid grid-cols-3 h-full">
            <div class="flex justify-center h-full border-r">
                <div class="flex h-32 mt-32" id="cancel_checque_image_reset"  @change="getFile($event)">
                    <label v-if="!previewUrl" class="inputLabel cursor-pointer" id="cancel_checque_label">
                            <span class="uploadText" id="cancel_checque_upload">Upload your document...</span>
                            <input type='file' class="hidden" ref="imgUploadchecque" accept=".pdf, .png, .jpg, .jpeg"
                                id="cancel_checque_image_upload" />
                    </label>
                    <div v-else class="flex items-center inputLabel cursor-pointer">
                        <p class="text-[#1d4380] file:-mx-3 file:-my-1.5 cursor-pointer file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 truncate max-w-[180px]">
                            {{ previewUrl }}
                        </p>
                        <p class="cursor-pointer px-2" @click="deleteDocument()">X</p>
                    </div>
                </div>
            </div>
            <div class="col-span-2 bg-[#525659]">
                <div class="h-full w-full flex items-center justify-center px-8">
                    <div class="h-full w-full space-y-4 mt-10" v-if="previewUrl">
                        <div class="flex justify-end w-full">
                            <span class="text-sm font-medium leading-6 cursor-pointer text-gray-900 dark:text-white"></span>
                            <Switch  v-model="toggle" @update:model-value="changeTOggle()" :class="toggle ? 'bg-blue-600' : 'bg-gray-200'" class="relative col-span-3 inline-flex h-[18px] w-[38px] items-center rounded-full">
                                <span :class="toggle ? 'translate-x-6' : 'translate-x-1'" class="inline-block h-[12px] w-[12px] transform rounded-full bg-white transition" />
                            </Switch>
                        </div>
                        <div class="h-[90%] w-full">
                            <iframe :src="previewUrl" alt="Preview" class="h-full w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { Switch } from "@headlessui/vue";

export default{
    data(){
        return{
            previewUrl: null as string | null,
            toggle : true
        }
    },
    components:{
        Switch
    },
    methods: {

        getFile(event:any){
            console.log(event.target.files[0]);
            this.previewFile(event.target.files[0])
            
        },
        previewFile(file:any) {
            const reader = new FileReader();

            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    this.previewUrl = reader.result;
                } else {
                    this.previewUrl = null;
                }
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        },
        deleteDocument(){
            this.previewUrl = ''
        },
        changeTOggle(){
        }
    }
}

</script>