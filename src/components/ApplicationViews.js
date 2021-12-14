import React from "react"
import { Route, Routes } from "react-router-dom"
import { EventProvider } from "./events/EventData"
import { EventList } from "./events/EventList"
import { EventForm } from "./events/EventForm"

export const ApplicationViews = () => {
    return (
                      <EventProvider>
                        <Routes>
                          <Route path="/"/>
                          <Route path="events/*" element={<EventList />} />
                          <Route path="events/create/*" element={<EventForm />} />
                        </Routes>
                      </EventProvider>
    )}