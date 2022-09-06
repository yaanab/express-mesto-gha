const router = require('express').Router();
const {
  getUsers, getUser, updateUser, updateAvatar, getCurrentUser
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/:userId', getUser);
router.patch('/me', updateUser);
router.patch('/me/avatar', updateAvatar);
router.get('/me', getCurrentUser);

module.exports = router;
