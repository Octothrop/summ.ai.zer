import { client, publicSDK } from "@devrev/typescript-sdk";
import nodemailer from "nodemailer";

async function sendEmail(subject: string, text: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '4nm21cs024@nmamit.in',
      pass: 'Ananya@01102003',
    },
  });

  // Email options
  const mailOptions = {
    from: '4nm21cs024@nmamit.in',
    to: '4nm21cs024@nmamit.in',
    subject: subject,
    text: text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export async function handleEvent(event: any) {
  const devrevPAT = event.context.secrets.service_account_token;
  const APIBase = event.execution_metadata.devrev_endpoint;
  const devrevSDK = client.setup({
    endpoint: APIBase,
    token: devrevPAT,
  });

  console.log(event.payload.type);
  if (event.payload.type === 'work_created' || event.payload.type === 'conversation_started') {
    await sendEmail("Work Created or Conversation Started", "Hi");
    // add code here
  }
}

export const run = async (events: any[]) => {
  for (let event of events) {
    await handleEvent(event);
  }
};

export default run;
