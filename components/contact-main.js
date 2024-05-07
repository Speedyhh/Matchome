import React from "react";
function toggleDiv() {
  let value = document.getElementById("select").value;
  let div1 = document.getElementById("one");
  let div2 = document.getElementById("two");
  if (value ==="privato"){
    div1.style.display = "block";
    div2.style.display = "none";
  }
  else if (value ==="b2b"){
    div1.style.display = "none";
    div2.style.display = "block";
  }
}
const ContactMain = () => {
  return (
    <section className="contact_form_area">
      <div className="contact_form_width contact-right">
        <div className="hero-title-with-shape ">
          <h4 className="heading_with_border">Get a free quote</h4>
        
        </div>

        <form action="#" method="post">
          <span className="select_icon">
            <select name="select" id="select" onChange={toggleDiv}>
             <option value="zero">Scegli</option>
              <option value="privato">Privato</option>
              <option value="b2b">B2B</option>
            </select>
          </span>
          <div id="one" >
            <input
              className="half_width input_m_right"
              type="text"
              name="fname"
              placeholder="Your name"
            />
            <input
              className="half_width"
              type="EMAIL"
              name="email"
              placeholder="Email address"
            />
            <input type="tel" name="tell" placeholder="Phone number" />
            <button className="btn-yellow"  value="SUBMIT NOW" style={{width:"100%"}}>
            SUBMIT NOW
          </button>
          </div>
          <div id="two" style={{display:"none"}}>
          <input
              className="half_width input_m_right"
              type="text"
              name="ragione sociale"
              placeholder="ragione sociale"
            />
            <input
              className="half_width"
              type="EMAIL"
              name="email"
              placeholder="Email address"
            />
                <input
              className="half_width"
              type="Città"
              name="Città"
              placeholder="Città"
            />
            <input type="tel" name="tell" placeholder="Phone number" />
            <button className="btn-yellow" value="SUBMIT NOW">
            SUBMIT NOW
          </button>
        </div>
          
          
        </form>
      </div>
   
    </section>
  );
};

export default ContactMain;
