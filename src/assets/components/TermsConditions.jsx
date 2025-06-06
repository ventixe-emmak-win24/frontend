
const TermsConditions = () => {

const termsAndConditions = [
  {
    id: 1,
    title: "Ticket Purchase and Entry",
    points: [
      "All attendees must possess a valid ticket for entry.",
      "Tickets are non-refundable and non-transferable unless specified by the event organizer.",
      "Attendees must present a valid government-issued ID along with their ticket at the gate.",
      "Lost or stolen tickets will not be replaced. Entry without a valid ticket is strictly prohibited.",
      "Re-entry to the event venue is not permitted without prior authorization.",
    ],
  },
  {
    id: 2,
    title: "Security and Safety",
    points: [
      "Attendees are subject to security checks, including bag inspections, upon entry.",
      "Prohibited items include but are not limited to: weapons, illegal substances, alcohol, fireworks, drones, and other hazardous materials.",
      "The event organizer reserves the right to deny entry or remove individuals deemed a security risk or in violation of the rules.",
      "Security personnel and law enforcement may be present for the safety of all attendees.",
    ],
  },
  {
    id: 3,
    title: "Code of Conduct",
    points: [
      "Attendees are expected to behave responsibly and respectfully toward others.",
      "Any disruptive behavior, including verbal or physical harassment, intoxication, or illegal activity, will result in immediate removal without refund.",
      "Respectful communication and conduct are required at all times toward staff, performers, and fellow attendees.",
      "The use of discriminatory or offensive language will not be tolerated.",
    ],
  },
  {
    id: 4,
    title: "Event Schedule and Changes",
    points: [
      "The event schedule is subject to change without prior notice.",
      "The organizer reserves the right to cancel, reschedule, or alter any part of the event, including performances and activities.",
      "No refunds will be issued due to scheduling changes or partial cancellations caused by weather, technical issues, or other unforeseen events.",
    ],
  },
  {
    id: 5,
    title: "Photography and Recording",
    points: [
      "Professional cameras and recording equipment are prohibited unless explicitly authorized by the organizer.",
      "By entering the event, you consent to being photographed, filmed, or recorded for promotional, archival, or commercial purposes.",
      "Attendees may take personal photos and short videos, provided they do not interfere with others or violate privacy.",
    ],
  },
  {
    id: 6,
    title: "Health and Safety",
    points: [
      "Attendees must comply with all current public health guidelines and venue safety protocols.",
      "This may include temperature checks, mask mandates, or proof of vaccination/testing, depending on applicable regulations.",
      "If you are feeling unwell or have been exposed to a contagious illness, you are advised to stay home.",
      "Hand sanitizing stations will be available throughout the venue.",
    ],
  },
  {
    id: 7,
    title: "Liability",
    points: [
      "The event organizer is not liable for any personal injury, illness, theft, loss, or damage to personal property during the event.",
      "Attendance is at your own risk. By entering the premises, you waive any claim against the organizer for incidents that may occur.",
      "The organizer assumes no responsibility for lost items. A lost and found area will be available at the venue for inquiries.",
    ],
  },
  {
    id: 8,
    title: "Accessibility",
    points: [
      "The event is committed to providing a welcoming environment for all guests.",
      "Accessibility services may be available upon request. Please contact the organizer in advance.",
      "Service animals are permitted with proper identification and must be under control at all times.",
    ],
  },
  {
    id: 9,
    title: "Vendors and Third Parties",
    points: [
      "Any transactions with third-party vendors or sponsors at the event are strictly between the attendee and the vendor.",
      "The organizer is not responsible for the quality or safety of goods and services provided by third parties.",
    ],
  },
];



  return (
    <div className="terms-conditions-container">
      <h2>Terms and Conditions</h2>
      <div className="terms-conditions-content">
        {termsAndConditions.map((item) => (
          <div className="terms-condition-item" key={item.id}>
            <h3 className="terms-condition-titles">{item.id}. {item.title}</h3>
            <ul>
              {item.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>   

    </div>
  )
}

export default TermsConditions