<template>
    <div>
        <headerTop />
        <div class=" h-[calc(100vh-72px)] overflow-y-auto loginBG">
            <router-view></router-view>
        </div>
    </div>
</template>


<script lang="ts">
import headerTop from '../../components/header.vue'

export default{
    components: {
        headerTop
    }
}

</script>