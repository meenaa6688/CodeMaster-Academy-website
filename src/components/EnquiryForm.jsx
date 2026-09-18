import { useState , useEffect} from "react";

function EnquiryForm({ selectedBatch }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: selectedBatch?.course || "",
    message: "",
  });

   const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedBatch){

        setFormData((previous) => ({
            ...previous,
            course:selectedBatch.course,

        }));
    }
  },[selectedBatch]);

 

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    console.log("Enquiry submitted:", formData);
  };

  return (
    <section className="enquiry-section" id="enquiry">

      <div className="section-heading">

        <span>GET IN TOUCH</span>

        <h2>
          Enquire For A Course
        </h2>

        <p>
          Fill in your details and our team will
          contact you soon.
        </p>

      </div>

      {submitted ? (

        <div className="enquiry-success">

          <h3>
            Enquiry Submitted Successfully!
          </h3>

          <p>
            Thank you for your interest.
            Our team will contact you soon.
          </p>

        </div>

      ) : (

        <form
          className="enquiry-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">

            <label>
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>


          <div className="form-group">

            <label>
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>


          <div className="form-group">

            <label>
              Phone
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

          </div>


          <div className="form-group">

            <label>
              Course
            </label>

            <input
              type="text"
              name="course"
              placeholder="Enter course name"
              value={formData.course}
              onChange={handleChange}
              required
            />

          </div>


          <div className="form-group">

            <label>
              Message
            </label>

            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
            />

          </div>


          <button
            type="submit"
            className="primary-button"
          >
            Submit Enquiry
          </button>

        </form>

      )}

    </section>
  );
}

export default EnquiryForm;