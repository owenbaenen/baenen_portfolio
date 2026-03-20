export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle Google reCAPTCHA verification
    // Your existing Google API logic here
    res.status(200).json({ message: 'Success' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}