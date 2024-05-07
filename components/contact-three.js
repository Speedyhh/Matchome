import React from "react";
function toggleDiv() {
  let value = document.getElementById("select").value;
  let div1 = document.getElementById("one");
  let div2 = document.getElementById("two");
  if (value === "privato") {
    div1.style.display = "block";
    div2.style.display = "none";
  } else if (value === "b2b") {
    div1.style.display = "none";
    div2.style.display = "block";
  }
}
const ContactThree = () => {
  return (
    <section className="contact_form_area contact_us section_padding">
      <div className="container">
        <h4 className="heading_with_border">Richiedi Informazioni</h4>
        <br></br>
        <div className="row">
          <div className="contact-right contact-right-style-2 responsive_mt">
            <form action="#" method="post">
              <span className="select_icon">
                <select
                  name="select"
                  id="select"
                  onChange={toggleDiv}
                  className="half_width input_m_right"
                  style={{ background: "#F1F1F1" }}
                >
                  <option value="zero">Scegli</option>
                  <option value="privato">Privato</option>
                  <option value="b2b">B2B</option>
                </select>
              </span>
              <div id="one">
                <input
                  className=" half_width input_m_right"
                  type="text"
                  name="fname"
                  placeholder="Nome"
                />
                <input
                  className="half_width  input_m_left"
                  type="text"
                  name="sname"
                  placeholder="Cognome"
                />
                <input
                  className=""
                  type="EMAIL"
                  name="email"
                  placeholder="Indirizzo Email"
                />
                <input
                  type="tel"
                  name="tell"
                  placeholder="Numero di Telefono"
                />
                <p style={{ textAlign: "center" }}>
                  <input
                    type="checkbox"
                    name="check1"
                    style={{ width: "5%" }}
                  />
                  Registrandoti a <a href="">matchome.it</a> accetti di ricevere
                  informazioni commerciali di risparmiamico.it e suoi partners e
                  che i dati possano essere utilizzati per comunicazioni
                  commerciali di terzi. Hai comunque la possibilità di
                  cancellarti dal servizio in qualsiasi momento.
                </p>

                <p style={{ textAlign: "center" }}>
                  <input
                    type="checkbox"
                    name="check1"
                    style={{ width: "5%" }}
                  />
                  Letta l’informativa privacy cliccando su “registrazione”
                  acconsento al trattamento dei miei dati per l’invio di
                  comunicazioni da parte del Titolare.
                </p>

                <button
                  className="btn-yellow"
                  value="CHIAMAMI GRATIS"
                  style={{ width: "100%" }}
                >
                  CHIAMAMI GRATIS
                </button>
              </div>
              <div id="two" style={{ display: "none" }}>
                <input
                  className="half_width input_m_right"
                  type="text"
                  name="ragione sociale"
                  placeholder="Ragione sociale"
                />
                <input
                  className="half_width"
                  type="EMAIL"
                  name="email"
                  placeholder="Email address"
                />
                <input
                  className=""
                  type="Città"
                  name="Città"
                  placeholder="Città"
                />
                <input type="tel" name="tell" placeholder="Phone number" />
                <p style={{ textAlign: "center" }}>
                  <input
                    type="checkbox"
                    name="check1"
                    style={{ width: "5%" }}
                  />
                  Registrandoti a <a href="">matchome.it</a> accetti di ricevere
                  informazioni commerciali di risparmiamico.it e suoi partners e
                  che i dati possano essere utilizzati per comunicazioni
                  commerciali di terzi. Hai comunque la possibilità di
                  cancellarti dal servizio in qualsiasi momento.
                </p>

                <p style={{ textAlign: "center" }}>
                  <input
                    type="checkbox"
                    name="check1"
                    style={{ width: "5%" }}
                  />
                  Letta l’informativa privacy cliccando su “registrazione”
                  acconsento al trattamento dei miei dati per l’invio di
                  comunicazioni da parte del Titolare.
                </p>
                <button
                  className="btn-yellow"
                  value="CHIAMAMI GRATIS"
                  style={{ width: "100%" }}
                >
                  CHIAMAMI GRATIS
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactThree;
