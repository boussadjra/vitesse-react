import { useParams, useNavigate } from "react-router-dom";

interface IProps {
  name?: string
}

export default function Name(props: IProps) {
  const params = useParams()
  const navigate = useNavigate()


  return (<div className="flex items-center justify-center h-full">
    <div className="flex flex-col items-center">
    <div text="4xl">
      <div i='carbon-pedestrian' inline-block />
    </div>
    <p>
      Hi {params.name}
    </p>

    <p text-sm opacity-50>
      <em>Demo of dynamic route</em>
    </p>

    <div>
      <button
        onClick={() => navigate(-1)}
        className="btn m-3 text-sm"

      >
        Back
      </button>
    </div>
    </div>
  </div>
  )
}