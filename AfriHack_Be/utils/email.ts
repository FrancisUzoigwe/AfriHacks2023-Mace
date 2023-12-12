import nodemailer from "nodemailer";
import { google } from "googleapis";
import jwt from "jsonwebtoken";
import path from "path";
import ejs from "ejs";
import env from "dotenv";
env.config();

const GOOGLE_REFRESH_TOKEN =
  "1//04Tz6MUlHfPXsCgYIARAAGAQSNwF-L9IrI_Bm_YjJXVFYfdGzRJj3TTvewcmqxuV__3TtQ1_oXUyrjPnMOCvd2GQ_zM4lkQf8Ixg";

const GOOGLE_SECRET = "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";

const GOOGLE_ID =
  "172413036255-qdhvp5rcl2ig1ibnb9jbmp49p6rksbjg.apps.googleusercontent.com";

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
        user: "kossyuzoigwe@gmail.com",
        clientId: GOOGLE_ID,
        clientSecret: GOOGLE_SECRET,
        refreshToken: GOOGLE_REFRESH_TOKEN,
        accessToken: getAccess,
        // accessToken: "ya29.a0AfB_byCfuN_BFOpl7tYahFF98ALfg2d7u4kBU1puqVDFI7pF3xvmTPpED47w9Izkvqo19F-_GZ-uOG1oFz4WRbSTWd-aN0stsutqHMKRF6wlhIxAdFHb4JqkMsfPgs-FSl9JIvs13IMgaMX-ujkgNP251rW5t4d2n9l8aCgYKAb4SAQ8SFQHGX2MiOkGZIry45jetnnUVLhDfMw0171",
      },
    });

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.SECRET_KEY!
    );

    const URL = "http://localhost:2345/api";

    const readData = path.join(__dirname, "../views/accountOpening.ejs");

    const data = {
      token: user.token,
      email: user.email,
      url: `${URL}/${token}/verify-user`,
    };

    const passedData = {
      url: `http://localhost:2345/api/${token}/verify-user`,
    };

    const html = await ejs.renderFile(readData, passedData);
    const mailer = {
      from: "Team Mace <kossyuzoigwe@gmail.com> ",
      to: user.email,
      subject: "Account Registration",
      html,
    };

    await transport.sendMail(mailer);
  } catch (error: any) {
    console.log(error.message);
  }
};
