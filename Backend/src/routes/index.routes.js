const {Router}= require("express");
const router= Router();

const ModelUser= require("../models/userModel");
const ModelPost= require("../models/postModel");
const ModelComment= require("../models/commentModel");
const ModelLike= require("../models/likeModel");
const ModelFollow= require("../models/followModel");
const ModelNotification= require("../models/notification");
const ModelStore= require("../models/storeModel");
const ModelProduct= require("../models/productModel");
const ModelPromotion= require("../models/promotionModel");

router.get("/", (req, res)=>{
    res.send("Merca Go");
});

// ===============================
// CRUD para USER
// ===============================

// Create
router.post("/users", async (req, res) => {
  const body = req.body;
  const respuesta = await ModelUser.create(body);
  res.send(respuesta);
});

// Read (listar todos)
router.get("/users/ls", async (req, res) => {
  const respuesta = await ModelUser.find({});
  res.send(respuesta);
});

// Obtener un usuario por ID
router.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const respuesta = await ModelUser.findById(id);
  res.send(respuesta);
});

// Update
router.put("/users/:id", async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const respuesta = await ModelUser.findOneAndUpdate({ _id: id }, body, {
    new: true
  });
  res.send(respuesta);
});

// Delete
router.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  const respuesta = await ModelUser.deleteOne({ _id: id });
  res.send(respuesta);
});


// ===============================
// CRUD para STORE
// ===============================

router.post("/stores", async (req, res) => {
  const body = req.body;
  const respuesta = await ModelStore.create(body);
  res.send(respuesta);
});

// Ruta compatible con frontend
router.get("/stores", async (req, res) => {
  const respuesta = await ModelStore.find({});
  res.send(respuesta);
});

router.get("/stores/ls", async (req, res) => {
  const respuesta = await ModelStore.find({});
  res.send(respuesta);
});

router.get("/stores/:id", async (req, res) => {
  const id = req.params.id;
  const respuesta = await ModelStore.findById(id);
  res.send(respuesta);
});

router.put("/stores/:id", async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const respuesta = await ModelStore.findOneAndUpdate({ _id: id }, body, {
    new: true
  });
  res.send(respuesta);
});

router.delete("/stores/:id", async (req, res) => {
  const id = req.params.id;
  const respuesta = await ModelStore.deleteOne({ _id: id });
  res.send(respuesta);
});


// ===============================
// CRUD para PRODUCT
// ===============================

router.post("/products", async (req, res) => {
  const body = req.body;
  const respuesta = await ModelProduct.create(body);
  res.send(respuesta);
});

// Ruta compatible con frontend
router.get("/products", async (req, res) => {
  const respuesta = await ModelProduct.find({});
  res.send(respuesta);
});

router.get("/products/ls", async (req, res) => {
  const respuesta = await ModelProduct.find({});
  res.send(respuesta);
});

// Obtener un producto por ID
router.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  const respuesta = await ModelProduct.findById(id);
  res.send(respuesta);
});


router.put("/products/:id", async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const respuesta = await ModelProduct.findOneAndUpdate({ _id: id }, body, {
    new: true
  });
  res.send(respuesta);
});

router.delete("/products/:id", async (req, res) => {
  const id = req.params.id;
  const respuesta = await ModelProduct.deleteOne({ _id: id });
  res.send(respuesta);
});


// ===============================
// CRUD para PROMOTION
// ===============================

router.post("/promotions", async (req, res) => {
  const body = req.body;
  const respuesta = await ModelPromotion.create(body);
  res.send(respuesta);
});

router.get("/promotions/ls", async (req, res) => {
  const respuesta = await ModelPromotion.find({});
  res.send(respuesta);
});

router.put("/promotions/:id", async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const respuesta = await ModelPromotion.findOneAndUpdate({ _id: id }, body, {
    new: true
  });
  res.send(respuesta);
});

router.delete("/promotions/:id", async (req, res) => {
  const id = req.params.id;
  const respuesta = await ModelPromotion.deleteOne({ _id: id });
  res.send(respuesta);
});


// ===============================
// CRUD para POST
// ===============================

router.post("/posts", async (req, res) => {
  const body = req.body;
  const respuesta = await ModelPost.create(body);
  res.send(respuesta);
});

// Ruta compatible con frontend
router.get("/posts", async (req, res) => {
  const respuesta = await ModelPost.find({});
  res.send(respuesta);
});

router.get("/posts/ls", async (req, res) => {
  const respuesta = await ModelPost.find({});
  res.send(respuesta);
});

// Obtener un post por ID
router.get("/posts/:id", async (req, res) => {
  const id = req.params.id;
  const respuesta = await ModelPost.findById(id);
  res.send(respuesta);
});

router.put("/posts/:id", async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const respuesta = await ModelPost.findOneAndUpdate({ _id: id }, body, {
    new: true
  });
  res.send(respuesta);
});

router.delete("/posts/:id", async (req, res) => {
  const id = req.params.id;
  const respuesta = await ModelPost.deleteOne({ _id: id });
  res.send(respuesta);
});


// ===============================
// CRUD para COMMENT
// ===============================

router.post("/comments", async (req, res) => {
  const body = req.body;
  const respuesta = await ModelComment.create(body);
  res.send(respuesta);
});

router.get("/comments/ls", async (req, res) => {
  const respuesta = await ModelComment.find({});
  res.send(respuesta);
});

router.put("/comments/:id", async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const respuesta = await ModelComment.findOneAndUpdate({ _id: id }, body, {
    new: true
  });
  res.send(respuesta);
});

router.delete("/comments/:id", async (req, res) => {
  const id = req.params.id;
  const respuesta = await ModelComment.deleteOne({ _id: id });
  res.send(respuesta);
});


// ===============================
// CRUD para LIKE
// ===============================

router.post("/likes", async (req, res) => {
  const body = req.body;
  const respuesta = await ModelLike.create(body);
  res.send(respuesta);
});

router.get("/likes/ls", async (req, res) => {
  const respuesta = await ModelLike.find({});
  res.send(respuesta);
});

router.delete("/likes/:id", async (req, res) => {
  const id = req.params.id;
  const respuesta = await ModelLike.deleteOne({ _id: id });
  res.send(respuesta);
});

// ===============================
// CRUD para FOLLOW
// ===============================

router.post("/follows", async (req, res) => {
  const body = req.body;
  const respuesta = await ModelFollow.create(body);
  res.send(respuesta);
});

router.get("/follows/ls", async (req, res) => {
  const respuesta = await ModelFollow.find({});
  res.send(respuesta);
});

router.delete("/follows/:id", async (req, res) => {
  const id = req.params.id;
  const respuesta = await ModelFollow.deleteOne({ _id: id });
  res.send(respuesta);
});

// ===============================
// CRUD para NOTIFICATION
// ===============================

router.post("/notifications", async (req, res) => {
  const body = req.body;
  const respuesta = await ModelNotification.create(body);
  res.send(respuesta);
});

router.get("/notifications/ls", async (req, res) => {
  const respuesta = await ModelNotification.find({});
  res.send(respuesta);
});

router.put("/notifications/:id", async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const respuesta = await ModelNotification.findOneAndUpdate(
    { _id: id },
    body,
    { new: true }
  );
  res.send(respuesta);
});

router.delete("/notifications/:id", async (req, res) => {
  const id = req.params.id;
  const respuesta = await ModelNotification.deleteOne({ _id: id });
  res.send(respuesta);
});

module.exports= router;