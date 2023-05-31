const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers/contacts');

router.get('/', ctrl.listContacts);

router.get('/:id', ctrl.getContactById);

router.delete('/:id', ctrl.removeContact);

router.post('/', ctrl.addContact);

module.exports = router;
