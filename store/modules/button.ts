const buttonStore = {
    state: () => {
        return {
            // 所有的按钮数据
            totalBtnList: {
                iconCustomChild: {
                    permissionBtn: ['edit', 'delete'],
                }
            },
            // 当前的按钮权限的KEY
            permissionKey: null,
            // 当前能访问的按钮
            permissionBtn: [],
        }
    },
    actions: {
        setButtonList: (data: any) => {
            this.totalBtnList = data;
        },
        setCurrentPermissionKey: (data: any) => {
            this.permissionKey = data;
        },
        setCurrentPermissionButton: (data: any) => {
            this.permissionBtn = data;
        },
    },
    getters: {
        totalBtnList: (state: any) => state.totalBtnList,
        currentPermissionBtnList: (state: any) => state.permissionKey ? state.totalBtnList[state.permissionKey] : [],
        currentPermissionBtnOfRoute: (state: any) => {
            return { permissionBtn: state.permissionBtn }
        }
    }
}
export default buttonStore;