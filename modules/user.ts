interface userInterface {
    account: string
    age: number
    createId: number
    createTime: string
    id: number
    name: string
    phone: string
    remark: string
    roles: Array<any>
    sex: string
    status: string
    superAdmin: string
    token: string
    updateId: number
    updateTime: string
}
type userType = {
    account: string
    age: number
    createId: number
    createTime: string
    id: number
    name: string
    phone: string
    remark: string
    roles: Array<any>
    sex: string
    status: string
    superAdmin: string
    token: string
    updateId: number
    updateTime: string
}
class userModel implements userInterface {
    account: string;
    age: number;
    createId: number;
    createTime: string;
    id: number;
    name: string;
    phone: string;
    remark: string;
    roles: any[];
    sex: string;
    status: string;
    superAdmin: string;
    token: string;
    updateId: number;
    updateTime: string;
    constructor(
        account: string = '',
        age: number = 0,
        createId: number = 0,
        createTime: string = '',
        id: number = 0,
        name: string = '',
        phone: string = '',
        remark: string = '',
        roles: Array<any> = [],
        sex: string = '',
        status: string = '',
        superAdmin: string = '',
        token: string = '',
        updateId: number = 0,
        updateTime: string = '') {
        this.account = account;
        this.age = age;
        this.createId = createId;
        this.createTime = createTime;
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.remark = remark;
        this.roles = roles;
        this.sex = sex;
        this.status = status;
        this.superAdmin = superAdmin;
        this.token = token;
        this.updateId = updateId;
        this.updateTime = updateTime;
    }
}

export { userInterface, userType, userModel }