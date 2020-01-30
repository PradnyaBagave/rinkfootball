<template>
    	<div class="column">
  	<div class="panel">
    	<p class="panel-heading">
		  	{{ title }}
       </p>
       <div class="panel-block" @dragover="onDragOver" @drop="onDrop">
       <div class="columns">
  			<div class="column">
  				<my-draggable v-for="item in items" :key="item._id" :item="item"></my-draggable>
  			</div>
  		</div>
  			
  		</div>
  	</div>
  </div>

</template>
<script>
import myDraggable from './Mydragable'
export default {
    components : {
        myDraggable
    },
    props: ['title', 'items'],
  methods: {
    onDragOver: function(event){
      event.preventDefault()
    },
    onDrop: function(event) {
      let item = JSON.parse(event.dataTransfer.getData('text'))
      
      this.$emit('itemmoved', {
        status: this.title,
        item: item
      })
    }
    
  }
}
</script>