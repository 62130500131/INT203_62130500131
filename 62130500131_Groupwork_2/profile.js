    const app = {
        data() {
            return {
                name : "Weeraphon Supachok",
                role : " University student " ,
                Article : 50,
                Followers : 100,
                Ratings : 7.9,
                image : "images/me.jpg"
            }
        },
        

    }
    var mountedApp = Vue.createApp(app).mount('#app')
   