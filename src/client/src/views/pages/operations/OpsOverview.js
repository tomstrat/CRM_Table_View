import React from "react"


const OpsOverview = () => {
  return (
    
    <div className="page-container">
      <h1>Welcome!</h1>
      <p3>
      Firstly, thanks for taking the time to try this out!

When fully featured over the coming months, we aim for this app to serve the time and attendance,
truck and truck inventory management, resources (training materials, truck inspections, risk assessments),
and communication needs of any 1800GOTJUNK franchise. We may even help out Bella with some payroll integration
down the line =)

This intial demo will serve as a proof of concept for our main early flagship feature of the app: the schedule builder.
We hope you all will find this feature useful as operations managers. The schedule builder is designed to save
the end of day ops manager a significant amount of time when planning out the next day&apos;s schedule.

The completed app will also have a phone app companion, where TTMs can clock on at the start of a day,
add their hours/breaks, view their schedule, receive shift notifications/truck inspection notifications, 
and make time off and holiday requests to Mike.

Bear in mind, everything you see here is subject to change. I&apos;m not personally office trained,
so this is my inital attempt at what I think may be useful. Hopefully, with your feedback,
we can create a truly useful app, tailored specifically to the needs of 1800GOTJUNK.

Our primary aim is to finish the time and attendance sections of the app, later moving on to the aforementioned.

So, on to the schedule builder. Each user added to the app via manage users, will be searchable in the
schedule builder. Each user has a roster attached, to make it super easy to search rostered users on any given
day. We have not yet hooked this page up to our database, so the date select and publish features are placeholders
currently.

Take a look at the sidebar on the left, this allows you to populate the staff search results. For location,
we currently have inner and outer caridnal directions, however in the future we may change this to actual suburbs.

Staff members are added to routes by highlighting the staff member, highlighting the route, and clicking the add 
route button. In the near future, we&apos;ll be allowing you to click and drag names onto routes. 

In the future, upon clicking publish (once you&apos;ve laid out the schedule) this will not only send notifications
to all staff that will be working, we can also send notifications to staff that we couldn&apos;t fit in, with a
message you can customise on the day.

I&apos;ve hard coded in some default routes for now, however in the future, these will be customisable via a settings page.
It&apos;s worth mentioning that if you leave the schedule page or refresh, the current schedule will be reset,
however this will not be the case in the future.

I&apos;ve not added a truck inventory/location section to the page yet, as I feel the page is already a bit crowded.
I&apos;m aware this section is important for scheduling, and current ideas include simply having this open
as another tab (within the app) or having it hidden on the scheduler page, and expandable via a button.
It would be good to know what you guys think is best.
      </p3>
    </div>
  )
}

export default OpsOverview