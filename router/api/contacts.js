const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers/contacts');
const validateBody = require('../../middlewares/validateBody');
const isValidId = require('../../middlewares/isValidId');
const schemaContacts = require('../../models/contacts');

router.get('/', ctrl.listContacts);

router.get('/:id', isValidId, ctrl.getContactById);

router.delete('/:id', isValidId, ctrl.removeContact);

router.post(
  '/',
  validateBody(schemaContacts.schemas.schema, {
    msg: 'missing required name field',
  }),
  ctrl.addContact
);

router.put(
  '/:id',
  isValidId,
  validateBody(schemaContacts.schemas.schema, { msg: 'missing fields' }),
  ctrl.updateContact
);

router.patch(
  '/:id/favorite',
  isValidId,
  validateBody(schemaContacts.schemas.updateFavoriteSchema, {
    msg: 'missing field favorite',
  }),
  ctrl.updateStatusContact
);

module.exports = router;
