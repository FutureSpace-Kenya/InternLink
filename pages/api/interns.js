import { InternProfile } from '@/db/models/InternProfile';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const interns = await InternProfile.findAll();
            res.status(200).json(interns);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
