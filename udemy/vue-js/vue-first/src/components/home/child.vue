<template>
    <ul class="list-inline">
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu 1</a></li>
        <li><a href="#">Menu 2</a></li>
        <li><a href="#">Menu 3</a></li>
    </ul>
</template>

<script>
export default {
    props: {
        menus: {

        }
    },
    mounted() {
        console.log(this.menus)
    }
}
</script>