import {AllEventContainer,Title,InnerAllEventContainer} from './AlleventPageElement'
import  data  from '../../../EventData'


const AlleventPage = ({SelectedDate}:any) => {
    let Date=SelectedDate.toLocaleDateString();
    // console.log(seletedDate)
    return (
        <AllEventContainer className="pt-10 w-2/12">
            <Title className="font-bold text-gray-500 pl-3">
                    All Day Event(s)
                </Title>
                <InnerAllEventContainer className="pt-5">
                    {data.map((el)=>{
                        if(el.date===Date)
                        return el.event
                    })}
                </InnerAllEventContainer>
        </AllEventContainer>
    )
}

export default AlleventPage
