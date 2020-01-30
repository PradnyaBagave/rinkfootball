<template>
    <div class="card"  draggable="true" @dragstart="onDragStart">
  	<div class="card-header">
    	<p class="card-header-title">{{ item.title }}</p>
      <div class="card-content">
      	<div class="content">{{ item.content }}</div>
      </div>
  	</div>
  </div>

</template>
<script>
export default {
     props: ['item'],
  methods: {
    onDragStart: function(event) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.setData('text/plain', JSON.stringify(this.item))
    }
  }
}
</script>