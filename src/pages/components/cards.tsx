import Dashboard from '../../layouts/dashboard';
import Card from '../../components/core/Card';


export default function Cards() {

    return <Dashboard >
        <div className="flex items-center justify-center w-full h-full">

            <div className="w-full p-4">
                <h1 className="text-3xl font-bold ">
                    Cards :
                </h1>
                <section className="flex flex-wrap py-4">
                    <div className="w-full px-2">
                        <Card className='max-w-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quasi dolorum, aliquid omnis eum neque dolor soluta magnam odio laboriosam quidem obcaecati dolore possimus iste?
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    </Dashboard>
}