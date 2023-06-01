const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers/contacts');
const validateBody = require('../../middlewares/validateBody');
const schemaContacts = require('../../schemas/contacts');

router.get('/', ctrl.listContacts);

router.get('/:id', ctrl.getContactById);

router.delete('/:id', ctrl.removeContact);

router.post(
  '/',
  validateBody(schemaContacts.schema, { msg: 'missing required name field' }),
  ctrl.addContact
);

router.put(
  '/:id',
  validateBody(schemaContacts.schema, { msg: 'missing fields' }),
  ctrl.updateContact
);

module.exports = router;
