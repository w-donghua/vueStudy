var app = new Vue({
    el:"#app",
    data:{
        list:[
            {
              id:1,
              name:'西瓜',
              price:3.2,
              count:1
            },
            {
                id:2,
                name:'苹果',
                price:1.8,
                count:1
            },
            {
                id:3,
                name:'芒果',
                price:6,
                count:1
            }
        ]
    },
    computed:{
        totalPrice:function(){
            var total = 0;
            for(var i=0; i < this.list.length;i++){
                var item = this.list[i];
                total += item.price * item.count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
    },
    methods:{
        handleReduce:function(index){
            if(this.list[index].count === 1) return;
            this.list[index].count--;
        },
        handleAdd:function(index){
            this.list[index].count++;
        },
        handleRemove:function(index){
            this.list.splice(index, 1);
        }
    }
});