<template>
    <div>
        i am child
        <g-child/>
    </div> 
</template>

<script>
import gChild from './groundChild'
    export default {
        data: function () {
            return {

            }
        },
        components: {
            'g-child': gChild
        },
        mounted() {
            console.log("mounted: child");
        },
        created() {
            console.log("created: child");
        }
    }
</script>