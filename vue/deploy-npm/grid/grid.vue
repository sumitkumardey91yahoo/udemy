<template>
   <div class="main">
        <div class="row1">
            <div class="col-2-of-1">a</div>
            <div class="col-2-of-2">b</div>
        </div>
        <div class="row1">
            <div class="col-3-of-1">a</div>
            <div class="col-3-of-2">b</div>
            <div class="col-3-of-3">c</div>
        </div>

        <div class="row1">
            <div class="col-4-of-1">a</div>
            <div class="col-4-of-2">b</div>
            <div class="col-4-of-3">c</div>
            <div class="col-4-of-4">d</div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    :root {
    --gutter-vertical: 30px;
    --gutter-horizontal: 80px;

  }
.row1 {
  margin-bottom: var(--gutter-horizontal);
}

.col-2-of-1 {
    background-color: red;
    margin-right: var(--gutter-vertical);
    float: left;
    width: calc((100% - var(--gutter-vertical)) / 2)
}

.col-2-of-2 {
    background-color: blue;
    float: right;
    margin-right: var(--gutter-vertical);
    width: calc((100% - var(--gutter-vertical)) / 2)
}


.col-3-of-1 {
    background-color: red;
    margin-right: var(--gutter-vertical);
    float: left;
    width: calc((100% - (var(--gutter-vertical) * 2)px) / 3)
}

.col-3-of-2 {
    background-color: blue;
    float: left;
    margin-right: var(--gutter-vertical);
    width: calc((100% - (var(--gutter-vertical) * 2)px) / 3)
}

.col-3-of-3 {
    background-color: yellow;
    float: left;
    margin-right: var(--gutter-vertical);
    width: calc((100% - (var(--gutter-vertical) * 2)px) / 3)
}

.col-4-of-1 {
    background-color: yellow;
    float: left;
    margin-right: var(--gutter-vertical);
    width: calc((100% - (var(--gutter-vertical) * 3)px) / 4)

}
.col-4-of-2 {
    background-color: pink;
    float: left;
    margin-right: var(--gutter-vertical);
    width: calc((100% - (var(--gutter-vertical) * 3)px) / 4)
}
.col-4-of-3 {
    background-color: red;
    float: left;
    margin-right: var(--gutter-vertical);
    width: calc((100% - (var(--gutter-vertical) * 3)px) / 4)
}
.col-4-of-4 {
    background-color: brown;
    float: left;
    margin-right: var(--gutter-vertical);
    width: calc((100% - (var(--gutter-vertical) * 3)px) / 4)
}

.row1 div:last-child {
    margin-right: 0px;
}



.row1::after {
    clear: both;
    content: '';
    display: block;
}

.main .row1:last-child {
    margin-bottom: 0px;
}
</style>