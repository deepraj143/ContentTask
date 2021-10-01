import React from 'react'
import {EventContainer,Title,InnerEventContainer,Timerowbox,TimeRow,TimeTitle,Highlight} from './EventPageElement'
import  data  from '../../../EventData'

const EventPage = ({SelectedDate}:any) => {

    let Date=SelectedDate.toLocaleDateString();
    const filterEvents=data.filter((el)=>{
        if(el.date===Date)
            return el;
    })

    console.log(filterEvents);
    
    return (
        <EventContainer className="w-7/12 px-8 " > 
                <Title className="font-bold text-gray-700 text-3xl pl-7 flex">
                    March 10 <Highlight className="text-gray-400 pl-2">Tuseday</Highlight>
                </Title>
                <InnerEventContainer className="pt-3">
                    <Timerowbox className="flex ">
                        <TimeTitle >00 AM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="00:00 AM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox className="flex">
                        <TimeTitle >1 AM</TimeTitle>        
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="01:00 AM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox  className="flex">
                    <TimeTitle >2 AM</TimeTitle>
                    <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="02:00 AM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox  className="flex">
                        <TimeTitle >3 AM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="03:00 AM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox  className="flex">
                        <TimeTitle >4 AM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="04:00 AM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox className="flex">
                        <TimeTitle >5 AM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="05:00 AM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox  className="flex">
                        <TimeTitle >6 AM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="06:00 AM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox  className="flex">
                        <TimeTitle >7 AM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="07:00 AM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox  className="flex">
                        <TimeTitle >8 AM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="08:00 AM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox  className="flex">
                        <TimeTitle >9 AM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="09:00 AM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>                    </Timerowbox>
                    <Timerowbox className="flex">
                        <TimeTitle >10 AM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="10:00 AM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox  className="flex">
                        <TimeTitle >11 AM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="11:00 AM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox  className="flex">
                        <TimeTitle >12 AM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="12:00 PM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox className="flex">
                        <TimeTitle >1 PM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="01:00 PM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox  className="flex">
                        <TimeTitle >2 PM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="02:00 PM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox  className="flex">
                        <TimeTitle >3 PM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="03:00 PM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox  className="flex">
                        <TimeTitle >4 PM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="04:00 PM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox className="flex">
                        <TimeTitle >5 PM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="05:00 PM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox  className="flex">
                        <TimeTitle >6 PM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="06:00 PM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox  className="flex">
                        <TimeTitle >7 PM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="07:00 PM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox  className="flex">
                        <TimeTitle >8 PM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="08:00 PM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox  className="flex">
                        <TimeTitle >9 PM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="09:00 PM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox className="flex">
                        <TimeTitle >10 PM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="10:00 PM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox  className="flex">
                        <TimeTitle >11 PM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="11:00 PM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                    <Timerowbox  className="flex">
                        <TimeTitle >12 PM</TimeTitle>
                        <TimeRow className="flex flex-row">{filterEvents.map((el)=>{
                                    if(el.event.props.children[0].props.children==="12:00 PM"){
                                        console.log(el.event.props.children[0].props.children)
                                        return el.event
                                    }
                        
                                })}
                        </TimeRow>
                    </Timerowbox>
                   
                    
                </InnerEventContainer>
        </EventContainer>
    )
}

export default EventPage
