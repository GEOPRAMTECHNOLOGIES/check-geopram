const express = require('express');
const auth = require('../middleware/auth');
const { User, Project, Blog, Testimonial, Settings, ActivityLog } = require('../models');

const router = express.Router();
router.use(auth);

router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.get('/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

router.get('/blog', async (req, res) => {
  const posts = await Blog.find();
  res.json(posts);
});

router.get('/testimonials', async (req, res) => {
  const testimonials = await Testimonial.find();
  res.json(testimonials);
});

router.get('/analytics', async (req, res) => {
  const logs = await ActivityLog.find().sort({ createdAt: -1 }).limit(50);
  res.json({ count: logs.length, logs });
});

router.get('/notifications', async (req, res) => {
  res.json({ message: 'Notifications endpoint placeholder' });
});

router.get('/settings', async (req, res) => {
  const settings = await Settings.find();
  res.json(settings);
});

module.exports = router;
