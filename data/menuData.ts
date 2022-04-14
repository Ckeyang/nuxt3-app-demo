
import { menu, menuInterface } from "~/modules/menu";
const menus: Array<menuInterface> = [
    new menu("", "首页"),
    new menu("about", "关于"),
    new menu("1-3", "组件API", [
        new menu("api/tailApi", "tailwind css"),
        new menu("api/threeApi", "Three.js"),
        new menu("api/adminApi", "后台api"),
    ]),
];

export default menus