export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle contact form submission
    // Your existing contact logic here
    res.status(200).json({ message: 'Success' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}