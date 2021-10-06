import { AllEventContainer, Title, InnerAllEventContainer } from './AlleventPageElement'
import Cards from '../../../Components/Cards'
import { v4 as uuid } from 'uuid'
import { filterdate } from '../../../Interface'

const AlleventPage = (props: {SelectedDate : filterdate[] | []}) => {
    const getColor = (eventData:filterdate) => {
        if (eventData.category === 'DUE DATE') {
            return 'yellow'
        } else if (eventData.category === 'CONTENT PUBLISH') {
            return 'red'
        } else {
            return 'green'
        }
    }

    return (
        <AllEventContainer className="pt-10 w-2/12">
            <Title className="font-bold text-gray-500 pl-3">
                    All Day Event(s)
            </Title>
            <InnerAllEventContainer className="pt-5">
                {props.SelectedDate.map((eventData:filterdate) => {
                    const color = getColor(eventData)
                    return <Cards key={uuid()} data={eventData} color={color} position={'relative'}/>
                })}
            </InnerAllEventContainer>
        </AllEventContainer>
    )
}

export default AlleventPage
