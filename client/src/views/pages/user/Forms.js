import React from "react"
import PhoneNav from "../../components/Nav/PhoneNav"
import "../../styles/Phone_App/PhoneNav.css"
import "../../styles/Phone_App/Forms.css"
const Forms = () => {
  return (
    <>
      <PhoneNav auth={true}/>
      <div className="form-link-container">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPLVUeY5kWEHl65QsWf1IKqgOU9nzugsfI0V_oHDBGdcymxQ/viewform" className="form-link">
          Risk Assessment
        </a>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfekIe2P5JySZ3tpzfZiWT1c1QiJ-AZo_hyOWknEcdVvM3vcQ/viewform" className="form-link">
          Estimate
        </a>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeOS2UnwNYegl3r5i3f8_KsOqR8dU_GkssxrwinoNVX7BlN_Q/viewform" className="form-link">
          Bonus
        </a>
      </div>
    </>
  )
}

export default Forms