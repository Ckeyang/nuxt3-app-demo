const routerStore = {
    state: () => {
        return {
            token: '',
            router: '',
        }
    },
    actions: {
        setRouter(path: string) {
            this.router = path;
        },
        setToken(token: string) {
            localStorage.setItem('token', token); //把token 放入本地缓存
            this.token = token;
        }
    },

    getters: {
        getRouter: (state: any) => state.router,
        getToken: (state: any) => {
            return state.token
        }
    }
}

export default routerStore