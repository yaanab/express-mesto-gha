const router = require('express').Router();
const {
  getUsers, getUser, updateUser, updateAvatar, getCurrentUser,
} = require('../controllers/users');
const { validateUserId, validateUserUpdate, validateAvatarBody } = require('../middlewares/validations');

router.get('/', getUsers);
router.get('/me', getCurrentUser);
router.get('/:userId', validateUserId, getUser);
router.patch('/me', validateUserUpdate, updateUser);
router.patch('/me/avatar', validateAvatarBody, updateAvatar);

module.exports = router;
