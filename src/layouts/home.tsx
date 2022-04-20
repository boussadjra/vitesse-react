import Footer from "../components/layout/Footer"
import useDirection from "../hooks/useDirection"

export default function Home(props: {
    children: React.ReactNode
}) {

    const { toggleDirection } = useDirection()


    return (
        <div className="">
            <div>
            {props.children}
            </div>
            <Footer />
        </div>
    )
}