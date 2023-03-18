import { lazy } from "react";
import Home from "../views/Home";

function factor(path, name, component, meta={}) {
    return {
        path,
        name,
        component,
        meta
    }
}

const routes = [
    factor('/', 'home', Home, {title: '首页'}),
    factor('/detail/:id','detail', lazy(()=>import('../views/Detail')), {title: '详情'}),
    factor('/self', 'self', lazy(()=>import('../views/Self')), {title: '自己'}),
    factor('/store', 'store', lazy(()=>import('../views/Store'))),
    factor('/update', 'update', lazy(()=>import('../views/Update'))),
    factor('/login', 'login', lazy(()=>import('../views/Login'))),
    factor('*','404', lazy(()=>import('../views/Not')))
]

export default routes