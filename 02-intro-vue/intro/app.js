const {createApp,ref} = Vue

const app = createApp({
    // template: `
    // <h1>{{ message }}</h1>
    // <p>{{ author }}</p>
    // `,

//     Variables reactivas
    setup() {
        const message = ref('I am Ironman');
        const author = ref('I am America Captain')

        function changeQuote () {
            message.value = 'Hola asdasdads';
            author.value = 'asdasd'
        }


        // setTimeout(() => {
        //     message.value = 'Soy Goku';
        //     author.value = 'Soy Vegeta';
        // },1000)

        return {
            message,author,changeQuote
        }
    }
})


app.mount('#myApp')