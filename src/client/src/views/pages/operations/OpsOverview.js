import React from "react"
import "../../styles/overviewPage.css"


const OpsOverview = () => {
  return (
    
    <div className="overview-page-container">
      <h1>Welcome!</h1>
      
      <p>Firstly, thanks for taking the time to try this out!</p>

      <p>When fully featured over the coming months, we aim for this app to serve the time and attendance,
      truck and truck inventory management, resources (training materials, truck inspections, risk assessments etc),
      and communication needs of <i>any</i> 1800GOTJUNK franchise. We may even (definitely) help out Bella with some payroll integration
      down the line =)</p>

      <p>This intial demo will serve as a proof of concept for our main early flagship feature of the app: the schedule builder.
      We sincerely hope you all will find this feature useful as operations managers. The schedule builder is designed to save
      the end of day ops manager a <em>significant</em> amount of time whilst planning out the next day&apos;s schedule.
      If you have any other ideas to futher improve this process, definitely let us know, and we&apos;ll make it happen</p>

      <p>The web-app section that you&apos;re currently logged in to will be solely for operations and office use. The completed 
      app will also have a phone app companion, where TTMs can clock on at the start of a day, add their hours/breaks, view their 
      schedule, receive shift notifications/truck inspection notifications, and make time off and holiday requests to Mike.</p>

      <p>Bear in mind, everything you see here is subject to change. I&apos;m not personally office trained,
      so this is my inital attempt at what I think may be useful. Hopefully, with your feedback,
      we can create a truly grouse app, tailored specifically to the needs of 1800GOTJUNK.</p>

      <p>Our primary aim currently is to finish the time and attendance sections of the app, later moving on to the rest of the
        aforementioned.</p>

      <h2>Ops Overview</h2>

      <p>Although for the purposes of the demo, I&apos;ve included a (very TLDR) wall of text on this page, Ops overview will actually serve
      as a customisable dashboard. Here we will display data such as:</p>

      <p>Available staff for the day, <i>potentially</i> available staff, outstanding training requirements, etc... </p>

      <p>This page will also include a text box where you can post a message of the day to all non-ops users, 
      which send them a notification and will display on <i>their</i> overview page on the phone app.</p>

      <h2>The Schedule Builder</h2>

      <p>And now for the main event! Each user added to the app via manage users, will be searchable in the
      schedule builder. When you first load on to the page, you&apos;ll see all currently added users at the top. 
      You can filter these results via the search panel on the left hand side, toggling the desired search fields, then clicking
      the search button to update the results.</p>
      
      <p>For example, you might select:</p> 
      
      <b>&quot;rostered, contracted, drivers, inner-east suburbs&quot;</b>

      <p>Each user has a roster attached, to make it super easy to search rostered (or non-rostered) users on any given
      day. We have not yet hooked this page up to our database, so the date select, save and publish features are placeholders
      currently (Marked with P).</p>

      <p>Staff members are added to routes by highlighting the staff member, highlighting the route, and clicking the add 
      staff button. In the near future, we&apos;ll be allowing you to click and drag names onto routes. 
      You can also add new routes by selecting the route type, adding the route name, and clicking add new route.</p>

      <p>In the future, upon clicking publish (once you&apos;ve laid out the schedule) this will not only send notifications
      to all staff that will be working, we can also send notifications to staff that we <i>couldn&apos;t</i> fit in, with a
      message you can customise on the day.</p>

      <p>I&apos;ve hard coded in some default routes for now, however in the future, these will be customisable via a settings page.
      It&apos;s worth mentioning that if you leave the schedule page or refresh, the current schedule will be reset,
      however this will not be the case in the future.</p>

      <p>I&apos;ve not yet added a truck inventory/location section to the page, as I feel this may crowd the page a little.
      I&apos;m aware this section is important for scheduling, and current ideas include simply having this open
      as another tab (within the app) or having it hidden on the scheduler page, and expandable via a button.
      It would be good to know what you guys think is best. I&apos;m also toying with the idea of having a &apos;hide&apos; button
      for both the side bar and staff search results once you&apos;re finished with them. Any thoughts?</p>

      <h2>Manage Users</h2>

      <p>The manage users page is where new users can be added, and where existing users can be editing. Upon release, for
      security purposes this page will most likely be used only by Admin accounts (Likely Mike and one or two others).
      That said, for the demo, feel free to have a look around!</p>
      
      <p><b>Please note:</b> The app is currently optimised for desktop size screen resolutions only, as our focus this last month
       has been to release a barebones scheduler demo for operations to play with. For this reason we strongly recommend that the 
       demo is tested on desktop only. Although testing on mobile is unlikely to introduce additional bugs as such, we expect
      that the user experience would be diminished.</p>

      <p>Let us know your thoughts about the demo! Being an early build, you may well find an impressive collection of bugs,
      but be sure to let us know about them, and exactly how you got them. If you have any questions at all, obviously hit me up. 
      Any feedback you have about the app would be appreciated! If you have an opinion on absolutely any part of the app thus far, 
      we want to hear it.</p>
      
      <p>Thanks again, and enjoy!</p>

      <p>Bailey x</p>
    </div>

    
  )
}

export default OpsOverview