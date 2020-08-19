const router = require('express').Router();
const noteRoutes = require('../apiRoutes/noteRoute');
// router.use(require('../apiRoutes/zookeeperRoutes'));

router.use(noteRoutes);


module.exports = router;