<template>
    <div>
        i am Grandchild
    </div> 
</template>

<script>
    export default {
        data: function () {
            return {

            }
        },
        mounted() {
            console.log("mounted: Grandchild");
        },
        created() {
            console.log("created: Grandchild");
        }
    }
</script>