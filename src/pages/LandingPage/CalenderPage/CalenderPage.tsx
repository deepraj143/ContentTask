import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import { MainContainer, Title, Titletext, InnerContainer } from './CalenderPageElement'
import 'react-calendar/dist/Calendar.css'
import AlleventPage from '../AlleventPage/AlleventPage'
import EventPage from '../Eventpage/index'
import { MONTH, DAY } from '../../../Constant'

import DATA from '../../../EventData'
import { filterdate } from '../../../Interface'

const CalenderPage = () => {
    const [CurrentDate, setCurrentDate] = useState(new Date().toLocaleDateString())
    const [Dateformat, setDateformat] = useState([] as string[])
    const [FilterDate, setFilterDate] = useState([] as filterdate[])

    const ChangeDate = (date:Date):void => {
        setCurrentDate(date.toLocaleDateString())
        const DayArray = [MONTH[date.getMonth()], date.getDate().toString(), DAY[date.getDay()]]
        setDateformat(DayArray)
        Filtering(date)
    }

    const Filtering = (date:Date) => {
        const Date = date.toLocaleDateString()
        const filterEvents = DATA.filter((el) => {
            if (el.date === Date) { return el } else { return null }
        })
        setFilterDate(filterEvents)
    }

    useEffect(() => {
        ChangeDate(new Date())
        // eslint-disable-next-line
    }, [])

    return (
        <MainContainer className="container mx-auto p-10">
            <Title className="p-2 w-full ">
                <Titletext className="font-bold">Calendar</Titletext>
            </Title>
            <InnerContainer className="container  mx-auto pt-10 flex">
                <Calendar className="pt-10" onChange={ChangeDate} value={new Date(CurrentDate)}/>
                <EventPage SelectedDate={FilterDate} Dateformat={Dateformat} />
                <AlleventPage SelectedDate={FilterDate}/>
            </InnerContainer>
        </MainContainer>
    )
}

export default CalenderPage
