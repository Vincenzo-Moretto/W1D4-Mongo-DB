import Authors from "../services/authors/model.js";

/* export const readMultiple = (req, res) => {
  console.log("router /recipes");
  console.log("req.authuser:", req.authUser);
  return res.send("risponde il router /recipes");
}; */

export const createOne = async (req, res) => {
  // salvare risorsa

  // con l'uploader locale
  // return res.send({
  //     ...req.body,
  //     author: JSON.parse(req.body.author),
  //     cover: `${process.env.HOST}:${process.env.PORT}/uploads/${req.file.filename}`,
  // });

  // con l'uploader su Cloudinary
  const newAuthors = Authors.findByIdAndUpdate(req.params.id, {
    avatar: req.file.path,
  });
  res.send({ message: "Avatar aggiornato!" });
};

/* export const sendMailMiddleware = async (req, res) => {
  // inviare la mail
  // rispondere con successo oppure errore
  try {
    const email = await transport.sendMail({
      from: "<noreply@epicoders.com>", // sender address
      to: req.body.email, // list of receivers
      subject: "Benvenuto", // Subject line
      text: `Benvenuto ${req.body.fullName}`, // plain text body
      html: `<b>Benvenuto ${req.body.fullName}</b>`, // html body
    });
    console.log(email);
    return res.send({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error sending the email",
    });
  }
};
 */
