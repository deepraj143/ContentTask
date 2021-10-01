import React, { useState } from 'react';
import Calendar from 'react-calendar';
import {MainContainer,Title,Titletext,InnerContainer} from './CalenderPageElement';
import 'react-calendar/dist/Calendar.css';
import AlleventPage from '../AlleventPage/AlleventPage';
import EventPage from '../Eventpage/index';

const CalenderPage = () => {
    const [value, onChange] = useState(new Date());
    return (
        <MainContainer className="container mx-auto p-10">
            <Title className="p-2 w-full ">
                <Titletext className="font-bold">Calendar</Titletext>
            </Title>
            <InnerContainer  className="container  mx-auto p-5 flex">
                <Calendar  className="pt-10"  onChange={onChange} value={value}/>
                <EventPage SelectedDate={value}/>
                <AlleventPage SelectedDate={value}/>
            </InnerContainer>
        </MainContainer>
    )
}

export default CalenderPage
