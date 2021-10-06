import { EventContainer, Title, InnerEventContainer, Timerowbox, TimeRow, TimeTitle, Highlight } from './EventPageElement'
import { v4 as uuid } from 'uuid'
import { useEffect, useState } from 'react'
import Cards from '../../../Components/Cards'
import { TIME } from '../../../Constant'
import { filterdate } from '../../../Interface'

const EventPage = (props:{SelectedDate:filterdate[] |[], Dateformat:string[]}) => {
    const [dueDate, setdueDate] = useState([] as filterdate[])
    const [publicPublish, setpublicPublish] = useState([] as filterdate[])
    const [release, setrelease] = useState([] as filterdate[])

    const getDateTrim = (eventData:String) => {
        let Temparray = []
        Temparray = eventData.split('')
        return Temparray[0] + Temparray[1] + Temparray[2] + Temparray[6] + Temparray[7]
    }

    useEffect(() => {
        const filterdueDate:filterdate[] = []
        const filterpublicPublish:filterdate[] = []
        const filterrelease:filterdate[] = []

        props.SelectedDate?.forEach((el : filterdate) => {
            if (el.category === 'DUE DATE') {
                filterdueDate.push(el)
            } else if (el.category === 'CONTENT PUBLISH') {
                filterpublicPublish.push(el)
            } else if (el.category === 'RELEASE') {
                filterrelease.push(el)
            }
        })

        setdueDate(filterdueDate)
        setpublicPublish(filterpublicPublish)
        setrelease(filterrelease)
        // eslint-disable-next-line
    }, [props.SelectedDate])

    return (
        <EventContainer className="w-8/12 px-8 " >
            <Title className="font-bold text-gray-700 text-3xl pl-7 flex">
                {props.Dateformat[0]} {props.Dateformat[1]} <Highlight className="text-gray-400 pl-2">{props.Dateformat[2]}</Highlight>
            </Title>
            <InnerEventContainer className="pt-3">
                {TIME.map(el => {
                    if (el?.includes('00')) {
                        return <Timerowbox key={uuid()} className="flex ">
                            <TimeTitle >{el}</TimeTitle>
                            <TimeRow className="grid grid-cols-3 gap-2">
                                <div className="ml-1 relative">
                                    {dueDate.map((eventData : filterdate) => {
                                        const eventDateTime = getDateTrim(eventData.time)
                                        const eventTime = getDateTrim(el)
                                        if (eventDateTime === eventTime) {
                                            return <Cards key={uuid()} data={eventData} color={'yellow'}/>
                                        } else {
                                            return null
                                        }
                                    })}
                                </div>
                                <div className="ml-1 relative">
                                    {publicPublish.map((eventData : filterdate) => {
                                        const eventDateTime = getDateTrim(eventData.time)
                                        const eventTime = getDateTrim(el)
                                        if (eventDateTime === eventTime) {
                                            return <Cards key={uuid()} data={eventData} color={'red'}/>
                                        } else {
                                            return null
                                        }
                                    })}
                                </div>
                                <div className="ml-1 relative">
                                    {release.map((eventData : filterdate) => {
                                        const eventDateTime = getDateTrim(eventData.time)
                                        const eventTime = getDateTrim(el)
                                        if (eventDateTime === eventTime) {
                                            return <Cards key={uuid()} data={eventData} color={'green'}/>
                                        } else {
                                            return null
                                        }
                                    })}
                                </div>
                            </TimeRow>
                        </Timerowbox>
                    } else {
                        return null
                    }
                })}
            </InnerEventContainer>
        </EventContainer>
    )
}

export default EventPage
