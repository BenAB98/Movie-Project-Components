<script setup>
    defineProps({
        title:{
            type:String,
            required:true
        },
        publishDate:{
            type:String,
            required:true
        }
    })
</script>

<template>
    <li class="cursor-pointer hover:scale-95 transition-all min-h-[231px] min-w-[150px] rounded-lg overflow-hidden">
        <slot></slot>
        <p class="p-1 font-medium">{{title}}</p>
        <p class="px-1 text-xs text-grayLight">{{publishDate}}</p>
    </li>
</template>

<style scoped>

</style>