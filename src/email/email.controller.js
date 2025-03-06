import nodmailer from "nodemailer"
export class EmailController{

    async emaildata(req,res){
        const {name,email,phone,city,message}=req.body
        const transporter = nodmailer.createTransport({
            service: "gmail",
            auth: {
              user: "haren111990@gmail.com", // अपना Gmail ईमेल
              pass: "rcmm twss fvbv pugx", // ऐप पासवर्ड (नीचे देखें)
            },
          });
          const mailOptions = {
            from: email,
            to:"haren111990@gmail.com",
            subject:`message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n City:${city}\n Message: ${message}`,
          };
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log("Error:", error);
            } else {
              console.log("Email sent:", info.response);
            }
          });
        res.send("email sent successfully..")  
    }
}