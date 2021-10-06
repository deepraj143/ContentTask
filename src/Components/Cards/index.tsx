import { filterdate } from '../../Interface'

interface Props{
    data:filterdate,
    color:String,
    position?:String
}

const index = (props:Props) => {
    let splitTime = []
    let color = null
    let position = null
    splitTime = props.data.time.split('')
    const time = (splitTime[3] + splitTime[4] === '30') ? 'pt-10' : 'pt-0'

    if (props.color === 'yellow') color = 'bg-yellow-100'
    if (props.color === 'red') color = 'bg-red-100'
    if (props.color === 'green') color = 'bg-green-100'

    if (props.position === 'relative') {
        position = 'relative '
    } else {
        position = 'absolute ' + time
    }

    return (
        <div className={position}>
            <div className={'w-52 -mt-4 mr-1 ml-3 mb-5 rounded-md z-20 fitcontain p-2  hovereffect ' + color}>
                <p className="text-gray-400 h-5 font-medium text-sm  pl-2 flex items-center ">{props.data.time}</p>
                <div dangerouslySetInnerHTML={{ __html: props.data.event }}>
                </div>
            </div>
            {(props.position !== 'relative') && <div className={'triangle -mt-2 ' + props.color + ' ' + time }></div>}
        </div>
    )
}

export default index
