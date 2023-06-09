
const { Router } = require('express');

const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch,
        pageNotFound } = require('../controllers/usuarios');

const router = Router();


router.get('/', usuariosGet );

router.put('/:id', usuariosPut );

router.post('/', usuariosPost );

router.delete('/', usuariosDelete );

router.patch('/', usuariosPatch );

router.get('*', pageNotFound );





module.exports = router;