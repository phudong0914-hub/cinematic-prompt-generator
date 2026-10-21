import { auditElementPosition, auditTimelineSafeZones } from '../js/safeZoneAuditor.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { aspectRatio = '9:16', elements = [], element = null, faceBox = null } = req.body || {};

    if (element) {
      const singleAudit = auditElementPosition({ aspectRatio, element, faceBox });
      return res.status(200).json({
        success: true,
        result: singleAudit
      });
    }

    const batchAudit = auditTimelineSafeZones({ aspectRatio, elements, faceBox });
    return res.status(200).json({
      success: true,
      ...batchAudit
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
