
function debounce (func, delay, context, event) {
  clearTimeout(func.timer)
  func.timer = setTimeout(function () {
    func.call(context, event)
  }, delay)
}

export default function BtnDebounceHoc(btnCom) {
  return {
    props: btnCom.props,

    mounted() {
      console.log("HOC succeeds");
    },

    methods: {
      hocClick(event) {
        let that = this;
        console.log("debounce", that.$listeners);

        // 在这里防抖
        // debounce(that.$listeners.click, 500, that, event);
      }
    },

    render(h) {
      // const slots = Object.keys(this.$slots)
      //   .reduce((arr, key) => arr.concat(this.$slots[key]), [])
      //   .map(vnode => {
      //     vnode.context = this._self;
      //     return vnode;
      //   });

      return h(btnCom, {
        on: {
          // on: this.$listeners, // 透传事件
          // "on-click": () => {
          //   console.log("123");
          // },

          "on-click": this.hocClick  // 拦截 btn $emit 事件

          // click: () => {
          //   console.log("456");
          // }
        },
        props: this.$props,
        attrs: this.$attrs
      });
    }
  };
}
