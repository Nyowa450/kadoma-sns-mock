import express from 'express';
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from '../controllers/users.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router()

/* 読み取り */
router.get('/:id',verifyToken, getUser)
router.get('/:id/friends',verifyToken, getUserFriends)

/* 更新 */
router.patch('/:id/:friendId',verifyToken, addRemoveFriend)

export default router;
