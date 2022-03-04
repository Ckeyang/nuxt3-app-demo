const userStore = {
    state: () => {
        return {
            userInfo: null,
        }
    },
    actions: {
        setUserInfo(user: any) {
            this.userInfo = user;
        }
    },

    getters: {
        getUserInfo: (state: any) => {
            return state.userInfo
        }
    }
}

export default userStore