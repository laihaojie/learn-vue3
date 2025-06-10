export default defineComponent({

  setup() {
    const count = ref(1)

    return () => {
      return (
        <div>
          <h1>
            Hello World
            {count.value}
          </h1>
        </div>
      )
    }
  },

})
