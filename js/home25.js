Vue.component('diagrams', {
  data() {
    return {
      text: '',
      items: [
        {id: makeId(3), height: ''},
        {id: makeId(3), height: ''},
        {id: makeId(3), height: ''},
        {id: makeId(3), height: ''},
        {id: makeId(3), height: ''},
        {id: makeId(3), height: ''},
        {id: makeId(3), height: ''},
      ],
      width: '',
      height: '',
    }
  },
  created() {
    this.width = 100/this.items.length+'%';
  },
  template: `
  <div class="diagrams">
    <div class="item" v-for="item in items" :id="item.id" :style="{width:width}">
      <p class="text-id">
        #{{ item.id }}<br>
        -{{ height }}
      </p>
      <diagram-block></diagram-block>
    </div>
  </div>
  `
});

Vue.component('diagram-block', {
  props: {
    id: Number
  },
  data() {
    return {
      text: '',
      value: '',
      height: makeRandomHeight(),
      backgroundColor: getRandomColor(),
      width: '100%',
    }
  },
  created() {
    height = this.height;
  },
  mounted() {
    if(localStorage.height) this.height = localStorage.height;
  },
  watch: {
    height(localHeight) {
      localStorage.height = localHeight;
    }
  },
  methods: {
    changeRange(value) {
      this.height = value+'px';
      //this.$emit('changeHeight', this.height);
    },
  },
  template: `
  <div class="d-item" :id="id" :style="{ width:width, height:height, backgroundColor:backgroundColor }">
    <div class="range-wrap">
      r{{height}}
      <input class="d-range" type="range" min="100" max="300" step="1" v-model="value" @input="changeRange(value)">
    </div>
  </div>
  `
});

const vue = new Vue({
el: '#app'
});

function getRandomColor() {
  var text = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
  color += text[Math.floor(Math.random() * 16)];
  }
  return color;
}

function makeId(length) {
  var result           = 'id_';
  var characters       = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
  result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function makeRandomHeight() {
  var result = Math.floor(Math.random() * (300 - 100)) + 100;
  return result+'px';
}
