import "@assets/main.css"
import { AppProps } from "next/app"
import { FC } from "react"
//import { UIProvider } from "@components/ui/context"


const Noop: FC = ({children}) => <>{children}</>

function MyApp({Component, pageProps}: AppProps & {Component: {Layout: FC}}){
    const Layout = Component.Layout ?? Noop

    return (
        <Layout>
           <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp