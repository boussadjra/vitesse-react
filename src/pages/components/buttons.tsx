import Dashboard from '../../layouts/dashboard';
import Button from '../../components/core/Button';


export default function Buttons() {

    return <Dashboard >
        <div className="flex items-center justify-center w-full h-full">

            <div className="w-full p-4">
                <h1 className="text-3xl font-bold ">
                    Buttons :
                </h1>
                <section className="flex flex-wrap py-4">
                    <div className="w-full px-2">
                        <Button >
                            Button
                        </Button>
                    </div>
                </section>    
            </div>
        </div>
    </Dashboard>
}