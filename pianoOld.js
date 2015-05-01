// create keys

var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));



var properties = {
  type: "Box",
  position: position,
  color: { red: 0, green: 220, blue: 0 }
};

// var secondBox =

Ent = Entities.addEntity(properties);

var props = Entities.getEntityProperties(Ent);

print("Entity added");

function cleanup(){
  Ent.deleteEntity();
}

Script.scriptEnding.connect(cleanup)
