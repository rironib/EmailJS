function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_jktk63w";
  const templateID = "template_ivb1p4f";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      Swal.fire("Sucess!", "Your message was sent successfully!", "success");
    })
    .catch((err) => console.log(err));
}
