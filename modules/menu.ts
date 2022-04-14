interface menuInterface {
    path: string,
    name: string,
    children?: Array<menuInterface>
}
class menu implements menuInterface {
    path!: string;
    name!: string;
    children?: Array<menuInterface>;
    constructor(_path: string, _name: string, _children?: Array<menuInterface>) {
        this.path = _path;
        this.name = _name;
        this.children = _children
    }
}
export { menuInterface, menu }