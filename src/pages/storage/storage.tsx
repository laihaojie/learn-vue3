export default defineComponent({

  setup() {
    const a = ref(1)
    const state = ref({ a: 1 })
    console.log(state);
    console.log(a);
    
    return () => {
      return (
        <div>
          <h1> {state.value.a}</h1>
        </div>
      )
    }
  }

})