//import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req,res) {
    const {body} =req;
    const {email, subject ,message } = body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['aniketshaw1616@gmail.com'],
      subject: 'Hello world',
      react: (
        <>
        <h1>{subject}</h1>
        <P>Thank You For Contacting us</P>
        <p>new message submitted</p>
        <p>{message}</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}