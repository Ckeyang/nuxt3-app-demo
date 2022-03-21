const _getCurrentRouteBtnArr = (btn: Array<string>, permissionBtnArr: any) => {
    let isExist = false;
    //判断是否存在
    if (permissionBtnArr == undefined || permissionBtnArr == null) {
        return false;
    }
    if (permissionBtnArr.indexOf(btn[0]) > -1) {
        isExist = true;
    }
    return isExist;
}

export default {
    mounted: (el: any, binding: any, vnode: any) => {
        console.log('-----进来了')
        //获取当前页面的按钮权限
        const permissionBtnArr = vnode?.context?.$route?.meta?.permissionBtn || []
        if (binding.value) {
            // 获取按钮传入的权限
            let btnCode = binding.value;

            // 调用判断函数，不成立->创建注释节点返回
            if (!_getCurrentRouteBtnArr(btnCode, permissionBtnArr)) {
                const comment = document.createComment(' ');
                Object.defineProperty(comment, 'setAttribute', {
                    value: () => undefined,
                });
                vnode.elm = comment;
                vnode.text = ' ';
                vnode.isComment = true;
                vnode.context = undefined;
                vnode.tag = undefined;
                // vnode.data.directives = undefined;

                if (vnode.componentInstance) {
                    vnode.componentInstance.$el = comment;
                }

                if (el.parentNode) {
                    el.parentNode.replaceChild(comment, el);
                }
            } else {
                // 成立直接渲染
                // console.log('渲染 :>> ', btnCode);
            }
        } else {
            throw new Error(`need button permission string! Like v-hasBtn="['add']"`)
        }
    }
}
