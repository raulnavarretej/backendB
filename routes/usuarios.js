const {Router} = require("express")
const { getUsers, getUserByID, deleteUserByID, addUser, updateUserByUsuario, signIn, changePass} = require("../controllers/usuarios")
const router = Router()

// http://localhost:4000/api/v1/usuarios/

//get// 
router.get("/", getUsers)
router.get("/id/:id", getUserByID)

//POST//
router.post("/", addUser)
router.post("/signin", signIn)
router.post("/changepass", changePass)
//PATCH//
router.put("/", updateUserByUsuario)

//DELETE//
router.delete("/id/:id", deleteUserByID)


module.exports = router