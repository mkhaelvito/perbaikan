const express = require('express');
const router = express.Router();
const donasiController = require('../controllers/donasiController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', donasiController.getAll);
router.get('/:id', donasiController.getById);
router.post('/', cekApiKey, donasiController.create);
router.put('/:id', cekApiKey, donasiController.update);
router.delete('/:id', cekApiKey, donasiController.remove);

module.exports = router;