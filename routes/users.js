const router = require('express').Router();
const {
  getUsers, getUser, updateUser, updateAvatar, getCurrentUser,
} = require('../controllers/users');
const { validateUserId, validateUserBody, validateAvatarBody } = require('../middlewares/validations');

router.get('/', getUsers);
router.get('/me', getCurrentUser);
router.get('/:userId', validateUserId, getUser);
router.patch('/me', validateUserBody, updateUser);
router.patch('/me/avatar', validateAvatarBody, updateAvatar);

module.exports = router;
