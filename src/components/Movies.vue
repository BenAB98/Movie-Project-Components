<script>
export default {
    setup() {
        const props = {
        title:{
            type:String,
            required:true
        }
    }
    return{
        props
    }
    },
}
</script>

<template>
    <div class="max-w-sm">
        <a href="#" class="">
        <slot></slot>
        </a>
           <a href="#" class="font-medium text-2xl text-grayLight inline-block mb-5 hover:text-ogangeLink transition-all">{{ title }}</a>
    </div>
</template>

<style scoped>

</style>
