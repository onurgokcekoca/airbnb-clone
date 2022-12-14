import '../styles/globals.css'
import Router from 'next/router'
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 4,
  color: "#F87171",
  className: "z-50",
  delay: 100
})

Router.events.on("routeChangeStart", progress.start)
Router.events.on("routerChangeComplete", progress.finish)
Router.events.on("routerChangeError", progress.finish)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
