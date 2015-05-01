var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));

var properties = {
  type: "Box",
  position: position,
  color: { red: 200, green: 0, blue: 0 }
};

Ent = Entities.addEntity(properties);
print("Entity added");

function cleanup(){
  Ent.deleteEntity();
}


Script.scriptEnding.connect(cleanup)


//
// function change(entityID) {
//     Entities.editEntity(entityID, { angularDamping: 0});
//     Entities.editEntity(entityID, { angularVelocity: { x: 0, y: 60, z: 0} });
//     Entities.editEntity(entityID, { color: { red: 255, green: 100, blue: 220} });
// }
//
// Ent.enterEntity = function(entityID) {
//     print("enterEntity("+entityID.id+")");
//     change(entityID);
// };
//
// Ent.leaveEntity = function(entityID) {
//     print("leaveEntity("+entityID.id+")");
//     Entities.editEntity(entityID, { angularDamping: 0.5});
//     Entities.editEntity(entityID, { color: { red: 255, green: 190, blue: 20} });
// };
// print(JSON.stringify(Entities.getEntityProperties(Ent));
// print("helldo");
