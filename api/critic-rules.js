import { getCriticRules, addCriticRule, auditAgainstCriticRules } from '../js/criticRuleEngine.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const rules = getCriticRules();
    return res.status(200).json({
      success: true,
      total: rules.length,
      rules
    });
  }

  if (req.method === 'POST') {
    const { action, rawFeedback, content } = req.body || {};

    if (action === 'audit') {
      const auditResult = auditAgainstCriticRules(content || '');
      return res.status(200).json({
        success: true,
        ...auditResult
      });
    }

    if (!rawFeedback) {
      return res.status(400).json({ error: 'Missing rawFeedback field' });
    }

    const createdRule = addCriticRule(rawFeedback);
    return res.status(201).json({
      success: true,
      message: 'Đã biến lời chê của đạo diễn thành luật phủ định thành công!',
      rule: createdRule
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
