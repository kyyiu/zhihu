import React, {Suspense} from "react";
import {Route, Routes, useLocation, useNavigate, useParams, useSearchParams} from 'react-router-dom'
import routes from "./routes";

function Ele(props) {
    const {component: Component, meta} = props

    const {title = '标题'} = meta
    document.title = title

    const navigate = useNavigate(),
        params = useParams(),
        location = useLocation(),
        [usp] = useSearchParams()

    return <Component 
        navigate={navigate} 
        location={location}
        params={params}
        usp={usp}/>
}
console.log(routes);
export default function Router() {
    return <Suspense fallback={'加载中'}>
        <Routes>
            {
                routes.map((e,i) => {
                    return <Route 
                        key={e.name} 
                        path={e.path}
                        element={<Ele {...e}></Ele>}/>
                })
            }
        </Routes>
    </Suspense>
}