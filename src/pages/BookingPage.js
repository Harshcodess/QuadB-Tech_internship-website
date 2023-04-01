import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../pages/booking-page.css"; // import the CSS file

// Context
import ShowsContext from "../context/shows/showsContext";

const BookingPage = ({ match, history }) => {
  const { singleShow } = useContext(ShowsContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
  });

  const { name, email, phone, guests, date, time } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // log the form data to the console
    // Do something with the form data, like send a request to a server
    // and create a new booking record in the database
    // Then redirect the user to the confirmation page
    history.push(`/booking/${match.params.id}/confirm`);
  };

  return (
    <div className="booking-page">
      <h1>Book {singleShow.name}</h1>
      <style>{`
        /* add the CSS styles here */
      `}</style>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            name="guests"
            value={guests}
            onChange={onChange}
            min="1"
            max="10"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            name="time"
            value={time}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Confirm Booking
        </button>
        <Link to={`/shows/${match.params.id}`} className="btn btn-light">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default BookingPage;
