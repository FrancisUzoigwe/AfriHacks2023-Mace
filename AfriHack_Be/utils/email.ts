import nodemailer from "nodemailer";
import { analyticshub_v1beta1, google } from "googleapis";
import jwt from "jsonwebtoken"
import path from "path"
import ejs from "ejs"

const GOOGLE_ID = "350112565242-2v0n9609l5rdb6ojd6hedtos6k9qq37a.apps.googleusercontent.com";

const GOOGLE_SECRET = "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";

const GOOGLE_REFRESH_TOKEN =
  "1//04R_rfuuKs0uxCgYIARAAGAQSNwF-L9IrLWEAMn4ol_YID5LTewL7tA19ZRZFsb-OrGd-7guES2GjW5C87nTH70E0-JN0Aro5U4Y";

const GOOGLE_URL = "https://developers.google.com/oauthplayground";

const oAuth = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_URL);
oAuth.setCredentials({ access_token: GOOGLE_REFRESH_TOKEN });

export const sendAccountMail = async (user: any) => {
  try {
    const getAccess: any = (await oAuth.getAccessToken()).token;

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "udidagodswill7@gmail.com",
        clientId: GOOGLE_ID,
        clientSecret: GOOGLE_SECRET,
        refreshToken: GOOGLE_REFRESH_TOKEN,
        accessToken: getAccess,
      },
    });

      const token = jwt.sign(
        {
          id: user._id,
        },
        "code"
    );
    
    // const token = jwt.sign({ id: user._id }, process.env.SECRET!);

   const passedData = {
     url: `http://localhost:2345/api/${token}/verify-user`,
   };

    const readData = path.join(__dirname, "../views/accountOpening.ejs");
    const data = await ejs.renderFile(readData, passedData);

    const mailer = {
      from: " <udidagodswill7@gmail.com> ",
      to: user.email,
      subject: "Team Mace",
      html: data,
    };

    transport.sendMail(mailer);
  } catch (error:any) {
    console.log(error.message);
  }
};